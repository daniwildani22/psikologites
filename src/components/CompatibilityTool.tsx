import React, { useState } from 'react';
import { MBTI_PROFILES } from '../data/mbtiProfiles';
import { MbtiTypeCode } from '../types/psychology';
import { Users, Sparkles, Check, AlertCircle, ArrowRight } from 'lucide-react';

interface CompatibilityToolProps {
  initialTypeA?: string;
  initialTypeB?: string;
  onSwitchToTest: () => void;
}

export const CompatibilityTool: React.FC<CompatibilityToolProps> = ({
  initialTypeA = 'INFP',
  initialTypeB = 'ENFJ',
  onSwitchToTest
}) => {
  const allCodes = Object.keys(MBTI_PROFILES) as MbtiTypeCode[];

  const [typeA, setTypeA] = useState<MbtiTypeCode>(
    allCodes.includes(initialTypeA as MbtiTypeCode) ? (initialTypeA as MbtiTypeCode) : 'INFP'
  );
  const [typeB, setTypeB] = useState<MbtiTypeCode>(
    allCodes.includes(initialTypeB as MbtiTypeCode) ? (initialTypeB as MbtiTypeCode) : 'ENFJ'
  );

  const profA = MBTI_PROFILES[typeA];
  const profB = MBTI_PROFILES[typeB];

  // Calculate synergy dynamics based on dichotomy matches & contrasts
  const sameE = typeA[0] === typeB[0];
  const sameS = typeA[1] === typeB[1];
  const sameT = typeA[2] === typeB[2];
  const sameJ = typeA[3] === typeB[3];

  const matchCount = [sameE, sameS, sameT, sameJ].filter(Boolean).length;

  let synergyRate = 85;
  let dynamicTitle = 'Saling Melengkapi & Mengimbangi';
  let dynamicSummary = 'Kombinasi ini memiliki perpaduan antara perspektif serupa dan perbedaan yang saling mengisi kekurangan masing-masing.';

  if (matchCount === 4) {
    synergyRate = 92;
    dynamicTitle = 'Cermin Kembaran (Satu Frekuensi Penuh)';
    dynamicSummary = 'Kalian berdua memiliki cara pandang dunia, gaya berpikir, dan ritme kerja yang hampir identik. Sangat mudah memahami tanpa perlu banyak bicara!';
  } else if (matchCount === 3) {
    synergyRate = 88;
    dynamicTitle = 'Harmoni Alami (Mudah Selaras)';
    dynamicSummary = 'Mayoritas cara memproses informasi dan mengambil keputusan sejalan, dengan satu perbedaan sehat yang memberikan variasi perspektif.';
  } else if (matchCount === 2) {
    synergyRate = 84;
    dynamicTitle = 'Kombinasi Sinergis (Dua Kekuatan Berbeda)';
    dynamicSummary = 'Keseimbangan ideal antara kecocokan nilai dan keberagaman keterampilan saat menyelesaikan proyek atau bekerja dalam tim.';
  } else if (matchCount === 1) {
    synergyRate = 78;
    dynamicTitle = 'Eksplorasi Menantang (Belajar Saling Mengisi)';
    dynamicSummary = 'Perbedaan pola pikir cukup kentara, namun justru di sanalah letak ruang pertumbuhan terbesar jika saling menghormati peran.';
  } else {
    synergyRate = 75;
    dynamicTitle = 'Dua Kutub Berlawanan (Katalisator Pertumbuhan)';
    dynamicSummary = 'Kalian melihat dunia dari sudut yang berlawanan total. Jika berhasil membangun komunikasi terbuka, hampir tidak ada tantangan proyek yang tak bisa kalian pecahkan!';
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
          <span>Dinamika Kolaborasi & Relasi</span>
          <span aria-hidden="true">·</span>
          <span>Kecocokan Partner Kerja, Tim & Pasangan</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Cek Kecocokan Partner Kerja, Tim & Relasi
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
          Pilih tipe MBTI Anda dan partner Anda untuk melihat bagaimana sinergi gaya kerja, potensi kekuatan kolaborasi, serta cara mengatasi perbedaan pendapat dengan empati.
        </p>

        {/* Type Selectors */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Tipe Kepribadian Anda (Peserta 1)
            </label>
            <select
              value={typeA}
              onChange={(e) => setTypeA(e.target.value as MbtiTypeCode)}
              className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 font-semibold"
            >
              {allCodes.map((c) => (
                <option key={c} value={c}>
                  {c} — {MBTI_PROFILES[c].title}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-slate-500 mt-1">{profA.badge}</p>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Tipe Partner / Rekan (Peserta 2)
            </label>
            <select
              value={typeB}
              onChange={(e) => setTypeB(e.target.value as MbtiTypeCode)}
              className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 font-semibold"
            >
              {allCodes.map((c) => (
                <option key={c} value={c}>
                  {c} — {MBTI_PROFILES[c].title}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-slate-500 mt-1">{profB.badge}</p>
          </div>
        </div>
      </div>

      {/* Sinergy Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {typeA}
              </span>
              <span className="text-xl font-bold text-slate-400">&</span>
              <span className="text-3xl sm:text-4xl font-black text-teal-800 tracking-tight">
                {typeB}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-1">{dynamicTitle}</h3>
            <p className="text-xs text-slate-600 mt-1 max-w-xl leading-relaxed">
              {dynamicSummary}
            </p>
          </div>

          <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl text-center shrink-0">
            <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider block">
              Indeks Keselarasan
            </span>
            <div className="text-3xl font-black text-teal-900 mt-0.5 tabular-nums">
              {synergyRate}%
            </div>
            <p className="text-[10px] text-teal-700 font-medium">Potensi Kolaborasi Tinggi</p>
          </div>
        </div>

        {/* 2-Column Strengths Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs uppercase tracking-wider text-slate-700">
                Kontribusi {typeA} ({profA.title})
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 bg-white rounded border border-slate-200 text-slate-600">
                {profA.group}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed italic">
              "{profA.summary}"
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-200">
              {profA.strengths.slice(0, 3).map((st, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{st}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs uppercase tracking-wider text-teal-900">
                Kontribusi {typeB} ({profB.title})
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 bg-white rounded border border-slate-200 text-slate-600">
                {profB.group}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed italic">
              "{profB.summary}"
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-200">
              {profB.strengths.slice(0, 3).map((st, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{st}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Practical tips for working together */}
        <div className="p-5 bg-teal-50/60 rounded-2xl border border-teal-100 space-y-3">
          <h4 className="text-xs font-bold text-teal-900 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-700" />
            <span>Kiat Praktis Saat Berkolaborasi:</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="bg-white p-3 rounded-xl border border-teal-100/80">
              <strong className="block text-slate-900 mb-1">Pembagian Peran yang Tepat:</strong>
              {typeA[3] === 'J' || typeB[3] === 'J'
                ? `Biarkan yang berdimensi 'J' mengurus timeline dan jadwal penyelesaian, sementara yang berdimensi 'P' menyumbang ide-ide kreatif dan solusi fleksibel.`
                : `Karena kalian berdua menyukai fleksibilitas, tentukan satu batas waktu (deadline internal) 2 hari sebelum target akhir agar eksekusi tetap terkendali.`}
            </div>
            <div className="bg-white p-3 rounded-xl border border-teal-100/80">
              <strong className="block text-slate-900 mb-1">Gaya Komunikasi Efektif:</strong>
              {typeA[2] !== typeB[2]
                ? `Tipe Thinking (T) sebaiknya menyampaikan evaluasi secara hangat dan konstruktif, dan tipe Feeling (F) perlu melihat masukan objektif sebagai perbaikan hasil kerja bukan kritik pribadi.`
                : `Kalian berdua memiliki frekuensi pengambilan keputusan yang serupa, sehingga diskusi dan penyelarasan visi akan berjalan cepat dan natural.`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
