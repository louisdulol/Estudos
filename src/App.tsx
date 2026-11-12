import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertCircle,
  BookCheck,
  CalendarDays,
  CheckCircle2,
  Download,
  FileText,
  Layers,
  Play,
  RotateCcw,
  Target,
  Upload,
} from 'lucide-react';
import { FLASHCARDS, QUESTIONS, REVIEW_GUIDES } from './bank';
import { SimuladoView } from './SimuladoView';
import { FlashcardsView, QuestoesView, RevisoesView } from './StudyViews';
import {
  SCIENTIFIC_METHODS,
  buildCountdownPlan,
  computeCalibrationStats,
  computeTopicMastery,
  createInitialProgress,
  getDaysUntilExam,
  isCardDue,
  parseProgressImport,
  recordQuestionAttempt,
  scheduleSm2Card,
  serializeProgress,
  type Flashcard,
  type Question,
  type QuestionAttempt,
  type RecallRating,
  type SimuladoResult,
  type StudyProgress,
  type TopicId,
} from './studyEngine';

type AppTab = 'painel' | 'simulado' | 'questoes' | 'flashcards' | 'revisoes';

const STORAGE_KEY = 'ete_porto_digital_progress_v1';

function loadSavedProgress(): StudyProgress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialProgress();
    return parseProgressImport(raw);
  } catch {
    return createInitialProgress();
  }
}

export default function App() {
  const [progress, setProgress] = useState<StudyProgress>(() => loadSavedProgress());
  const [activeTab, setActiveTab] = useState<AppTab>(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab');
    if (
      tabParam === 'simulado' ||
      tabParam === 'questoes' ||
      tabParam === 'flashcards' ||
      tabParam === 'revisoes'
    ) {
      return tabParam;
    }
    return params.get('autostart') === '1' ? 'simulado' : 'painel';
  });
  const [simuladoAutoStartSignal, setSimuladoAutoStartSignal] = useState<number>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('autostart') === '1' ? 1 : 0;
  });
  const [questoesTopicFilter, setQuestoesTopicFilter] = useState<TopicId | 'ALL'>('ALL');
  const [questoesPracticeMode, setQuestoesPracticeMode] = useState<
    'interleaved' | 'topic' | 'errors'
  >('interleaved');
  const [backupMessage, setBackupMessage] = useState<{ type: 'ok' | 'err'; text: string } | null>(
    null
  );
  const [confirmResetOpen, setConfirmResetOpen] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, serializeProgress(progress));
    } catch {
      // Ignora erro caso armazenamento privado esteja cheio
    }
  }, [progress]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeTab]);

  const daysUntilExam = getDaysUntilExam(Date.now(), progress.examDateIso);
  const topicMastery = useMemo(() => computeTopicMastery(progress), [progress]);
  const calibration = useMemo(() => computeCalibrationStats(progress), [progress]);
  const countdownPlan = useMemo(() => buildCountdownPlan(), []);

  const allFlashcards = useMemo(
    () => [...progress.customFlashcards, ...FLASHCARDS],
    [progress.customFlashcards]
  );
  const dueFlashcardsCount = useMemo(() => {
    const now = Date.now();
    return allFlashcards.filter((c) => isCardDue(progress.sm2States[c.id], now)).length;
  }, [allFlashcards, progress.sm2States]);

  const bestSimulado = useMemo(() => {
    if (progress.simulados.length === 0) return null;
    return progress.simulados.reduce((best, curr) =>
      curr.totalScore > best.totalScore ? curr : best
    );
  }, [progress.simulados]);

  const handleCompleteSimulado = (result: SimuladoResult, examQuestions: Question[]) => {
    setProgress((prev) => {
      let next = {
        ...prev,
        simulados: [result, ...prev.simulados],
      };
      const questionMap = new Map(examQuestions.map((q) => [q.id, q]));
      for (const ans of result.answers) {
        const q = questionMap.get(ans.questionId);
        if (!q) continue;
        next = recordQuestionAttempt(next, {
          questionId: ans.questionId,
          topicId: ans.topicId,
          discipline: ans.discipline,
          selectedIndex: ans.selectedIndex ?? -1,
          correctIndex: ans.correctIndex,
          isCorrect: ans.isCorrect,
          confidence: ans.selectedIndex === null ? 'guess' : 'unsure',
          timestamp: result.completedAt,
          mode: 'simulado',
        });
      }
      return next;
    });
  };

  const handleRecordAttempt = (attempt: QuestionAttempt) => {
    setProgress((prev) => recordQuestionAttempt(prev, attempt));
  };

  const handleRateFlashcard = (cardId: string, rating: RecallRating) => {
    setProgress((prev) => {
      const updated = scheduleSm2Card(
        prev.sm2States[cardId],
        cardId,
        rating,
        Date.now(),
        prev.examDateIso
      );
      return {
        ...prev,
        sm2States: {
          ...prev.sm2States,
          [cardId]: updated,
        },
      };
    });
  };

  const handleAddCustomFlashcard = (card: Flashcard) => {
    setProgress((prev) => ({
      ...prev,
      customFlashcards: [card, ...prev.customFlashcards],
    }));
  };

  const handleCompleteGuideCheck = (topicId: TopicId) => {
    setProgress((prev) => {
      if (prev.completedGuideChecks.includes(topicId)) return prev;
      return {
        ...prev,
        completedGuideChecks: [...prev.completedGuideChecks, topicId],
      };
    });
  };

  const handleToggleDayDone = (dayNumber: number) => {
    setProgress((prev) => {
      const exists = prev.studyDaysCompleted.includes(dayNumber);
      return {
        ...prev,
        studyDaysCompleted: exists
          ? prev.studyDaysCompleted.filter((d) => d !== dayNumber)
          : [...prev.studyDaysCompleted, dayNumber],
      };
    });
  };

  const handleExportProgress = () => {
    const content = serializeProgress(progress);
    const blob = new Blob([content], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ete-porto-digital-progresso.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setBackupMessage({
      type: 'ok',
      text: 'Backup JSON baixado. Leve este arquivo para continuar seus estudos em outro computador.',
    });
  };

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = parseProgressImport(text);
      setProgress(parsed);
      setBackupMessage({
        type: 'ok',
        text: `Progresso restaurado (${parsed.attempts.length} questões e ${parsed.simulados.length} simulados).`,
      });
    } catch (err) {
      setBackupMessage({
        type: 'err',
        text: err instanceof Error ? err.message : 'Falha ao importar arquivo.',
      });
    } finally {
      e.target.value = '';
    }
  };

  const handleStartSimuladoCta = () => {
    setActiveTab('simulado');
    setSimuladoAutoStartSignal((n) => n + 1);
  };

  const lpTopics = topicMastery.filter((t) => t.discipline === 'LP');
  const matTopics = topicMastery.filter((t) => t.discipline === 'MAT');

  return (
    <div className="min-h-[100dvh] bg-[#F4F5F7] text-[#111827]">
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      {/* Top Bar: contrato estrito de 3 zonas separadas por gap-8 */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur md:sticky md:top-0 md:z-30">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-3.5 sm:px-6">
          {/* Zona 1: Wordmark em linha única */}
          <button
            type="button"
            onClick={() => setActiveTab('painel')}
            className="text-left text-lg font-bold text-slate-900 whitespace-nowrap shrink-0"
          >
            ETE Porto Digital
          </button>

          {/* Zona 2: 5 links concisos de navegação */}
          <nav
            aria-label="Navegação principal"
            className="order-3 flex w-full items-center justify-between gap-2 overflow-x-auto border-t border-slate-100 pt-2.5 text-[13px] font-medium text-slate-600 md:order-2 md:w-auto md:justify-start md:gap-5 md:border-t-0 md:pt-0 md:text-sm"
          >
            {(
              [
                { id: 'painel', label: 'Painel' },
                { id: 'simulado', label: 'Simulado' },
                { id: 'questoes', label: 'Questões' },
                { id: 'flashcards', label: 'Flashcards' },
                { id: 'revisoes', label: 'Revisões' },
              ] as const
            ).map((item) => {
              const active = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    if (item.id === 'questoes') {
                      setQuestoesTopicFilter('ALL');
                      setQuestoesPracticeMode('interleaved');
                    }
                    setActiveTab(item.id);
                  }}
                  aria-current={active ? 'page' : undefined}
                  className={`border-b-2 pb-1 transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'border-[#1D4ED8] font-semibold text-slate-900'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zona 3: 1 ação primária */}
          <div className="order-2 flex items-center shrink-0 md:order-3">
            <button
              type="button"
              onClick={handleStartSimuladoCta}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 whitespace-nowrap shrink-0"
            >
              <Play className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Iniciar Simulado</span>
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        {activeTab === 'painel' && (
          <div className="space-y-8">
            {/* Hero Briefing */}
            <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl space-y-3">
                  <p className="text-xs font-medium text-slate-500">
                    Edital ETE PE 2027.1 · Desenvolvimento de Sistemas (120 vagas) · Prova em 17/11/2026
                  </p>
                  <h1 className="text-2xl font-bold text-slate-900 sm:text-4xl [text-wrap:balance]">
                    Preparação Científica Reta Final — ETE Porto Digital
                  </h1>
                  <p className="text-[15px] leading-relaxed text-slate-600">
                    Simulados fiéis à banca e ao formato eletrônico de 20 questões em 60 minutos,
                    combinados com banco de{' '}
                    <span className="font-mono-num font-semibold text-slate-800">
                      {QUESTIONS.length}
                    </span>{' '}
                    questões inéditas e comentadas,{' '}
                    <span className="font-mono-num font-semibold text-slate-800">
                      {FLASHCARDS.length}
                    </span>{' '}
                    flashcards SM-2 e curso completo de{' '}
                    <span className="font-mono-num font-semibold text-slate-800">
                      {REVIEW_GUIDES.length}
                    </span>{' '}
                    módulos cobrindo 100% do Edital.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={handleStartSimuladoCta}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#1D4ED8] px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 whitespace-nowrap"
                  >
                    <Play className="h-4 w-4" aria-hidden="true" />
                    <span>Fazer Simulado Oficial</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('flashcards')}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 whitespace-nowrap"
                  >
                    <Layers className="h-4 w-4" aria-hidden="true" />
                    <span>Revisar Flashcards ({dueFlashcardsCount})</span>
                  </button>
                </div>
              </div>

              {/* 4-column KPI strip below hero */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 lg:grid-cols-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Contagem até 17/11</span>
                  </div>
                  <div className="mt-1 text-2xl font-bold text-slate-900">
                    <span className="font-mono-num">{daysUntilExam}</span>{' '}
                    <span>{daysUntilExam === 1 ? 'dia' : 'dias'}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Compressão espaçada ativa
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Target className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Melhor Simulado</span>
                  </div>
                  <div className="font-mono-num mt-1 text-2xl font-bold text-slate-900">
                    {bestSimulado ? `${bestSimulado.totalScore} / 20` : '— / 20'}
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {bestSimulado
                      ? `Desempate LP: ${bestSimulado.lpScore}/10`
                      : `${progress.simulados.length} ${
                          progress.simulados.length === 1 ? 'simulado feito' : 'simulados feitos'
                        }`}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <BookCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Acerto em Questões</span>
                  </div>
                  <div className="font-mono-num mt-1 text-2xl font-bold text-slate-900">
                    {calibration.totalAttempts > 0 ? `${calibration.overallAccuracy}%` : '—'}
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500">
                    <span className="font-mono-num">{calibration.totalAttempts}</span>{' '}
                    {calibration.totalAttempts === 1 ? 'resolvida' : 'resolvidas'} ·{' '}
                    <span className="font-mono-num">{QUESTIONS.length}</span> no banco
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Caderno de Erros</span>
                  </div>
                  <div className="font-mono-num mt-1 text-2xl font-bold text-slate-900">
                    {progress.errorBookIds.length}
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500">
                    <span className="font-mono-num">{calibration.highConfidenceErrors}</span>{' '}
                    {calibration.highConfidenceErrors === 1
                      ? 'ilusão de certeza'
                      : 'ilusões de certeza'}
                  </p>
                </div>
              </div>
            </section>

            {/* Base Científica Aplicada */}
            <section className="space-y-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  6 Métodos Científicos Aplicados ao Seu Estudo
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Estratégias com maior evidência empírica em psicologia cognitiva (Dunlosky et al.,
                  Roediger & Karpicke, Cepeda, Rohrer & Taylor, Sweller, Chi e Paivio) — zero leitura
                  passiva.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {SCIENTIFIC_METHODS.map((method) => (
                  <div
                    key={method.code}
                    className="rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <div className="text-xs font-medium text-[#1D4ED8]">
                      {method.code} · {method.citation}
                    </div>
                    <h3 className="mt-1.5 text-base font-bold text-slate-900 [text-wrap:balance]">
                      {method.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {method.howApplied}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cronograma Científico 7 Dias */}
            <section className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Roteiro Diário até 17/11/2026
                  </h2>
                  <p className="mt-0.5 text-sm text-slate-600">
                    Marque cada dia concluído para manter o ritmo espaçado sem sobrecarga na véspera.
                  </p>
                </div>
                <div className="font-mono-num text-xs font-semibold text-slate-700">
                  {progress.studyDaysCompleted.length} / {countdownPlan.length} dias concluídos
                </div>
              </div>

              <div className="mt-4 divide-y divide-slate-100">
                {countdownPlan.map((day) => {
                  const done = progress.studyDaysCompleted.includes(day.dayNumber);
                  return (
                    <div
                      key={day.dayNumber}
                      className="flex flex-col gap-3 py-4 sm:flex-row sm:items-start sm:justify-between"
                    >
                      <div className="space-y-1">
                        <div className="text-xs font-medium text-slate-500">
                          <span className="font-mono-num font-semibold text-slate-800">
                            {day.dateLabel}
                          </span>
                          <span aria-hidden="true"> · </span>
                          <span>{day.methodTag}</span>
                        </div>
                        <h3 className="text-sm font-bold text-slate-900">{day.focusTitle}</h3>
                        <ul className="space-y-1 text-xs leading-relaxed text-slate-600">
                          {day.tasks.map((t, i) => (
                            <li key={i}>• {t}</li>
                          ))}
                        </ul>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleToggleDayDone(day.dayNumber)}
                        aria-pressed={done}
                        className={`inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                          done
                            ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                            : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        <span>{done ? 'Dia concluído' : 'Marcar concluído'}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Mapa de Domínio por Tópico do Edital */}
            <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {[
                { title: 'Língua Portuguesa · Edital 12.1 (Desempate nº 1)', items: lpTopics },
                { title: 'Matemática · Edital 12.2 (Zerar = Eliminação)', items: matTopics },
              ].map((group) => (
                <div
                  key={group.title}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <h2 className="text-base font-bold text-slate-900">{group.title}</h2>
                  <div className="mt-4 divide-y divide-slate-100">
                    {group.items.map((stat) => (
                      <div
                        key={stat.topicId}
                        className="flex items-center justify-between gap-3 py-2.5"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setQuestoesTopicFilter(stat.topicId);
                            setQuestoesPracticeMode('topic');
                            setActiveTab('questoes');
                          }}
                          className="truncate text-left text-xs font-medium text-slate-700 hover:text-[#1D4ED8] hover:underline"
                        >
                          {stat.shortName}
                        </button>
                        <div className="font-mono-num shrink-0 text-xs text-slate-600">
                          {stat.attempts > 0 ? (
                            <span>
                              <strong
                                className={
                                  stat.accuracy >= 70
                                    ? 'text-emerald-700'
                                    : stat.accuracy >= 50
                                    ? 'text-amber-700'
                                    : 'text-red-700'
                                }
                              >
                                {stat.accuracy}%
                              </strong>{' '}
                              ({stat.correct}/{stat.attempts})
                            </span>
                          ) : (
                            <span className="text-slate-400">Não praticado</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Portabilidade GitHub / Computador da Biblioteca */}
            <section className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-base font-bold text-slate-900">
                    Sincronização Portátil (Casa ↔ Biblioteca / GitHub)
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    Seu progresso fica salvo automaticamente neste navegador. Ao trocar de
                    computador na biblioteca, exporte o arquivo JSON e importe no outro aparelho
                    para levar seus flashcards espaçados, simulados e Caderno de Erros.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={handleExportProgress}
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 whitespace-nowrap"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    <span>Exportar Progresso</span>
                  </button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="application/json,.json"
                    onChange={handleImportFile}
                    className="hidden"
                    aria-label="Selecionar arquivo JSON de progresso"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 whitespace-nowrap"
                  >
                    <Upload className="h-4 w-4" aria-hidden="true" />
                    <span>Importar JSON</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConfirmResetOpen(true)}
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-red-200 bg-white px-3.5 py-2 text-xs font-semibold text-red-700 hover:bg-red-50 whitespace-nowrap"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Zerar dados</span>
                  </button>
                </div>
              </div>

              {backupMessage && (
                <p
                  className={`mt-3 text-xs font-medium ${
                    backupMessage.type === 'ok' ? 'text-emerald-700' : 'text-red-700'
                  }`}
                >
                  {backupMessage.text}
                </p>
              )}

              <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500">
                <FileText className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                <span>
                  Lembrete de dia de prova (Edital 4.1.c/d): leve documento oficial físico com foto e
                  assinatura ou documento digital apresentado diretamente no aplicativo oficial
                  (prints não são aceitos).
                </span>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'simulado' && (
          <SimuladoView
            bank={QUESTIONS}
            progress={progress}
            autoStartSignal={simuladoAutoStartSignal}
            onCompleteSimulado={handleCompleteSimulado}
            onNavigateTab={(tab, filterTopic, mode) => {
              if (tab === 'questoes') {
                setQuestoesTopicFilter((filterTopic as TopicId) || 'ALL');
                setQuestoesPracticeMode(mode ?? (filterTopic ? 'topic' : 'interleaved'));
              }
              setActiveTab(tab);
            }}
          />
        )}

        {activeTab === 'questoes' && (
          <QuestoesView
            key={`${questoesTopicFilter}-${questoesPracticeMode}`}
            bank={QUESTIONS}
            progress={progress}
            initialTopicFilter={questoesTopicFilter}
            initialMode={questoesPracticeMode}
            onRecordAttempt={handleRecordAttempt}
          />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardsView
            baseCards={FLASHCARDS}
            progress={progress}
            onRateCard={handleRateFlashcard}
            onAddCustomCard={handleAddCustomFlashcard}
          />
        )}

        {activeTab === 'revisoes' && (
          <RevisoesView
            guides={REVIEW_GUIDES}
            progress={progress}
            onCompleteGuideCheck={handleCompleteGuideCheck}
            onGoPracticeTopic={(topicId) => {
              setQuestoesTopicFilter(topicId);
              setQuestoesPracticeMode('topic');
              setActiveTab('questoes');
            }}
          />
        )}
      </main>

      {confirmResetOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reset-dialog-title"
        >
          <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-xl">
            <h2 id="reset-dialog-title" className="text-lg font-bold text-slate-900">
              Zerar todo o progresso salvo?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Esta ação apaga histórico de simulados, intervalos de flashcards SM-2 e Caderno de
              Erros deste navegador.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setConfirmResetOpen(false)}
                className="min-h-[40px] rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  const clean = createInitialProgress();
                  setProgress(clean);
                  setConfirmResetOpen(false);
                  setBackupMessage({ type: 'ok', text: 'Progresso local reiniciado.' });
                }}
                className="min-h-[40px] rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800"
              >
                Apagar tudo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
