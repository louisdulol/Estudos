import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertCircle,
  BookMarked,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  Eye,
  GraduationCap,
  Lightbulb,
  PlayCircle,
  Plus,
  RotateCcw,
  Shuffle,
  XCircle,
} from 'lucide-react';
import { MathText } from './MathText';
import {
  TOPICS,
  TOPIC_MAP,
  buildInterleavedQueue,
  formatIntervalLabel,
  isCardDue,
  scheduleSm2Card,
  type ConfidenceLevel,
  type Discipline,
  type Flashcard,
  type Question,
  type QuestionAttempt,
  type RecallRating,
  type ReviewGuide,
  type StudyProgress,
  type TopicId,
} from './studyEngine';
import { VisualStimulus } from './VisualStimuli';

const LETTERS = ['A', 'B', 'C', 'D', 'E'] as const;

// ============================================================================
// 1. BANCO DE QUESTÕES (Prática Intercalada + Diagnóstico Super-Didático)
// ============================================================================
interface QuestoesViewProps {
  bank: Question[];
  progress: StudyProgress;
  initialTopicFilter: TopicId | 'ALL';
  initialMode?: 'interleaved' | 'topic' | 'errors';
  onRecordAttempt: (attempt: QuestionAttempt) => void;
}

export const QuestoesView: React.FC<QuestoesViewProps> = ({
  bank,
  progress,
  initialTopicFilter,
  initialMode,
  onRecordAttempt,
}) => {
  const resolvedInitialMode: 'interleaved' | 'topic' | 'errors' =
    initialMode ?? (initialTopicFilter !== 'ALL' ? 'topic' : 'interleaved');
  const [practiceMode, setPracticeMode] = useState<'interleaved' | 'topic' | 'errors'>(
    resolvedInitialMode
  );
  const [disciplineFilter, setDisciplineFilter] = useState<Discipline | 'ALL'>('ALL');
  const [topicFilter, setTopicFilter] = useState<TopicId | 'ALL'>(initialTopicFilter);
  const [queueIds, setQueueIds] = useState<string[]>(() =>
    buildInterleavedQueue(bank, progress, {
      discipline: 'ALL',
      topicId: resolvedInitialMode === 'topic' ? initialTopicFilter : 'ALL',
      onlyErrors: resolvedInitialMode === 'errors',
    }).map((q) => q.id)
  );
  const [queueIndex, setQueueIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [confidence, setConfidence] = useState<ConfidenceLevel>('unsure');
  const [submittedAttempt, setSubmittedAttempt] = useState<QuestionAttempt | null>(null);
  const feedbackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (submittedAttempt) {
      feedbackRef.current?.scrollIntoView({ behavior: 'auto', block: 'nearest' });
    }
  }, [submittedAttempt]);

  const bankById = useMemo(() => new Map(bank.map((q) => [q.id, q])), [bank]);
  const queue = useMemo(
    () => queueIds.map((id) => bankById.get(id)).filter((q): q is Question => Boolean(q)),
    [queueIds, bankById]
  );

  const currentQuestion = queue[queueIndex] ?? queue[0];

  const rebuildQueue = (
    nextMode: 'interleaved' | 'topic' | 'errors',
    nextDiscipline: Discipline | 'ALL',
    nextTopic: TopicId | 'ALL'
  ) => {
    const next = buildInterleavedQueue(bank, progress, {
      discipline: nextMode === 'topic' && nextTopic !== 'ALL' ? 'ALL' : nextDiscipline,
      topicId: nextMode === 'topic' ? nextTopic : 'ALL',
      onlyErrors: nextMode === 'errors',
    });
    setQueueIds(next.map((q) => q.id));
    setQueueIndex(0);
    setSelectedOption(null);
    setConfidence('unsure');
    setSubmittedAttempt(null);
  };

  const resetCurrentSelection = (nextIndex: number) => {
    setQueueIndex(nextIndex);
    setSelectedOption(null);
    setConfidence('unsure');
    setSubmittedAttempt(null);
  };

  const handleConfirmAnswer = () => {
    if (!currentQuestion || selectedOption === null || submittedAttempt) return;
    const attempt: QuestionAttempt = {
      questionId: currentQuestion.id,
      topicId: currentQuestion.topicId,
      discipline: currentQuestion.discipline,
      selectedIndex: selectedOption,
      correctIndex: currentQuestion.correctIndex,
      isCorrect: selectedOption === currentQuestion.correctIndex,
      confidence,
      timestamp: Date.now(),
      mode: 'practice',
    };
    setSubmittedAttempt(attempt);
    onRecordAttempt(attempt);
  };

  const availableTopics = TOPICS.filter(
    (t) => disciplineFilter === 'ALL' || t.discipline === disciplineFilter
  );

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">
              Prática de Recuperação Ativa + Intercalação · Banco Completo ({bank.length} questões)
            </p>
            <h1 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl [text-wrap:balance]">
              Treino Dirigido por Questões do Edital
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
              <button
                type="button"
                onClick={() => {
                  setPracticeMode('interleaved');
                  rebuildQueue('interleaved', disciplineFilter, topicFilter);
                }}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  practiceMode === 'interleaved'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Shuffle className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Intercalado</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setPracticeMode('topic');
                  rebuildQueue('topic', disciplineFilter, topicFilter);
                }}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  practiceMode === 'topic'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Por Tópico
              </button>
              <button
                type="button"
                onClick={() => {
                  setPracticeMode('errors');
                  rebuildQueue('errors', disciplineFilter, topicFilter);
                }}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  practiceMode === 'errors'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Caderno de Erros ({progress.errorBookIds.length})
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2">
            <label htmlFor="discipline-select" className="text-xs font-medium text-slate-600">
              Disciplina:
            </label>
            <select
              id="discipline-select"
              value={disciplineFilter}
              onChange={(e) => {
                const val = e.target.value as Discipline | 'ALL';
                setDisciplineFilter(val);
                setTopicFilter('ALL');
                rebuildQueue(practiceMode, val, 'ALL');
              }}
              className="min-h-[40px] rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-800"
            >
              <option value="ALL">Português + Matemática</option>
              <option value="LP">Língua Portuguesa</option>
              <option value="MAT">Matemática</option>
            </select>
          </div>

          {practiceMode === 'topic' && (
            <div className="flex items-center gap-2">
              <label htmlFor="topic-select" className="text-xs font-medium text-slate-600">
                Tópico do Edital:
              </label>
              <select
                id="topic-select"
                value={topicFilter}
                onChange={(e) => {
                  const nextTopic = e.target.value as TopicId | 'ALL';
                  setTopicFilter(nextTopic);
                  rebuildQueue('topic', disciplineFilter, nextTopic);
                }}
                className="min-h-[40px] max-w-xs rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-800"
              >
                <option value="ALL">Todos os tópicos</option>
                {availableTopics.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.discipline} · {t.shortName}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="ml-auto font-mono-num text-xs text-slate-500">
            {queue.length > 0
              ? `Questão ${Math.min(queueIndex + 1, queue.length)} de ${queue.length}`
              : '0 questões neste filtro'}
          </div>
        </div>
      </section>

      {!currentQuestion ? (
        <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
          <p className="text-base font-semibold text-slate-900">
            {practiceMode === 'errors'
              ? 'Seu Caderno de Erros está vazio.'
              : 'Nenhuma questão encontrada para esse filtro.'}
          </p>
          <p className="mt-1 text-sm text-slate-600">
            {practiceMode === 'errors'
              ? 'Excelente! Quando errar alguma questão no treino ou no simulado, ela aparecerá aqui para revisão detalhada.'
              : 'Ajuste o seletor de disciplina ou tópico para continuar praticando.'}
          </p>
          {practiceMode === 'errors' && (
            <button
              type="button"
              onClick={() => {
                setPracticeMode('interleaved');
                rebuildQueue('interleaved', disciplineFilter, topicFilter);
              }}
              className="mt-4 min-h-[40px] rounded-lg bg-[#1D4ED8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Ir para Prática Intercalada
            </button>
          )}
        </div>
      ) : (
        <article className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 text-xs font-medium text-slate-500">
            <div>
              <span>{currentQuestion.source}</span>
              <span aria-hidden="true"> · </span>
              <span>{TOPIC_MAP[currentQuestion.topicId].name}</span>
            </div>
            {progress.errorBookIds.includes(currentQuestion.id) && (
              <span className="font-semibold text-amber-700">No Caderno de Erros</span>
            )}
          </div>

          <div className="mt-6 space-y-6">
            {currentQuestion.passage && (
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6">
                {currentQuestion.passageTitle && (
                  <h2 className="mb-2.5 text-[15px] font-semibold text-slate-900">
                    <MathText text={currentQuestion.passageTitle} />
                  </h2>
                )}
                <div className="font-serif-reading whitespace-pre-line text-base sm:text-[17px] leading-[1.75] text-slate-900">
                  <MathText text={currentQuestion.passage} />
                </div>
              </div>
            )}

            {currentQuestion.stimulusId && <VisualStimulus id={currentQuestion.stimulusId} />}

            {currentQuestion.statements && (
              <div className="space-y-2.5 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-5 text-[15px] leading-relaxed text-slate-800">
                {currentQuestion.statements.map((st, idx) => (
                  <p key={idx}>
                    <MathText text={st} />
                  </p>
                ))}
              </div>
            )}

            <p className="text-base sm:text-[18px] font-semibold leading-relaxed text-slate-900 whitespace-pre-line">
              <MathText text={currentQuestion.prompt} />
            </p>

            {/* Alternativas com tipografia ampliada e KaTeX */}
            <div className="space-y-2.5" role="radiogroup" aria-label="Alternativas da questão">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectOpt = idx === currentQuestion.correctIndex;
                let borderStyle =
                  'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50';

                if (submittedAttempt) {
                  if (isCorrectOpt) {
                    borderStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950';
                  } else if (isSelected && !isCorrectOpt) {
                    borderStyle = 'border-red-400 bg-red-50 text-red-950';
                  } else {
                    borderStyle = 'border-slate-200 bg-white text-slate-500';
                  }
                } else if (isSelected) {
                  borderStyle = 'border-[#1D4ED8] bg-blue-50/70 text-slate-900';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    disabled={Boolean(submittedAttempt)}
                    onClick={() => setSelectedOption(idx)}
                    className={`flex w-full min-h-[48px] items-start gap-3.5 rounded-lg border px-4 py-3 text-left text-[15px] leading-relaxed transition-colors ${borderStyle}`}
                  >
                    <span
                      className={`font-mono-num mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border text-[13px] font-semibold ${
                        submittedAttempt && isCorrectOpt
                          ? 'border-emerald-600 bg-emerald-600 text-white'
                          : submittedAttempt && isSelected && !isCorrectOpt
                          ? 'border-red-600 bg-red-600 text-white'
                          : isSelected
                          ? 'border-[#1D4ED8] bg-[#1D4ED8] text-white'
                          : 'border-slate-300 bg-slate-50 text-slate-700'
                      }`}
                    >
                      {LETTERS[idx]}
                    </span>
                    <span className="leading-relaxed">
                      <MathText text={opt} />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Calibração metacognitiva antes de confirmar */}
            {!submittedAttempt && (
              <div className="flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-slate-600">
                    Nível de certeza (Metacognição):
                  </span>
                  {(
                    [
                      { id: 'sure', label: 'Tive certeza' },
                      { id: 'unsure', label: 'Fiquei em dúvida' },
                      { id: 'guess', label: 'Chutei' },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setConfidence(item.id)}
                      className={`min-h-[36px] rounded-md border px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                        confidence === item.id
                          ? 'border-slate-900 bg-slate-900 text-white'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  disabled={selectedOption === null}
                  onClick={handleConfirmAnswer}
                  className="min-h-[44px] rounded-lg bg-[#1D4ED8] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800 disabled:opacity-40 whitespace-nowrap shrink-0"
                >
                  Confirmar resposta
                </button>
              </div>
            )}

            {/* Diagnóstico Didático Completo após envio */}
            {submittedAttempt && (
              <div
                ref={feedbackRef}
                className={`space-y-4 rounded-xl border p-5 sm:p-6 ${
                  submittedAttempt.isCorrect
                    ? 'border-emerald-200 bg-emerald-50/50'
                    : 'border-red-200 bg-red-50/60'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div
                    className={`inline-flex items-center gap-2 text-base font-bold ${
                      submittedAttempt.isCorrect ? 'text-emerald-800' : 'text-red-800'
                    }`}
                  >
                    {submittedAttempt.isCorrect ? (
                      <>
                        <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                        <span>
                          Resposta Correta! Gabarito: {LETTERS[currentQuestion.correctIndex]}
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5" aria-hidden="true" />
                        <span>
                          Você marcou {LETTERS[submittedAttempt.selectedIndex]} — o gabarito é{' '}
                          {LETTERS[currentQuestion.correctIndex]}
                        </span>
                      </>
                    )}
                  </div>

                  {!submittedAttempt.isCorrect && submittedAttempt.confidence === 'sure' && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800">
                      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      Ilusão de competência detectada (priorizada para revisão)
                    </span>
                  )}
                </div>

                {!submittedAttempt.isCorrect && (
                  <div className="rounded-lg border border-red-200 bg-white p-4">
                    <h3 className="text-[13px] font-bold text-red-800">
                      Por que a alternativa marcada ({LETTERS[submittedAttempt.selectedIndex]}) está
                      incorreta
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-slate-800">
                      <MathText
                        text={
                          currentQuestion.optionFeedback?.[submittedAttempt.selectedIndex] ??
                          currentQuestion.explanation
                        }
                      />
                    </p>
                  </div>
                )}

                <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-3">
                  <h3 className="text-sm font-bold text-slate-900">Resolução passo a passo</h3>
                  {currentQuestion.stepByStep && currentQuestion.stepByStep.length > 0 && (
                    <ol className="space-y-2">
                      {currentQuestion.stepByStep.map((step, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-start gap-2.5 text-[15px] leading-relaxed text-slate-800"
                        >
                          <span className="font-mono-num mt-0.5 shrink-0 text-xs font-bold text-[#1D4ED8]">
                            {sIdx + 1}.
                          </span>
                          <span>
                            <MathText text={step} />
                          </span>
                        </li>
                      ))}
                    </ol>
                  )}
                  <p className="border-t border-slate-100 pt-2.5 text-[15px] leading-relaxed text-slate-700">
                    <strong className="font-semibold text-slate-900">Explicação completa:</strong>{' '}
                    <MathText text={currentQuestion.explanation} />
                  </p>
                </div>

                <div className="rounded-lg border border-amber-200 bg-amber-50/80 p-4 text-sm text-amber-950">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
                    <div className="space-y-2">
                      <div>
                        <strong className="font-semibold">
                          O que levar na cabeça para não errar mais:
                        </strong>{' '}
                        <MathText
                          text={currentQuestion.memoryTakeaway ?? currentQuestion.trapNote}
                        />
                      </div>
                      <div className="border-t border-amber-200/80 pt-2 text-[13px] leading-relaxed text-amber-900">
                        <strong className="font-semibold">Armadilha da ETE:</strong>{' '}
                        <MathText text={currentQuestion.trapNote} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      if (queueIndex + 1 < queue.length) {
                        resetCurrentSelection(queueIndex + 1);
                      } else {
                        rebuildQueue(practiceMode, disciplineFilter, topicFilter);
                      }
                    }}
                    className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 whitespace-nowrap"
                  >
                    <span>
                      {queueIndex + 1 < queue.length ? 'Próxima questão' : 'Reiniciar fila'}
                    </span>
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </article>
      )}
    </div>
  );
};

// ============================================================================
// 2. FLASHCARDS (Repetição Espaçada SM-2 + Reta Final 17/11)
// ============================================================================
interface FlashcardsViewProps {
  baseCards: Flashcard[];
  progress: StudyProgress;
  onRateCard: (cardId: string, rating: RecallRating) => void;
  onAddCustomCard: (card: Flashcard) => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  baseCards,
  progress,
  onRateCard,
  onAddCustomCard,
}) => {
  const [disciplineFilter, setDisciplineFilter] = useState<Discipline | 'ALL'>('ALL');
  const [onlyDue, setOnlyDue] = useState<boolean>(true);
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [showCreateForm, setShowCreateForm] = useState<boolean>(false);
  const [newFront, setNewFront] = useState<string>('');
  const [newBack, setNewBack] = useState<string>('');
  const [newDiscipline, setNewDiscipline] = useState<Discipline>('LP');
  const [formError, setFormError] = useState<string>('');

  const allCards = useMemo(
    () => [...progress.customFlashcards, ...baseCards],
    [progress.customFlashcards, baseCards]
  );

  const nowMs = Date.now();

  const dueCount = useMemo(
    () =>
      allCards.filter(
        (c) =>
          (disciplineFilter === 'ALL' || c.discipline === disciplineFilter) &&
          isCardDue(progress.sm2States[c.id], nowMs)
      ).length,
    [allCards, disciplineFilter, progress.sm2States, nowMs]
  );

  const deck = useMemo(() => {
    const filtered = allCards.filter((c) => {
      if (disciplineFilter !== 'ALL' && c.discipline !== disciplineFilter) return false;
      if (onlyDue && !isCardDue(progress.sm2States[c.id], nowMs)) return false;
      return true;
    });
    return filtered;
  }, [allCards, disciplineFilter, onlyDue, progress.sm2States, nowMs]);

  const activeCard = deck[cardIndex % Math.max(1, deck.length)];

  const handleRating = (rating: RecallRating) => {
    if (!activeCard) return;
    onRateCard(activeCard.id, rating);
    setIsFlipped(false);
    if (onlyDue) {
      setCardIndex((prev) => (deck.length > 1 ? prev % (deck.length - 1) : 0));
    } else {
      setCardIndex((prev) => (prev + 1 < deck.length ? prev + 1 : 0));
    }
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFront.trim() || !newBack.trim()) {
      setFormError('Preencha a pergunta (frente) e a resposta (verso).');
      return;
    }
    const created: Flashcard = {
      id: `custom-${Date.now()}`,
      discipline: newDiscipline,
      topicId: newDiscipline === 'LP' ? 'lp-concordancia' : 'mat-equacoes',
      front: newFront.trim(),
      back: newBack.trim(),
      example: 'Cartão personalizado criado para sua reta final.',
      isCustom: true,
    };
    onAddCustomCard(created);
    setNewFront('');
    setNewBack('');
    setFormError('');
    setShowCreateForm(false);
    setOnlyDue(true);
    setCardIndex(0);
    setIsFlipped(false);
  };

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">
              Repetição Espaçada SM-2 + Compressão Pré-Prova · {allCards.length} flashcards no
              baralho
            </p>
            <h1 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl [text-wrap:balance]">
              Flashcards de Recuperação Ativa
            </h1>
          </div>

          <button
            type="button"
            onClick={() => setShowCreateForm((v) => !v)}
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 whitespace-nowrap shrink-0"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            <span>{showCreateForm ? 'Fechar formulário' : 'Criar flashcard'}</span>
          </button>
        </div>

        {showCreateForm && (
          <form
            onSubmit={handleCreateSubmit}
            className="mt-4 space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <label htmlFor="fc-front" className="block text-xs font-medium text-slate-700">
                  Pergunta / Gatilho (Frente)
                </label>
                <input
                  id="fc-front"
                  type="text"
                  value={newFront}
                  onChange={(e) => setNewFront(e.target.value)}
                  placeholder="Ex.: Quando usar crase antes de 'àquela'?"
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
                />
              </div>
              <div>
                <label htmlFor="fc-disc" className="block text-xs font-medium text-slate-700">
                  Disciplina
                </label>
                <select
                  id="fc-disc"
                  value={newDiscipline}
                  onChange={(e) => setNewDiscipline(e.target.value as Discipline)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
                >
                  <option value="LP">Língua Portuguesa</option>
                  <option value="MAT">Matemática</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="fc-back" className="block text-xs font-medium text-slate-700">
                Resposta / Regra (Verso)
              </label>
              <textarea
                id="fc-back"
                rows={2}
                value={newBack}
                onChange={(e) => setNewBack(e.target.value)}
                placeholder="Ex.: Sempre que o termo anterior exigir preposição 'a' antes do pronome demonstrativo aquela."
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
              />
            </div>
            {formError && <p className="text-xs font-medium text-red-700">{formError}</p>}
            <div className="flex justify-end">
              <button
                type="submit"
                className="min-h-[38px] rounded-lg bg-[#1D4ED8] px-4 py-1.5 text-xs font-semibold text-white hover:bg-blue-800"
              >
                Salvar cartão no baralho
              </button>
            </div>
          </form>
        )}

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            {(
              [
                { id: 'ALL', label: 'Todos' },
                { id: 'LP', label: 'Língua Portuguesa' },
                { id: 'MAT', label: 'Matemática' },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setDisciplineFilter(opt.id);
                  setCardIndex(0);
                  setIsFlipped(false);
                }}
                className={`min-h-[36px] rounded-md border px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  disciplineFilter === opt.id
                    ? 'border-slate-900 bg-slate-900 text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                {opt.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => {
                setOnlyDue((v) => !v);
                setCardIndex(0);
                setIsFlipped(false);
              }}
              className={`min-h-[36px] rounded-md border px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                onlyDue
                  ? 'border-[#1D4ED8] bg-blue-50 text-[#1D4ED8]'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {onlyDue ? `Somente pendentes hoje (${dueCount})` : `Todo o baralho (${deck.length})`}
            </button>
          </div>

          <div className="font-mono-num text-xs text-slate-500">
            Pendentes para revisar agora: <strong className="text-slate-900">{dueCount}</strong>
          </div>
        </div>
      </section>

      {!activeCard ? (
        <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
          <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-700" aria-hidden="true" />
          <h2 className="mt-3 text-lg font-bold text-slate-900">
            Você zerou os flashcards pendentes de hoje!
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            O algoritmo SM-2 agendou seus próximos cartões respeitando a curva de esquecimento até a
            prova de 17/11.
          </p>
          <button
            type="button"
            onClick={() => setOnlyDue(false)}
            className="mt-4 inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            <span>Revisar baralho completo mesmo assim</span>
          </button>
        </div>
      ) : (
        <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 text-xs font-medium text-slate-500">
            <div>
              <span>{activeCard.discipline === 'LP' ? 'Língua Portuguesa' : 'Matemática'}</span>
              <span aria-hidden="true"> · </span>
              <span>{TOPIC_MAP[activeCard.topicId].shortName}</span>
            </div>
            <div className="font-mono-num">
              Cartão {(cardIndex % deck.length) + 1} de {deck.length}
            </div>
          </div>

          <div className="py-8">
            <h2 className="text-lg font-semibold leading-relaxed text-slate-900 sm:text-xl">
              <MathText text={activeCard.front} />
            </h2>
            {activeCard.hint && !isFlipped && (
              <p className="mt-3 text-sm text-slate-500">
                Dica de memória: <MathText text={activeCard.hint} />
              </p>
            )}

            {!isFlipped ? (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsFlipped(true)}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#1D4ED8] px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 whitespace-nowrap"
                >
                  <Eye className="h-4 w-4" aria-hidden="true" />
                  <span>Mostrar resposta</span>
                </button>
              </div>
            ) : (
              <div className="mt-6 space-y-4 border-t border-slate-200 pt-6">
                <div className="whitespace-pre-line text-base leading-relaxed text-slate-800">
                  <MathText text={activeCard.back} />
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
                  <strong className="font-semibold text-slate-900">Exemplo / Aplicação ETE:</strong>{' '}
                  <MathText text={activeCard.example} />
                </div>

                <div className="pt-2">
                  <p className="mb-2.5 text-xs font-medium text-slate-600">
                    Avalie sua lembrança para agendar a próxima revisão (SM-2):
                  </p>
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                    {(
                      [
                        {
                          rating: 'again',
                          label: 'Errei / Esqueci',
                          tone: 'border-red-300 bg-red-50 text-red-900 hover:bg-red-100',
                        },
                        {
                          rating: 'hard',
                          label: 'Difícil',
                          tone: 'border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100',
                        },
                        {
                          rating: 'good',
                          label: 'Bom',
                          tone: 'border-blue-300 bg-blue-50 text-blue-900 hover:bg-blue-100',
                        },
                        {
                          rating: 'easy',
                          label: 'Fácil',
                          tone: 'border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100',
                        },
                      ] as const
                    ).map((btn) => {
                      const preview = scheduleSm2Card(
                        progress.sm2States[activeCard.id],
                        activeCard.id,
                        btn.rating,
                        nowMs
                      );
                      return (
                        <button
                          key={btn.rating}
                          type="button"
                          onClick={() => handleRating(btn.rating)}
                          className={`flex min-h-[54px] flex-col items-center justify-center rounded-lg border px-3 py-2 text-center transition-colors ${btn.tone}`}
                        >
                          <span className="text-xs font-bold">{btn.label}</span>
                          <span className="font-mono-num mt-0.5 text-[11px] opacity-80">
                            {formatIntervalLabel(preview.intervalDays, btn.rating)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 3. REVISÕES GUIADAS DO EDITAL (Curso Estruturado: Teoria + Exemplos + Links)
// ============================================================================
interface RevisoesViewProps {
  guides: ReviewGuide[];
  progress: StudyProgress;
  onCompleteGuideCheck: (topicId: TopicId) => void;
  onGoPracticeTopic: (topicId: TopicId) => void;
}

export const RevisoesView: React.FC<RevisoesViewProps> = ({
  guides,
  progress,
  onCompleteGuideCheck,
  onGoPracticeTopic,
}) => {
  const [disciplineFilter, setDisciplineFilter] = useState<Discipline | 'ALL'>('ALL');
  const [expandedTopic, setExpandedTopic] = useState<TopicId>(guides[0].topicId);
  const [checkSelections, setCheckSelections] = useState<Record<string, number>>({});
  const [revealedSelfMap, setRevealedSelfMap] = useState<Record<string, boolean>>({});
  const articleTopRef = useRef<HTMLElement | null>(null);

  const visibleGuides = guides.filter(
    (g) => disciplineFilter === 'ALL' || g.discipline === disciplineFilter
  );

  const selectLesson = (topicId: TopicId) => {
    setExpandedTopic(topicId);
    window.requestAnimationFrame(() => {
      if (articleTopRef.current) {
        const top = articleTopRef.current.getBoundingClientRect().top + window.scrollY - 88;
        window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
      }
    });
  };

  const completedCount = guides.filter((g) =>
    progress.completedGuideChecks.includes(g.topicId)
  ).length;
  const coursePercent = guides.length > 0 ? Math.round((completedCount / guides.length) * 100) : 0;

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">
              Item 12 do Edital · Exemplos Resolvidos + Autoexplicação Guiada + Materiais de Apoio
            </p>
            <h1 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl [text-wrap:balance]">
              Curso Completo de Revisão do Edital (20 Módulos)
            </h1>
          </div>

          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1 self-start lg:self-auto">
            {(
              [
                { id: 'ALL', label: 'Todos (20)' },
                { id: 'LP', label: 'Língua Portuguesa (10)' },
                { id: 'MAT', label: 'Matemática (10)' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setDisciplineFilter(tab.id);
                  const first = guides.find((g) => tab.id === 'ALL' || g.discipline === tab.id);
                  if (first) selectLesson(first.topicId);
                }}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  disciplineFilter === tab.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <GraduationCap className="h-4 w-4 text-[#1D4ED8]" aria-hidden="true" />
            <span>
              Progresso do curso:{' '}
              <strong className="font-mono-num text-slate-900">
                {completedCount} de {guides.length} módulos concluídos ({coursePercent}%)
              </strong>
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-md bg-slate-100 sm:w-64">
            <div
              className="h-full rounded-md bg-[#1D4ED8] transition-all"
              style={{ width: `${coursePercent}%` }}
            />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[310px_1fr] lg:items-start">
        <nav
          aria-label="Módulos de revisão do Edital"
          className="rounded-xl border border-slate-200 bg-white p-3.5 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6.5rem)] lg:overflow-y-auto"
        >
          <div className="mb-2 px-2 text-xs font-semibold text-slate-500">
            Ementa do Curso ({visibleGuides.length} aulas)
          </div>
          <div className="space-y-1">
            {visibleGuides.map((g, idx) => {
              const isDone = progress.completedGuideChecks.includes(g.topicId);
              const isActive = expandedTopic === g.topicId;
              return (
                <button
                  key={g.topicId}
                  type="button"
                  onClick={() => selectLesson(g.topicId)}
                  className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left text-xs transition-colors ${
                    isActive
                      ? 'bg-[#1D4ED8] font-semibold text-white'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="truncate">
                      <span className="font-mono-num opacity-80">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>{' '}
                      {g.discipline} · {TOPIC_MAP[g.topicId].shortName}
                    </div>
                    {g.estimatedMinutes && (
                      <div
                        className={`mt-0.5 font-mono-num text-[11px] ${
                          isActive ? 'text-blue-100' : 'text-slate-400'
                        }`}
                      >
                        {g.estimatedMinutes} min · {g.editalSubtopics?.length ?? 3} subitens
                      </div>
                    )}
                  </div>
                  {isDone && (
                    <CheckCircle2
                      className={`h-4 w-4 shrink-0 ${
                        isActive ? 'text-white' : 'text-emerald-700'
                      }`}
                      aria-label="Concluído"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {(() => {
          const guide =
            visibleGuides.find((g) => g.topicId === expandedTopic) ?? visibleGuides[0];
          if (!guide) return null;
          const chosenCheck = checkSelections[guide.topicId];
          const isCheckAnswered = chosenCheck !== undefined;
          const isCheckCorrect = chosenCheck === guide.activeCheckCorrect;
          const isSelfRevealed = Boolean(revealedSelfMap[guide.topicId]);
          const isDone = progress.completedGuideChecks.includes(guide.topicId);

          const articles = guide.externalLinks?.filter((l) => l.kind === 'artigo') ?? [];
          const videos = guide.externalLinks?.filter((l) => l.kind === 'video') ?? [];

          return (
            <article
              ref={articleTopRef}
              className="space-y-8 rounded-xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              {/* Cabeçalho da Aula */}
              <header className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                    <span>{guide.discipline === 'LP' ? 'Língua Portuguesa' : 'Matemática'}</span>
                    <span aria-hidden="true">·</span>
                    <span>{guide.editalRef}</span>
                    {guide.estimatedMinutes && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="inline-flex items-center gap-1 font-mono-num">
                          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                          {guide.estimatedMinutes} min de estudo
                        </span>
                      </>
                    )}
                    {isDone && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-emerald-700">Aula concluída</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 [text-wrap:balance]">
                    <MathText text={guide.title} />
                  </h2>
                  {guide.subtitle && (
                    <p className="text-[15px] leading-relaxed text-slate-600">
                      <MathText text={guide.subtitle} />
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => onGoPracticeTopic(guide.topicId)}
                  className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg bg-[#1D4ED8] px-4 py-2 text-xs font-semibold text-white hover:bg-blue-800 whitespace-nowrap shrink-0 self-start"
                >
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  <span>Praticar questões deste tema</span>
                </button>
              </header>

              {/* Tópicos exatos do Edital cobertos */}
              {guide.editalSubtopics && guide.editalSubtopics.length > 0 && (
                <section className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-[13px] font-bold text-slate-700">
                    Conteúdo do Edital coberto nesta aula
                  </h3>
                  <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-800 sm:grid-cols-2">
                    {guide.editalSubtopics.map((sub, i) => (
                      <li key={i} className="flex items-start gap-2 leading-relaxed">
                        <span className="font-mono-num mt-0.5 text-xs font-semibold text-[#1D4ED8]">
                          {String(i + 1).padStart(2, '0')}.
                        </span>
                        <span>
                          <MathText text={sub} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Síntese Estratégica */}
              <section>
                <h3 className="text-base font-bold text-slate-900">Por que este tema decide a prova</h3>
                <p className="mt-2 text-base leading-[1.7] text-slate-700">
                  <MathText text={guide.coreSummary} />
                </p>
              </section>

              {/* Fundamentação e Regras */}
              <section className="space-y-3">
                <h3 className="text-base font-bold text-slate-900">
                  Fundamentação Teórica e Regras Essenciais
                </h3>
                <div className="space-y-3">
                  {guide.rules.map((rule, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-slate-200 bg-slate-50/70 p-5"
                    >
                      <h4 className="text-[15px] font-bold text-slate-900">
                        <MathText text={rule.label} />
                      </h4>
                      <p className="mt-2 whitespace-pre-line text-[15px] leading-[1.7] text-slate-800">
                        <MathText text={rule.detail} />
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Exemplos Resolvidos (Worked-Example Effect) */}
              {guide.workedExamples && guide.workedExamples.length > 0 && (
                <section className="space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Exemplos Resolvidos Passo a Passo
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Método Worked-Example (Sweller, 1988): acompanhe cada etapa antes de partir
                      para o treino.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {guide.workedExamples.map((ex, eIdx) => (
                      <div
                        key={eIdx}
                        className="rounded-lg border border-slate-200 bg-white p-5 space-y-3"
                      >
                        <h4 className="text-sm font-bold text-[#1D4ED8]">
                          <MathText text={ex.title} />
                        </h4>
                        <p className="rounded-md border border-slate-100 bg-slate-50 p-3.5 text-[15px] leading-relaxed text-slate-900">
                          <MathText text={ex.problem} />
                        </p>
                        <ol className="space-y-2 pt-1">
                          {ex.steps.map((st, stIdx) => (
                            <li
                              key={stIdx}
                              className="flex items-start gap-2.5 text-[15px] leading-relaxed text-slate-800"
                            >
                              <span className="font-mono-num mt-0.5 shrink-0 text-xs font-bold text-slate-500">
                                Passo {stIdx + 1}:
                              </span>
                              <span>
                                <MathText text={st} />
                              </span>
                            </li>
                          ))}
                        </ol>
                        <div className="border-t border-slate-100 pt-3 text-[15px] font-semibold text-emerald-900">
                          Conclusão: <MathText text={ex.conclusion} />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Erros Comuns + Pegadinha */}
              <section className="space-y-4">
                {guide.commonMistakes && guide.commonMistakes.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-slate-900">
                      Erros Comuns de Candidatos e Como Corrigir
                    </h3>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {guide.commonMistakes.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="rounded-lg border border-slate-200 bg-white p-4 space-y-2"
                        >
                          <p className="text-sm font-semibold text-red-800">
                            Pensamento errado:{' '}
                            <span className="font-normal text-slate-800">
                              <MathText text={m.wrongThought} />
                            </span>
                          </p>
                          <p className="border-t border-slate-100 pt-2 text-sm text-emerald-900">
                            <strong className="font-semibold">Correção:</strong>{' '}
                            <span className="text-slate-800">
                              <MathText text={m.correction} />
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="rounded-lg border border-amber-200 bg-amber-50/80 p-4 text-[15px] leading-relaxed text-amber-950">
                  <strong className="font-semibold">Pegadinha clássica da ETE:</strong>{' '}
                  <MathText text={guide.eteTrap} />
                </div>
              </section>

              {/* Autoexplicação Guiada (Chi et al., 1994) */}
              {guide.selfExplanationPrompt && (
                <section className="rounded-lg border border-slate-200 bg-slate-50 p-5 space-y-3">
                  <div className="text-[13px] font-bold text-slate-700">
                    Autoexplicação Guiada (Chi et al., 1994)
                  </div>
                  <p className="text-[15px] font-semibold leading-relaxed text-slate-900">
                    <MathText text={guide.selfExplanationPrompt.question} />
                  </p>
                  <button
                    type="button"
                    aria-expanded={isSelfRevealed}
                    onClick={() =>
                      setRevealedSelfMap((prev) => ({
                        ...prev,
                        [guide.topicId]: !prev[guide.topicId],
                      }))
                    }
                    className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-100"
                  >
                    <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>
                      {isSelfRevealed
                        ? 'Ocultar resposta-modelo'
                        : 'Tente explicar em voz alta e confira o modelo'}
                    </span>
                  </button>
                  {isSelfRevealed && (
                    <div className="rounded-md border border-slate-200 bg-white p-4 text-[15px] leading-relaxed text-slate-800">
                      <MathText text={guide.selfExplanationPrompt.modelAnswer} />
                    </div>
                  )}
                </section>
              )}

              {/* Checagem Ativa Imediata */}
              <section className="border-t border-slate-200 pt-6">
                <h3 className="text-base font-bold text-slate-900">
                  Checagem Ativa Imediata (Teste seu entendimento agora)
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-800">
                  <MathText text={guide.activeCheckPrompt} />
                </p>

                <div className="mt-3.5 space-y-2.5">
                  {guide.activeCheckOptions.map((opt, idx) => {
                    const selected = chosenCheck === idx;
                    const right = idx === guide.activeCheckCorrect;
                    let cls =
                      'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50';
                    if (isCheckAnswered) {
                      if (right) cls = 'border-emerald-500 bg-emerald-50 text-emerald-950';
                      else if (selected) cls = 'border-red-400 bg-red-50 text-red-950';
                    }
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setCheckSelections((prev) => ({
                            ...prev,
                            [guide.topicId]: idx,
                          }));
                          if (idx === guide.activeCheckCorrect) {
                            onCompleteGuideCheck(guide.topicId);
                          }
                        }}
                        className={`flex w-full min-h-[46px] items-center justify-between gap-3 rounded-lg border px-4 py-3 text-left text-[15px] transition-colors ${cls}`}
                      >
                        <span>
                          <MathText text={opt} />
                        </span>
                        {isCheckAnswered && right && (
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {isCheckAnswered && (
                  <p
                    className={`mt-3 text-[15px] font-medium ${
                      isCheckCorrect ? 'text-emerald-800' : 'text-red-800'
                    }`}
                  >
                    {isCheckCorrect ? 'Correto! ' : 'Quase! '}
                    <MathText text={guide.activeCheckWhy} />
                  </p>
                )}
              </section>

              {/* Materiais Extras (Artigos + YouTube) e Bibliografia */}
              {(articles.length > 0 || videos.length > 0 || (guide.bookReferences?.length ?? 0) > 0) && (
                <section className="space-y-5 border-t border-slate-200 pt-6">
                  {(articles.length > 0 || videos.length > 0) && (
                    <div className="space-y-3">
                      <h3 className="text-base font-bold text-slate-900">
                        Materiais Complementares e Videoaulas Recomendadas
                      </h3>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {[...articles, ...videos].map((link, lIdx) => (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-[#1D4ED8] hover:bg-white"
                          >
                            <div className="flex items-start gap-3">
                              {link.kind === 'video' ? (
                                <PlayCircle
                                  className="mt-0.5 h-5 w-5 shrink-0 text-red-700"
                                  aria-hidden="true"
                                />
                              ) : (
                                <BookOpen
                                  className="mt-0.5 h-5 w-5 shrink-0 text-[#1D4ED8]"
                                  aria-hidden="true"
                                />
                              )}
                              <div>
                                <div className="text-sm font-semibold leading-snug text-slate-900">
                                  {link.title}
                                </div>
                                <div className="mt-1 text-xs text-slate-500">
                                  {link.kind === 'video' ? 'Videoaula' : 'Artigo didático'} ·{' '}
                                  {link.source}
                                </div>
                              </div>
                            </div>
                            <ExternalLink
                              className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                              aria-hidden="true"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {guide.bookReferences && guide.bookReferences.length > 0 && (
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                        <BookMarked className="h-4 w-4" aria-hidden="true" />
                        <span>Obras e Referências Bibliográficas</span>
                      </div>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        {guide.bookReferences.map((ref, rIdx) => (
                          <li key={rIdx}>• {ref}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              )}
            </article>
          );
        })()}
      </div>
    </div>
  );
};
