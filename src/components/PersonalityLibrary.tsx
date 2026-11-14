import React, { useState } from 'react';
import { MBTI_PROFILES } from '../data/mbtiProfiles';
import { PersonalityDetails, MbtiTypeCode } from '../types/psychology';
import { Search, GraduationCap, Lightbulb, BookOpen, X, ArrowRight } from 'lucide-react';

interface PersonalityLibraryProps {
  onStartTest: () => void;
  onCompare: (typeA: string, typeB?: string) => void;
}

export const PersonalityLibrary: React.FC<PersonalityLibraryProps> = ({
  onStartTest,
  onCompare
}) => {
  const [selectedGroup, setSelectedGroup] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProfile, setActiveProfile] = useState<PersonalityDetails | null>(null);

  const profilesList = Object.values(MBTI_PROFILES);

  const filtered = profilesList.filter((p) => {
    const matchesGroup = selectedGroup === 'Semua' || p.group === selectedGroup;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      p.code.toLowerCase().includes(query) ||
      p.title.toLowerCase().includes(query) ||
      p.summary.toLowerCase().includes(query) ||
      p.recommendedMajors.some((cat) =>
        cat.majors.some((m) => m.toLowerCase().includes(query))
      );
    return matchesGroup && matchesQuery;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
          <span>Kamus & Ensiklopedia Psikologi Kepribadian</span>
          <span aria-hidden="true">·</span>
          <span>16 Tipe MBTI Lengkap</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Eksplorasi 16 Tipe Kepribadian PSIKOLOGI EMPATI
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
          Pelajari karakter unik, gaya kerja, kekuatan personal, serta peluang bidang karier dan pengembangan diri untuk setiap tipe kepribadian.
        </p>

        {/* Filter Controls */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Segmented Filter */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl overflow-x-auto w-full sm:w-auto">
            {['Semua', 'Analis', 'Diplomatis', 'Pengawal', 'Penjelajah'].map((grp) => (
              <button
                key={grp}
                onClick={() => setSelectedGroup(grp)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedGroup === grp
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {grp}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kode (INTJ) atau bidang karier..."
              className="w-full pl-9 pr-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
            />
          </div>
        </div>
      </div>

      {/* Grid of 16 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((item) => (
          <div
            key={item.code}
            className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-teal-500/60 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-black text-slate-900 tracking-tight">
                  {item.code}
                </span>
                <span className="text-[11px] font-semibold text-slate-500">
                  {item.group}
                </span>
              </div>

              <h3 className="text-base font-bold text-teal-900 leading-snug mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 mb-3 line-clamp-1">
                {item.badge}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                {item.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setActiveProfile(item)}
                className="text-xs font-bold text-teal-700 hover:text-teal-800 transition-colors cursor-pointer"
              >
                Lihat Detail Lengkap
              </button>
              <button
                onClick={() => onCompare(item.code)}
                className="text-xs text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                Bandingkan
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {activeProfile && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-5 bg-gradient-to-r from-teal-800 to-slate-900 text-white flex items-center justify-between shrink-0">
              <div>
                <div className="flex items-center gap-2 text-xs text-teal-200">
                  <span className="font-semibold uppercase tracking-wider">
                    Kelompok {activeProfile.group}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Profil Kepribadian MBTI</span>
                </div>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-3xl font-black">{activeProfile.code}</span>
                  <span className="text-lg font-bold text-teal-100">{activeProfile.title}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveProfile(null)}
                className="text-white/70 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content Scrollable */}
            <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-xs sm:text-sm">
              <blockquote className="italic text-slate-700 bg-teal-50/50 border-l-4 border-teal-600 p-4 rounded-r-xl">
                {activeProfile.quote}
              </blockquote>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5">Karakter Utama Sehari-hari:</h4>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  {activeProfile.summary}
                </p>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="font-bold text-emerald-800 block mb-2 text-xs uppercase tracking-wider">
                    Kekuatan Utama & Kepribadian:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {activeProfile.strengths.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="font-bold text-amber-800 block mb-2 text-xs uppercase tracking-wider">
                    Area Pertumbuhan Diri:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {activeProfile.weaknesses.map((w, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1 shrink-0" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Careers & Fields */}
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-teal-700" />
                  <span>Rekomendasi Bidang Karier & Studi:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeProfile.recommendedMajors.map((cat, idx) => (
                    <div key={idx} className="p-3 bg-teal-50/40 rounded-xl border border-teal-100">
                      <span className="font-bold text-teal-900 block text-xs uppercase mb-1.5">
                        {cat.category}
                      </span>
                      <ul className="text-xs text-slate-700 space-y-1 mb-2">
                        {cat.majors.map((m, mIdx) => (
                          <li key={mIdx}>• {m}</li>
                        ))}
                      </ul>
                      <p className="text-[11px] text-slate-500 italic border-t border-teal-100 pt-1.5">
                        {cat.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Productivity & Learning Tips */}
              <div>
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-teal-700" />
                  <span>Strategi Pengembangan Diri & Produktivitas:</span>
                </h4>
                <div className="space-y-2">
                  {activeProfile.studyTips.map((tip, idx) => (
                    <p key={idx} className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <strong>Strategi {idx + 1}:</strong> {tip}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
              <button
                onClick={() => {
                  const targetCode = activeProfile.code;
                  setActiveProfile(null);
                  onCompare(targetCode);
                }}
                className="text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Bandingkan Tipe Ini dengan Tipe Lain →
              </button>
              <button
                onClick={() => {
                  setActiveProfile(null);
                  onStartTest();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-all cursor-pointer"
              >
                <span>Ikuti Tes MBTI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
