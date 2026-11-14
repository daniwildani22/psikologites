import React from 'react';
import { Sparkles, Brain, History, Share2 } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenHistory: () => void;
  onOpenShare: () => void;
  savedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenHistory,
  onOpenShare,
  savedCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-6 h-14 sm:h-16">
          {/* Zone 1: Single Brand Wordmark */}
          <button
            onClick={() => onSelectTab('landing')}
            className="flex items-center gap-2 text-left cursor-pointer group whitespace-nowrap shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-teal-700 transition-colors">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <span className="text-sm sm:text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
                PSIKOLOGI <span className="text-teal-600">EMPATI</span>
              </span>
            </div>
          </button>

          {/* Zone 2: Concise Single-Line Navigation Links (Desktop lg+) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => onSelectTab('landing')}
              className={`hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentTab === 'landing' ? 'text-teal-700 font-semibold' : ''
              }`}
            >
              Beranda & Dasbor
            </button>
            <button
              onClick={() => onSelectTab('mbti-test')}
              className={`hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentTab === 'mbti-test' || currentTab === 'mbti-result'
                  ? 'text-teal-700 font-semibold'
                  : ''
              }`}
            >
              Tes MBTI
            </button>
            <button
              onClick={() => onSelectTab('learning-style')}
              className={`hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentTab === 'learning-style' ? 'text-teal-700 font-semibold' : ''
              }`}
            >
              Gaya Belajar (VAK)
            </button>
            <button
              onClick={() => onSelectTab('riasec-test')}
              className={`hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentTab === 'riasec-test' ? 'text-teal-700 font-semibold' : ''
              }`}
            >
              Minat Karier
            </button>
            <button
              onClick={() => onSelectTab('personality-library')}
              className={`hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentTab === 'personality-library' ? 'text-teal-700 font-semibold' : ''
              }`}
            >
              Kamus 16 Tipe
            </button>
            <button
              onClick={() => onSelectTab('compatibility')}
              className={`hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentTab === 'compatibility' ? 'text-teal-700 font-semibold' : ''
              }`}
            >
              Kecocokan Partner
            </button>
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={onOpenShare}
              title="Bagikan Tautan Aplikasi"
              className="inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2 min-h-[38px] text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-teal-700" />
              <span className="hidden sm:inline">Bagikan</span>
            </button>
            <button
              onClick={onOpenHistory}
              title="Lihat Riwayat Hasil Tes"
              className="relative inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2 min-h-[38px] text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <History className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden sm:inline">Riwayat</span>
              {savedCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 text-[10px] font-bold bg-teal-600 text-white rounded-full">
                  {savedCount}
                </span>
              )}
            </button>
            <button
              onClick={() => onSelectTab('mbti-test')}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 min-h-[38px] text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="sm:hidden">Mulai Tes</span>
              <span className="hidden sm:inline">Mulai Tes MBTI</span>
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Submenu Bar */}
        <div className="lg:hidden flex items-center justify-start sm:justify-between overflow-x-auto py-2 border-t border-slate-100 gap-4 text-xs font-medium text-slate-600 scrollbar-none">
          <button
            onClick={() => onSelectTab('landing')}
            className={`whitespace-nowrap ${currentTab === 'landing' ? 'text-teal-700 font-bold' : ''}`}
          >
            Dasbor
          </button>
          <button
            onClick={() => onSelectTab('mbti-test')}
            className={`whitespace-nowrap ${currentTab === 'mbti-test' ? 'text-teal-700 font-bold' : ''}`}
          >
            Tes MBTI
          </button>
          <button
            onClick={() => onSelectTab('learning-style')}
            className={`whitespace-nowrap ${currentTab === 'learning-style' ? 'text-teal-700 font-bold' : ''}`}
          >
            Gaya Belajar
          </button>
          <button
            onClick={() => onSelectTab('riasec-test')}
            className={`whitespace-nowrap ${currentTab === 'riasec-test' ? 'text-teal-700 font-bold' : ''}`}
          >
            Minat Karier
          </button>
          <button
            onClick={() => onSelectTab('personality-library')}
            className={`whitespace-nowrap ${currentTab === 'personality-library' ? 'text-teal-700 font-bold' : ''}`}
          >
            16 Tipe
          </button>
          <button
            onClick={() => onSelectTab('compatibility')}
            className={`whitespace-nowrap ${currentTab === 'compatibility' ? 'text-teal-700 font-bold' : ''}`}
          >
            Kecocokan
          </button>
        </div>
      </div>
    </header>
  );
};
