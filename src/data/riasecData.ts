import { RiasecQuestion } from '../types/psychology';

export const RIASEC_QUESTIONS: RiasecQuestion[] = [
  // Realistic (R) - Praktis, Mesin, Alam, Lapangan [6 Soal]
  { id: 1, category: 'R', text: 'Saya senang memperbaiki peralatan elektronik yang rusak, merawat mesin kendaraan, atau merakit perangkat keras.' },
  { id: 2, category: 'R', text: 'Saya lebih menikmati aktivitas lapangan di alam terbuka (seperti survei lokasi, pertanian, atau olahraga luar ruang) daripada duduk diam di balik meja.' },
  { id: 3, category: 'R', text: 'Saya terampil mengoperasikan peralatan teknis presisi, perkakas tangan, atau instrumen kerja fisik.' },
  { id: 4, category: 'R', text: 'Saya menyukai pekerjaan yang menghasilkan produk fisik nyata seperti pertukangan, konstruksi, atau perakitan teknis.' },
  { id: 5, category: 'R', text: 'Saya tertarik memahami cara kerja mesin, instalasi listrik, atau mekanisme teknis suatu bangunan.' },
  { id: 6, category: 'R', text: 'Saya merasa lebih puas bekerja dengan tangan dan peralatan nyata daripada berurusan dengan berkas dokumen atau rapat panjang.' },

  // Investigative (I) - Riset, Sains, Analisis, Teori [6 Soal]
  { id: 7, category: 'I', text: 'Saya gemar meneliti fenomena ilmiah, memecahkan teka-teki logika yang menantang, atau membaca artikel riset mendalam.' },
  { id: 8, category: 'I', text: 'Saya selalu terdorong mencari tahu prinsip dasar dan bukti empiris di balik suatu sistem sebelum mempercayainya.' },
  { id: 9, category: 'I', text: 'Saya menikmati mengolah data statistik, merumuskan model analisis, atau membaca grafik untuk menemukan pola tren.' },
  { id: 10, category: 'I', text: 'Saya suka melakukan eksperimen terukur atau menguji hipotesis untuk membuktikan penyebab suatu masalah kompleks.' },
  { id: 11, category: 'I', text: 'Saya betah mempelajari topik teknologi, sains, atau pemrograman secara mendalam untuk menemukan cara kerja sistem.' },
  { id: 12, category: 'I', text: 'Saya lebih tertarik menganalisis masalah rumit secara mandiri daripada melakukan aktivitas pemasaran atau negosiasi.' },

  // Artistic (A) - Kreativitas, Desain, Sastra, Musik [6 Soal]
  { id: 13, category: 'A', text: 'Saya suka mengekspresikan ide melalui desain grafis, fotografi, penulisan kreatif, seni rupa, atau musik.' },
  { id: 14, category: 'A', text: 'Saya tidak suka bekerja dengan aturan yang terlalu kaku dan lebih menyukai kebebasan berimajinasi serta orisinalitas.' },
  { id: 15, category: 'A', text: 'Saya memiliki kepekaan tinggi terhadap keselarasan visual, estetika tata ruang, gaya busana, atau sinematografi.' },
  { id: 16, category: 'A', text: 'Saya gemar menciptakan konsep visual, cerita narasi, atau karya digital orisinal yang belum pernah ada sebelumnya.' },
  { id: 17, category: 'A', text: 'Saya menikmati menghadiri pameran seni, pertunjukan teater, konser musik, atau mengulas karya film.' },
  { id: 18, category: 'A', text: 'Lingkungan kerja yang memberi ruang ekspresi artistik dan kebebasan berkarya membuat saya jauh lebih produktif.' },

  // Social (S) - Pelayanan, Mengajar, Empati, Komunitas [6 Soal]
  { id: 19, category: 'S', text: 'Saya merasa sangat puas ketika dapat mendampingi orang lain mengatasi masalah, mengajar, atau menjadi mentor.' },
  { id: 20, category: 'S', text: 'Saya tertarik pada kegiatan sukarelawan, layanan kemanusiaan, pengembangan masyarakat, atau bidang kesehatan.' },
  { id: 21, category: 'S', text: 'Saya mudah memahami perasaan orang lain dan selalu berupaya membangun suasana interaksi yang hangat dan suportif.' },
  { id: 22, category: 'S', text: 'Saya senang melatih keahlian orang lain, memfasilitasi diskusi komunitas, atau menjadi tempat curhat yang konstruktif.' },
  { id: 23, category: 'S', text: 'Saya lebih bersemangat bekerja dalam peran yang berhubungan langsung membantu kebutuhan banyak orang daripada bekerja sendiri.' },
  { id: 24, category: 'S', text: 'Saya tertarik mendalami ilmu psikologi, pendidikan, layanan konseling, atau pemberdayaan SDM.' },

  // Enterprising (E) - Kepemimpinan, Bisnis, Negosiasi, Persuasi [6 Soal]
  { id: 25, category: 'E', text: 'Saya suka memimpin inisiatif proyek, mengelola organisasi/komunitas, dan menggerakkan tim menuju target bersama.' },
  { id: 26, category: 'E', text: 'Saya tertarik pada dunia kewirausahaan, strategi pemasaran, pengembangan bisnis, dan membaca peluang ekonomi baru.' },
  { id: 27, category: 'E', text: 'Saya percaya diri saat mempresentasikan gagasan di depan banyak orang atau bernegosiasi untuk mencapai kesepakatan terbaik.' },
  { id: 28, category: 'E', text: 'Saya menikmati tantangan menumbuhkan penjualan, meyakinkan klien, atau merancang strategi promosi yang kompetitif.' },
  { id: 29, category: 'E', text: 'Saya berani mengambil tanggung jawab sebagai pengambil keputusan utama dalam proyek tim atau bisnis.' },
  { id: 30, category: 'E', text: 'Saya bersemangat saat melihat peluang usaha baru dan menyusun langkah nyata untuk mewujudkannya menjadi profit.' },

  // Conventional (C) - Administrasi, Keteraturan, Data, Detail [6 Soal]
  { id: 31, category: 'C', text: 'Saya senang menata arsip dokumen, menyusun jadwal operasional secara teratur, dan membuat pembukuan keuangan yang rapi.' },
  { id: 32, category: 'C', text: 'Saya lebih nyaman bekerja dengan alur prosedur standar (SOP) yang jelas daripada instruksi yang terlalu terbuka atau ambigu.' },
  { id: 33, category: 'C', text: 'Saya teliti memeriksa kembali keakuratan angka, ejaan laporan, atau kepatuhan rincian sebelum pekerjaan diselesaikan.' },
  { id: 34, category: 'C', text: 'Saya gemar mengelola spreadsheet, mengatur inventaris barang, atau merapikan sistem database agar mudah dicari.' },
  { id: 35, category: 'C', text: 'Saya menyukai lingkungan kerja yang stabil, tertib administrasi, serta memiliki pembagian tugas yang terstruktur rapi.' },
  { id: 36, category: 'C', text: 'Menyusun laporan anggaran, audit kepatuhan, dan dokumentasi terperinci adalah aktivitas yang bisa saya tekuni dengan tekun.' }
];

function shuffleArray<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Mengambil 18 soal acak yang seimbang (3 soal dari setiap rumpun R, I, A, S, E, C)
 * lalu mengacak urutannya sehingga tiap sesi terasa segar dan berbeda.
 */
export function generateRandomRiasecSession(perCategory = 3): RiasecQuestion[] {
  const categories: Array<RiasecQuestion['category']> = ['R', 'I', 'A', 'S', 'E', 'C'];
  const selected: RiasecQuestion[] = [];

  for (const cat of categories) {
    const pool = shuffleArray(RIASEC_QUESTIONS.filter((q) => q.category === cat));
    selected.push(...pool.slice(0, perCategory));
  }

  return shuffleArray(selected);
}

export const RIASEC_PROFILES = {
  R: {
    code: 'R',
    name: 'Realistis (The Doers)',
    description: 'Menyukai pekerjaan praktis, nyata, manipulasi mesin, alat teknis, rekayasa konstruksi, dan aktivitas lapangan.',
    traits: ['Praktikal', 'Mekanikal', 'Pecinta Alam', 'Hands-on', 'Tangguh'],
    suggestedMajors: [
      'Teknik Mesin, Otomotif & Manufaktur',
      'Teknik Elektro, Mekatronika & Robotika',
      'Teknik Sipil, Konstruksi & Geodesi',
      'Agroteknologi, Kehutanan & Kelautan',
      'Keselamatan & Kesehatan Kerja (K3)',
      'Penerbangan, Maritim & Logistik Lapangan'
    ]
  },
  I: {
    code: 'I',
    name: 'Investigatif (The Thinkers)',
    description: 'Menyukai riset intelektual, observasi sains, analisis data mendalam, eksperimen, dan pemecahan masalah kompleks.',
    traits: ['Analitis', 'Intelektual', 'Rasional', 'Mandiri', 'Rasa Ingin Tahu Tinggi'],
    suggestedMajors: [
      'Ilmu Komputer, AI & Rekayasa Perangkat Lunak',
      'Kedokteran, Farmasi & Ilmu Biomedis',
      'Sains Data, Statistika & Matematika Terapan',
      'Riset Bioteknologi & Lingkungan',
      'Ekonomi Analitik & Kebijakan Publik',
      'Psikologi Kognitif & Riset Pasar'
    ]
  },
  A: {
    code: 'A',
    name: 'Artistik (The Creators)',
    description: 'Menyukai kebebasan berekspresi, orisinalitas karya, komposisi desain, literasi kreatif, media visual, dan seni.',
    traits: ['Kreatif', 'Ekspresif', 'Imajinatif', 'Autentik', 'Inovatif'],
    suggestedMajors: [
      'Desain Komunikasi Visual (DKV) & UI/UX',
      'Arsitektur & Desain Interior',
      'Produksi Film, Sinematografi & Animasi',
      'Penulisan Kreatif, Sastra & Jurnalistik',
      'Seni Rupa, Fotografi & Kuratorial',
      'Desain Produk, Mode & Tata Busana'
    ]
  },
  S: {
    code: 'S',
    name: 'Sosial (The Helpers)',
    description: 'Menyukai interaksi antar manusia yang bermakna, konseling, edukasi, pelayanan kesehatan, dan pemberdayaan komunitas.',
    traits: ['Empatis', 'Suportif', 'Ramah', 'Kooperatif', 'Peka Sosial'],
    suggestedMajors: [
      'Psikologi Klinis, Konseling & Terapi',
      'Pendidikan, Pelatihan & Pengembangan SDM',
      'Keperawatan, Kebidanan & Ilmu Gizi',
      'Kesehatan Masyarakat & Pekerjaan Sosial',
      'Sosiologi & Pemberdayaan Komunitas',
      'Layanan Pelanggan & Konsultasi Keluarga'
    ]
  },
  E: {
    code: 'E',
    name: 'Enterprising (The Persuaders)',
    description: 'Menyukai kepemimpinan strategis, kewirausahaan, negosiasi, pemasaran, manajemen proyek, dan pengambilan keputusan bisnis.',
    traits: ['Persuasif', 'Percaya Diri', 'Ambisius', 'Karismatik', 'Enerjik'],
    suggestedMajors: [
      'Manajemen Bisnis & Kewirausahaan',
      'Hukum Bisnis, Korporasi & Advokasi',
      'Pemasaran Digital, Branding & Penjualan',
      'Hubungan Masyarakat (PR) & Komunikasi Korporat',
      'Diplomasi & Hubungan Internasional',
      'Manajemen Proyek & Kepemimpinan Eksekutif'
    ]
  },
  C: {
    code: 'C',
    name: 'Konvensional (The Organizers)',
    description: 'Menyukai tata kelola data terstruktur, akuntansi teliti, audit kepatuhan, administrasi sistematis, dan efisiensi operasional.',
    traits: ['Metodis', 'Teliti', 'Disiplin', 'Teratur', 'Efisien'],
    suggestedMajors: [
      'Akuntansi, Audit Keuangan & Perpajakan',
      'Aktuaria, Manajemen Risiko & Asuransi',
      'Sistem Informasi & Manajemen Basis Data',
      'Administrasi Bisnis & Tata Kelola Perkantoran',
      'Manajemen Rantai Pasok & Kearsipan',
      'Perbankan, Keuangan Syariah & Fintech'
    ]
  }
};
