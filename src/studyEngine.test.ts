import test from 'node:test';
import assert from 'node:assert/strict';
import { FLASHCARDS, QUESTIONS, REVIEW_GUIDES } from './bank';
import {
  SCIENTIFIC_METHODS,
  TOPICS,
  TOPIC_MAP,
  buildInterleavedQueue,
  computeCalibrationStats,
  createInitialProgress,
  evaluateSimulado,
  generateSimuladoQuestions,
  parseProgressImport,
  recordQuestionAttempt,
  scheduleSm2Card,
  serializeProgress,
  splitMathSegments,
  type Question,
} from './studyEngine';

const makeMockBank = (): Question[] => {
  const lpTopics = [
    'lp-ideias',
    'lp-textualidade',
    'lp-generos',
    'lp-semantica',
    'lp-estilo',
    'lp-variedades',
    'lp-morfologia',
    'lp-sintaxe',
    'lp-pontuacao',
    'lp-concordancia',
  ] as const;
  const matTopics = [
    'mat-operacoes',
    'mat-medidas',
    'mat-proporcao',
    'mat-regra3',
    'mat-porcentagem',
    'mat-medias',
    'mat-algebra',
    'mat-equacoes',
    'mat-angulos-poligonos',
    'mat-triangulos',
  ] as const;

  const list: Question[] = [];
  lpTopics.forEach((topicId, i) => {
    list.push({
      id: `lp-${i}`,
      discipline: 'LP',
      topicId,
      source: 'Teste',
      prompt: `Questão LP ${i}`,
      options: ['A', 'B', 'C', 'D', 'E'],
      correctIndex: 0,
      explanation: 'Exp',
      trapNote: 'Trap',
    });
    list.push({
      id: `lp-extra-${i}`,
      discipline: 'LP',
      topicId,
      source: 'Teste',
      prompt: `Questão LP extra ${i}`,
      options: ['A', 'B', 'C', 'D', 'E'],
      correctIndex: 1,
      explanation: 'Exp',
      trapNote: 'Trap',
    });
  });

  matTopics.forEach((topicId, i) => {
    list.push({
      id: `mat-${i}`,
      discipline: 'MAT',
      topicId,
      source: 'Teste',
      prompt: `Questão MAT ${i}`,
      options: ['A', 'B', 'C', 'D', 'E'],
      correctIndex: 2,
      explanation: 'Exp',
      trapNote: 'Trap',
    });
  });

  return list;
};

test('evaluateSimulado aplica regra de eliminação ao zerar Matemática ou ficar abaixo de 20%', () => {
  const bank = makeMockBank();
  const examQuestions = generateSimuladoQuestions(bank, createInitialProgress(), { seed: 42 });
  assert.equal(examQuestions.length, 20);
  assert.equal(examQuestions.filter((q) => q.discipline === 'LP').length, 10);
  assert.equal(examQuestions.filter((q) => q.discipline === 'MAT').length, 10);

  // Acerta todas de LP (10) e erra todas de MAT (0) -> deve eliminar pelo item 5.1.b
  const zeroMatAnswers: Record<string, number | null> = {};
  for (const q of examQuestions) {
    zeroMatAnswers[q.id] = q.discipline === 'LP' ? q.correctIndex : (q.correctIndex + 1) % 5;
  }
  const resZeroMat = evaluateSimulado(examQuestions, zeroMatAnswers, new Set(), 1800);
  assert.equal(resZeroMat.lpScore, 10);
  assert.equal(resZeroMat.matScore, 0);
  assert.equal(resZeroMat.totalScore, 10);
  assert.equal(resZeroMat.eliminated, true);
  assert.match(resZeroMat.eliminationReasons[0], /zero em Matemática/i);

  // Acerta 2 LP + 1 MAT = 3 pts (< 20% = 4 pts) -> elimina pelo item 5.1.a
  const lowTotalAnswers: Record<string, number | null> = {};
  let lpHits = 0;
  let matHits = 0;
  for (const q of examQuestions) {
    if (q.discipline === 'LP' && lpHits < 2) {
      lowTotalAnswers[q.id] = q.correctIndex;
      lpHits += 1;
    } else if (q.discipline === 'MAT' && matHits < 1) {
      lowTotalAnswers[q.id] = q.correctIndex;
      matHits += 1;
    } else {
      lowTotalAnswers[q.id] = (q.correctIndex + 1) % 5;
    }
  }
  const resLow = evaluateSimulado(examQuestions, lowTotalAnswers, new Set(), 2000);
  assert.equal(resLow.totalScore, 3);
  assert.equal(resLow.eliminated, true);
  assert.match(resLow.eliminationReasons[0], /20%/);

  // Acerta 7 LP + 8 MAT = 15 pts -> aprovado e classificável
  const goodAnswers: Record<string, number | null> = {};
  let lpOk = 0;
  let matOk = 0;
  for (const q of examQuestions) {
    if (q.discipline === 'LP' && lpOk < 7) {
      goodAnswers[q.id] = q.correctIndex;
      lpOk += 1;
    } else if (q.discipline === 'MAT' && matOk < 8) {
      goodAnswers[q.id] = q.correctIndex;
      matOk += 1;
    } else {
      goodAnswers[q.id] = (q.correctIndex + 1) % 5;
    }
  }
  const resGood = evaluateSimulado(examQuestions, goodAnswers, new Set(), 2400);
  assert.equal(resGood.eliminated, false);
  assert.equal(resGood.lpScore, 7);
  assert.equal(resGood.matScore, 8);
  assert.equal(resGood.totalScore, 15);
});

test('scheduleSm2Card agenda intervalos com compressão pré-prova e reseta ao errar', () => {
  const now = new Date('2026-11-11T10:00:00-03:00').getTime();
  const s1 = scheduleSm2Card(undefined, 'fc-1', 'good', now);
  assert.equal(s1.repetitions, 1);
  assert.equal(s1.intervalDays, 1);

  const s2 = scheduleSm2Card(s1, 'fc-1', 'good', now + 24 * 3600 * 1000);
  assert.equal(s2.repetitions, 2);
  assert.equal(s2.intervalDays, 3); // Modo reta final (<= 10 dias da prova)

  const lapsed = scheduleSm2Card(s2, 'fc-1', 'again', now + 2 * 24 * 3600 * 1000);
  assert.equal(lapsed.repetitions, 0);
  assert.equal(lapsed.intervalDays, 0);
  assert.equal(lapsed.lapses, 1);
});

test('buildInterleavedQueue evita repetição seguida do mesmo tópico e prioriza erro com certeza', () => {
  const bank = makeMockBank();
  let prog = createInitialProgress();
  prog = recordQuestionAttempt(prog, {
    questionId: 'mat-3',
    topicId: 'mat-regra3',
    discipline: 'MAT',
    selectedIndex: 0,
    correctIndex: 2,
    isCorrect: false,
    confidence: 'sure',
    timestamp: 1000,
    mode: 'practice',
  });

  const queue = buildInterleavedQueue(bank, prog);
  assert.equal(queue[0].id, 'mat-3');

  for (let i = 1; i < queue.length; i += 1) {
    assert.notEqual(
      queue[i].topicId,
      queue[i - 1].topicId,
      `Tópico repetido em sequência na posição ${i}`
    );
  }

  const cal = computeCalibrationStats(prog);
  assert.equal(cal.highConfidenceErrors, 1);
});

test('serializeProgress e parseProgressImport preservam dados com segurança', () => {
  let prog = createInitialProgress();
  prog = recordQuestionAttempt(prog, {
    questionId: 'lp-0',
    topicId: 'lp-ideias',
    discipline: 'LP',
    selectedIndex: 0,
    correctIndex: 0,
    isCorrect: true,
    confidence: 'sure',
    timestamp: 12345,
    mode: 'practice',
  });
  const json = serializeProgress(prog);
  const restored = parseProgressImport(json);
  assert.equal(restored.attempts.length, 1);
  assert.equal(restored.attempts[0].questionId, 'lp-0');
  assert.throws(() => parseProgressImport('{broken'));
});

const KNOWN_STIMULUS_IDS = new Set([
  'tirinha-chico-universidade',
  'tirinha-chico-lele',
  'cartaz-liquida-planalto',
  'tirinha-armandinho',
  'tirinha-ratos',
  'tirinha-cebolinha',
  'tirinha-calvin',
  'cartaz-sexta-feira',
  'quadros-monalisa',
  'tirinha-garfield',
  'tirinha-armando',
  'charge-bolha-digital',
  'cartaz-agua-consciente',
  'geo-angulos-suplementares',
  'geo-paralelas-transversal',
  'geo-semelhanca-tales',
  'geo-ceviana-bissetriz',
  'geo-poligono-hexagono',
  'geo-tales-feixe',
  'geo-triangulo-altura',
  'geo-angulos-opv',
  'geo-retangulo-escala',
]);

test('splitMathSegments preserva moedas R$ e separa LaTeX inline e display', () => {
  const onlyCurrency = splitMathSegments('De R$ 100,00 para R$ 80,00 com desconto.');
  assert.deepEqual(onlyCurrency, [{ kind: 'text', value: 'De R$ 100,00 para R$ 80,00 com desconto.' }]);

  const mixed = splitMathSegments(
    'Produto de R$ 200,00 com $\\frac{1}{4}$ de alta custa R$ 250,00.'
  );
  assert.deepEqual(mixed, [
    { kind: 'text', value: 'Produto de R$ 200,00 com ' },
    { kind: 'inline', value: '\\frac{1}{4}' },
    { kind: 'text', value: ' de alta custa R$ 250,00.' },
  ]);

  const mmcStr = splitMathSegments('Calcule $\\text{MMC}(4, 6, 8)$ e resolva.');
  assert.deepEqual(mmcStr, [
    { kind: 'text', value: 'Calcule ' },
    { kind: 'inline', value: '\\text{MMC}(4, 6, 8)' },
    { kind: 'text', value: ' e resolva.' },
  ]);

  const display = splitMathSegments('Fórmula:\n$$x = \\frac{a + b}{2}$$\nFim.');
  assert.deepEqual(display, [
    { kind: 'text', value: 'Fórmula:\n' },
    { kind: 'display', value: 'x = \\frac{a + b}{2}' },
    { kind: 'text', value: '\nFim.' },
  ]);
});

test('integridade completa do banco oficial (400 questões, 60 flashcards, 20 aulas e 6 métodos)', () => {
  assert.equal(QUESTIONS.length, 400);
  assert.equal(QUESTIONS.filter((q) => q.discipline === 'LP').length, 200);
  assert.equal(QUESTIONS.filter((q) => q.discipline === 'MAT').length, 200);
  assert.equal(FLASHCARDS.length, 60);
  assert.equal(FLASHCARDS.filter((c) => c.discipline === 'LP').length, 30);
  assert.equal(FLASHCARDS.filter((c) => c.discipline === 'MAT').length, 30);
  assert.equal(REVIEW_GUIDES.length, 20);
  assert.equal(TOPICS.length, 20);
  assert.equal(SCIENTIFIC_METHODS.length, 6);

  const ctrlPattern = /[\x00-\x09\x0b-\x1f]/;
  const lpPos = [0, 0, 0, 0, 0];
  const matPos = [0, 0, 0, 0, 0];

  const qIds = new Set<string>();
  for (const q of QUESTIONS) {
    assert.ok(!qIds.has(q.id), `ID duplicado em QUESTIONS: ${q.id}`);
    qIds.add(q.id);
    assert.equal(q.options.length, 5, `Questão ${q.id} deve ter 5 alternativas`);
    assert.equal(new Set(q.options).size, 5, `Questão ${q.id} possui alternativas duplicadas`);
    assert.ok(q.correctIndex >= 0 && q.correctIndex <= 4, `correctIndex inválido em ${q.id}`);
    assert.ok(TOPIC_MAP[q.topicId], `topicId inválido em ${q.id}: ${q.topicId}`);
    assert.equal(TOPIC_MAP[q.topicId].discipline, q.discipline, `Disciplina divergente em ${q.id}`);

    if (q.discipline === 'LP') lpPos[q.correctIndex] += 1;
    else matPos[q.correctIndex] += 1;

    assert.equal(q.optionFeedback?.length, 5, `Questão ${q.id} sem 5 feedbacks por alternativa`);
    for (const fb of q.optionFeedback ?? []) {
      assert.ok(fb.trim().length > 0, `Feedback vazio em ${q.id}`);
      assert.ok(!ctrlPattern.test(fb), `Caractere de controle em feedback de ${q.id}`);
    }
    assert.ok((q.stepByStep?.length ?? 0) >= 2, `Questão ${q.id} sem resolução passo a passo`);
    assert.ok((q.memoryTakeaway ?? '').trim().length > 0, `Questão ${q.id} sem memoryTakeaway`);

    const fieldsToCheck = [
      q.prompt,
      q.passage ?? '',
      q.explanation,
      q.trapNote,
      q.memoryTakeaway ?? '',
      ...q.options,
      ...(q.stepByStep ?? []),
    ];
    for (const field of fieldsToCheck) {
      assert.ok(!ctrlPattern.test(field), `Caractere de controle detectado em ${q.id}`);
      assert.ok(!field.includes('\\$'), `Escape \\$ detectado em ${q.id}`);
    }

    if (q.stimulusId) {
      assert.ok(KNOWN_STIMULUS_IDS.has(q.stimulusId), `stimulusId desconhecido: ${q.stimulusId}`);
    }
  }

  for (let i = 0; i < 5; i += 1) {
    assert.ok(lpPos[i] >= 25, `Distribuição desequilibrada em LP letra ${i}: ${lpPos[i]}`);
    assert.ok(matPos[i] >= 25, `Distribuição desequilibrada em MAT letra ${i}: ${matPos[i]}`);
  }

  const fIds = new Set<string>();
  for (const c of FLASHCARDS) {
    assert.ok(!fIds.has(c.id), `ID duplicado em FLASHCARDS: ${c.id}`);
    fIds.add(c.id);
    assert.equal(TOPIC_MAP[c.topicId].discipline, c.discipline, `Disciplina divergente em ${c.id}`);
    assert.ok(!ctrlPattern.test(c.front) && !ctrlPattern.test(c.back));
  }

  const gIds = new Set<string>();
  for (const g of REVIEW_GUIDES) {
    assert.ok(!gIds.has(g.topicId), `Guia duplicado: ${g.topicId}`);
    gIds.add(g.topicId);
    assert.ok(g.activeCheckCorrect >= 0 && g.activeCheckCorrect < g.activeCheckOptions.length);
    assert.ok((g.subtitle ?? '').trim().length > 0, `Subtítulo ausente em ${g.topicId}`);
    assert.ok((g.estimatedMinutes ?? 0) > 0, `Tempo estimado ausente em ${g.topicId}`);
    assert.ok((g.editalSubtopics?.length ?? 0) >= 2, `Subtópicos insuficientes em ${g.topicId}`);
    assert.ok(g.rules.length >= 3, `Regras insuficientes em ${g.topicId}`);
    assert.ok((g.workedExamples?.length ?? 0) >= 2, `Faltam Exemplos Resolvidos em ${g.topicId}`);
    assert.ok((g.commonMistakes?.length ?? 0) >= 2, `Faltam Erros Comuns em ${g.topicId}`);
    assert.ok(
      g.selfExplanationPrompt?.question && g.selfExplanationPrompt?.modelAnswer,
      `Autoexplicação incompleta em ${g.topicId}`
    );
    assert.ok((g.bookReferences?.length ?? 0) >= 1, `Sem bibliografia em ${g.topicId}`);
    const hasArticle = g.externalLinks?.some(
      (l) => l.kind === 'artigo' && l.url.startsWith('https://')
    );
    const hasVideo = g.externalLinks?.some(
      (l) => l.kind === 'video' && l.url.startsWith('https://')
    );
    assert.ok(hasArticle && hasVideo, `Links artigo+video inválidos em ${g.topicId}`);
  }

  for (const topic of TOPICS) {
    const qCount = QUESTIONS.filter((q) => q.topicId === topic.id).length;
    const fCount = FLASHCARDS.filter((c) => c.topicId === topic.id).length;
    assert.equal(qCount, 20, `Tópico ${topic.id} deveria ter 20 questões (tem ${qCount})`);
    assert.equal(fCount, 3, `Tópico ${topic.id} deveria ter 3 flashcards (tem ${fCount})`);
    assert.ok(
      REVIEW_GUIDES.some((g) => g.topicId === topic.id),
      `Tópico ${topic.id} sem guia de revisão`
    );
  }

  const realExam = generateSimuladoQuestions(QUESTIONS, createInitialProgress(), { seed: 2026 });
  assert.equal(realExam.length, 20);
  assert.equal(new Set(realExam.map((q) => q.topicId)).size, 20);
});

