import React, { useState } from 'react';
import { Share2, Copy, Check, X, Smartphone, Globe, Laptop, MessageCircle, QrCode } from 'lucide-react';

interface ShareAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareAppModal: React.FC<ShareAppModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const shareText = `Halo! Yuk coba Asesmen Psikologi MBTI, Gaya Belajar & Minat Karier di PSIKOLOGI EMPATI: ${currentUrl}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } else {
      prompt('Salin tautan ini:', currentUrl);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-teal-800 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-400/30 flex items-center justify-center">
              <Share2 className="w-4 h-4 text-teal-300" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Bagikan Program Asesmen</h3>
              <p className="text-xs text-teal-100/80">Dapat langsung diakses siapa saja secara praktis</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Answer to user's question highlighted */}
          <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-900">
              <Globe className="w-4 h-4 text-teal-700" />
              <span>Apakah butuh beli Domain atau Hosting?</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>TIDAK PERLU!</strong> Program ini sudah otomatis aktif di cloud dan memiliki tautan web publik resmi. Siapa pun (rekan kerja, komunitas, tim HR, maupun masyarakat umum) dapat langsung membuka dan mengerjakan tes dari HP maupun laptop tanpa perlu mengunduh aplikasi atau membayar hosting.
            </p>
          </div>

          {/* Quick Copy Link Box */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800">
              Tautan Langsung Aplikasi PSIKOLOGI EMPATI:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="flex-1 px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl font-mono text-slate-700 select-all focus:outline-none"
              />
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition-all cursor-pointer shrink-0"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Tersalin!' : 'Salin Tautan'}</span>
              </button>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-emerald-800 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Bagikan ke WhatsApp / Komunitas</span>
            </a>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'PSIKOLOGI EMPATI',
                    text: 'Tes Kepribadian MBTI, Gaya Belajar & Minat Karier',
                    url: currentUrl
                  }).catch(() => {});
                } else {
                  handleCopy();
                }
              }}
              className="p-3 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-slate-800 transition-colors cursor-pointer"
            >
              <Smartphone className="w-4 h-4 text-slate-600" />
              <span>Buka Menu Berbagi di HP</span>
            </button>
          </div>

          {/* Methods to Run the App Guide */}
          <div className="border-t border-slate-100 pt-5 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              3 Cara Menjalankan & Membagikan Program Ini:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-bold text-teal-800 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" /> 1. Langsung Online
                </span>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Cukup sebarkan tautan URL ini ke rekan atau peserta. Otomatis jalan di semua HP Android, iPhone, dan laptop.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-bold text-teal-800 flex items-center gap-1">
                  <Laptop className="w-3.5 h-3.5" /> 2. Di Laptop / Kantor
                </span>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Bisa dijalankan di jaringan lokal / offline acara pelatihan atau ruang kerja dengan `npm run preview`.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-bold text-teal-800 flex items-center gap-1">
                  <QrCode className="w-3.5 h-3.5" /> 3. Scan QR di Acara
                </span>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Tampilkan tautan di layar presentasi seminar atau workshop agar seluruh peserta dapat mengakses serentak.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
