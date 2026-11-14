import React from 'react';
import { MbtiResultData } from '../types/psychology';
import { MBTI_PROFILES } from '../data/mbtiProfiles';
import { History, X, Trash2, ArrowRight, Calendar, User } from 'lucide-react';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedResults: MbtiResultData[];
  onSelectResult: (result: MbtiResultData) => void;
  onDeleteResult: (id: string) => void;
  onClearAll: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  isOpen,
  onClose,
  savedResults,
  onSelectResult,
  onDeleteResult,
  onClearAll
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-900 to-teal-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-400/30 flex items-center justify-center">
              <History className="w-4 h-4 text-teal-300" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Riwayat Hasil Asesmen</h3>
              <p className="text-xs text-slate-300">Hasil tes MBTI yang tersimpan di perangkat ini</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {savedResults.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-xs">
              <History className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="font-semibold text-slate-700">Belum ada riwayat tes tersimpan.</p>
              <p className="mt-1">Selesaikan tes MBTI untuk melihat catatan hasil Anda di sini.</p>
            </div>
          ) : (
            savedResults.map((item) => {
              const profile = MBTI_PROFILES[item.type] || MBTI_PROFILES['INFP'];
              return (
                <div
                  key={item.id}
                  className="p-4 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-2xl transition-all flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-slate-900">
                        {item.type}
                      </span>
                      <span className="text-xs font-bold text-teal-800">
                        {profile.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3 text-slate-400" />
                        {item.student.fullName || 'Peserta'} ({item.student.grade})
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {item.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        onSelectResult(item);
                        onClose();
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>Buka</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => onDeleteResult(item.id)}
                      title="Hapus riwayat ini"
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {savedResults.length > 0 && (
          <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs shrink-0">
            <span className="text-slate-500">
              Total {savedResults.length} hasil tersimpan
            </span>
            <button
              onClick={() => {
                if (window.confirm('Hapus semua riwayat tes tersimpan?')) {
                  onClearAll();
                }
              }}
              className="text-rose-600 hover:text-rose-700 font-semibold cursor-pointer"
            >
              Hapus Semua
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
