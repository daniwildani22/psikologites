import React from 'react';
import { MbtiResultData } from '../types/psychology';
import { MBTI_PROFILES } from '../data/mbtiProfiles';

interface PrintReportProps {
  result: MbtiResultData | null;
}

export const PrintReport: React.FC<PrintReportProps> = ({ result }) => {
  if (!result) return null;
  const profile = MBTI_PROFILES[result.type] || MBTI_PROFILES['INFP'];

  return (
    <div className="print-only p-8 bg-white text-slate-900 max-w-4xl mx-auto">
      {/* Official Header / Kop Surat */}
      <div className="border-b-2 border-slate-900 pb-4 mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight uppercase text-slate-900">
            PSIKOLOGI EMPATI
          </h1>
          <p className="text-xs font-semibold text-slate-700">
            Divisi Asesmen Psikologi & Pengembangan Potensi Diri
          </p>
          <p className="text-[10px] text-slate-500 mt-0.5">
            Layanan Pemetaan Kepribadian MBTI, Gaya Belajar & Minat Karier untuk Umum
          </p>
        </div>
        <div className="text-right text-[11px] text-slate-600">
          <p className="font-bold text-slate-900">LAPORAN HASIL ASESMEN</p>
          <p>No. Ref: {result.id}</p>
          <p>Tanggal: {result.date}</p>
        </div>
      </div>

      {/* Participant Biodata Box */}
      <div className="border border-slate-300 rounded-lg p-4 mb-6 text-xs bg-slate-50/50">
        <h2 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">
          Identitas Peserta Asesmen
        </h2>
        <div className="grid grid-cols-2 gap-y-1.5 text-xs">
          <div>
            <span className="text-slate-500 inline-block w-28">Nama Lengkap:</span>
            <span className="font-bold text-slate-900">{result.student.fullName || 'Peserta'}</span>
          </div>
          <div>
            <span className="text-slate-500 inline-block w-28">Kategori / Profesi:</span>
            <span className="font-semibold text-slate-800">{result.student.grade}</span>
          </div>
          <div>
            <span className="text-slate-500 inline-block w-28">Instansi / Domisili:</span>
            <span className="font-semibold text-slate-800">{result.student.schoolName || 'Umum / Indonesia'}</span>
          </div>
          <div>
            <span className="text-slate-500 inline-block w-28">Minat / Tujuan:</span>
            <span className="font-semibold text-slate-800">{result.student.targetMajor || 'Pengembangan Diri'}</span>
          </div>
        </div>
      </div>

      {/* Main Diagnosis */}
      <div className="border border-slate-300 rounded-lg p-5 mb-6 text-center bg-teal-50/30">
        <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider">
          Klasifikasi Tipe Kepribadian (MBTI)
        </span>
        <div className="text-3xl font-black text-slate-900 mt-1">
          {result.type} — {profile.title}
        </div>
        <p className="text-xs text-slate-700 font-medium mt-1">
          {profile.badge}
        </p>
        <p className="text-xs text-slate-600 mt-2 max-w-2xl mx-auto italic">
          "{profile.quote}"
        </p>
      </div>

      {/* 4 Dichotomies Table */}
      <div className="mb-6">
        <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-2">
          Peta Polarisasi 4 Dimensi MBTI
        </h3>
        <table className="w-full text-xs border border-slate-300 border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-700 text-left">
              <th className="p-2 border border-slate-300">Dimensi Psikologis</th>
              <th className="p-2 border border-slate-300 text-center">Kutub Dominan</th>
              <th className="p-2 border border-slate-300 text-center">Persentase</th>
              <th className="p-2 border border-slate-300">Implikasi Perilaku & Produktivitas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-slate-300 font-semibold">Orientasi Energi</td>
              <td className="p-2 border border-slate-300 text-center font-bold">
                {result.dimensionScores.EI.dominant === 'E' ? 'Extraversion (E)' : 'Introversion (I)'}
              </td>
              <td className="p-2 border border-slate-300 text-center tabular-nums">
                {result.dimensionScores.EI.dominant === 'E' ? result.dimensionScores.EI.firstPercentage : result.dimensionScores.EI.secondPercentage}%
              </td>
              <td className="p-2 border border-slate-300 text-[11px]">
                {result.dimensionScores.EI.dominant === 'E' ? 'Produktif saat berinteraksi aktif & kolaborasi tim' : 'Konsentrasi optimal saat bekerja atau berkarya mandiri di ruang tenang'}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-slate-300 font-semibold">Pengolahan Informasi</td>
              <td className="p-2 border border-slate-300 text-center font-bold">
                {result.dimensionScores.SN.dominant === 'S' ? 'Sensing (S)' : 'Intuition (N)'}
              </td>
              <td className="p-2 border border-slate-300 text-center tabular-nums">
                {result.dimensionScores.SN.dominant === 'S' ? result.dimensionScores.SN.firstPercentage : result.dimensionScores.SN.secondPercentage}%
              </td>
              <td className="p-2 border border-slate-300 text-[11px]">
                {result.dimensionScores.SN.dominant === 'S' ? 'Fokus pada fakta nyata, data empiris, dan tahapan praktis' : 'Fokus pada gambaran besar, visi masa depan, dan inovasi konsep'}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-slate-300 font-semibold">Pengambilan Keputusan</td>
              <td className="p-2 border border-slate-300 text-center font-bold">
                {result.dimensionScores.TF.dominant === 'T' ? 'Thinking (T)' : 'Feeling (F)'}
              </td>
              <td className="p-2 border border-slate-300 text-center tabular-nums">
                {result.dimensionScores.TF.dominant === 'T' ? result.dimensionScores.TF.firstPercentage : result.dimensionScores.TF.secondPercentage}%
              </td>
              <td className="p-2 border border-slate-300 text-[11px]">
                {result.dimensionScores.TF.dominant === 'T' ? 'Menilai secara objektif, logis, dan menjunjung keadilan aturan' : 'Menimbang empati, harmoni relasi, dan dampak kemanusiaan'}
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-slate-300 font-semibold">Gaya Hidup & Pola Kerja</td>
              <td className="p-2 border border-slate-300 text-center font-bold">
                {result.dimensionScores.JP.dominant === 'J' ? 'Judging (J)' : 'Perceiving (P)'}
              </td>
              <td className="p-2 border border-slate-300 text-center tabular-nums">
                {result.dimensionScores.JP.dominant === 'J' ? result.dimensionScores.JP.firstPercentage : result.dimensionScores.JP.secondPercentage}%
              </td>
              <td className="p-2 border border-slate-300 text-[11px]">
                {result.dimensionScores.JP.dominant === 'J' ? 'Terstruktur, disiplin jadwal, dan mencicil tugas sebelum deadline' : 'Fleksibel, adaptif terhadap perubahan, dan spontan'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Career & Development Recommendations */}
      <div className="mb-6">
        <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-2">
          Rekomendasi Bidang Karier & Pengembangan
        </h3>
        <div className="grid grid-cols-3 gap-3 text-xs">
          {profile.recommendedMajors.map((cat, idx) => (
            <div key={idx} className="border border-slate-300 p-2.5 rounded">
              <span className="font-bold text-slate-900 block border-b border-slate-200 pb-1 mb-1.5">
                {cat.category}
              </span>
              <ul className="text-[11px] text-slate-700 space-y-1">
                {cat.majors.map((m, mIdx) => (
                  <li key={mIdx}>• {m}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Counselor Sign-off */}
      <div className="pt-6 border-t border-slate-300 flex justify-between items-end text-xs text-slate-700">
        <div>
          <p className="font-semibold text-slate-800">Catatan Refleksi & Pengembangan:</p>
          <p className="text-[10px] text-slate-500 max-w-sm mt-0.5">
            Hasil asesmen ini bertujuan untuk memetakan kecenderungan potensi alami dan bukan batasan mutlak. Gunakan sebagai panduan pengembangan karier, relasi, dan pembelajaran berkelanjutan.
          </p>
        </div>
        <div className="text-center w-52">
          <p className="text-[11px] text-slate-500">Diverifikasi secara digital,</p>
          <div className="h-14 flex items-center justify-center italic text-slate-400 font-serif">
            [Terverifikasi Sistem Asesmen]
          </div>
          <p className="font-bold text-slate-900 border-t border-slate-400 pt-1">
            PSIKOLOGI EMPATI
          </p>
          <p className="text-[10px] text-slate-500">Platform Asesmen Kepribadian & Karier</p>
        </div>
      </div>
    </div>
  );
};
