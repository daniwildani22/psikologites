import { Dimension, Question } from '../types/psychology';

export const MBTI_QUESTIONS: Question[] = [
  // =========================================================================
  // DIMENSI 1: EXTRAVERSION (E: '+') vs INTROVERSION (I: '-') [20 Soal]
  // =========================================================================
  {
    id: 1,
    dimension: 'EI',
    direction: '+',
    contextTag: 'Interaksi Sosial',
    text: 'Saat waktu istirahat atau di sela-sela kesibukan, saya lebih suka mengobrol santai bersama banyak rekan daripada menyendiri membaca atau berselancar di ponsel.'
  },
  {
    id: 2,
    dimension: 'EI',
    direction: '-',
    contextTag: 'Energi Personal',
    text: 'Setelah seharian penuh beraktivitas bersama banyak orang atau rapat tim, saya merasa butuh waktu tenang sendirian untuk mengisi ulang energi.'
  },
  {
    id: 3,
    dimension: 'EI',
    direction: '+',
    contextTag: 'Diskusi & Rapat',
    text: 'Dalam forum diskusi atau rapat kerja, saya biasanya spontan mengemukakan gagasan tanpa ragu sambil mengembangkan ide saat berbicara.'
  },
  {
    id: 4,
    dimension: 'EI',
    direction: '-',
    contextTag: 'Lingkaran Pertemanan',
    text: 'Saya lebih menikmati memiliki beberapa sahabat dekat yang saling memahami secara mendalam dibandingkan memiliki kenalan sangat banyak namun sekadarnya.'
  },
  {
    id: 5,
    dimension: 'EI',
    direction: '+',
    contextTag: 'Jejaring Baru',
    text: 'Saya merasa bersemangat dan antusias saat berkenalan dengan orang-orang baru di acara komunitas, seminar, atau pertemuan sosial.'
  },
  {
    id: 6,
    dimension: 'EI',
    direction: '-',
    contextTag: 'Fokus & Konsentrasi',
    text: 'Saya jauh lebih mudah berkonsentrasi menyelesaikan pekerjaan atau mempelajari keahlian baru di tempat yang tenang tanpa gangguan suara.'
  },
  {
    id: 7,
    dimension: 'EI',
    direction: '+',
    contextTag: 'Tampil di Publik',
    text: 'Saya tidak merasa canggung saat diminta berbicara, memimpin acara, atau melakukan presentasi di hadapan audiens yang ramai.'
  },
  {
    id: 8,
    dimension: 'EI',
    direction: '-',
    contextTag: 'Keterbukaan Diri',
    text: 'Saya cenderung selektif dan hanya membagikan cerita, perasaan, atau rencana pribadi kepada orang-orang yang benar-benar saya percaya.'
  },
  {
    id: 9,
    dimension: 'EI',
    direction: '+',
    contextTag: 'Kerja Sama Tim',
    text: 'Bagi saya, mengerjakan proyek bersama tim terasa lebih hidup dan memunculkan banyak inspirasi dibandingkan mengerjakannya seorang diri.'
  },
  {
    id: 10,
    dimension: 'EI',
    direction: '-',
    contextTag: 'Refleksi Diri',
    text: 'Saya sering larut dalam pemikiran internal saya sendiri dan lebih nyaman mengamati situasi terlebih dahulu sebelum ikut terlibat aktif.'
  },
  {
    id: 11,
    dimension: 'EI',
    direction: '+',
    contextTag: 'Suasana Akhir Pekan',
    text: 'Ketika akhir pekan tiba tanpa agenda apa pun, saya cenderung menghubungi teman atau pergi ke tempat ramai agar hari tidak terasa sepi.'
  },
  {
    id: 12,
    dimension: 'EI',
    direction: '-',
    contextTag: 'Pesan vs Telepon',
    text: 'Saya lebih suka berkomunikasi melalui pesan teks tertulis karena memberi waktu berpikir sebelum merespons dibandingkan panggilan telepon mendadak.'
  },
  {
    id: 13,
    dimension: 'EI',
    direction: '+',
    contextTag: 'Inisiatif Percakapan',
    text: 'Di ruang tunggu atau perjalanan umum, saya mudah memulai obrolan ringan dengan orang asing di sebelah saya.'
  },
  {
    id: 14,
    dimension: 'EI',
    direction: '-',
    contextTag: 'Pemrosesan Pikiran',
    text: 'Saya biasanya menyusun dan mematangkan gagasan secara utuh di dalam kepala sebelum berani menyampaikannya kepada orang lain.'
  },
  {
    id: 15,
    dimension: 'EI',
    direction: '+',
    contextTag: 'Lingkungan Kerja',
    text: 'Saya merasa lebih produktif di ruang kerja terbuka yang dinamis dan penuh interaksi rekan daripada di ruangan tertutup yang sunyi.'
  },
  {
    id: 16,
    dimension: 'EI',
    direction: '-',
    contextTag: 'Acara Sosial',
    text: 'Di acara pertemuan besar atau pesta, saya sering merasa cepat lelah dan memilih pulang lebih awal untuk beristirahat di rumah.'
  },
  {
    id: 17,
    dimension: 'EI',
    direction: '+',
    contextTag: 'Berpikir Sambil Bicara',
    text: 'Menjelaskan masalah secara lisan kepada orang lain justru membantu saya menemukan solusinya dengan lebih cepat.'
  },
  {
    id: 18,
    dimension: 'EI',
    direction: '-',
    contextTag: 'Hobi Mandiri',
    text: 'Saya sangat menikmati hobi yang bisa dilakukan seorang diri seperti membaca, menulis, menggambar, atau mendengarkan musik dengan tenang.'
  },
  {
    id: 19,
    dimension: 'EI',
    direction: '+',
    contextTag: 'Antusiasme Kelompok',
    text: 'Kehadiran banyak orang di sekitar justru membuat suasana hati saya membaik dan mendorong semangat kerja saya.'
  },
  {
    id: 20,
    dimension: 'EI',
    direction: '-',
    contextTag: 'Ruang Pribadi',
    text: 'Memiliki ruang atau waktu privasi tanpa diganggu siapa pun setiap hari adalah kebutuhan penting bagi keseimbangan emosi saya.'
  },

  // =========================================================================
  // DIMENSI 2: SENSING (S: '+') vs INTUITION (N: '-') [20 Soal]
  // =========================================================================
  {
    id: 21,
    dimension: 'SN',
    direction: '+',
    contextTag: 'Penyelesaian Tugas',
    text: 'Ketika mengerjakan tugas atau proyek baru, saya lebih menyukai panduan langkah demi langkah (SOP) yang jelas dan terbukti daripada instruksi bebas.'
  },
  {
    id: 22,
    dimension: 'SN',
    direction: '-',
    contextTag: 'Imajinasi & Visi',
    text: 'Saya sering memikirkan konsep jangka panjang, teori filosofis, atau berbagai kemungkinan masa depan ketimbang hanya fokus pada hal-hal saat ini.'
  },
  {
    id: 23,
    dimension: 'SN',
    direction: '+',
    contextTag: 'Gaya Berpikir',
    text: 'Saya lebih mempercayai fakta konkret, data angka, dan pengalaman nyata yang dapat diamati langsung daripada sekadar dugaan abstrak.'
  },
  {
    id: 24,
    dimension: 'SN',
    direction: '-',
    contextTag: 'Pola & Makna Tersirat',
    text: 'Saat membaca buku atau menyimak pembicaraan orang lain, saya lebih tertarik menangkap makna tersirat, metafora, dan gambaran besarnya (big picture).'
  },
  {
    id: 25,
    dimension: 'SN',
    direction: '+',
    contextTag: 'Aplikasi Praktis',
    text: 'Saya lebih senang mempelajari keterampilan atau informasi yang langsung memiliki kegunaan praktis dan nyata dalam pekerjaan atau kehidupan sehari-hari.'
  },
  {
    id: 26,
    dimension: 'SN',
    direction: '-',
    contextTag: 'Inovasi & Eksperimen',
    text: 'Saya mudah bosan dengan rutinitas prosedural yang berulang dan lebih suka mencari cara baru yang tidak konvensional untuk memecahkan masalah.'
  },
  {
    id: 27,
    dimension: 'SN',
    direction: '+',
    contextTag: 'Ketelitian Detail',
    text: 'Orang-orang di sekitar mengenal saya sebagai pribadi yang teliti terhadap detail kecil, kerapian format, serta keakuratan data atau spesifikasi.'
  },
  {
    id: 28,
    dimension: 'SN',
    direction: '-',
    contextTag: 'Inspirasi & Masa Depan',
    text: 'Saya sering terinspirasi oleh ide-ide segar yang belum pernah dicoba orang lain dan antusias membayangkan perubahan tren 10 tahun mendatang.'
  },
  {
    id: 29,
    dimension: 'SN',
    direction: '+',
    contextTag: 'Fokus Saat Ini',
    text: 'Saya tipe orang yang berpijak pada realitas; saya fokus menuntaskan apa yang perlu dikerjakan hari ini daripada berandai-andai terlalu jauh.'
  },
  {
    id: 30,
    dimension: 'SN',
    direction: '-',
    contextTag: 'Intuisi Spontan',
    text: 'Sering kali saya menangkap suatu kesimpulan atau firasat yang tepat secara intuitif meskipun sulit menjelaskan urutan logikanya kata demi kata.'
  },
  {
    id: 31,
    dimension: 'SN',
    direction: '+',
    contextTag: 'Ingatan Pengalaman',
    text: 'Saya lebih mudah mengingat peristiwa nyata di masa lalu secara rinci—seperti tanggal, lokasi, atau warna pakaian—daripada gagasan teoretis.'
  },
  {
    id: 32,
    dimension: 'SN',
    direction: '-',
    contextTag: 'Koneksi Gagasan',
    text: 'Ketika mendengar satu topik baru, pikiran saya langsung bercabang menghubungkannya dengan berbagai konsep atau peluang lain yang tampak tidak berkaitan.'
  },
  {
    id: 33,
    dimension: 'SN',
    direction: '+',
    contextTag: 'Kepercayaan pada Tradisi',
    text: 'Saya lebih nyaman menggunakan metode kerja yang sudah teruji keberhasilannya bertahun-tahun daripada melakukan eksperimen yang berisiko.'
  },
  {
    id: 34,
    dimension: 'SN',
    direction: '-',
    contextTag: 'Diskusi Konseptual',
    text: 'Saya sangat menikmati percakapan mendalam tentang "bagaimana jika", skenario hipotetis, serta ide-ide abstrak tanpa harus langsung mempraktikkannya.'
  },
  {
    id: 35,
    dimension: 'SN',
    direction: '+',
    contextTag: 'Cara Menjelaskan',
    text: 'Saat menjelaskan sesuatu kepada orang lain, saya cenderung memberi contoh konkret dan fakta langkah demi langkah agar mudah dipahami.'
  },
  {
    id: 36,
    dimension: 'SN',
    direction: '-',
    contextTag: 'Pencarian Makna',
    text: 'Saya sering bertanya-tanya tentang tujuan hidup yang lebih besar dan makna di balik kejadian-kejadian yang saya alami.'
  },
  {
    id: 37,
    dimension: 'SN',
    direction: '+',
    contextTag: 'Observasi Lingkungan',
    text: 'Saat memasuki ruangan baru, saya cepat memperhatikan hal-hal fisik di sekitar seperti tata letak barang, suhu ruangan, atau detail penampilan orang.'
  },
  {
    id: 38,
    dimension: 'SN',
    direction: '-',
    contextTag: 'Visi Perubahan',
    text: 'Saya lebih tertarik merancang perbaikan sistem untuk jangka panjang daripada mengurus pekerjaan administratif rutin hari demi hari.'
  },
  {
    id: 39,
    dimension: 'SN',
    direction: '+',
    contextTag: 'Pendekatan Realistis',
    text: 'Dalam merencanakan proyek atau usaha, saya fokus menghitung sumber daya nyata yang sudah ada di tangan daripada mengandalkan angan-angan.'
  },
  {
    id: 40,
    dimension: 'SN',
    direction: '-',
    contextTag: 'Daya Cipta',
    text: 'Saya senang membayangkan cara-cara kreatif mengubah suatu produk atau kebiasaan lama menjadi sesuatu yang benar-benar baru.'
  },

  // =========================================================================
  // DIMENSI 3: THINKING (T: '+') vs FEELING (F: '-') [20 Soal]
  // =========================================================================
  {
    id: 41,
    dimension: 'TF',
    direction: '+',
    contextTag: 'Pengambilan Keputusan',
    text: 'Dalam menengahi perselisihan di lingkungan kerja atau komunitas, saya mengutamakan keadilan aturan, prinsip konsisten, dan bukti objektif di atas perasaan pribadi.'
  },
  {
    id: 42,
    dimension: 'TF',
    direction: '-',
    contextTag: 'Empati & Harmoni',
    text: 'Saat memberikan masukan terhadap hasil kerja seseorang, saya sangat berhati-hati memilih kata agar tidak melukai perasaannya atau merusak hubungan.'
  },
  {
    id: 43,
    dimension: 'TF',
    direction: '+',
    contextTag: 'Analisis Masalah',
    text: 'Ketika menghadapi kegagalan atau hambatan target, saya lebih cepat mencari solusi analitis dan akar kesalahannya daripada larut dalam kesedihan.'
  },
  {
    id: 44,
    dimension: 'TF',
    direction: '-',
    contextTag: 'Nilai Kemanusiaan',
    text: 'Keputusan penting dalam hidup atau karier saya sangat dipengaruhi oleh nilai moral personal dan sejauh mana hal tersebut memberi manfaat bagi sesama.'
  },
  {
    id: 45,
    dimension: 'TF',
    direction: '+',
    contextTag: 'Objektivitas',
    text: 'Bagi saya, kejujuran objektif dan kebenaran fakta harus diutamakan meskipun terkadang terdengar tegas atau kurang nyaman bagi sebagian orang.'
  },
  {
    id: 46,
    dimension: 'TF',
    direction: '-',
    contextTag: 'Dukungan Emosional',
    text: 'Ketika orang terdekat sedang bercerita tentang masalahnya, hal pertama yang saya berikan adalah empati dan mendengarkan dengan tulus sebelum memberi saran.'
  },
  {
    id: 47,
    dimension: 'TF',
    direction: '+',
    contextTag: 'Efisiensi Tim',
    text: 'Dalam membagi tanggung jawab tim atau pekerjaan, saya menilai berdasarkan kompetensi dan efektivitas hasil daripada kedekatan hubungan pribadi.'
  },
  {
    id: 48,
    dimension: 'TF',
    direction: '-',
    contextTag: 'Keharmonisan Lingkungan',
    text: 'Saya merasa sangat tidak nyaman jika ada ketegangan atau konflik di lingkungan sekitar, dan sering bersedia mengalah demi menjaga keharmonisan.'
  },
  {
    id: 49,
    dimension: 'TF',
    direction: '+',
    contextTag: 'Konsistensi Logika',
    text: 'Saya lebih menaruh respek pada pemikiran yang runtut, analitis, dan konsisten secara logika daripada keputusan yang didorong emosi sesaat.'
  },
  {
    id: 50,
    dimension: 'TF',
    direction: '-',
    contextTag: 'Apresiasi Tulus',
    text: 'Saya merasa sangat dihargai dan bersemangat ketika atasan, pasangan, atau rekan mengakui usaha tulus saya, bukan hanya melihat hasil angka semata.'
  },
  {
    id: 51,
    dimension: 'TF',
    direction: '+',
    contextTag: 'Evaluasi Kritis',
    text: 'Dalam berdiskusi, saya terbiasa langsung menunjukkan celah logika atau potensi risiko dari suatu ide agar rencana menjadi lebih matang.'
  },
  {
    id: 52,
    dimension: 'TF',
    direction: '-',
    contextTag: 'Kepekaan Suasana',
    text: 'Saya cepat merasakan perubahan suasana hati orang-orang di sekitar saya walaupun mereka tidak mengucapkannya secara langsung.'
  },
  {
    id: 53,
    dimension: 'TF',
    direction: '+',
    contextTag: 'Prinsip Keadilan',
    text: 'Menurut saya, aturan yang adil seharusnya berlaku sama bagi semua orang tanpa memandang kedekatan pribadi atau alasan emosional.'
  },
  {
    id: 54,
    dimension: 'TF',
    direction: '-',
    contextTag: 'Pertimbangan Dampak Sosial',
    text: 'Sebelum mengambil keputusan besar di tim, saya selalu memikirkan bagaimana dampaknya terhadap kenyamanan dan perasaan setiap anggota.'
  },
  {
    id: 55,
    dimension: 'TF',
    direction: '+',
    contextTag: 'Menghadapi Kritik',
    text: 'Saya tidak mudah tersinggung menerima kritik tajam selama kritik tersebut masuk akal dan berfokus pada perbaikan kualitas kerja.'
  },
  {
    id: 56,
    dimension: 'TF',
    direction: '-',
    contextTag: 'Kepedulian Personal',
    text: 'Saya lebih mudah tergerak oleh kisah nyata perjuangan individu daripada deretan data statistik mengenai masalah yang sama.'
  },
  {
    id: 57,
    dimension: 'TF',
    direction: '+',
    contextTag: 'Pro & Kontra',
    text: 'Saat bingung menentukan pilihan, saya terbiasa membuat daftar untung-rugi secara rasional dan mengesampingkan perasaan ragu.'
  },
  {
    id: 58,
    dimension: 'TF',
    direction: '-',
    contextTag: 'Kesejahteraan Bersama',
    text: 'Menciptakan lingkungan yang penuh kehangatan dan rasa saling memiliki bagi saya sama pentingnya dengan pencapaian target kerja.'
  },
  {
    id: 59,
    dimension: 'TF',
    direction: '+',
    contextTag: 'Ketegasan Sikap',
    text: 'Saya mampu tetap tenang dan rasional mengambil keputusan sulit meskipun situasi di sekitar sedang penuh tekanan emosional.'
  },
  {
    id: 60,
    dimension: 'TF',
    direction: '-',
    contextTag: 'Kebutuhan Harmoni',
    text: 'Jika terjadi perdebatan keras dalam rapat, saya terdorong untuk mencairkan suasana dan mencari titik temu yang membuat semua pihak nyaman.'
  },

  // =========================================================================
  // DIMENSI 4: JUDGING (J: '+') vs PERCEIVING (P: '-') [20 Soal]
  // =========================================================================
  {
    id: 61,
    dimension: 'JP',
    direction: '+',
    contextTag: 'Manajemen Waktu',
    text: 'Saya terbiasa menyusun jadwal harian yang teratur, membuat daftar tugas (to-do list), dan mencicil pekerjaan jauh sebelum tenggat waktu tiba.'
  },
  {
    id: 62,
    dimension: 'JP',
    direction: '-',
    contextTag: 'Fleksibilitas',
    text: 'Saya sering merasa lebih terpacu dan memunculkan ide-ide cemerlang saat bekerja mendekati tenggat waktu di bawah tekanan ringan.'
  },
  {
    id: 63,
    dimension: 'JP',
    direction: '+',
    contextTag: 'Kepastian Rencana',
    text: 'Saya merasa kurang nyaman apabila rencana perjalanan, rapat, atau agenda akhir pekan berubah secara mendadak tanpa pemberitahuan.'
  },
  {
    id: 64,
    dimension: 'JP',
    direction: '-',
    contextTag: 'Spontanitas',
    text: 'Saya lebih suka membiarkan hari berjalan mengalir dan menyesuaikan diri secara spontan dengan situasi yang terjadi ketimbang terikat jadwal kaku.'
  },
  {
    id: 65,
    dimension: 'JP',
    direction: '+',
    contextTag: 'Penyelesaian Tuntas',
    text: 'Sebelum beristirahat atau menikmati hiburan, saya harus memastikan seluruh tanggung jawab dan pekerjaan prioritas hari itu sudah beres tuntas.'
  },
  {
    id: 66,
    dimension: 'JP',
    direction: '-',
    contextTag: 'Eksplorasi Pilihan',
    text: 'Saat mengambil keputusan besar, saya cenderung membuka ruang waktu lebih lama untuk mengumpulkan berbagai alternatif informasi sebelum menetapkan pilihan akhir.'
  },
  {
    id: 67,
    dimension: 'JP',
    direction: '+',
    contextTag: 'Keteraturan Ruang',
    text: 'Meja kerja, folder dokumen digital, dan catatan pribadi saya umumnya tertata rapi dengan pengelompokan yang jelas.'
  },
  {
    id: 68,
    dimension: 'JP',
    direction: '-',
    contextTag: 'Adaptasi Perubahan',
    text: 'Saya mudah beradaptasi ketika situasi atau instruksi kerja berubah di tengah jalan tanpa merasa stres yang berkepanjangan.'
  },
  {
    id: 69,
    dimension: 'JP',
    direction: '+',
    contextTag: 'Keputusan Pasti',
    text: 'Bagi saya, memiliki kepastian keputusan dan arah yang jelas jauh lebih menenangkan daripada membiarkan urusan menggantung tanpa kepastian.'
  },
  {
    id: 70,
    dimension: 'JP',
    direction: '-',
    contextTag: 'Dinamika Multi-Proyek',
    text: 'Saya sering mengerjakan beberapa proyek atau mempelajari beragam topik secara bersamaan dan berpindah alur saat menemukan hal yang lebih menarik.'
  },
  {
    id: 71,
    dimension: 'JP',
    direction: '+',
    contextTag: 'Ketepatan Waktu',
    text: 'Saya sangat menghargai ketepatan waktu dan selalu berusaha hadir atau menyelesaikan janji lebih awal dari waktu yang disepakati.'
  },
  {
    id: 72,
    dimension: 'JP',
    direction: '-',
    contextTag: 'Liburan Tanpa Jadwal',
    text: 'Saat berlibur, saya lebih senang berjalan-jalan mengikuti suasana hati saat itu tanpa perlu menyusun daftar kunjungan jam demi jam.'
  },
  {
    id: 73,
    dimension: 'JP',
    direction: '+',
    contextTag: 'Target Terukur',
    text: 'Saya suka menetapkan tenggat waktu dan target mingguan bagi diri sendiri agar progres pekerjaan selalu terpantau rapi.'
  },
  {
    id: 74,
    dimension: 'JP',
    direction: '-',
    contextTag: 'Keterbukaan Opsi',
    text: 'Jadwal yang terlalu padat dan kaku justru membuat saya merasa terkekang dan kurang leluasa mengeksplorasi ide baru.'
  },
  {
    id: 75,
    dimension: 'JP',
    direction: '+',
    contextTag: 'Persiapan Matang',
    text: 'Sebelum bepergian atau menghadiri acara penting, saya menyiapkan perlengkapan dan rencana cadangan jauh-jauh hari.'
  },
  {
    id: 76,
    dimension: 'JP',
    direction: '-',
    contextTag: 'Improvisasi',
    text: 'Saya lebih percaya pada kemampuan saya berimprovisasi di lapangan daripada menghabiskan waktu terlalu lama membuat rencana tertulis.'
  },
  {
    id: 77,
    dimension: 'JP',
    direction: '+',
    contextTag: 'Aturan & Struktur',
    text: 'Saya merasa lebih tenang dan efektif bekerja ketika pembagian peran, aturan main, serta jadwal evaluasi sudah ditetapkan sejak awal.'
  },
  {
    id: 78,
    dimension: 'JP',
    direction: '-',
    contextTag: 'Rasa Ingin Tahu Terbuka',
    text: 'Saya senang membiarkan proyek terus berkembang terbuka selama masih ada ide baru yang bisa ditambahkan.'
  },
  {
    id: 79,
    dimension: 'JP',
    direction: '+',
    contextTag: 'Prioritas Kerja',
    text: 'Saya selalu mendahulukan kewajiban yang paling penting dan baru bersantai setelah semuanya selesai dengan rapi.'
  },
  {
    id: 80,
    dimension: 'JP',
    direction: '-',
    contextTag: 'Ritme Energi Bebas',
    text: 'Saya bekerja dalam gelombang semangat; ketika inspirasi datang saya bisa fokus berjam-jam, namun di waktu lain saya butuh kebebasan jeda.'
  }
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
 * Menghasilkan 40 soal acak yang seimbang di setiap dimensi
 * (masing-masing 5 soal '+' dan 5 soal '-' per dimensi EI, SN, TF, JP),
 * lalu mengacak urutannya sehingga selalu berbeda di setiap sesi tes.
 */
export function generateRandomMbtiSession(): Question[] {
  const dimensions: Dimension[] = ['EI', 'SN', 'TF', 'JP'];
  const selected: Question[] = [];

  for (const dim of dimensions) {
    const plusPool = shuffleArray(
      MBTI_QUESTIONS.filter((q) => q.dimension === dim && q.direction === '+')
    );
    const minusPool = shuffleArray(
      MBTI_QUESTIONS.filter((q) => q.dimension === dim && q.direction === '-')
    );
    selected.push(...plusPool.slice(0, 5), ...minusPool.slice(0, 5));
  }

  return shuffleArray(selected);
}

export const LIKERT_OPTIONS = [
  { value: 1, label: 'Sangat Tidak Sesuai', shortLabel: 'STS', color: 'text-rose-600', activeBg: 'bg-rose-50 border-rose-300' },
  { value: 2, label: 'Tidak Sesuai', shortLabel: 'TS', color: 'text-amber-600', activeBg: 'bg-amber-50 border-amber-300' },
  { value: 3, label: 'Netral / Ragu', shortLabel: 'N', color: 'text-slate-600', activeBg: 'bg-slate-100 border-slate-300' },
  { value: 4, label: 'Sesuai', shortLabel: 'S', color: 'text-teal-600', activeBg: 'bg-teal-50 border-teal-300' },
  { value: 5, label: 'Sangat Sesuai', shortLabel: 'SS', color: 'text-emerald-700', activeBg: 'bg-emerald-50 border-emerald-300' }
];
