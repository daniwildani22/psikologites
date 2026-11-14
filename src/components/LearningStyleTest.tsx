import React, { useState } from 'react';
import { generateRandomVakSession, LEARNING_STYLE_PROFILES } from '../data/learningStyleData';
import { LearningStyleQuestion, LearningStyleResult, StudentProfile } from '../types/psychology';
import { Eye, Headphones, Activity, Sparkles, CheckCircle2, RotateCcw, ArrowRight, BookOpen, Shuffle, AlertCircle } from 'lucide-react';

interface LearningStyleTestProps {
  studentProfile: StudentProfile;
  onSwitchToMbti: () => void;
}

export const LearningStyleTest: React.FC<LearningStyleTestProps> = ({
  studentProfile,
  onSwitchToMbti
}) => {
  const [sessionQuestions, setSessionQuestions] = useState<LearningStyleQuestion[]>(() => generateRandomVakSession(12));
  const [answers, setAnswers] = useState<Record<number, 'visual' | 'auditory' | 'kinesthetic'>>({});
  const [result, setResult] = useState<LearningStyleResult | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const totalQuestions = sessionQuestions.length;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const handleSelect = (questionId: number, type: 'visual' | 'auditory' | 'kinesthetic') => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: type
    }));
    setValidationError(null);
  };

  const calculateResult = () => {
    if (answeredCount < totalQuestions) {
      setValidationError(`Mohon lengkapi semua ${totalQuestions} pertanyaan (${totalQuestions - answeredCount} soal belum terjawab) untuk mendapatkan hasil akurat.`);
      return;
    }

    let visual = 0;
    let auditory = 0;
    let kinesthetic = 0;

    Object.values(answers).forEach((type) => {
      if (type === 'visual') visual += 1;
      if (type === 'auditory') auditory += 1;
      if (type === 'kinesthetic') kinesthetic += 1;
    });

    const total = visual + auditory + kinesthetic;
    const vPercent = Math.round((visual / total) * 100);
    const aPercent = Math.round((auditory / total) * 100);
    const kPercent = 100 - vPercent - aPercent;

    let dominant: 'visual' | 'auditory' | 'kinesthetic' | 'multimodal' = 'visual';

    // Check if nearly equal
    const maxVal = Math.max(visual, auditory, kinesthetic);
    const runnerUps = [visual, auditory, kinesthetic].filter((v) => v === maxVal).length;

    if (runnerUps > 1) {
      dominant = 'multimodal';
    } else if (maxVal === visual) {
      dominant = 'visual';
    } else if (maxVal === auditory) {
      dominant = 'auditory';
    } else {
      dominant = 'kinesthetic';
    }

    const calculated: LearningStyleResult = {
      visual,
      auditory,
      kinesthetic,
      dominant,
      percentage: {
        visual: vPercent,
        auditory: aPercent,
        kinesthetic: kPercent
      }
    };

    setResult(calculated);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSessionQuestions(generateRandomVakSession(12));
    setAnswers({});
    setResult(null);
    setValidationError(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            <span>Asesmen Gaya Belajar PSIKOLOGI EMPATI</span>
            <span aria-hidden="true">·</span>
            <span>Model VAK (Fleming)</span>
            <span aria-hidden="true">·</span>
            <span>12 Butir Soal</span>
            <span aria-hidden="true">·</span>
            <span>Soal &amp; Opsi Diacak</span>
          </div>

          {!result && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200/80 rounded-xl transition-colors cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5 text-teal-700" />
              <span>Acak Soal Baru</span>
            </button>
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Temukan Gaya Belajar & Penyerapan Informasi Optimal (VAK)
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
          Apakah Anda lebih cepat menyerap ilmu baru melalui penglihatan visual, pendengaran audio, atau praktik kinestetik langsung? Temukan strategi paling efektif untuk pelatihan, sertifikasi, dan pengembangan diri.
        </p>

        {/* Progress bar */}
        {!result && (
          <div className="mt-6">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
              <span>{answeredCount} dari {totalQuestions} Soal Terjawab</span>
              <span className="tabular-nums font-bold text-slate-900">{progressPercent}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-600 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {validationError && (
              <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Result Display */}
      {result ? (
        <div className="space-y-6">
          {(() => {
            const profile = LEARNING_STYLE_PROFILES[result.dominant];
            return (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                      Modalitas Sensori Dominan Peserta
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                      {profile.title}
                    </h2>
                    <p className="text-sm text-slate-600 mt-1 font-medium">
                      {profile.tagline}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Tes Ulang</span>
                    </button>
                    <button
                      onClick={onSwitchToMbti}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Lanjut Tes MBTI</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Score breakdown strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className={`p-4 rounded-2xl border text-center ${result.dominant === 'visual' ? 'bg-teal-50 border-teal-300' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                      <Eye className="w-4 h-4 text-teal-700" />
                      <span>Visual (Mata)</span>
                    </div>
                    <div className="text-2xl font-black text-slate-900 tabular-nums">
                      {result.percentage.visual}%
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Bagan, warna & diagram</p>
                  </div>

                  <div className={`p-4 rounded-2xl border text-center ${result.dominant === 'auditory' ? 'bg-teal-50 border-teal-300' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                      <Headphones className="w-4 h-4 text-teal-700" />
                      <span>Auditori (Telinga)</span>
                    </div>
                    <div className="text-2xl font-black text-slate-900 tabular-nums">
                      {result.percentage.auditory}%
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Diskusi, suara & penjelasan</p>
                  </div>

                  <div className={`p-4 rounded-2xl border text-center ${result.dominant === 'kinesthetic' ? 'bg-teal-50 border-teal-300' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                      <Activity className="w-4 h-4 text-teal-700" />
                      <span>Kinestetik (Gerak)</span>
                    </div>
                    <div className="text-2xl font-black text-slate-900 tabular-nums">
                      {result.percentage.kinesthetic}%
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Praktik langsung & simulasi</p>
                  </div>
                </div>

                {/* Characteristics */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Karakteristik Cara Kerja Otak Anda
                  </h3>
                  <ul className="space-y-2">
                    {profile.characteristics.map((char, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best study methods */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-teal-700" />
                    <span>Strategi Belajar yang Terbukti Efektif</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profile.bestStudyMethods.map((method, idx) => (
                      <div key={idx} className="p-4 bg-teal-50/40 border border-teal-100 rounded-xl space-y-1">
                        <span className="text-xs font-bold text-teal-900">Teknik #{idx + 1}</span>
                        <p className="text-xs text-slate-700 leading-relaxed">{method}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assessment / Competency strategy */}
                <div className="p-5 bg-amber-50/60 border border-amber-200 rounded-2xl text-xs text-amber-900 space-y-1">
                  <span className="font-bold block">Trik Khusus Menghadapi Pelatihan, Sertifikasi & Uji Kompetensi:</span>
                  <p className="leading-relaxed text-amber-800">{profile.examStrategy}</p>
                </div>
              </div>
            );
          })()}
        </div>
      ) : (
        /* Questions list */
        <div className="space-y-6">
          {sessionQuestions.map((q, idx) => {
            const selected = answers[q.id];
            return (
              <div
                key={q.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs"
              >
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-bold text-teal-800">Pertanyaan {idx + 1} dari {totalQuestions}</span>
                  {selected && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Terpilih
                    </span>
                  )}
                </div>

                <h3 className="text-base font-semibold text-slate-900 leading-snug mb-4">
                  {q.question}
                </h3>

                <div className="space-y-3">
                  {q.options.map((opt, optIdx) => {
                    const isChosen = selected === opt.type;
                    const meta = {
                      visual: {
                        label: 'Gaya Visual',
                        tag: 'Melihat & Mengamati',
                        icon: Eye,
                        activeBg: 'bg-teal-50/90 border-teal-600 text-teal-950 shadow-xs ring-2 ring-teal-400/30',
                        badge: 'text-teal-700 bg-teal-100/80',
                        circle: 'bg-teal-600 border-teal-600'
                      },
                      auditory: {
                        label: 'Gaya Auditori',
                        tag: 'Mendengar & Diskusi',
                        icon: Headphones,
                        activeBg: 'bg-amber-50/90 border-amber-600 text-amber-950 shadow-xs ring-2 ring-amber-400/30',
                        badge: 'text-amber-800 bg-amber-100/80',
                        circle: 'bg-amber-600 border-amber-600'
                      },
                      kinesthetic: {
                        label: 'Gaya Kinestetik',
                        tag: 'Praktik & Gerak',
                        icon: Activity,
                        activeBg: 'bg-indigo-50/90 border-indigo-600 text-indigo-950 shadow-xs ring-2 ring-indigo-400/30',
                        badge: 'text-indigo-800 bg-indigo-100/80',
                        circle: 'bg-indigo-600 border-indigo-600'
                      }
                    }[opt.type];
                    const OptIcon = meta.icon;

                    return (
                      <button
                        key={opt.type}
                        onClick={() => handleSelect(q.id, opt.type)}
                        className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-150 cursor-pointer flex items-start gap-4 group hover:scale-[1.01] active:scale-[0.99] ${
                          isChosen
                            ? meta.activeBg
                            : 'bg-slate-50/70 border-slate-200 text-slate-800 hover:bg-white hover:border-slate-300 hover:shadow-xs'
                        }`}
                      >
                        <div className="flex items-center gap-2 mt-0.5 shrink-0">
                          <span className="w-6 h-6 rounded-md bg-white border border-slate-200 text-slate-600 font-bold text-xs flex items-center justify-center shadow-2xs">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                              isChosen
                                ? meta.circle
                                : 'border-slate-300 bg-white group-hover:border-slate-400'
                            }`}
                          >
                            {isChosen && <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                        </div>

                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 ${meta.badge}`}>
                              <OptIcon className="w-3 h-3" />
                              {meta.label} ({meta.tag})
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                            {opt.text}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="pt-4 flex justify-end">
            <button
              onClick={calculateResult}
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 min-h-[46px] text-xs sm:text-sm font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Lihat Hasil Gaya Belajar Saya</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
