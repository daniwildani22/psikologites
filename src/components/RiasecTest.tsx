import React, { useState } from 'react';
import { generateRandomRiasecSession, RIASEC_PROFILES } from '../data/riasecData';
import { RiasecQuestion, RiasecResult, StudentProfile } from '../types/psychology';
import { CheckCircle2, RotateCcw, ArrowRight, Sparkles, Shuffle, AlertCircle } from 'lucide-react';

interface RiasecTestProps {
  studentProfile: StudentProfile;
  onSwitchToMbti: () => void;
}

export const RiasecTest: React.FC<RiasecTestProps> = ({
  studentProfile,
  onSwitchToMbti
}) => {
  const [sessionQuestions, setSessionQuestions] = useState<RiasecQuestion[]>(() => generateRandomRiasecSession(3));
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [result, setResult] = useState<RiasecResult | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const totalQuestions = sessionQuestions.length;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const handleToggle = (questionId: number, isAgree: boolean) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: isAgree
    }));
    setValidationError(null);
  };

  const handleCalculate = () => {
    if (answeredCount < totalQuestions) {
      setValidationError(`Mohon tanggapi semua ${totalQuestions} pernyataan (${totalQuestions - answeredCount} pernyataan belum dipilih) untuk akurasi pemetaan minat karier.`);
      return;
    }

    const counts: Record<string, number> = {
      R: 0,
      I: 0,
      A: 0,
      S: 0,
      E: 0,
      C: 0
    };

    sessionQuestions.forEach((q) => {
      if (answers[q.id]) {
        counts[q.category] += 1;
      }
    });

    const entries = (['R', 'I', 'A', 'S', 'E', 'C'] as const).map((code) => {
      const prof = RIASEC_PROFILES[code];
      return {
        code,
        name: prof.name,
        score: counts[code],
        description: prof.description,
        suggestedMajors: prof.suggestedMajors
      };
    });

    // Sort descending
    entries.sort((a, b) => b.score - a.score);
    const topThree = entries.slice(0, 3);

    const calcResult: RiasecResult = {
      R: counts.R,
      I: counts.I,
      A: counts.A,
      S: counts.S,
      E: counts.E,
      C: counts.C,
      topThree
    };

    setResult(calcResult);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSessionQuestions(generateRandomRiasecSession(3));
    setAnswers({});
    setResult(null);
    setValidationError(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            <span>Eksplorasi Minat Karier & Profesi</span>
            <span aria-hidden="true">·</span>
            <span>Model Holland (RIASEC)</span>
            <span aria-hidden="true">·</span>
            <span>18 Butir Minat</span>
            <span aria-hidden="true">·</span>
            <span>Soal Diacak Otomatis</span>
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
          Pemetaan Minat Karier & Profesi (Holland RIASEC)
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
          Temukan 3 kode rumpun minat dominan Anda (Realistis, Investigatif, Artistik, Sosial, Enterprising, atau Konvensional) untuk menentukan pilihan jalur karier, bisnis, maupun studi yang paling sesuai dengan aspirasi Anda.
        </p>

        {!result && (
          <div className="mt-6">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
              <span>{answeredCount} dari {totalQuestions} Minat Dinilai</span>
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

      {result ? (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                  Hasil Pemetaan Minat Holland
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Kode Minat Utama: {result.topThree.map((t) => t.code).join('')}
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Kombinasi 3 rumpun minat karier tertinggi untuk {studentProfile.fullName || 'Peserta'}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ulangi Tes</span>
                </button>
                <button
                  onClick={onSwitchToMbti}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  <span>Cek MBTI Anda</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Top 3 Cards */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                3 Rumpun Minat Teratas & Rekomendasi Bidang Karier
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {result.topThree.map((item, idx) => (
                  <div
                    key={item.code}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-teal-800">Peringkat #{idx + 1}</span>
                        <span className="text-xs font-semibold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-700">
                          Kode {item.code}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/80">
                      <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
                        Pilihan Bidang Karier & Studi:
                      </span>
                      <ul className="space-y-1">
                        {item.suggestedMajors.map((m, mIdx) => (
                          <li key={mIdx} className="text-xs text-slate-800 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Radar / Score comparison breakdown */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                Distribusi Nilai 6 Rumpun Holland
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {(['R', 'I', 'A', 'S', 'E', 'C'] as const).map((c) => {
                  const score = result[c];
                  const prof = RIASEC_PROFILES[c];
                  return (
                    <div key={c} className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                      <span className="text-xs font-bold text-teal-800">{c}</span>
                      <p className="text-[11px] text-slate-500 truncate">{prof.name.split(' ')[0]}</p>
                      <div className="text-xl font-black text-slate-900 mt-1 tabular-nums">
                        {score}/3
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Questions list */
        <div className="space-y-4">
          {sessionQuestions.map((q, idx) => {
            const hasAnswer = answers[q.id] !== undefined;
            const currentVal = answers[q.id];

            return (
              <div
                key={q.id}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-all hover:border-slate-300"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-teal-800">Minat #{idx + 1} dari {totalQuestions}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="font-semibold text-slate-500">
                      Rumpun {RIASEC_PROFILES[q.category].name.split(' ')[0]} (Kode {q.category})
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    "{q.text}"
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() => handleToggle(q.id, false)}
                    className={`justify-center px-3 sm:px-4 py-2.5 min-h-[44px] text-xs font-bold rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 ${
                      hasAnswer && currentVal === false
                        ? 'bg-rose-50 border-rose-400 text-rose-800 shadow-xs ring-2 ring-rose-300/40'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <span>Kurang Tertarik</span>
                  </button>
                  <button
                    onClick={() => handleToggle(q.id, true)}
                    className={`justify-center px-3 sm:px-5 py-2.5 min-h-[44px] text-xs font-bold rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 ${
                      hasAnswer && currentVal === true
                        ? 'bg-teal-50 border-teal-600 text-teal-950 shadow-xs ring-2 ring-teal-400/30'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Sangat Tertarik!</span>
                  </button>
                </div>
              </div>
            );
          })}

          <div className="pt-4 flex justify-end">
            <button
              onClick={handleCalculate}
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 min-h-[46px] text-xs sm:text-sm font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Analisis Minat Karier Saya</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
