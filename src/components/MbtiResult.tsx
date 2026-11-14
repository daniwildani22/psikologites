import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MbtiResultData } from '../types/psychology';
import { MBTI_PROFILES } from '../data/mbtiProfiles';
import {
  Printer,
  Share2,
  RotateCcw,
  BookOpen,
  GraduationCap,
  Briefcase,
  Lightbulb,
  Check,
  AlertTriangle,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  Trophy
} from 'lucide-react';

interface MbtiResultProps {
  result: MbtiResultData;
  onRetest: () => void;
  onCompareWith: (type: string) => void;
  onSwitchToLearningStyle: () => void;
}

export const MbtiResult: React.FC<MbtiResultProps> = ({
  result,
  onRetest,
  onCompareWith,
  onSwitchToLearningStyle
}) => {
  const profile = MBTI_PROFILES[result.type] || MBTI_PROFILES['INFP'];
  const [activeTab, setActiveTab] = useState<'overview' | 'majors' | 'study' | 'friendship'>('overview');
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    const text = `Hasil Tes MBTI saya adalah ${result.type} (${profile.title})! Temukan tipe kepribadian dan potensi kariermu di PSIKOLOGI EMPATI.`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } else {
      alert(text);
    }
  };

  // Dimension details helper
  const dimensions = [
    {
      key: 'EI',
      label: 'Orientasi Energi',
      leftLetter: 'E',
      leftName: 'Ekstrovert',
      rightLetter: 'I',
      rightName: 'Introvert',
      score: result.dimensionScores.EI,
      desc:
        result.dimensionScores.EI.dominant === 'E'
          ? 'Anda mendapatkan energi dari interaksi sosial ramai dan aktivitas dinamis bersama banyak orang.'
          : 'Anda mendapatkan ketenangan dan energi melalui refleksi mendalam serta waktu mandiri.'
    },
    {
      key: 'SN',
      label: 'Pemrosesan Informasi',
      leftLetter: 'S',
      leftName: 'Sensing (Fakta)',
      rightLetter: 'N',
      rightName: 'Intuisi (Konsep)',
      score: result.dimensionScores.SN,
      desc:
        result.dimensionScores.SN.dominant === 'S'
          ? 'Anda fokus pada fakta nyata, data empiris terbukti, dan penerapan praktis dalam kehidupan nyata.'
          : 'Anda tertarik pada ide-ide baru, gambaran masa depan, makna tersirat, dan teori kreatif.'
    },
    {
      key: 'TF',
      label: 'Pengambilan Keputusan',
      leftLetter: 'T',
      leftName: 'Thinking (Logika)',
      rightLetter: 'F',
      rightName: 'Feeling (Nilai/Rasa)',
      score: result.dimensionScores.TF,
      desc:
        result.dimensionScores.TF.dominant === 'T'
          ? 'Anda memprioritaskan prinsip keadilan rasional, konsistensi hukum logika, dan objektivitas data.'
          : 'Anda mengutamakan harmoni sosial, empati kemanusiaan, dan dampak emosional pada orang lain.'
    },
    {
      key: 'JP',
      label: 'Gaya Hidup & Pola Kerja',
      leftLetter: 'J',
      leftName: 'Judging (Terencana)',
      rightLetter: 'P',
      rightName: 'Perceiving (Fleksibel)',
      score: result.dimensionScores.JP,
      desc:
        result.dimensionScores.JP.dominant === 'J'
          ? 'Anda menyukai perencanaan matang, ketepatan jadwal, kerapian, dan kepastian penyelesaian tugas.'
          : 'Anda menyukai kebebasan spontan, adaptif terhadap situasi baru, dan terbuka pada beragam alternatif.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 py-8"
    >
      {/* Triumphant Student Achievement Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', damping: 15, stiffness: 120 }}
        className="no-print mb-6 p-4 sm:p-5 bg-gradient-to-r from-teal-700 via-teal-800 to-slate-900 text-white rounded-3xl shadow-lg border border-teal-600/40 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden"
      >
        <div className="flex items-center gap-3.5 z-10 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
            <Trophy className="w-6 h-6 text-amber-300 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-teal-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Asesmen Psikologi Selesai & Terverifikasi</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              Selamat, {result.student.fullName || 'Sahabat Empati'}! Peta Kepribadianmu Telah Terbit
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:flex items-center gap-2 z-10 shrink-0 w-full sm:w-auto">
          <button
            onClick={handleShare}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 min-h-[42px] text-xs font-semibold text-white bg-white/15 hover:bg-white/25 rounded-xl backdrop-blur-sm transition-all cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? 'Tersalin!' : 'Bagikan'}</span>
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[42px] text-xs font-bold text-slate-950 bg-teal-300 hover:bg-teal-200 rounded-xl shadow-md transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak PDF</span>
          </button>
        </div>

        {/* Ambient background glow decoration */}
        <div className="absolute right-0 top-0 bottom-0 w-64 bg-teal-400/10 blur-3xl pointer-events-none" />
      </motion.div>

      {/* Main Result Hero Card with Spring Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
        className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-8 relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <span className="font-bold text-teal-800 uppercase tracking-wider">
                Kelompok {profile.group}
              </span>
              <span aria-hidden="true">·</span>
              <span>{result.student.fullName || 'Peserta Asesmen'}</span>
              <span aria-hidden="true">·</span>
              <span>{result.student.grade}</span>
            </div>

            <div className="flex items-baseline gap-4 flex-wrap">
              {/* Animated MBTI Code */}
              <motion.h1
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 140, damping: 12 }}
                className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight"
              >
                {result.type}
              </motion.h1>

              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="text-2xl sm:text-3xl font-bold text-teal-800"
              >
                {profile.title}
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-sm font-semibold text-slate-600 mt-2 max-w-2xl"
            >
              {profile.badge}
            </motion.p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0 bg-teal-50/70 border border-teal-100 rounded-2xl p-4">
            <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider flex items-center gap-1">
              <Award className="w-3.5 h-3.5" /> Verifikasi PSIKOLOGI EMPATI
            </span>
            <span className="text-xs text-slate-700">
              Instansi/Domisili: <strong>{result.student.schoolName || 'Umum / Indonesia'}</strong>
            </span>
            {result.student.targetMajor && (
              <span className="text-xs text-slate-600">
                Minat/Tujuan: <strong>{result.student.targetMajor}</strong>
              </span>
            )}
          </div>
        </div>

        {/* Quote & Summary */}
        <div className="py-6">
          <blockquote className="text-base sm:text-lg italic text-slate-700 font-medium mb-3 border-l-3 border-teal-500 pl-4 py-1">
            {profile.quote}
          </blockquote>
          <p className="text-sm text-slate-600 leading-relaxed">
            {profile.summary}
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {profile.traits.map((t, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-md"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Dichotomies Visual Balance Bars with Live Width Animation */}
        <div className="pt-8 border-t border-slate-100">
          <h3 className="text-base font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Award className="w-4 h-4 text-teal-700" />
            <span>Peta Keseimbangan 4 Dimensi Kepribadian</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dimensions.map((dim, idx) => {
              const isDominantFirst = dim.score.dominant === dim.leftLetter;
              return (
                <motion.div
                  key={dim.key}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4.5 space-y-2.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">{dim.label}</span>
                    <span className="text-teal-800 font-semibold text-[11px] bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                      Dominan {dim.score.dominant} ({dim.score.dominant === dim.leftLetter ? dim.score.firstPercentage : dim.score.secondPercentage}%)
                    </span>
                  </div>

                  {/* Dual Bar Graphic with Live Animate Width */}
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5 text-[11px] sm:text-xs font-medium tabular-nums">
                      <span className={isDominantFirst ? 'text-teal-900 font-bold' : 'text-slate-500'}>
                        {dim.leftLetter} - {dim.leftName} ({dim.score.firstPercentage}%)
                      </span>
                      <span className={!isDominantFirst ? 'text-teal-900 font-bold' : 'text-slate-500'}>
                        ({dim.score.secondPercentage}%) {dim.rightName} - {dim.rightLetter}
                      </span>
                    </div>

                    <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden flex p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${dim.score.firstPercentage}%` }}
                        transition={{ delay: 0.4 + idx * 0.1, duration: 0.8, ease: 'easeOut' }}
                        className={`h-full rounded-l-full ${
                          isDominantFirst ? 'bg-teal-600 shadow-xs' : 'bg-slate-300'
                        }`}
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${dim.score.secondPercentage}%` }}
                        transition={{ delay: 0.4 + idx * 0.1, duration: 0.8, ease: 'easeOut' }}
                        className={`h-full rounded-r-full ${
                          !isDominantFirst ? 'bg-teal-600 shadow-xs' : 'bg-slate-300'
                        }`}
                      />
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {dim.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Interactive Tabs for In-Depth Exploration */}
      <div className="no-print mb-6 grid grid-cols-2 sm:flex sm:items-center gap-1.5 sm:gap-1 p-1.5 sm:p-1 bg-slate-200/80 rounded-xl">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-3 sm:px-4 py-2.5 sm:py-2 text-xs font-semibold rounded-lg transition-all text-center whitespace-nowrap cursor-pointer ${
            activeTab === 'overview'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Kekuatan & Pertumbuhan
        </button>
        <button
          onClick={() => setActiveTab('majors')}
          className={`px-3 sm:px-4 py-2.5 sm:py-2 text-xs font-semibold rounded-lg transition-all text-center whitespace-nowrap cursor-pointer ${
            activeTab === 'majors'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Karier & Bidang
        </button>
        <button
          onClick={() => setActiveTab('study')}
          className={`px-3 sm:px-4 py-2.5 sm:py-2 text-xs font-semibold rounded-lg transition-all text-center whitespace-nowrap cursor-pointer ${
            activeTab === 'study'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Strategi Produktivitas
        </button>
        <button
          onClick={() => setActiveTab('friendship')}
          className={`px-3 sm:px-4 py-2.5 sm:py-2 text-xs font-semibold rounded-lg transition-all text-center whitespace-nowrap cursor-pointer ${
            activeTab === 'friendship'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Relasi & Tim
        </button>
      </div>

      {/* Animated Tab Content using AnimatePresence */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Kekuatan Utama Sehari-hari</span>
              </h3>
              <ul className="space-y-3">
                {profile.strengths.map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Titik Rawan & Area Pengembangan Diri</span>
              </h3>
              <ul className="space-y-3">
                {profile.weaknesses.map((weak, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                    <span>{weak}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {activeTab === 'majors' && (
          <motion.div
            key="majors"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-6 mb-8"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
                <GraduationCap className="w-4 h-4 text-teal-700" />
                <span>Rekomendasi Bidang Karier, Profesi & Pengembangan</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Bidang Karier & Studi yang Paling Selaras dengan Karakter {result.type}
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Rekomendasi ini disusun berdasarkan kecocokan pola pikir alami tipe kepribadian {result.type} dengan tuntutan peran profesional maupun lingkungan belajar.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {profile.recommendedMajors.map((cat, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-teal-800 tracking-wide uppercase">
                        {cat.category}
                      </span>
                      <ul className="mt-3 space-y-1.5">
                        {cat.majors.map((m, mIdx) => (
                          <li key={mIdx} className="text-xs font-semibold text-slate-800 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-[11px] text-slate-600 mt-4 pt-3 border-t border-slate-200/80 italic leading-relaxed">
                      {cat.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-slate-700" />
                <span>Contoh Profesi & Peran Unggulan</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {profile.careerProspects.map((cp, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center text-xs font-semibold text-slate-800"
                  >
                    {cp}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'study' && (
          <motion.div
            key="study"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-6 mb-8"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
                <Lightbulb className="w-4 h-4 text-teal-700" />
                <span>Metode Belajar & Kerja Efektif untuk Tipe {result.type}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Tips Menguasai Skill Baru & Menjaga Produktivitas
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {profile.studyTips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-teal-50/50 border border-teal-100 rounded-2xl space-y-2"
                  >
                    <span className="text-xs font-bold text-teal-900">Strategi {idx + 1}</span>
                    <p className="text-xs text-slate-700 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Ingin tahu modalitas sensori belajar Anda?</h4>
                  <p className="text-xs text-slate-600">Lakukan tes cepat Visual, Auditori, atau Kinestetik (VAK) untuk melengkapi hasil ini.</p>
                </div>
                <button
                  onClick={onSwitchToLearningStyle}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-xl whitespace-nowrap cursor-pointer shrink-0"
                >
                  <span>Tes Gaya Belajar (VAK)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'friendship' && (
          <motion.div
            key="friendship"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-slate-700" />
                <span>Dinamika Sikap di Lingkungan Kerja & Tim</span>
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                {profile.classroomBehavior}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-700" />
                <span>Saran Komunikasi & Relasi Sosial</span>
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                {profile.friendshipAdvice}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compare Partner Section Banner */}
      <div className="no-print bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
            Eksplorasi Lanjutan
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            Bandingkan Kecocokan Kerja & Relasi dengan Partner Anda
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Cari tahu bagaimana tipe {result.type} berkolaborasi dalam proyek tim atau relasi bersama partner yang memiliki tipe kepribadian berbeda.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onRetest}
            className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Tes Ulang
          </button>
          <button
            onClick={() => onCompareWith(result.type)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Bandingkan Tipe</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
