import React, { useState } from 'react';
import { StudentProfile, MbtiResultData } from '../types/psychology';
import { MBTI_PROFILES } from '../data/mbtiProfiles';
import {
  Brain,
  Eye,
  Compass,
  Users,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Sparkles,
  Printer,
  ChevronDown,
  ChevronUp,
  UserCheck,
  Target,
  FileText
} from 'lucide-react';

interface LandingDashboardProps {
  studentProfile: StudentProfile;
  activeMbtiResult: MbtiResultData | null;
  savedResultsCount: number;
  onOpenProfileModal: () => void;
  onNavigateTab: (tab: string) => void;
  onOpenHistory: () => void;
}

export const LandingDashboard: React.FC<LandingDashboardProps> = ({
  studentProfile,
  activeMbtiResult,
  savedResultsCount,
  onOpenProfileModal,
  onNavigateTab,
  onOpenHistory
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const mbtiProfile = activeMbtiResult
    ? MBTI_PROFILES[activeMbtiResult.type] || MBTI_PROFILES['INFP']
    : null;

  // Calculate assessment readiness completion
  const completedAssessmentsCount = (activeMbtiResult ? 1 : 0) + (savedResultsCount > 1 ? 1 : 0);
  const readinessPercent = activeMbtiResult ? 100 : 35;

  const faqs = [
    {
      q: 'Berapa lama waktu yang dibutuhkan untuk menyelesaikan Tes MBTI di PSIKOLOGI EMPATI?',
      a: 'Tes MBTI terdiri dari 40 butir pertanyaan terfokus yang biasanya diselesaikan dalam waktu 10 hingga 15 menit. Anda dapat menjawabnya secara santai tanpa batas waktu ketat.'
    },
    {
      q: 'Apakah hasil tes ini cocok untuk perencanaan karier dan pengembangan tim kerja?',
      a: 'Sangat cocok! Laporan hasil menyediakan rekomendasi bidang karier, studi, dan peran profesional yang diklasifikasikan ke dalam kelompok Teknologi & Sains, Bisnis, Sosial & Humaniora, serta Kreatif & Terapan, diselaraskan dengan pola pikir alami Anda.'
    },
    {
      q: 'Apakah hasil asesmen bisa dicetak untuk portofolio atau diskusi dengan mentor/HR?',
      a: 'Anda dapat mencetak atau mengunduh "Laporan Hasil Asesmen" dalam format PDF resmi dengan menekan tombol Cetak/PDF. Lembar ini memuat rincian matriks polarisasi 4 dimensi MBTI yang siap dibagikan kepada mentor, konselor, maupun rekan tim.'
    },
    {
      q: 'Apakah jawaban saya aman dan tersimpan jika koneksi internet terputus?',
      a: 'Ya, seluruh jawaban dan profil Anda tersimpan secara otomatis di memori peramban (browser local storage). Anda bisa melanjutkan pengisian draf kapan saja tanpa perlu mengulang dari awal.'
    }
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-900 via-slate-900 to-slate-950 text-white pt-14 pb-20 sm:pt-20 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-300">
                <span className="font-bold tracking-wide uppercase">PSIKOLOGI EMPATI · Asesmen Kepribadian Umum</span>
                <span aria-hidden="true">·</span>
                <span>Berbasis MBTI, VAK & RIASEC</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Kenali Karakter Diri, Gaya Belajar &{' '}
                <span className="text-teal-400">Potensi Karier Terbaik</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Layanan uji psikologi interaktif terpadu untuk masyarakat umum, profesional, mahasiswa, dan tim kerja. Temukan potensi kognitif alami, arah pengembangan karier yang tepat, dan strategi produktivitas yang efektif.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => onNavigateTab('mbti-test')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>{activeMbtiResult ? 'Ikuti Tes MBTI Ulang' : 'Mulai Tes MBTI (Gratis)'}</span>
                </button>

                <a
                  href="#dashboard-center"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Buka Dasbor Asesmen</span>
                  <ArrowRight className="w-4 h-4 text-teal-400" />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-4 border-t border-slate-800/80">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" /> 40 Soal MBTI Kontekstual Umum
                </span>
                <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" /> Pemetaan Karier & Pengembangan Diri
                </span>
                <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" /> Lembar Laporan Siap Cetak (PDF)
                </span>
              </div>
            </div>

            {/* Hero Quick Preview Card */}
            <div className="w-full lg:max-w-md bg-slate-800/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-700 shadow-2xl text-left">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-sm">
                    <Brain className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Status Asesmen Peserta</h3>
                    <p className="text-xs text-slate-400">{studentProfile.schoolName || 'Umum / Indonesia'}</p>
                  </div>
                </div>

                <button
                  onClick={onOpenProfileModal}
                  className="text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors cursor-pointer"
                >
                  Ubah
                </button>
              </div>

              <div className="py-4 space-y-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Nama Lengkap:</span>
                  <span className="font-bold text-white">{studentProfile.fullName || 'Peserta Asesmen'}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Kategori / Profesi:</span>
                  <span className="font-semibold text-slate-200">{studentProfile.grade}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Minat / Tujuan:</span>
                  <span className="font-semibold text-teal-300">{studentProfile.targetMajor || 'Eksplorasi Terbuka'}</span>
                </div>
              </div>

              {activeMbtiResult ? (
                <div className="mt-3 p-4 bg-teal-950/60 border border-teal-500/40 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-teal-300 uppercase">Tipe Teridentifikasi</span>
                    <span className="text-xs font-bold text-white">{activeMbtiResult.date}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white">{activeMbtiResult.type}</span>
                    <span className="text-xs font-bold text-teal-300">— {mbtiProfile?.title}</span>
                  </div>
                  <button
                    onClick={() => onNavigateTab('mbti-result')}
                    className="w-full mt-2 py-2 text-xs font-bold text-center text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors cursor-pointer block"
                  >
                    Buka Laporan Hasil Lengkap
                  </button>
                </div>
              ) : (
                <div className="mt-3 p-4 bg-slate-900/80 border border-slate-700 rounded-2xl text-center space-y-2">
                  <p className="text-xs text-slate-300">
                    Belum ada hasil asesmen MBTI tersimpan untuk sesi ini.
                  </p>
                  <button
                    onClick={() => onNavigateTab('mbti-test')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-all cursor-pointer"
                  >
                    <span>Mulai Tes MBTI Sekarang</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Center */}
      <section id="dashboard-center" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
          {/* Dashboard Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-1">
                <span>Pusat Kendali Asesmen PSIKOLOGI EMPATI</span>
                <span aria-hidden="true">·</span>
                <span>Akses Umum</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Halo, {studentProfile.fullName || 'Sahabat Empati'}!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Pantau progres uji psikologi, kenali cara kerja otak dan gaya belajar Anda, serta petakan arah karier yang paling sesuai.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={onOpenProfileModal}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                <UserCheck className="w-3.5 h-3.5 text-slate-600" />
                <span>Ubah Biodata</span>
              </button>
              {savedResultsCount > 0 && (
                <button
                  onClick={onOpenHistory}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Riwayat ({savedResultsCount})</span>
                </button>
              )}
            </div>
          </div>

          {/* 3 Core Tools Status Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Tool 1: MBTI */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:border-teal-500/50 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                    <Brain className="w-5 h-5 text-teal-700" />
                  </div>
                  {activeMbtiResult ? (
                    <span className="text-xs font-bold px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-md">
                      Selesai ({activeMbtiResult.type})
                    </span>
                  ) : (
                    <span className="text-xs font-semibold px-2 py-0.5 bg-slate-200 text-slate-600 rounded-md">
                      Belum Selesai
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Tes Kepribadian MBTI
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    40 soal pemetaan 4 dimensi kepribadian, kekuatan personal, gaya komunikasi, serta dinamika kolaborasi tim.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                {activeMbtiResult ? (
                  <button
                    onClick={() => onNavigateTab('mbti-result')}
                    className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Lihat Laporan Hasil</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => onNavigateTab('mbti-test')}
                    className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Mulai Tes (10 Mnt)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Tool 2: VAK Learning Style */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:border-teal-500/50 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                    <Eye className="w-5 h-5 text-amber-700" />
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-slate-200 text-slate-600 rounded-md">
                    12 Pertanyaan
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Gaya Belajar (VAK)
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Identifikasi modalitas sensori utama: Visual, Auditori, atau Kinestetik agar penyerapan ilmu dan skill baru lebih cepat.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  onClick={() => onNavigateTab('learning-style')}
                  className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Cek Gaya Belajar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Tool 3: Holland RIASEC */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:border-teal-500/50 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
                    <Compass className="w-5 h-5 text-indigo-700" />
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-slate-200 text-slate-600 rounded-md">
                    18 Butir Minat
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Minat Karier (RIASEC)
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Pemetaan minat kerja model Holland untuk mencocokkan bidang profesi, bisnis, maupun studi yang paling sesuai.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  onClick={() => onNavigateTab('riasec-test')}
                  className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Analisis Minat Karier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Result Quick Banner (if exists) */}
          {activeMbtiResult && mbtiProfile && (
            <div className="p-6 bg-gradient-to-r from-teal-50 via-teal-50/40 to-slate-50 border border-teal-200 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-slate-900">{activeMbtiResult.type}</span>
                  <span className="text-base font-bold text-teal-800">— {mbtiProfile.title}</span>
                </div>
                <p className="text-xs text-slate-600 max-w-xl">
                  {mbtiProfile.summary}
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                  <span>Energi: Dominan {activeMbtiResult.dimensionScores.EI.dominant}</span>
                  <span aria-hidden="true">·</span>
                  <span>Informasi: Dominan {activeMbtiResult.dimensionScores.SN.dominant}</span>
                  <span aria-hidden="true">·</span>
                  <span>Keputusan: Dominan {activeMbtiResult.dimensionScores.TF.dominant}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={() => onNavigateTab('mbti-result')}
                  className="px-4 py-2 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition-all cursor-pointer"
                >
                  Lihat Hasil Lengkap
                </button>
                <button
                  onClick={() => window.print()}
                  className="p-2 text-slate-700 hover:text-teal-800 bg-white border border-slate-200 rounded-xl transition-all cursor-pointer"
                  title="Cetak Laporan PDF"
                >
                  <Printer className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Personal & Career Roadmap */}
          <div className="pt-2">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-teal-700" />
              <span>Peta Pengembangan Diri & Karier di Setiap Fase Kehidupan</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                  Tahap 1 · Eksplorasi
                </span>
                <h4 className="text-xs font-bold text-slate-900">Kenali Kekuatan & Talenta Alami</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cocok bagi pelajar, mahasiswa, maupun pencari kerja untuk menemukan pola pikir dominan dan bidang studi atau profesi yang paling memberi energi.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                  Tahap 2 · Akselerasi
                </span>
                <h4 className="text-xs font-bold text-slate-900">Optimasi Produktivitas & Kerja Tim</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bantu profesional dan wirausaha memahami ritme kerja pribadi, gaya komunikasi lintas karakter, dan metode penyerapan skill baru yang paling efisien.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                  Tahap 3 · Transformasi
                </span>
                <h4 className="text-xs font-bold text-slate-900">Kepemimpinan & Transisi Karier</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Panduan refleksi strategis bagi pemimpin tim atau individu yang merencanakan alih profesi agar selaras dengan nilai hidup dan kecenderungan empatik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section: Why Psychology Testing Matters */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
            Manfaat Terapan Asesmen
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Mengapa Asesmen Psikologi Penting Untuk Anda?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Memahami cara kerja pikiran sendiri adalah fondasi utama dalam mengambil keputusan karier, relasi, dan pengembangan diri yang lebih tepat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Pemilihan Karier Tepat Sasaran</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mengurangi risiko salah langkah dalam memilih profesi, bidang usaha, atau jalur studi dengan mencocokkan profil kognitif dan minat kerja Anda.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Optimalisasi Belajar & Skill Baru</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mengetahui apakah otak Anda menyerap informasi paling cepat lewat visualisasi diagram, diskusi audio, atau simulasi praktik langsung.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Kesehatan Mental & Anti-Burnout</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mengenali pemicu kejenuhan kerja maupun tekanan emosional serta menyusun strategi pemulihan energi yang sesuai dengan karakter pribadi.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Sinergi Tim & Relasi Empatik</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Memahami gaya komunikasi pasangan, rekan kerja, maupun anggota tim agar kolaborasi berjalan lebih harmonis dan minim kesalahpahaman.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tool Banner: Partner Compatibility */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>Fitur Eksklusif Kolaborasi & Relasi</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Cek Kecocokan Partner Kerja, Tim & Relasi
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Pilih tipe MBTI Anda dan partner Anda untuk melihat indeks keselarasan kerja sama, pembagian peran ideal, dan tips komunikasi yang membangun empati.
            </p>
          </div>

          <button
            onClick={() => onNavigateTab('compatibility')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Bandingkan Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Testimonials / Social Proof Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
            Cerita Pengguna PSIKOLOGI EMPATI
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Pengalaman Pengguna Asesmen
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Dengarkan bagaimana berbagai kalangan memanfaatkan laporan asesmen ini untuk pengembangan karier, tim, dan diri pribadi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "Sempat ragu mengambil jalur karier manajerial atau tetap menjadi spesialis teknis. Hasil tes MBTI dan RIASEC di sini menunjukkan profil INTP dengan skor Investigatif kuat, sehingga saya lebih yakin mengambil peran Product Architect."
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center">
                FR
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Fajar Ramadhan</p>
                <p className="text-[11px] text-slate-500">Product Designer · Bandung</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "Instrumen ini sangat praktis untuk sesi coaching dan pemetaan tim kerja. Pertanyaannya relevan dengan keseharian di kantor maupun kehidupan pribadi, dan fitur cetak laporan PDF-nya rapi untuk dokumentasi HR."
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xs flex items-center justify-center">
                KS
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Kartika Sari, M.Psi</p>
                <p className="text-[11px] text-slate-500">People Development Lead · Jakarta</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "Tes gaya belajar VAK-nya benar-benar membantu saat saya mengambil sertifikasi profesi! Ternyata saya dominan Kinestetik, jadi setelah beralih ke simulasi proyek nyata, pemahaman materi meningkat pesat."
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center">
                NA
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Nadia Amanda</p>
                <p className="text-[11px] text-slate-500">Wirausaha & Konten Kreator · Yogyakarta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
            Pusat Informasi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Hal-hal mendasar yang perlu Anda ketahui sebelum dan sesudah menjalani asesmen.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
