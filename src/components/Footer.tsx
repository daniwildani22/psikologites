import React from 'react';
import { Heart, ShieldCheck, BookOpen, GraduationCap } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="no-print bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-base font-extrabold text-white tracking-tight">
                PSIKOLOGI <span className="text-teal-400">EMPATI</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Platform asesmen psikologis terapan untuk masyarakat umum, profesional, mahasiswa, dan organisasi. Membantu Anda mengenali potensi kepribadian, gaya belajar optimal, serta arah pengembangan karier dengan pendekatan empatik.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> Standar Asesmen MBTI Umum
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-teal-400" /> Pengembangan Diri & Karier
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Instrumen Asesmen
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab('landing')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Beranda & Dasbor
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('mbti-test')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tes Kepribadian MBTI
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('learning-style')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tes Gaya Belajar VAK (Sensori)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('riasec-test')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tes Minat Karier Holland RIASEC
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('personality-library')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Katalog 16 Tipe Kepribadian
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Kolaborasi & Panduan
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab('compatibility')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Kecocokan Partner & Tim
                </button>
              </li>
              <li>
                <a
                  href="#panduan"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Panduan asesmen: Jawab setiap pertanyaan berdasarkan kecenderungan alami Anda sehari-hari, bukan kondisi ideal yang diharapkan orang lain.');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Petunjuk Pengisian Tes
                </a>
              </li>
              <li>
                <span className="text-slate-500">
                  Pengembangan Potensi & Karier
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} PSIKOLOGI EMPATI. Didedikasikan untuk pengembangan potensi diri dan kesehatan mental masyarakat.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[11px] text-slate-500 text-center md:text-right">
            <p className="italic max-w-md">
              Catatan: Hasil tes ini berfungsi sebagai sarana refleksi diri, bukan diagnosis klinis gangguan psikologis.
            </p>
            <span className="hidden sm:inline text-slate-700" aria-hidden="true">·</span>
            <p className="text-slate-400 font-medium whitespace-nowrap">
              program dibuat oleh : DANIWILDANI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
