import React, { useEffect, useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Flag,
  Lightbulb,
  Play,
  RotateCcw,
  ShieldCheck,
  XCircle,
} from 'lucide-react';
import { MathText } from './MathText';
import {
  OFFICIAL_SIMULADO_DURATION_SEC,
  TOPIC_MAP,
  evaluateSimulado,
  generateSimuladoQuestions,
  getPortoDigitalReadinessBand,
  type Question,
  type SimuladoResult,
  type StudyProgress,
} from './studyEngine';
import { VisualStimulus } from './VisualStimuli';

interface SimuladoViewProps {
  bank: Question[];
  progress: StudyProgress;
  autoStartSignal: number;
  onCompleteSimulado: (result: SimuladoResult, questions: Question[]) => void;
  onNavigateTab: (
    tab: 'questoes' | 'revisoes',
    filterTopic?: string,
    mode?: 'interleaved' | 'topic' | 'errors'
  ) => void;
}

type SimuladoStage = 'intro' | 'running' | 'result';

const LETTERS = ['A', 'B', 'C', 'D', 'E'] as const;

function formatClock(totalSeconds: number): string {
  const safe = Math.max(0, totalSeconds);
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export const SimuladoView: React.FC<SimuladoViewProps> = ({
  bank,
  progress,
  autoStartSignal,
  onCompleteSimulado,
  onNavigateTab,
}) => {
  const [stage, setStage] = useState<SimuladoStage>('intro');
  const [prioritizeWeak, setPrioritizeWeak] = useState<boolean>(false);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedMap, setSelectedMap] = useState<Record<string, number | null>>({});
  const [flaggedIds, setFlaggedIds] = useState<Set<string>>(new Set());
  const [secondsLeft, setSecondsLeft] = useState<number>(OFFICIAL_SIMULADO_DURATION_SEC);
  const [confirmFinishOpen, setConfirmFinishOpen] = useState<boolean>(false);
  const [lastResult, setLastResult] = useState<SimuladoResult | null>(
    progress.simulados[0] ?? null
  );
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong'>('all');

  const startExam = (weakMode: boolean) => {
    const picked = generateSimuladoQuestions(bank, progress, { prioritizeWeak: weakMode });
    setExamQuestions(picked);
    setSelectedMap({});
    setFlaggedIds(new Set());
    setCurrentIndex(0);
    setSecondsLeft(OFFICIAL_SIMULADO_DURATION_SEC);
    setConfirmFinishOpen(false);
    setStage('running');
  };

  useEffect(() => {
    if (autoStartSignal > 0 && stage !== 'running') {
      startExam(prioritizeWeak);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStartSignal]);

  const finishExam = () => {
    const durationUsed = OFFICIAL_SIMULADO_DURATION_SEC - secondsLeft;
    const result = evaluateSimulado(
      examQuestions,
      selectedMap,
      flaggedIds,
      Math.max(1, durationUsed)
    );
    setLastResult(result);
    setConfirmFinishOpen(false);
    setStage('result');
    onCompleteSimulado(result, examQuestions);
  };

  useEffect(() => {
    if (stage !== 'running') return;
    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [stage]);

  useEffect(() => {
    if (stage === 'running' && secondsLeft === 0 && examQuestions.length > 0) {
      finishExam();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft, stage]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [stage]);

  if (stage === 'intro') {
    const latest = progress.simulados[0];
    return (
      <div className="space-y-8">
        <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-medium text-slate-500">
                Edital ETE PE 2027.1 · Itens 4.1, 5.1 e 6.3 · Formato AVA Oficial
              </p>
              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl [text-wrap:balance]">
                Simulado Cronometrado ETE Porto Digital
              </h1>
              <p className="text-[15px] leading-relaxed text-slate-600">
                Reproduz exatamente a estrutura da prova eletrônica objetiva da Secretaria de
                Educação de Pernambuco: 20 questões inéditas e adaptadas do banco real (10 de Língua
                Portuguesa e 10 de Matemática), com 5 alternativas (A–E) e limite automático de 60
                minutos.
              </p>
            </div>

            <div className="shrink-0 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:min-w-[260px]">
              <div className="text-xs font-medium text-slate-500">Regras de Eliminação (Item 5.1)</div>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                <li>• Pontuação total mínima: 20% (4 de 20 pts)</li>
                <li>• Zerar Língua Portuguesa ou Matemática elimina</li>
                <li>• Desempate nº 1: maior nota em Português</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 sm:grid-cols-4">
            <div>
              <div className="text-xs text-slate-500">Questões na prova</div>
              <div className="font-mono-num mt-1 text-xl font-semibold text-slate-900">20</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Português + Matemática</div>
              <div className="font-mono-num mt-1 text-xl font-semibold text-slate-900">10 + 10</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Duração máxima</div>
              <div className="font-mono-num mt-1 text-xl font-semibold text-slate-900">60 min</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Ritmo ideal por questão</div>
              <div className="font-mono-num mt-1 text-xl font-semibold text-slate-900">3,0 min</div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={prioritizeWeak}
                onChange={(e) => setPrioritizeWeak(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-[#1D4ED8] focus:ring-[#1D4ED8]"
              />
              <span>Priorizar questões do Caderno de Erros e inéditas</span>
            </label>

            <button
              type="button"
              onClick={() => startExam(prioritizeWeak)}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#1D4ED8] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800 whitespace-nowrap shrink-0"
            >
              <Play className="h-4 w-4" aria-hidden="true" />
              <span>Começar Prova Cronometrada</span>
            </button>
          </div>
        </section>

        {latest && (
          <section className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">Último simulado registrado</p>
                <h2 className="mt-1 text-lg font-semibold text-slate-900">
                  Resultado: <span className="font-mono-num">{latest.totalScore}/20 pontos</span>{' '}
                  (LP: <span className="font-mono-num">{latest.lpScore}/10</span> · Mat:{' '}
                  <span className="font-mono-num">{latest.matScore}/10</span>)
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  {latest.eliminated
                    ? `Status no Edital: Eliminado (${latest.eliminationReasons[0]})`
                    : 'Status no Edital: Aprovado / Classificável'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const mapBack = new Map(bank.map((q) => [q.id, q]));
                  const reconstructed = latest.answers
                    .map((a) => mapBack.get(a.questionId))
                    .filter((q): q is Question => Boolean(q));
                  if (reconstructed.length > 0) {
                    setExamQuestions(reconstructed);
                    setLastResult(latest);
                    setStage('result');
                  }
                }}
                className="inline-flex min-h-[40px] items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 whitespace-nowrap shrink-0"
              >
                Revisar último gabarito
              </button>
            </div>
          </section>
        )}
      </div>
    );
  }

  if (stage === 'running') {
    const q = examQuestions[currentIndex];
    const selectedOption = selectedMap[q.id] ?? null;
    const isFlagged = flaggedIds.has(q.id);
    const answeredCount = examQuestions.filter((item) => selectedMap[item.id] != null).length;
    const isLowTime = secondsLeft <= 300;
    const topicMeta = TOPIC_MAP[q.topicId];

    return (
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] lg:items-start">
        {/* Caderno da Questão (estilo AVA/Moodle ETE) */}
        <article className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div className="text-xs font-medium text-slate-500">
              Questão <span className="font-mono-num font-semibold text-slate-900">{currentIndex + 1}</span> de{' '}
              <span className="font-mono-num">{examQuestions.length}</span>
              <span aria-hidden="true"> · </span>
              <span>{q.discipline === 'LP' ? 'Língua Portuguesa' : 'Matemática'}</span>
              <span aria-hidden="true"> · </span>
              <span>{topicMeta.shortName}</span>
            </div>

            <button
              type="button"
              onClick={() => {
                setFlaggedIds((prev) => {
                  const next = new Set(prev);
                  if (next.has(q.id)) next.delete(q.id);
                  else next.add(q.id);
                  return next;
                });
              }}
              aria-pressed={isFlagged}
              className={`inline-flex min-h-[36px] items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                isFlagged
                  ? 'border-amber-300 bg-amber-50 text-amber-800'
                  : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Flag className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{isFlagged ? 'Marcada para revisão' : 'Marcar questão'}</span>
            </button>
          </div>

          <div className="mt-6 space-y-6">
            {q.passage && (
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6">
                {q.passageTitle && (
                  <h2 className="mb-2.5 text-[15px] font-semibold text-slate-900">
                    <MathText text={q.passageTitle} />
                  </h2>
                )}
                <div className="font-serif-reading whitespace-pre-line text-base sm:text-[17px] leading-[1.75] text-slate-900">
                  <MathText text={q.passage} />
                </div>
              </div>
            )}

            {q.stimulusId && <VisualStimulus id={q.stimulusId} />}

            {q.statements && (
              <div className="space-y-2.5 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-5 text-[15px] leading-relaxed text-slate-800">
                {q.statements.map((st, idx) => (
                  <p key={idx}>
                    <MathText text={st} />
                  </p>
                ))}
              </div>
            )}

            <p className="text-base sm:text-[18px] font-semibold leading-relaxed text-slate-900 whitespace-pre-line">
              <MathText text={q.prompt} />
            </p>

            <div className="space-y-3" role="radiogroup" aria-label={`Alternativas da questão ${currentIndex + 1}`}>
              <p className="text-xs font-medium text-slate-500">Escolha uma alternativa:</p>
              {q.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() =>
                      setSelectedMap((prev) => ({
                        ...prev,
                        [q.id]: idx,
                      }))
                    }
                    className={`flex w-full min-h-[52px] items-start gap-3.5 rounded-lg border p-4 text-left text-[15px] leading-relaxed transition-colors ${
                      isSelected
                        ? 'border-[#1D4ED8] bg-blue-50/70 text-slate-900'
                        : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`font-mono-num mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border text-[13px] font-semibold ${
                        isSelected
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
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40 whitespace-nowrap shrink-0"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              <span>Anterior</span>
            </button>

            <div className="flex items-center gap-3">
              {selectedOption !== null && (
                <button
                  type="button"
                  onClick={() =>
                    setSelectedMap((prev) => ({
                      ...prev,
                      [q.id]: null,
                    }))
                  }
                  className="text-xs font-medium text-slate-500 underline hover:text-slate-800 whitespace-nowrap shrink-0"
                >
                  Limpar marcação
                </button>
              )}

              {currentIndex < examQuestions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentIndex((i) => Math.min(examQuestions.length - 1, i + 1))}
                  className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg bg-[#1D4ED8] px-5 py-2 text-sm font-semibold text-white hover:bg-blue-800 whitespace-nowrap shrink-0"
                >
                  <span>Próxima página</span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmFinishOpen(true)}
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-emerald-700 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-800 whitespace-nowrap shrink-0"
                >
                  <span>Enviar prova agora</span>
                </button>
              )}
            </div>
          </div>
        </article>

        {/* Navegação do Questionário (Moodle / Edital Timer) */}
        <aside className="rounded-xl border border-slate-200 bg-white p-5 lg:sticky lg:top-20">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <div className="text-xs font-medium text-slate-500">Tempo restante</div>
              <div
                className={`font-mono-num mt-0.5 flex items-center gap-1.5 text-2xl font-bold ${
                  isLowTime ? 'text-red-700' : 'text-slate-900'
                }`}
                aria-live="polite"
              >
                <Clock className="h-5 w-5" aria-hidden="true" />
                <span>{formatClock(secondsLeft)}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-500">Salvas</div>
              <div className="font-mono-num text-base font-semibold text-slate-900">
                {answeredCount}/20
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <div className="mb-2 text-xs font-semibold text-slate-600">
                Língua Portuguesa (1–10)
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                {examQuestions.slice(0, 10).map((item, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAnswered = selectedMap[item.id] != null;
                  const flagged = flaggedIds.has(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Ir para questão ${idx + 1}${isAnswered ? ', respondida' : ''}${
                        flagged ? ', marcada para revisão' : ''
                      }`}
                      className={`font-mono-num relative h-9 rounded-md border text-xs font-semibold transition-colors ${
                        isCurrent
                          ? 'border-[#1D4ED8] bg-[#1D4ED8] text-white'
                          : isAnswered
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {idx + 1}
                      {flagged && (
                        <Flag
                          className={`absolute right-1 top-1 h-2.5 w-2.5 ${
                            isCurrent ? 'text-amber-200' : 'text-amber-600'
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-slate-600">Matemática (11–20)</div>
              <div className="grid grid-cols-5 gap-1.5">
                {examQuestions.slice(10, 20).map((item, offset) => {
                  const idx = offset + 10;
                  const isCurrent = idx === currentIndex;
                  const isAnswered = selectedMap[item.id] != null;
                  const flagged = flaggedIds.has(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Ir para questão ${idx + 1}${isAnswered ? ', respondida' : ''}${
                        flagged ? ', marcada para revisão' : ''
                      }`}
                      className={`font-mono-num relative h-9 rounded-md border text-xs font-semibold transition-colors ${
                        isCurrent
                          ? 'border-[#1D4ED8] bg-[#1D4ED8] text-white'
                          : isAnswered
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {idx + 1}
                      {flagged && (
                        <Flag
                          className={`absolute right-1 top-1 h-2.5 w-2.5 ${
                            isCurrent ? 'text-amber-200' : 'text-amber-600'
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-200 pt-4">
            <button
              type="button"
              onClick={() => setConfirmFinishOpen(true)}
              className="w-full min-h-[42px] rounded-lg border border-slate-300 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 whitespace-nowrap"
            >
              Finalizar e entregar prova
            </button>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Pelo Edital 4.1.b, ao fim dos 60 minutos a prova é encerrada e corrigida automaticamente.
            </p>
          </div>
        </aside>

        {/* Modal nativo acessível de confirmação de envio (evita window.confirm) */}
        {confirmFinishOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="finish-dialog-title"
          >
            <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-xl">
              <h2 id="finish-dialog-title" className="text-lg font-bold text-slate-900">
                Encerrar e corrigir simulado?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Você marcou <span className="font-mono-num font-semibold">{answeredCount}</span> de{' '}
                <span className="font-mono-num font-semibold">20</span> questões.
                {answeredCount < 20 &&
                  ' Questões deixadas em branco serão contabilizadas como erro e irão para seu Caderno de Erros.'}
              </p>
              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setConfirmFinishOpen(false)}
                  className="min-h-[40px] rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Voltar à prova
                </button>
                <button
                  type="button"
                  onClick={finishExam}
                  className="min-h-[40px] rounded-lg bg-[#1D4ED8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
                >
                  Confirmar envio
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Stage: result
  if (!lastResult) return null;
  const band = getPortoDigitalReadinessBand(lastResult);
  const questionById = new Map(bank.map((q) => [q.id, q]));
  const visibleAnswers = lastResult.answers.filter((a) =>
    reviewFilter === 'wrong' ? !a.isCorrect : true
  );

  return (
    <div className="space-y-8">
      <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">
              Boletim Oficial Simulado · Edital ETE PE 2027.1
            </p>
            <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              Nota Geral: <span className="font-mono-num">{lastResult.totalScore} / 20</span> pontos
            </h1>
            <div
              className={`mt-2 inline-flex items-center gap-2 text-sm font-semibold ${
                lastResult.eliminated
                  ? 'text-red-700'
                  : band.tone === 'top'
                  ? 'text-emerald-700'
                  : 'text-amber-700'
              }`}
            >
              {lastResult.eliminated ? (
                <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              ) : (
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              )}
              <span>{band.label}</span>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{band.summary}</p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => startExam(true)}
              className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#1D4ED8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 whitespace-nowrap shrink-0"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              <span>Novo Simulado</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigateTab('questoes', undefined, 'errors')}
              className="inline-flex min-h-[42px] items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 whitespace-nowrap shrink-0"
            >
              Praticar Erros
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs text-slate-500">Língua Portuguesa (Desempate)</div>
            <div className="font-mono-num mt-1 text-2xl font-bold text-slate-900">
              {lastResult.lpScore} / 10
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs text-slate-500">Matemática</div>
            <div className="font-mono-num mt-1 text-2xl font-bold text-slate-900">
              {lastResult.matScore} / 10
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs text-slate-500">Tempo utilizado</div>
            <div className="font-mono-num mt-1 text-2xl font-bold text-slate-900">
              {formatClock(lastResult.durationSeconds)}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs text-slate-500">Situação no Edital (Item 5.1)</div>
            <div
              className={`mt-1 text-base font-bold ${
                lastResult.eliminated ? 'text-red-700' : 'text-emerald-700'
              }`}
            >
              {lastResult.eliminated ? 'Eliminado' : 'Aprovado'}
            </div>
          </div>
        </div>

        {lastResult.eliminationReasons.length > 0 && (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900">
            <div className="font-semibold">Motivo(s) de eliminação pelo Edital:</div>
            <ul className="mt-1 list-disc pl-5">
              {lastResult.eliminationReasons.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-slate-900">Gabarito Comentado</h2>
          <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setReviewFilter('all')}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap ${
                reviewFilter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas ({lastResult.answers.length})
            </button>
            <button
              type="button"
              onClick={() => setReviewFilter('wrong')}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap ${
                reviewFilter === 'wrong'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Somente erros ({lastResult.answers.filter((a) => !a.isCorrect).length})
            </button>
          </div>
        </div>

        {visibleAnswers.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-600">
            Nenhum erro registrado neste simulado. Excelente desempenho!
          </div>
        ) : (
          <div className="space-y-4">
            {visibleAnswers.map((ans) => {
              const q = questionById.get(ans.questionId);
              if (!q) return null;
              const num = lastResult.answers.findIndex((x) => x.questionId === ans.questionId) + 1;
              return (
                <div
                  key={ans.questionId}
                  className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-xs font-medium text-slate-500">
                      Questão <span className="font-mono-num">{num}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{q.discipline === 'LP' ? 'Língua Portuguesa' : 'Matemática'}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{TOPIC_MAP[q.topicId].shortName}</span>
                    </div>
                    <div
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                        ans.isCorrect ? 'text-emerald-700' : 'text-red-700'
                      }`}
                    >
                      {ans.isCorrect ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                          <span>Correta</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4" aria-hidden="true" />
                          <span>Incorreta</span>
                        </>
                      )}
                    </div>
                  </div>

                  <p className="mt-3 text-base font-semibold leading-relaxed text-slate-900 whitespace-pre-line">
                    <MathText text={q.prompt} />
                  </p>

                  {(q.passage || q.stimulusId || q.statements) && (
                    <details className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3.5">
                      <summary className="cursor-pointer text-xs font-semibold text-slate-700 hover:text-slate-900">
                        Ver texto / figura de apoio
                      </summary>
                      <div className="mt-3 space-y-3">
                        {q.passage && (
                          <div className="rounded-lg border border-slate-200 bg-white p-4">
                            {q.passageTitle && (
                              <h3 className="mb-1.5 text-sm font-semibold text-slate-900">
                                <MathText text={q.passageTitle} />
                              </h3>
                            )}
                            <p className="font-serif-reading whitespace-pre-line text-base leading-[1.7] text-slate-800">
                              <MathText text={q.passage} />
                            </p>
                          </div>
                        )}
                        {q.stimulusId && <VisualStimulus id={q.stimulusId} />}
                        {q.statements && (
                          <div className="space-y-1.5 rounded-lg border border-slate-200 bg-white p-3.5 text-sm leading-relaxed text-slate-800">
                            {q.statements.map((st, idx) => (
                              <p key={idx}>
                                <MathText text={st} />
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </details>
                  )}

                  <div className="mt-4 grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2">
                    <div
                      className={`rounded-lg border p-3.5 ${
                        ans.isCorrect
                          ? 'border-emerald-200 bg-emerald-50/50'
                          : 'border-red-200 bg-red-50/50'
                      }`}
                    >
                      <span className="text-xs text-slate-500">Sua resposta: </span>
                      <div className="mt-0.5 font-semibold text-slate-900">
                        {ans.selectedIndex !== null ? (
                          <>
                            {LETTERS[ans.selectedIndex]}){' '}
                            <MathText text={q.options[ans.selectedIndex]} />
                          </>
                        ) : (
                          'Deixada em branco'
                        )}
                      </div>
                    </div>
                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3.5">
                      <span className="text-xs text-emerald-800">Gabarito oficial: </span>
                      <div className="mt-0.5 font-semibold text-emerald-950">
                        {LETTERS[q.correctIndex]}) <MathText text={q.options[q.correctIndex]} />
                      </div>
                    </div>
                  </div>

                  {!ans.isCorrect && (
                    <div className="mt-3 rounded-lg border border-red-200 bg-red-50/50 p-4">
                      <h3 className="text-[13px] font-bold text-red-800">
                        {ans.selectedIndex !== null
                          ? `Por que a alternativa marcada (${LETTERS[ans.selectedIndex]}) está incorreta`
                          : 'Por que deixar em branco prejudica sua nota'}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-slate-800">
                        {ans.selectedIndex !== null ? (
                          <MathText
                            text={q.optionFeedback?.[ans.selectedIndex] ?? q.explanation}
                          />
                        ) : (
                          'Pelo Edital ETE PE, não há desconto por resposta errada. Antes do encerramento automático em 60 minutos, revise suas marcações e assinale a alternativa mais coerente.'
                        )}
                      </p>
                    </div>
                  )}

                  <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50/80 p-4 space-y-3">
                    <h3 className="text-sm font-bold text-slate-900">Resolução passo a passo</h3>
                    {q.stepByStep && q.stepByStep.length > 0 && (
                      <ol className="space-y-1.5">
                        {q.stepByStep.map((step, sIdx) => (
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
                    <p className="border-t border-slate-200/80 pt-2.5 text-[15px] leading-relaxed text-slate-700">
                      <strong className="font-semibold text-slate-900">Explicação completa:</strong>{' '}
                      <MathText text={q.explanation} />
                    </p>
                  </div>

                  <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50/80 p-4 text-sm text-amber-950">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
                      <div className="space-y-1.5">
                        <div>
                          <strong className="font-semibold">
                            O que levar na cabeça para não errar mais:
                          </strong>{' '}
                          <MathText text={q.memoryTakeaway ?? q.trapNote} />
                        </div>
                        <div className="text-[13px] leading-relaxed text-amber-900">
                          <strong className="font-semibold">Armadilha da ETE:</strong>{' '}
                          <MathText text={q.trapNote} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
