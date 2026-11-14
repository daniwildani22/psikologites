import React, { useState, useEffect, useCallback } from 'react';
import { generateRandomMbtiSession } from '../data/mbtiQuestions';
import { Dimension, DimensionLetter, MbtiResultData, MbtiTypeCode, Question, StudentProfile } from '../types/psychology';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  User,
  ListOrdered,
  Flame,
  Brain,
  Scale,
  CalendarCheck,
  Zap,
  LayoutList,
  Maximize2,
  Lightbulb,
  Shuffle,
  AlertCircle
} from 'lucide-react';

interface MbtiTestProps {
  studentProfile: StudentProfile;
  onOpenProfileModal: () => void;
  onCompleteTest: (result: MbtiResultData) => void;
}

const STORAGE_KEY = 'psikologi_empathy_mbti_answers_v1';
const QUESTIONS_PER_PAGE = 5;

// Dimension metadata for educational guidance
const DIMENSION_STAGE_INFO: Record<Dimension, {
  stageNumber: number;
  stageName: string;
  focusTitle: string;
  educationalNote: string;
  icon: typeof Flame;
  accentBg: string;
  accentBorder: string;
  accentText: string;
}> = {
  EI: {
    stageNumber: 1,
    stageName: 'Dimensi 1 · Energi',
    focusTitle: 'Orientasi Energi Sosial (Extraversion vs Introversion)',
    educationalNote: 'Mengamati dari mana energimu terisi ulang — saat berinteraksi aktif bersama banyak orang atau melalui ketenangan refleksi mandiri.',
    icon: Flame,
    accentBg: 'bg-amber-50',
    accentBorder: 'border-amber-200',
    accentText: 'text-amber-800'
  },
  SN: {
    stageNumber: 2,
    stageName: 'Dimensi 2 · Informasi',
    focusTitle: 'Pengolahan Informasi & Daya Nalar (Sensing vs Intuition)',
    educationalNote: 'Mengeksplorasi caramu mencerna informasi baru — berbasis fakta konkret terbukti atau imajinasi konseptual masa depan.',
    icon: Brain,
    accentBg: 'bg-indigo-50',
    accentBorder: 'border-indigo-200',
    accentText: 'text-indigo-800'
  },
  TF: {
    stageNumber: 3,
    stageName: 'Dimensi 3 · Keputusan',
    focusTitle: 'Pengambilan Keputusan (Thinking vs Feeling)',
    educationalNote: 'Menganalisis caramu menyelesaikan masalah — mengutamakan logika analitis objektif atau pertimbangan empati kemanusiaan.',
    icon: Scale,
    accentBg: 'bg-teal-50',
    accentBorder: 'border-teal-200',
    accentText: 'text-teal-800'
  },
  JP: {
    stageNumber: 4,
    stageName: 'Dimensi 4 · Gaya Kerja',
    focusTitle: 'Gaya Hidup & Pola Kerja (Judging vs Perceiving)',
    educationalNote: 'Mengenali ritme aktivitasmu — menyukai jadwal sistematis teratur atau fleksibel adaptif terhadap perubahan.',
    icon: CalendarCheck,
    accentBg: 'bg-purple-50',
    accentBorder: 'border-purple-200',
    accentText: 'text-purple-800'
  }
};

// Rich 5-point Likert spectrum options for general audience
const ENHANCED_LIKERT_OPTIONS = [
  {
    value: 1,
    keyBadge: '1',
    mainLabel: 'Sangat Tidak Sesuai',
    subtitle: 'Bukan diri saya sama sekali',
    visualTag: 'Berlawanan',
    borderColor: 'border-rose-200 hover:border-rose-400',
    activeStyle: 'bg-rose-50/90 border-rose-500 text-rose-950 shadow-sm ring-2 ring-rose-400/30',
    circleActive: 'bg-rose-600 border-rose-600',
    badgeColor: 'text-rose-700 bg-rose-100/80',
    spectrumBarColor: 'bg-rose-500'
  },
  {
    value: 2,
    keyBadge: '2',
    mainLabel: 'Tidak Sesuai',
    subtitle: 'Jarang / kurang pas',
    visualTag: 'Cenderung Tidak',
    borderColor: 'border-amber-200 hover:border-amber-400',
    activeStyle: 'bg-amber-50/90 border-amber-500 text-amber-950 shadow-sm ring-2 ring-amber-400/30',
    circleActive: 'bg-amber-600 border-amber-600',
    badgeColor: 'text-amber-700 bg-amber-100/80',
    spectrumBarColor: 'bg-amber-400'
  },
  {
    value: 3,
    keyBadge: '3',
    mainLabel: 'Netral / Ragu',
    subtitle: 'Tergantung situasi & kondisi',
    visualTag: 'Tengah / Fleksibel',
    borderColor: 'border-slate-200 hover:border-slate-400',
    activeStyle: 'bg-slate-100 border-slate-500 text-slate-900 shadow-sm ring-2 ring-slate-400/30',
    circleActive: 'bg-slate-600 border-slate-600',
    badgeColor: 'text-slate-600 bg-slate-200/80',
    spectrumBarColor: 'bg-slate-400'
  },
  {
    value: 4,
    keyBadge: '4',
    mainLabel: 'Sesuai',
    subtitle: 'Sering / cukup cocok',
    visualTag: 'Cenderung Ya',
    borderColor: 'border-teal-200 hover:border-teal-400',
    activeStyle: 'bg-teal-50/90 border-teal-500 text-teal-950 shadow-sm ring-2 ring-teal-400/30',
    circleActive: 'bg-teal-600 border-teal-600',
    badgeColor: 'text-teal-700 bg-teal-100/80',
    spectrumBarColor: 'bg-teal-500'
  },
  {
    value: 5,
    keyBadge: '5',
    mainLabel: 'Sangat Sesuai',
    subtitle: 'Sangat mencerminkan saya!',
    visualTag: 'Paling Selaras',
    borderColor: 'border-emerald-200 hover:border-emerald-500',
    activeStyle: 'bg-emerald-50/90 border-emerald-600 text-emerald-950 shadow-sm ring-2 ring-emerald-500/30',
    circleActive: 'bg-emerald-600 border-emerald-600',
    badgeColor: 'text-emerald-800 bg-emerald-100/80',
    spectrumBarColor: 'bg-emerald-600'
  }
];

export const MbtiTest: React.FC<MbtiTestProps> = ({
  studentProfile,
  onOpenProfileModal,
  onCompleteTest
}) => {
  // Generate a fresh, balanced, randomized 40-question set from the 80-question bank on every run
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>(() => generateRandomMbtiSession());
  const [answers, setAnswers] = useState<Record<number, number>>({});

  // View Mode: 'focus' (Single Question Immersive) or 'grid' (5 Questions per Page)
  const [viewMode, setViewMode] = useState<'focus' | 'grid'>('focus');
  const [currentFocusIndex, setCurrentFocusIndex] = useState(0); // 0 to 39
  const [currentPage, setCurrentPage] = useState(0); // for grid mode (0 to 7)
  const [showQuestionGrid, setShowQuestionGrid] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [recentAnswerFeedback, setRecentAnswerFeedback] = useState<number | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const totalQuestions = sessionQuestions.length;
  const totalPages = Math.ceil(totalQuestions / QUESTIONS_PER_PAGE);

  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  // Clear legacy saved answers on mount so each usage starts with a fresh randomized set
  useEffect(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const handleSelectOption = useCallback((questionId: number, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value
    }));
    setValidationError(null);

    setRecentAnswerFeedback(questionId);
    setTimeout(() => setRecentAnswerFeedback(null), 500);

    // Auto-advance in focus mode if enabled
    if (viewMode === 'focus' && autoAdvance) {
      if (currentFocusIndex < totalQuestions - 1) {
        setTimeout(() => {
          setCurrentFocusIndex((prev) => prev + 1);
        }, 300);
      }
    }
  }, [viewMode, autoAdvance, currentFocusIndex, totalQuestions]);

  // Keyboard Navigation: keys 1 to 5 to answer current question in focus mode!
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only process when not typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (['1', '2', '3', '4', '5'].includes(e.key)) {
        const val = parseInt(e.key, 10);
        if (viewMode === 'focus') {
          const currentQ = sessionQuestions[currentFocusIndex];
          if (currentQ) {
            handleSelectOption(currentQ.id, val);
          }
        }
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (viewMode === 'focus') {
          setCurrentFocusIndex((prev) => Math.min(totalQuestions - 1, prev + 1));
        }
      } else if (e.key === 'ArrowLeft') {
        if (viewMode === 'focus') {
          setCurrentFocusIndex((prev) => Math.max(0, prev - 1));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, currentFocusIndex, handleSelectOption, totalQuestions, sessionQuestions]);

  const handleClearAnswers = () => {
    setSessionQuestions(generateRandomMbtiSession());
    setAnswers({});
    setValidationError(null);
    setCurrentFocusIndex(0);
    setCurrentPage(0);
    setShowQuestionGrid(false);
  };

  const handleFinish = () => {
    if (answeredCount < totalQuestions) {
      const unansweredIdx = sessionQuestions.findIndex((q) => !answers[q.id]);
      if (unansweredIdx !== -1) {
        setCurrentFocusIndex(unansweredIdx);
        setCurrentPage(Math.floor(unansweredIdx / QUESTIONS_PER_PAGE));
        setShowQuestionGrid(true);
      }
      setValidationError(
        `Masih ada ${totalQuestions - answeredCount} butir soal yang belum dijawab. Mohon lengkapi semua soal untuk akurasi profil kepribadian & karier.`
      );
      return;
    }

    // Calculate MBTI scores across the active session's balanced questions
    const calcDimension = (
      dim: Dimension,
      firstLetter: DimensionLetter,
      secondLetter: DimensionLetter
    ) => {
      const dimQuestions = sessionQuestions.filter((q) => q.dimension === dim);
      let firstScore = 0;
      let secondScore = 0;

      dimQuestions.forEach((q) => {
        const val = answers[q.id] || 3;
        if (q.direction === '+') {
          firstScore += val - 1; // 1->0, 2->1, 3->2, 4->3, 5->4
          secondScore += 5 - val; // 1->4, 2->3, 3->2, 4->1, 5->0
        } else {
          secondScore += val - 1;
          firstScore += 5 - val;
        }
      });

      const total = firstScore + secondScore;
      const firstPercentage = total > 0 ? Math.round((firstScore / total) * 100) : 50;
      const secondPercentage = 100 - firstPercentage;
      const dominant = firstScore >= secondScore ? firstLetter : secondLetter;

      return {
        firstLetter,
        secondLetter,
        firstCount: firstScore,
        secondCount: secondScore,
        firstPercentage,
        secondPercentage,
        dominant
      };
    };

    const eiScore = calcDimension('EI', 'E', 'I');
    const snScore = calcDimension('SN', 'S', 'N');
    const tfScore = calcDimension('TF', 'T', 'F');
    const jpScore = calcDimension('JP', 'J', 'P');

    const mbtiCode = `${eiScore.dominant}${snScore.dominant}${tfScore.dominant}${jpScore.dominant}` as MbtiTypeCode;

    const resultData: MbtiResultData = {
      id: `mbti-${Date.now()}`,
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      student: studentProfile,
      type: mbtiCode,
      dimensionScores: {
        EI: eiScore,
        SN: snScore,
        TF: tfScore,
        JP: jpScore
      }
    };

    onCompleteTest(resultData);
  };

  // Focus mode question
  const currentQuestionInFocus = sessionQuestions[currentFocusIndex];
  const stageInfo = DIMENSION_STAGE_INFO[currentQuestionInFocus.dimension];
  const StageIcon = stageInfo.icon;

  // Grid mode questions
  const startIndex = currentPage * QUESTIONS_PER_PAGE;
  const currentQuestionsInGrid = sessionQuestions.slice(startIndex, startIndex + QUESTIONS_PER_PAGE);

  // Motivational milestone text (dimension-agnostic because questions are shuffled)
  let milestoneMessage = 'Jawablah dengan jujur sesuai kebiasaan aslimu sehari-hari!';
  if (answeredCount >= 35) {
    milestoneMessage = '🔥 Tinggal sedikit lagi! 5 soal menuju laporan kepribadian dan rekomendasi karier!';
  } else if (answeredCount >= 30) {
    milestoneMessage = '🚀 Keren! Tinggal 10 soal lagi menuju hasil lengkap!';
  } else if (answeredCount >= 20) {
    milestoneMessage = '✨ Luar biasa! Sudah separuh perjalanan (50%) terlewati!';
  } else if (answeredCount >= 10) {
    milestoneMessage = '🎉 Hebat! Seperempat (25%) asesmen sudah terjawab dengan baik!';
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Educational Header & Participant Status */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-1.5">
              <span>Asesmen MBTI PSIKOLOGI EMPATI</span>
              <span aria-hidden="true">·</span>
              <span>40 Soal Terarah</span>
              <span aria-hidden="true">·</span>
              <span>Soal Diacak Otomatis</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Pemetaan Kepribadian & Potensi Diri (MBTI)
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
              Pilihlah respon yang paling mencerminkan dirimu yang sebenarnya. Tidak ada jawaban salah; kejujuran jawabanmu menentukan ketepatan analisis kepribadian dan rekomendasi karier.
            </p>
          </div>

          <div className="shrink-0 bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
              <User className="w-4 h-4 text-teal-700" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-slate-900 leading-tight">
                {studentProfile.fullName || 'Peserta Umum'}
              </p>
              <p className="text-[11px] text-slate-500">
                {studentProfile.grade} · {studentProfile.schoolName || 'Indonesia'}
              </p>
              <button
                onClick={onOpenProfileModal}
                className="text-[11px] font-semibold text-teal-700 hover:underline cursor-pointer"
              >
                Ubah Profil
              </button>
            </div>
          </div>
        </div>

        {/* Motivational Milestone & Progress Bar */}
        <div className="mt-5 space-y-2.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-teal-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>{milestoneMessage}</span>
            </span>
            <div className="flex items-center gap-3 text-slate-600 font-medium">
              <span>
                <strong className="text-slate-900 font-bold tabular-nums">{answeredCount}</strong> / {totalQuestions} Soal
              </span>
              <span className="font-extrabold text-teal-800 tabular-nums bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100">
                {progressPercent}%
              </span>
            </div>
          </div>

          {/* Glowing Animated Progress Bar */}
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/80">
            <div
              className="h-full bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-500 rounded-full transition-all duration-300 relative"
              style={{ width: `${progressPercent}%` }}
            >
              {progressPercent > 5 && (
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/40 rounded-full animate-pulse" />
              )}
            </div>
          </div>
        </div>

        {/* View Mode Switcher & Quick Drawer Toggle */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Segmented View Mode */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setViewMode('focus')}
              className={`flex items-center gap-1.5 px-3 py-1.5 font-bold rounded-lg transition-all cursor-pointer ${
                viewMode === 'focus'
                  ? 'bg-white text-teal-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Mode Fokus Bertahap</span>
            </button>
            <button
              onClick={() => {
                setViewMode('grid');
                setCurrentPage(Math.floor(currentFocusIndex / QUESTIONS_PER_PAGE));
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 font-bold rounded-lg transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white text-teal-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutList className="w-3.5 h-3.5" />
              <span>Mode Daftar (5 Soal)</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {viewMode === 'focus' && (
              <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer select-none mr-1">
                <input
                  type="checkbox"
                  checked={autoAdvance}
                  onChange={(e) => setAutoAdvance(e.target.checked)}
                  className="rounded text-teal-600 focus:ring-teal-500"
                />
                <span className="text-[11px] font-medium">Otomatis Lanjut</span>
              </label>
            )}

            <button
              onClick={handleClearAnswers}
              title="Mulai ulang dan acak susunan soal baru"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200/80 rounded-xl transition-colors cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5 text-teal-700" />
              <span>Acak Soal Baru</span>
            </button>

            <button
              onClick={() => setShowQuestionGrid(!showQuestionGrid)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              <ListOrdered className="w-3.5 h-3.5 text-teal-700" />
              <span>{showQuestionGrid ? 'Tutup Peta Soal' : 'Peta Soal (1–40)'}</span>
            </button>
          </div>
        </div>

        {/* Inline Validation Notice */}
        {validationError && (
          <div className="mt-4 p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center justify-between gap-3">
            <span className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{validationError}</span>
            </span>
            <button
              onClick={() => setValidationError(null)}
              className="text-amber-700 hover:text-amber-950 font-bold shrink-0 cursor-pointer"
            >
              Tutup
            </button>
          </div>
        )}

        {/* Matrix Navigator Drawer */}
        {showQuestionGrid && (
          <div className="mt-5 p-5 bg-slate-50 border border-slate-200 rounded-2xl animate-in fade-in duration-200">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-bold text-slate-800">Peta 40 Soal Asesmen (Teracak):</span>
              <span className="text-slate-500">Klik nomor untuk melompat langsung</span>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2 sm:gap-1.5">
              {sessionQuestions.map((q, idx) => {
                const isAnswered = !!answers[q.id];
                const isCurrent =
                  viewMode === 'focus'
                    ? currentFocusIndex === idx
                    : Math.floor(idx / QUESTIONS_PER_PAGE) === currentPage;

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      if (viewMode === 'focus') {
                        setCurrentFocusIndex(idx);
                      } else {
                        setCurrentPage(Math.floor(idx / QUESTIONS_PER_PAGE));
                      }
                      setShowQuestionGrid(false);
                    }}
                    className={`py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      isCurrent ? 'ring-2 ring-teal-600 scale-105 z-10' : ''
                    } ${
                      isAnswered
                        ? 'bg-teal-700 text-white shadow-2xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ============================================================
          MODE 1: IMMERSIVE FOCUS MODE (SINGLE QUESTION SPOTLIGHT)
         ============================================================ */}
      {viewMode === 'focus' && (
        <div className="space-y-6">
          {/* Active Question Spotlight Container */}
          <div
            className={`bg-white rounded-3xl p-6 sm:p-10 border shadow-sm relative overflow-hidden transition-all ${
              recentAnswerFeedback === currentQuestionInFocus.id
                ? 'border-teal-400 ring-2 ring-teal-400/20'
                : 'border-slate-200'
            }`}
          >
            {/* Top Educational Dimension Banner */}
            <div className={`p-4 rounded-2xl ${stageInfo.accentBg} ${stageInfo.accentBorder} border mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3`}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center shrink-0">
                  <StageIcon className={`w-5 h-5 ${stageInfo.accentText}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className={`font-bold uppercase tracking-wider ${stageInfo.accentText}`}>
                      {stageInfo.stageName}
                    </span>
                    <span aria-hidden="true" className="text-slate-400">·</span>
                    <span className="font-semibold text-slate-700">{currentQuestionInFocus.contextTag}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                    {stageInfo.focusTitle}
                  </h3>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs font-bold px-2.5 py-1 bg-white rounded-lg border border-slate-200/80 text-slate-700 tabular-nums">
                  Soal {currentFocusIndex + 1} dari {totalQuestions}
                </span>
              </div>
            </div>

            {/* Question Text */}
            <div className="py-2 mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug tracking-tight">
                "{currentQuestionInFocus.text}"
              </h2>

              <p className="text-xs text-slate-500 mt-3 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{stageInfo.educationalNote}</span>
              </p>
            </div>

            {/* Tactile Response Spectrum: 5 Interactive Response Cards */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
                <span className="text-rose-600">← Tidak Sesuai</span>
                <span className="text-emerald-700">Sangat Sesuai →</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 sm:gap-3">
                {ENHANCED_LIKERT_OPTIONS.map((opt) => {
                  const isChosen = answers[currentQuestionInFocus.id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => handleSelectOption(currentQuestionInFocus.id, opt.value)}
                      className={`relative flex flex-row sm:flex-col items-center sm:items-stretch justify-between gap-3 sm:gap-0 p-3.5 sm:p-4 min-h-[54px] rounded-2xl border text-left transition-all duration-150 cursor-pointer group sm:hover:scale-[1.02] active:scale-[0.98] ${
                        isChosen
                          ? opt.activeStyle
                          : `bg-slate-50/60 ${opt.borderColor} hover:bg-white hover:shadow-xs`
                      }`}
                    >
                      {/* Mobile Left / Desktop Top Row: Key badge & Radio Indicator */}
                      <div className="flex items-center sm:justify-between gap-2.5 sm:gap-0 sm:mb-3 shrink-0">
                        <span className="w-7 h-7 sm:w-6 sm:h-6 rounded-md bg-white border border-slate-200 text-slate-600 font-bold text-xs flex items-center justify-center shadow-2xs group-hover:border-slate-300">
                          {opt.keyBadge}
                        </span>

                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                            isChosen
                              ? opt.circleActive
                              : 'border-slate-300 bg-white group-hover:border-slate-400'
                          }`}
                        >
                          {isChosen && <div className="w-2 h-2 rounded-full bg-white animate-in zoom-in-75" />}
                        </div>
                      </div>

                      {/* Main Label */}
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-bold text-slate-900 block leading-tight">
                          {opt.mainLabel}
                        </span>
                        <span className="text-[11px] text-slate-500 mt-0.5 sm:mt-1 block leading-tight">
                          {opt.subtitle}
                        </span>
                      </div>

                      {/* Bottom / Right Visual Tag */}
                      <div className="sm:mt-3 sm:pt-2.5 sm:border-t sm:border-slate-200/60 flex items-center justify-end sm:justify-between text-[10px] font-semibold shrink-0">
                        <span className={`px-2 py-0.5 rounded ${opt.badgeColor}`}>
                          {opt.visualTag}
                        </span>
                        {isChosen && (
                          <span className="hidden sm:flex text-emerald-700 font-bold items-center gap-0.5">
                            <CheckCircle2 className="w-3 h-3" /> Dipilih
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Device-aware helper strip */}
            <div className="mt-6 pt-4 border-t border-slate-100 hidden sm:flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Tekan angka <strong>1 s/d 5</strong> pada keyboard untuk memilih cepat</span>
              </span>
              <span>Gunakan panah <strong>← / →</strong> untuk navigasi</span>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex sm:hidden items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
              <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Ketuk salah satu pilihan di atas untuk menjawab</span>
            </div>
          </div>

          {/* Navigation Controls Bar for Focus Mode */}
          <div className="bg-white rounded-2xl p-3.5 sm:p-5 border border-slate-200 shadow-xs flex items-center justify-between gap-3 sm:gap-4">
            <button
              disabled={currentFocusIndex === 0}
              onClick={() => setCurrentFocusIndex((prev) => Math.max(0, prev - 1))}
              className={`flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 px-3 sm:px-4 py-2.5 min-h-[44px] text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                currentFocusIndex === 0
                  ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400'
                  : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              <ChevronLeft className="w-4 h-4 shrink-0" />
              <span>Sebelumnya</span>
            </button>

            <div className="text-xs font-semibold text-slate-500 hidden sm:block tabular-nums">
              Soal {currentFocusIndex + 1} dari {totalQuestions}
            </div>

            {currentFocusIndex < totalQuestions - 1 ? (
              <button
                onClick={() => setCurrentFocusIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                className="flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 min-h-[44px] text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <span>Berikutnya</span>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                className="flex-1 sm:flex-none justify-center inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 min-h-[44px] text-xs font-extrabold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-sm transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Lihat Hasil MBTI</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* ============================================================
          MODE 2: TRADITIONAL PAGE LIST VIEW (5 QUESTIONS PER PAGE)
         ============================================================ */}
      {viewMode === 'grid' && (
        <div className="space-y-6">
          {currentQuestionsInGrid.map((question, qIdx) => {
            const selectedValue = answers[question.id];
            const globalNumber = startIndex + qIdx + 1;
            const qStageInfo = DIMENSION_STAGE_INFO[question.dimension];

            return (
              <div
                key={question.id}
                className={`bg-white rounded-3xl p-6 sm:p-7 shadow-xs border transition-all ${
                  selectedValue
                    ? 'border-slate-200'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-teal-800">Soal {globalNumber} dari {totalQuestions}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="font-semibold text-slate-600">{question.contextTag}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-500 hidden sm:inline">{qStageInfo.focusTitle.split('(')[0]}</span>
                  </div>

                  {selectedValue ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Terjawab
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      Belum Terjawab
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-5">
                  "{question.text}"
                </h3>

                {/* 5 Response Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-2.5">
                  {ENHANCED_LIKERT_OPTIONS.map((opt) => {
                    const isChosen = selectedValue === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleSelectOption(question.id, opt.value)}
                        className={`p-3 rounded-2xl border text-left sm:text-center transition-all cursor-pointer flex flex-row sm:flex-col items-center justify-between gap-3 sm:gap-0 min-h-[46px] ${
                          isChosen
                            ? opt.activeStyle
                            : `bg-slate-50/70 ${opt.borderColor} hover:bg-white`
                        }`}
                      >
                        <div className="flex items-center gap-2.5 sm:flex-col sm:gap-0">
                          <div
                            className={`w-4 h-4 rounded-full border sm:mb-1.5 flex items-center justify-center transition-all shrink-0 ${
                              isChosen
                                ? opt.circleActive
                                : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isChosen && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                          <span className="text-xs font-bold leading-tight text-slate-900">
                            {opt.mainLabel}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 sm:mt-0.5 shrink-0">
                          {opt.visualTag}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Grid Mode Pagination Bar */}
          <div className="mt-8 bg-white rounded-2xl p-5 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handleClearAnswers}
                title="Reset jawaban"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Jawaban</span>
              </button>
              <span className="text-xs text-slate-500">
                Halaman {currentPage + 1} dari {totalPages}
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                disabled={currentPage === 0}
                onClick={() => {
                  setCurrentPage((prev) => Math.max(0, prev - 1));
                  window.scrollTo({ top: 180, behavior: 'smooth' });
                }}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  currentPage === 0
                    ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              {currentPage < totalPages - 1 ? (
                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
                    window.scrollTo({ top: 180, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-xs transition-all cursor-pointer"
                >
                  <span>Halaman Berikutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Lihat Hasil Tes Lengkap</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
