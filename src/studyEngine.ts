export type Discipline = 'LP' | 'MAT';

export type TopicId =
  | 'lp-ideias'
  | 'lp-textualidade'
  | 'lp-generos'
  | 'lp-semantica'
  | 'lp-estilo'
  | 'lp-variedades'
  | 'lp-morfologia'
  | 'lp-sintaxe'
  | 'lp-pontuacao'
  | 'lp-concordancia'
  | 'mat-operacoes'
  | 'mat-medidas'
  | 'mat-proporcao'
  | 'mat-regra3'
  | 'mat-porcentagem'
  | 'mat-medias'
  | 'mat-algebra'
  | 'mat-equacoes'
  | 'mat-angulos-poligonos'
  | 'mat-triangulos';

export interface TopicMeta {
  id: TopicId;
  discipline: Discipline;
  editalRef: string;
  name: string;
  shortName: string;
  weightNote: string;
}

export interface Question {
  id: string;
  discipline: Discipline;
  topicId: TopicId;
  source: string;
  passageTitle?: string;
  passage?: string;
  stimulusId?: string;
  statements?: string[];
  prompt: string;
  options: [string, string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3 | 4;
  explanation: string;
  trapNote: string;
  optionFeedback?: [string, string, string, string, string];
  stepByStep?: string[];
  memoryTakeaway?: string;
}

export interface Flashcard {
  id: string;
  discipline: Discipline;
  topicId: TopicId;
  front: string;
  hint?: string;
  back: string;
  example: string;
  isCustom?: boolean;
}

export interface WorkedExample {
  title: string;
  problem: string;
  steps: string[];
  conclusion: string;
}

export interface ReviewExternalLink {
  title: string;
  source: string;
  kind: 'artigo' | 'video';
  url: string;
}

export interface ReviewGuide {
  topicId: TopicId;
  discipline: Discipline;
  editalRef: string;
  title: string;
  subtitle?: string;
  estimatedMinutes?: number;
  editalSubtopics?: string[];
  coreSummary: string;
  rules: { label: string; detail: string }[];
  workedExamples?: WorkedExample[];
  commonMistakes?: { wrongThought: string; correction: string }[];
  eteTrap: string;
  selfExplanationPrompt?: { question: string; modelAnswer: string };
  bookReferences?: string[];
  externalLinks?: ReviewExternalLink[];
  activeCheckPrompt: string;
  activeCheckOptions: string[];
  activeCheckCorrect: number;
  activeCheckWhy: string;
}

export interface ScientificMethodMeta {
  code: string;
  citation: string;
  title: string;
  howApplied: string;
}

export const SCIENTIFIC_METHODS: ScientificMethodMeta[] = [
  {
    code: '01',
    citation: 'Testing Effect (Roediger & Karpicke, 2006; Dunlosky et al., 2013)',
    title: 'Prática de Recuperação Ativa',
    howApplied:
      'Forçar o cérebro a buscar a resposta antes de conferir o gabarito consolida a memória de longo prazo muito mais do que releitura passiva.',
  },
  {
    code: '02',
    citation: 'Distributed Practice · SM-2 (Cepeda et al., 2006)',
    title: 'Repetição Espaçada Comprimida até 17/11',
    howApplied:
      'Cada flashcard recalcula o intervalo ótimo de revisão. O que você erra retorna em 10 minutos; o que você domina espaça até a véspera.',
  },
  {
    code: '03',
    citation: 'Interleaved Practice (Rohrer & Taylor, 2007; Bjork & Bjork, 2011)',
    title: 'Treino Intercalado e Dificuldade Desejável',
    howApplied:
      'Na prova real da ETE ninguém avisa qual é a regra antes do enunciado. Alternar assuntos diferentes treina a identificação do método certo.',
  },
  {
    code: '04',
    citation: 'Worked-Example Effect (Sweller, 1988)',
    title: 'Exemplos Resolvidos Passo a Passo',
    howApplied:
      'Estudar resoluções guiadas com baixa carga cognitiva antes de partir para a prática reduz erros de montagem e acelera a criação de esquemas mentais.',
  },
  {
    code: '05',
    citation: 'Self-Explanation (Chi et al., 1994; Pressley et al., 1987)',
    title: 'Autoexplicação e Diagnóstico do Erro',
    howApplied:
      'Entender exatamente por que a alternativa que você marcou falha — e verbalizar o porquê da regra — evita repetir o mesmo erro no dia da prova.',
  },
  {
    code: '06',
    citation: 'Dual Coding & Metacognition (Paivio, 1986; Weinstein et al., 2019)',
    title: 'Codificação Dual + Calibração de Certeza',
    howApplied:
      'Combinamos ilustrações, geometria visual e notação matemática limpa com marcação de certeza para eliminar ilusões de competência.',
  },
];

export type ConfidenceLevel = 'sure' | 'unsure' | 'guess';
export type RecallRating = 'again' | 'hard' | 'good' | 'easy';

export interface QuestionAttempt {
  questionId: string;
  topicId: TopicId;
  discipline: Discipline;
  selectedIndex: number;
  correctIndex: number;
  isCorrect: boolean;
  confidence: ConfidenceLevel;
  timestamp: number;
  mode: 'practice' | 'simulado';
}

export interface Sm2CardState {
  cardId: string;
  repetitions: number;
  intervalDays: number;
  easeFactor: number;
  lapses: number;
  lastReviewedAt: number;
  nextReviewAt: number;
  lastRating: RecallRating;
}

export interface SimuladoAnswerRecord {
  questionId: string;
  topicId: TopicId;
  discipline: Discipline;
  selectedIndex: number | null;
  correctIndex: number;
  isCorrect: boolean;
  flagged: boolean;
}

export interface SimuladoResult {
  id: string;
  completedAt: number;
  durationSeconds: number;
  lpScore: number;
  matScore: number;
  totalScore: number;
  eliminated: boolean;
  eliminationReasons: string[];
  answers: SimuladoAnswerRecord[];
}

export interface StudyProgress {
  version: number;
  examDateIso: string;
  attempts: QuestionAttempt[];
  errorBookIds: string[];
  sm2States: Record<string, Sm2CardState>;
  customFlashcards: Flashcard[];
  simulados: SimuladoResult[];
  completedGuideChecks: TopicId[];
  studyDaysCompleted: number[];
}

export interface MathSegment {
  kind: 'text' | 'inline' | 'display';
  value: string;
}

/**
 * Divide texto misto com LaTeX ($...$ e $$...$$) preservando moedas brasileiras (R$ 120,00).
 */
export function splitMathSegments(input: string): MathSegment[] {
  if (!input.includes('$')) {
    return [{ kind: 'text', value: input }];
  }

  const regex = /((?:R|US|EUR)\$\s*\d[\d.,]*|\$\$[\s\S]+?\$\$|\$(?!\s)(?:\\.|[^$\n])+?(?<!\s)\$)/g;
  const raw: MathSegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    if (match.index > lastIndex) {
      raw.push({ kind: 'text', value: input.slice(lastIndex, match.index) });
    }
    const token = match[0];
    if (token.startsWith('$$') && token.endsWith('$$')) {
      raw.push({ kind: 'display', value: token.slice(2, -2) });
    } else if (token.startsWith('$') && token.endsWith('$')) {
      raw.push({ kind: 'inline', value: token.slice(1, -1) });
    } else {
      // Prefixo monetário como "R$ 120,00" ou "US$ 50"
      raw.push({ kind: 'text', value: token });
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < input.length) {
    raw.push({ kind: 'text', value: input.slice(lastIndex) });
  }

  // Mescla segmentos text adjacentes
  const merged: MathSegment[] = [];
  for (const seg of raw) {
    const prev = merged[merged.length - 1];
    if (seg.kind === 'text' && prev && prev.kind === 'text') {
      prev.value += seg.value;
    } else {
      merged.push({ ...seg });
    }
  }
  return merged.length > 0 ? merged : [{ kind: 'text', value: input }];
}

export const EDITAL_EXAM_DATE_ISO = '2026-11-17T08:00:00-03:00';
export const OFFICIAL_SIMULADO_DURATION_SEC = 60 * 60; // Edital 4.1.b: 60 minutos
export const OFFICIAL_LP_COUNT = 10; // Edital 4.1.a
export const OFFICIAL_MAT_COUNT = 10; // Edital 4.1.a

export const TOPICS: TopicMeta[] = [
  {
    id: 'lp-ideias',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Compreensão',
    name: 'Ideias principais, secundárias e inferência',
    shortName: 'Ideias e Inferência',
    weightNote: 'Alta frequência em textos jornalísticos e crônicas',
  },
  {
    id: 'lp-textualidade',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Textualidade',
    name: 'Coesão, coerência, alusão, paráfrase, paródia e intertextualidade',
    shortName: 'Coesão e Intertextualidade',
    weightNote: 'Recorrente na prova real LP_ETE (poemas, tirinhas e quadros)',
  },
  {
    id: 'lp-generos',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Gêneros',
    name: 'Gêneros textuais e sequências discursivas',
    shortName: 'Gêneros Textuais',
    weightNote: 'Questões I, II, III sobre notícia, fábula, receita e editorial',
  },
  {
    id: 'lp-semantica',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Semântica',
    name: 'Sentido contextual, sinonímia, antonímia, ambiguidade, homonímia e polissemia',
    shortName: 'Semântica Contextual',
    weightNote: 'Vocabulário em contexto literário e notícias',
  },
  {
    id: 'lp-estilo',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Estilo',
    name: 'Conotação, denotação, figuras de linguagem e texto literário',
    shortName: 'Figuras de Linguagem',
    weightNote: 'Presença garantida em tirinhas e poemas (metáfora, zeugma, hipérbato, ironia)',
  },
  {
    id: 'lp-variedades',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Variação',
    name: 'Norma padrão e variedades da língua',
    shortName: 'Variação Linguística',
    weightNote: 'Tirinhas (Chico Bento) e textos literários (variação histórica/regional)',
  },
  {
    id: 'lp-morfologia',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Morfologia',
    name: 'Estrutura, formação de palavras e classes gramaticais',
    shortName: 'Formação e Classes',
    weightNote: 'Aglutinação, justaposição, onomatopeia e classificação de "que"/advérbios',
  },
  {
    id: 'lp-sintaxe',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Sintaxe',
    name: 'Termos da oração, coordenação, subordinação e conectivos',
    shortName: 'Sintaxe e Conectivos',
    weightNote: 'Relações lógicas (causa, concessão, condição, adversidade, proporção)',
  },
  {
    id: 'lp-pontuacao',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Pontuação',
    name: 'Pontuação expressiva e sintática',
    shortName: 'Pontuação',
    weightNote: 'Vírgula em sujeito/verbo, vocativo, aposto e orações intercaladas',
  },
  {
    id: 'lp-concordancia',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Norma Culta',
    name: 'Sintaxe de concordância (verbal/nominal) e regência (verbal/nominal/crase)',
    shortName: 'Concordância e Regência',
    weightNote: 'Principal filtro gramatical de desempate na prova da ETE',
  },
  {
    id: 'mat-operacoes',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Números Reais',
    name: 'Operações, frações, decimais, potenciação, radiciação e raiz aproximada',
    shortName: 'Operações e Raízes',
    weightNote: 'Base para evitar erros de conta e zerar Matemática',
  },
  {
    id: 'mat-medidas',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Medidas',
    name: 'Sistemas de medidas (comprimento, superfície, capacidade e volume)',
    shortName: 'Sistemas de Medidas',
    weightNote: 'Conversões m² ↔ cm², dm³ = L e m³ = 1.000 L',
  },
  {
    id: 'mat-proporcao',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Proporção',
    name: 'Razão, proporção e divisão direta/inversamente proporcional',
    shortName: 'Razão e Divisão Prop.',
    weightNote: 'Divisão de prêmios, lucros ou tempos inversamente proporcionais',
  },
  {
    id: 'mat-regra3',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Regra de Três',
    name: 'Regra de três simples e composta',
    shortName: 'Regra de Três',
    weightNote: 'Problemas de produção, máquinas, dias e horas/dia',
  },
  {
    id: 'mat-porcentagem',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Porcentagem',
    name: 'Porcentagem, descontos e aumentos sucessivos',
    shortName: 'Porcentagem',
    weightNote: 'Altíssima incidência em questões contextualizadas',
  },
  {
    id: 'mat-medias',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Médias',
    name: 'Médias aritmética, ponderada, geométrica e harmônica',
    shortName: 'Quatro Médias',
    weightNote: 'Diferencial do edital ETE: média harmônica e geométrica',
  },
  {
    id: 'mat-algebra',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Álgebra',
    name: 'Polinômios, produtos notáveis e fatoração',
    shortName: 'Polinômios e Fatoração',
    weightNote: 'Simplificação algébrica e valor numérico',
  },
  {
    id: 'mat-equacoes',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · 1º e 2º Grau',
    name: 'Equações algébricas e sistemas lineares do 1º grau',
    shortName: 'Equações e Sistemas',
    weightNote: 'Modelo exato da questão das 84 rodas (skates/bicicletas) da prova ETE',
  },
  {
    id: 'mat-angulos-poligonos',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Geometria I',
    name: 'Ângulos e polígonos (soma de ângulos internos/externos e diagonais)',
    shortName: 'Ângulos e Polígonos',
    weightNote: 'Cálculo rápido de ângulos complementares, suplementares e polígonos regulares',
  },
  {
    id: 'mat-triangulos',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Geometria II',
    name: 'Triângulos, Lei angular de Tales, semelhança e cevianas',
    shortName: 'Triângulos e Cevianas',
    weightNote: 'Mediana, bissetriz, altura e proporção em triângulos semelhantes',
  },
];

export const TOPIC_MAP: Record<TopicId, TopicMeta> = TOPICS.reduce(
  (acc, topic) => {
    acc[topic.id] = topic;
    return acc;
  },
  {} as Record<TopicId, TopicMeta>
);

export function createInitialProgress(): StudyProgress {
  return {
    version: 1,
    examDateIso: EDITAL_EXAM_DATE_ISO,
    attempts: [],
    errorBookIds: [],
    sm2States: {},
    customFlashcards: [],
    simulados: [],
    completedGuideChecks: [],
    studyDaysCompleted: [],
  };
}

export function getDaysUntilExam(
  nowMs: number = Date.now(),
  examDateIso: string = EDITAL_EXAM_DATE_ISO
): number {
  const examMs = new Date(examDateIso).getTime();
  const diffDays = Math.ceil((examMs - nowMs) / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

/**
 * Avalia um simulado oficial seguindo estritamente os Itens 4.1, 5.1 e 6.3 do Edital ETE PE 2027.1.
 */
export function evaluateSimulado(
  questions: Question[],
  selectedByQuestionId: Record<string, number | null>,
  flaggedIds: Set<string>,
  durationSeconds: number,
  completedAt: number = Date.now()
): SimuladoResult {
  let lpScore = 0;
  let matScore = 0;

  const answers: SimuladoAnswerRecord[] = questions.map((q) => {
    const selectedIndex =
      selectedByQuestionId[q.id] === undefined ? null : selectedByQuestionId[q.id];
    const isCorrect = selectedIndex !== null && selectedIndex === q.correctIndex;

    if (isCorrect) {
      if (q.discipline === 'LP') lpScore += 1;
      else matScore += 1;
    }

    return {
      questionId: q.id,
      topicId: q.topicId,
      discipline: q.discipline,
      selectedIndex,
      correctIndex: q.correctIndex,
      isCorrect,
      flagged: flaggedIds.has(q.id),
    };
  });

  const totalScore = lpScore + matScore;
  const minRequiredTotal = Math.ceil(questions.length * 0.2); // 20% de 20 = 4 pontos (Edital 5.1.a)
  const eliminationReasons: string[] = [];

  if (totalScore < minRequiredTotal) {
    eliminationReasons.push(
      `Pontuação total inferior a 20% (${totalScore} de ${questions.length} pontos — mínimo de ${minRequiredTotal}).`
    );
  }
  if (lpScore === 0) {
    eliminationReasons.push(
      'Pontuação zero em Língua Portuguesa (eliminação direta pelo item 5.1.b do Edital).'
    );
  }
  if (matScore === 0) {
    eliminationReasons.push(
      'Pontuação zero em Matemática (eliminação direta pelo item 5.1.b do Edital).'
    );
  }

  return {
    id: `sim-${completedAt}`,
    completedAt,
    durationSeconds,
    lpScore,
    matScore,
    totalScore,
    eliminated: eliminationReasons.length > 0,
    eliminationReasons,
    answers,
  };
}

export function getPortoDigitalReadinessBand(result: SimuladoResult): {
  label: string;
  tone: 'danger' | 'warn' | 'good' | 'top';
  summary: string;
} {
  if (result.eliminated) {
    return {
      label: 'Eliminado pelos critérios do Edital',
      tone: 'danger',
      summary:
        'Atenção imediata: pelo item 5.1 do Edital, pontuação abaixo de 20% ou zero em uma disciplina elimina o candidato.',
    };
  }
  if (result.totalScore >= 17) {
    return {
      label: 'Faixa altamente competitiva (Porto Digital)',
      tone: 'top',
      summary:
        'Desempenho excelente com folga nos critérios de desempate. Mantenha a revisão espaçada dos erros pontuais.',
    };
  }
  if (result.totalScore >= 13) {
    return {
      label: 'Faixa sólida em evolução',
      tone: 'good',
      summary:
        'Bom ritmo para a ETE Porto Digital. Foque nas questões do Caderno de Erros para subir de 13–16 para 17+ pontos.',
    };
  }
  return {
    label: 'Abaixo da faixa competitiva de Recife',
    tone: 'warn',
    summary:
      'Sem eliminação no Edital, mas a concorrência da ETE Porto Digital exige reforço imediato nos tópicos com menor acerto.',
  };
}

function seededShuffle<T>(items: T[], seedInput?: number): T[] {
  const arr = [...items];
  let seed = seedInput ?? Date.now();
  const nextRand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(nextRand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Seleciona 10 questões de Língua Portuguesa + 10 de Matemática distribuídas pelos tópicos do Edital.
 */
export function generateSimuladoQuestions(
  bank: Question[],
  progress: StudyProgress,
  options: { prioritizeWeak?: boolean; seed?: number } = {}
): Question[] {
  const { prioritizeWeak = false, seed } = options;
  const errorSet = new Set(progress.errorBookIds);
  const seenCounts = new Map<string, number>();

  for (const a of progress.attempts) {
    seenCounts.set(a.questionId, (seenCounts.get(a.questionId) ?? 0) + 1);
  }

  const pickForDiscipline = (discipline: Discipline, count: number): Question[] => {
    const pool = seededShuffle(
      bank.filter((q) => q.discipline === discipline),
      seed ? seed + (discipline === 'LP' ? 17 : 73) : undefined
    );

    const scored = [...pool].sort((a, b) => {
      const aErr = prioritizeWeak && errorSet.has(a.id) ? 1 : 0;
      const bErr = prioritizeWeak && errorSet.has(b.id) ? 1 : 0;
      if (aErr !== bErr) return bErr - aErr;

      const aSeen = seenCounts.get(a.id) ?? 0;
      const bSeen = seenCounts.get(b.id) ?? 0;
      if (aSeen !== bSeen) return aSeen - bSeen;

      // Entre questões igualmente revisadas, dê preferência aos itens reais
      // da coletânea ETE usada como referência de formato e dificuldade.
      const aIsRealEte = a.source.startsWith('Prova Real');
      const bIsRealEte = b.source.startsWith('Prova Real');
      if (aIsRealEte !== bIsRealEte) return aIsRealEte ? -1 : 1;
      return 0;
    });

    const selected: Question[] = [];
    const usedIds = new Set<string>();
    const usedTopics = new Set<TopicId>();

    for (const q of scored) {
      if (selected.length >= count) break;
      if (!usedTopics.has(q.topicId)) {
        selected.push(q);
        usedIds.add(q.id);
        usedTopics.add(q.topicId);
      }
    }

    for (const q of scored) {
      if (selected.length >= count) break;
      if (!usedIds.has(q.id)) {
        selected.push(q);
        usedIds.add(q.id);
      }
    }

    return selected;
  };

  const lp = pickForDiscipline('LP', OFFICIAL_LP_COUNT);
  const mat = pickForDiscipline('MAT', OFFICIAL_MAT_COUNT);
  return [...lp, ...mat];
}

/**
 * Algoritmo SM-2 (SuperMemo 2) adaptado para contagem regressiva até a prova (Cepeda et al., 2006).
 */
export function scheduleSm2Card(
  prevState: Sm2CardState | undefined,
  cardId: string,
  rating: RecallRating,
  nowMs: number = Date.now(),
  examDateIso: string = EDITAL_EXAM_DATE_ISO
): Sm2CardState {
  const qualityMap: Record<RecallRating, number> = {
    again: 1,
    hard: 3,
    good: 4,
    easy: 5,
  };
  const q = qualityMap[rating];

  const prevReps = prevState?.repetitions ?? 0;
  const prevInterval = prevState?.intervalDays ?? 0;
  const prevEf = prevState?.easeFactor ?? 2.5;
  const prevLapses = prevState?.lapses ?? 0;

  let nextEf = prevEf + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  if (nextEf < 1.3) nextEf = 1.3;
  nextEf = Math.round(nextEf * 100) / 100;

  let repetitions = prevReps;
  let intervalDays = prevInterval;
  let lapses = prevLapses;
  let nextReviewAt = nowMs;

  const daysUntilExam = getDaysUntilExam(nowMs, examDateIso);

  if (q < 3) {
    repetitions = 0;
    intervalDays = 0;
    lapses += 1;
    nextReviewAt = nowMs + 10 * 60 * 1000;
  } else {
    repetitions = prevReps + 1;
    if (rating === 'hard') {
      intervalDays = repetitions <= 1 ? 1 : Math.max(1, Math.round(prevInterval * 1.2));
    } else if (rating === 'good') {
      if (repetitions === 1) intervalDays = 1;
      else if (repetitions === 2) intervalDays = daysUntilExam <= 10 ? 3 : 6;
      else intervalDays = Math.max(2, Math.round(prevInterval * nextEf));
    } else {
      if (repetitions === 1) intervalDays = daysUntilExam <= 10 ? 2 : 4;
      else if (repetitions === 2) intervalDays = daysUntilExam <= 10 ? 4 : 8;
      else intervalDays = Math.max(3, Math.round(prevInterval * nextEf * 1.3));
    }

    if (daysUntilExam > 1 && daysUntilExam <= 10 && repetitions < 3) {
      const maxSprintGap = Math.max(1, daysUntilExam - 1);
      if (intervalDays > maxSprintGap) {
        intervalDays = maxSprintGap;
      }
    }

    nextReviewAt = nowMs + intervalDays * 24 * 60 * 60 * 1000;
  }

  return {
    cardId,
    repetitions,
    intervalDays,
    easeFactor: nextEf,
    lapses,
    lastReviewedAt: nowMs,
    nextReviewAt,
    lastRating: rating,
  };
}

export function isCardDue(state: Sm2CardState | undefined, nowMs: number = Date.now()): boolean {
  if (!state) return true;
  return state.nextReviewAt <= nowMs;
}

export function formatIntervalLabel(days: number, rating: RecallRating): string {
  if (rating === 'again' || days === 0) return '10 min (hoje)';
  if (days === 1) return '1 dia';
  return `${days} dias`;
}

export function buildInterleavedQueue(
  bank: Question[],
  progress: StudyProgress,
  filter: {
    discipline?: Discipline | 'ALL';
    topicId?: TopicId | 'ALL';
    onlyErrors?: boolean;
  } = {}
): Question[] {
  const { discipline = 'ALL', topicId = 'ALL', onlyErrors = false } = filter;
  const errorSet = new Set(progress.errorBookIds);

  let pool = bank.filter((q) => {
    if (discipline !== 'ALL' && q.discipline !== discipline) return false;
    if (topicId !== 'ALL' && q.topicId !== topicId) return false;
    if (onlyErrors && !errorSet.has(q.id)) return false;
    return true;
  });

  if (pool.length <= 1) return pool;

  const stats = computeTopicMastery(progress);
  const accuracyByTopic = new Map<TopicId, number>();
  for (const s of stats) {
    accuracyByTopic.set(s.topicId, s.attempts > 0 ? s.accuracy : -1);
  }

  const lastAttemptByQ = new Map<string, QuestionAttempt>();
  for (const a of progress.attempts) {
    lastAttemptByQ.set(a.questionId, a);
  }

  pool = [...pool].sort((a, b) => {
    const scoreQ = (q: Question): number => {
      let priority = 0;
      if (errorSet.has(q.id)) priority += 40;
      const last = lastAttemptByQ.get(q.id);
      if (!last) priority += 20;
      else if (!last.isCorrect && last.confidence === 'sure') priority += 60;
      else if (!last.isCorrect) priority += 30;

      const topicAcc = accuracyByTopic.get(q.topicId) ?? -1;
      if (topicAcc >= 0 && topicAcc < 60) priority += 15;
      return priority;
    };
    return scoreQ(b) - scoreQ(a);
  });

  const result: Question[] = [];
  const remaining = [...pool];

  while (remaining.length > 0) {
    const lastTopic = result.length > 0 ? result[result.length - 1].topicId : null;
    const idx = remaining.findIndex((q) => q.topicId !== lastTopic);
    const chosenIndex = idx >= 0 ? idx : 0;
    result.push(remaining.splice(chosenIndex, 1)[0]);
  }

  return result;
}

export function recordQuestionAttempt(
  progress: StudyProgress,
  attempt: QuestionAttempt
): StudyProgress {
  const nextAttempts = [...progress.attempts, attempt];
  const errorSet = new Set(progress.errorBookIds);

  if (attempt.isCorrect) {
    errorSet.delete(attempt.questionId);
  } else {
    errorSet.add(attempt.questionId);
  }

  return {
    ...progress,
    attempts: nextAttempts,
    errorBookIds: Array.from(errorSet),
  };
}

export interface TopicMasteryStat {
  topicId: TopicId;
  discipline: Discipline;
  name: string;
  shortName: string;
  attempts: number;
  correct: number;
  accuracy: number;
}

export function computeTopicMastery(progress: StudyProgress): TopicMasteryStat[] {
  const grouped = new Map<TopicId, { attempts: number; correct: number }>();
  for (const t of TOPICS) {
    grouped.set(t.id, { attempts: 0, correct: 0 });
  }

  for (const a of progress.attempts) {
    const entry = grouped.get(a.topicId);
    if (entry) {
      entry.attempts += 1;
      if (a.isCorrect) entry.correct += 1;
    }
  }

  return TOPICS.map((t) => {
    const g = grouped.get(t.id)!;
    const accuracy = g.attempts > 0 ? Math.round((g.correct / g.attempts) * 100) : 0;
    return {
      topicId: t.id,
      discipline: t.discipline,
      name: t.name,
      shortName: t.shortName,
      attempts: g.attempts,
      correct: g.correct,
      accuracy,
    };
  });
}

export interface CalibrationStats {
  totalAttempts: number;
  overallAccuracy: number;
  sureTotal: number;
  sureCorrect: number;
  highConfidenceErrors: number;
  unsureTotal: number;
  unsureCorrect: number;
  guessTotal: number;
  guessCorrect: number;
}

export function computeCalibrationStats(progress: StudyProgress): CalibrationStats {
  let sureTotal = 0;
  let sureCorrect = 0;
  let highConfidenceErrors = 0;
  let unsureTotal = 0;
  let unsureCorrect = 0;
  let guessTotal = 0;
  let guessCorrect = 0;
  let correctAll = 0;

  for (const a of progress.attempts) {
    if (a.isCorrect) correctAll += 1;
    if (a.confidence === 'sure') {
      sureTotal += 1;
      if (a.isCorrect) sureCorrect += 1;
      else highConfidenceErrors += 1;
    } else if (a.confidence === 'unsure') {
      unsureTotal += 1;
      if (a.isCorrect) unsureCorrect += 1;
    } else {
      guessTotal += 1;
      if (a.isCorrect) guessCorrect += 1;
    }
  }

  const total = progress.attempts.length;
  return {
    totalAttempts: total,
    overallAccuracy: total > 0 ? Math.round((correctAll / total) * 100) : 0,
    sureTotal,
    sureCorrect,
    highConfidenceErrors,
    unsureTotal,
    unsureCorrect,
    guessTotal,
    guessCorrect,
  };
}

export interface CountdownDayPlan {
  dayNumber: number;
  dateLabel: string;
  focusTitle: string;
  tasks: string[];
  methodTag: string;
}

export function buildCountdownPlan(): CountdownDayPlan[] {
  return [
    {
      dayNumber: 1,
      dateLabel: 'Dia 1 · 11/11',
      focusTitle: 'Diagnóstico Oficial + Mapa de Lacunas',
      methodTag: 'Prática de Recuperação (Testing Effect)',
      tasks: [
        'Fazer 1 Simulado Oficial completo (20 questões em 60 min) sem consulta.',
        'Classificar os erros por confiança para detectar ilusões de competência.',
        'Revisar 15 flashcards iniciais de Concordância, Regência e Geometria.',
      ],
    },
    {
      dayNumber: 2,
      dateLabel: 'Dia 2 · 12/11',
      focusTitle: 'Língua Portuguesa (Critério de Desempate) + Álgebra',
      methodTag: 'Prática Intercalada + Exemplos Resolvidos',
      tasks: [
        'Estudar os Exemplos Resolvidos de Sintaxe/Conectivos e Regra de Três na aba Revisões.',
        'Resolver bloco intercalado misturando LP e Matemática (20 questões).',
        'Zerar os flashcards vencidos do dia no algoritmo SM-2.',
      ],
    },
    {
      dayNumber: 3,
      dateLabel: 'Dia 3 · 13/11',
      focusTitle: 'Geometria Plana + Variação e Interpretação',
      methodTag: 'Codificação Dual + Recuperação Ativa',
      tasks: [
        'Treinar Ângulos, Polígonos, Semelhança de Triângulos e Cevianas (Mediana, Bissetriz, Altura).',
        'Resolver textos, charges e tirinhas no estilo LP_ETE focando em inferência e paródia.',
        'Revisar o Caderno de Erros acumulado dos dias 1 e 2 lendo o diagnóstico por alternativa.',
      ],
    },
    {
      dayNumber: 4,
      dateLabel: 'Dia 4 · 14/11',
      focusTitle: 'Simulado Intermediário + Tópicos Raros do Edital',
      methodTag: 'Repetição Espaçada + Dificuldade Desejável',
      tasks: [
        'Fazer o 2º Simulado Oficial cronometrado (meta: >= 15/20 pontos).',
        'Treinar Médias (Geométrica e Harmônica), Divisão Inversamente Proporcional e Fatoração.',
        'Consolidar Regência Verbal/Nominal e Crase nos flashcards.',
      ],
    },
    {
      dayNumber: 5,
      dateLabel: 'Dia 5 · 15/11',
      focusTitle: 'Ataque ao Caderno de Erros + Pacing de 3 min/questão',
      methodTag: 'Autoexplicação + Metacognição',
      tasks: [
        'Esvaziar 100% do Caderno de Erros na aba Questões usando a autoexplicação guiada.',
        'Fazer um 3º Simulado inédito aproveitando o banco de 400+ questões.',
        'Completar todas as checagens ativas das 20 aulas em Revisões.',
      ],
    },
    {
      dayNumber: 6,
      dateLabel: 'Dia 6 · 16/11 (Véspera)',
      focusTitle: 'Revisão Leve SM-2 + Logística da Prova',
      methodTag: 'Consolidação sem Sobrecarga',
      tasks: [
        'Apenas zerar os flashcards espaçados do dia e reler os quadros “Leve para a prova”.',
        'Não fazer simulado exaustivo à noite para preservar memória de trabalho.',
        'Separar documento oficial físico ou app oficial com foto e assinatura (Edital 4.1.c/d).',
      ],
    },
    {
      dayNumber: 7,
      dateLabel: 'Dia 7 · 17/11 (Prova)',
      focusTitle: 'Dia da Prova Objetiva · ETE Porto Digital',
      methodTag: 'Execução Estratégica',
      tasks: [
        'Regra dos 60 minutos: responder primeiro as questões diretas, marcar e voltar nas longas.',
        'Salvar cada alternativa antes do encerramento automático eletrônico (Edital 4.1.b).',
        'Garantir pontos nas duas disciplinas (zerar LP ou Mat elimina pelo item 5.1.b).',
      ],
    },
  ];
}

export function serializeProgress(progress: StudyProgress): string {
  return JSON.stringify(progress, null, 2);
}

export function parseProgressImport(raw: string): StudyProgress {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error('Arquivo inválido: não é um JSON válido.');
  }
  if (!parsed || typeof parsed !== 'object') {
    throw new Error('Estrutura de backup inválida.');
  }
  const obj = parsed as Partial<StudyProgress>;
  if (!Array.isArray(obj.attempts) || !Array.isArray(obj.simulados)) {
    throw new Error('Backup incompatível: campos obrigatórios ausentes.');
  }
  return {
    version: 1,
    examDateIso: typeof obj.examDateIso === 'string' ? obj.examDateIso : EDITAL_EXAM_DATE_ISO,
    attempts: obj.attempts,
    errorBookIds: Array.isArray(obj.errorBookIds) ? obj.errorBookIds : [],
    sm2States: obj.sm2States && typeof obj.sm2States === 'object' ? obj.sm2States : {},
    customFlashcards: Array.isArray(obj.customFlashcards) ? obj.customFlashcards : [],
    simulados: obj.simulados,
    completedGuideChecks: Array.isArray(obj.completedGuideChecks) ? obj.completedGuideChecks : [],
    studyDaysCompleted: Array.isArray(obj.studyDaysCompleted) ? obj.studyDaysCompleted : [],
  };
}
