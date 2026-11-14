import { LearningStyleQuestion } from '../types/psychology';

export const LEARNING_STYLE_QUESTIONS: LearningStyleQuestion[] = [
  {
    id: 1,
    question: 'Saat mengikuti pelatihan, seminar, atau mempelajari keahlian baru, apa yang paling membantu Anda memahaminya?',
    options: [
      { type: 'visual', text: 'Melihat slide presentasi yang terstruktur, diagram, grafik, atau ilustrasi warna-warni.' },
      { type: 'auditory', text: 'Mendengarkan penjelasan lisan pembicara secara saksama dengan intonasi yang jelas.' },
      { type: 'kinesthetic', text: 'Langsung mencoba mempraktikkan materi atau mencatat poin langkah demi langkah sendiri.' }
    ]
  },
  {
    id: 2,
    question: 'Saat perlu mengingat informasi penting atau materi presentasi untuk esok hari, cara apa yang paling sering Anda gunakan?',
    options: [
      { type: 'visual', text: 'Membaca ulang rangkuman catatan bersorot warna dan membayangkan tata letak atau gambarnya.' },
      { type: 'auditory', text: 'Mengucapkan materi secara lisan berulang kali atau berdiskusi tanya-jawab dengan rekan.' },
      { type: 'kinesthetic', text: 'Berjalan mondar-mandir sambil memperagakan penyampaian materi atau membuat kartu poin fisik.' }
    ]
  },
  {
    id: 3,
    question: 'Ketika Anda mencari alamat baru yang belum pernah dikunjungi, Anda lebih memilih:',
    options: [
      { type: 'visual', text: 'Melihat peta digital (Google Maps) dan memperhatikan bentuk rute serta belokan jalan.' },
      { type: 'auditory', text: 'Mendengarkan panduan suara navigasi GPS atau bertanya langsung kepada orang di sekitar.' },
      { type: 'kinesthetic', text: 'Mengandalkan orientasi arah, langsung menyusuri rute, dan mengingat patokan fisik bangunan.' }
    ]
  },
  {
    id: 4,
    question: 'Apa gangguan yang paling cepat merusak konsentrasi kerja atau belajar Anda?',
    options: [
      { type: 'visual', text: 'Meja kerja yang berantakan atau pergerakan orang yang lalu-lalang di depan pandangan mata.' },
      { type: 'auditory', text: 'Suara bising, obrolan keras, atau suara televisi/notifikasi di ruangan sekitar.' },
      { type: 'kinesthetic', text: 'Harus duduk diam terlalu lama di kursi yang kaku tanpa kesempatan bergerak atau meregangkan tubuh.' }
    ]
  },
  {
    id: 5,
    question: 'Ketika Anda membeli perangkat elektronik atau aplikasi kerja baru, apa yang Anda lakukan pertama kali?',
    options: [
      { type: 'visual', text: 'Membaca buku panduan bergambar atau melihat diagram skema penggunaan.' },
      { type: 'auditory', text: 'Mendengarkan penjelasan teman/penjual atau menyimak video tutorial dengan penjelasan suara.' },
      { type: 'kinesthetic', text: 'Langsung menekan tombol-tombol dan mencoba fiturnya sendiri secara langsung (trial & error).' }
    ]
  },
  {
    id: 6,
    question: 'Saat mengobrol santai atau bercerita pengalaman menarik dengan rekan, biasanya Anda:',
    options: [
      { type: 'visual', text: 'Menatap lawan bicara dan membayangkan adegan cerita dalam bentuk gambaran visual di benak.' },
      { type: 'auditory', text: 'Memperhatikan nada bicara, menirukan gaya suara orang lain, dan menikmati permainan kata.' },
      { type: 'kinesthetic', text: 'Banyak menggerakkan tangan, menggunakan ekspresi tubuh, atau memperagakan situasi tersebut.' }
    ]
  },
  {
    id: 7,
    question: 'Catatan kerja atau jurnal pribadi Anda biasanya tampak seperti apa?',
    options: [
      { type: 'visual', text: 'Rapi, penuh sorotan warna, panah alur, skema bagan, atau peta pikiran (mind-map).' },
      { type: 'auditory', text: 'Berisi poin-poin ringkas kalimat kunci yang Anda catat sambil mendengarkan pembicara.' },
      { type: 'kinesthetic', text: 'Berupa coretan ide cepat, daftar cek tugas nyata, dan Anda lebih ingat lewat eksekusi langsung.' }
    ]
  },
  {
    id: 8,
    question: 'Saat mulai merasa jenuh di tengah rapat panjang atau sesi pelatihan yang monoton, apa reaksi spontan Anda?',
    options: [
      { type: 'visual', text: 'Membuat sketsa kecil/doodle di buku catatan atau memandang pemandangan di luar jendela.' },
      { type: 'auditory', text: 'Mengetukkan jari berirama pelan di meja atau bergumam ringan dalam hati.' },
      { type: 'kinesthetic', text: 'Memutar-mutar pulpen, menggerakkan kaki, atau izin berdiri sejenak mengambil minum.' }
    ]
  },
  {
    id: 9,
    question: 'Ketika diminta mengingat deretan nomor penting, kode sandi, atau data angka, Anda cenderung:',
    options: [
      { type: 'visual', text: 'Membayangkan wujud visual angka-angka tersebut tertulis di atas bidang putih.' },
      { type: 'auditory', text: 'Mengulang-ulang bunyi ritme angka tersebut beberapa kali di bibir atau dalam hati.' },
      { type: 'kinesthetic', text: 'Menggerakkan jari seolah-olah sedang mengetik atau menekan tombol angka tersebut.' }
    ]
  },
  {
    id: 10,
    question: 'Pembicara, mentor, atau instruktur favorit yang paling efektif mengajar bagi Anda adalah:',
    options: [
      { type: 'visual', text: 'Yang menyiapkan slide presentasi estetik, video animasi, dan infografis terstruktur.' },
      { type: 'auditory', text: 'Yang pandai bercerita, intonasi suaranya jernih, dan gemar membuka diskusi interaktif.' },
      { type: 'kinesthetic', text: 'Yang langsung mengajak studi kasus praktik, simulasi peran (role play), atau workshop lapangan.' }
    ]
  },
  {
    id: 11,
    question: 'Saat membaca buku fiksi maupun non-fiksi, bagian apa yang paling Anda nikmati?',
    options: [
      { type: 'visual', text: 'Deskripsi visual suasana tempat, detail ruang, dan ilustrasi yang menggugah imajinasi mata.' },
      { type: 'auditory', text: 'Dialog antar tokoh yang tajam, pilihan diksi puitis, dan ritme kalimat yang enak didengar.' },
      { type: 'kinesthetic', text: 'Alur aksi yang cepat, dinamika peristiwa menegangkan, dan langkah praktis yang bisa langsung dicoba.' }
    ]
  },
  {
    id: 12,
    question: 'Ketika ingin melepas penat (self-reward) setelah minggu yang padat, Anda cenderung memilih:',
    options: [
      { type: 'visual', text: 'Menonton film di bioskop dengan sinematografi indah atau mengunjungi galeri seni/pemandangan alam.' },
      { type: 'auditory', text: 'Mendengarkan musik favorit, menghadiri konser, atau bersantai menyimak podcast menarik.' },
      { type: 'kinesthetic', text: 'Berolahraga, berwisata aktif ke alam bebas, memasak, atau melakukan hobi kerajinan tangan.' }
    ]
  },
  {
    id: 13,
    question: 'Saat harus merakit furnitur atau memasang peralatan rumah tangga yang baru dibeli, Anda lebih suka:',
    options: [
      { type: 'visual', text: 'Memperhatikan gambar ilustrasi langkah perakitan dan mencocokkan bentuk tiap komponennya.' },
      { type: 'auditory', text: 'Meminta seseorang membacakan petunjuknya atau menonton video penjelasan suara langkah demi langkah.' },
      { type: 'kinesthetic', text: 'Langsung memegang komponennya, menyatukan baut, dan merasakan kecocokan bagiannya secara langsung.' }
    ]
  },
  {
    id: 14,
    question: 'Saat berkenalan dengan banyak orang baru di sebuah acara, hal apa yang paling mudah Anda ingat tentang mereka keesokan harinya?',
    options: [
      { type: 'visual', text: 'Wajah, gaya berpakaian, serta ciri visual tempat saat pertama kali bertemu.' },
      { type: 'auditory', text: 'Nama, karakter suara, atau topik obrolan yang sempat dibicarakan bersama.' },
      { type: 'kinesthetic', text: 'Jabat tangan, aktivitas yang dilakukan bersama, atau kesan energi saat berinteraksi.' }
    ]
  },
  {
    id: 15,
    question: 'Ketika menjelaskan rute jalan atau cara kerja suatu hal kepada teman, Anda cenderung:',
    options: [
      { type: 'visual', text: 'Menggambarkan sketsa peta atau alur bagannya di atas kertas maupun layar ponsel.' },
      { type: 'auditory', text: 'Menjelaskan urutan arah dan langkahnya secara lisan dengan detail kata yang runtut.' },
      { type: 'kinesthetic', text: 'Memperagakan arah belokan dengan gerakan tangan atau langsung menemani mempraktikkannya.' }
    ]
  },
  {
    id: 16,
    question: 'Saat memantau perkembangan proyek atau keuangan pribadi, tampilan laporan apa yang paling nyaman bagi Anda?',
    options: [
      { type: 'visual', text: 'Dasbor grafik warna, diagram batang, atau kalender visual yang tertata rapi.' },
      { type: 'auditory', text: 'Penjelasan ringkas atau sesi diskusi evaluasi langsung bersama rekan atau konsultan.' },
      { type: 'kinesthetic', text: 'Daftar centang tugas harian yang bisa langsung dicoret atau diperbarui tiap selesai dikerjakan.' }
    ]
  },
  {
    id: 17,
    question: 'Ketika sedang mencari inspirasi atau memecahkan masalah buntu, cara terbaik bagi Anda adalah:',
    options: [
      { type: 'visual', text: 'Melihat referensi desain, papan inspirasi (moodboard), atau menuliskan skema di papan tulis.' },
      { type: 'auditory', text: 'Berdiskusi curah pendapat (brainstorming) dengan rekan atau mendengarkan musik sambil berpikir.' },
      { type: 'kinesthetic', text: 'Berjalan kaki keluar ruangan, berolahraga ringan, atau langsung membuat purwarupa kasar.' }
    ]
  },
  {
    id: 18,
    question: 'Bagaimana kebiasaan Anda saat memilih makanan di restoran baru?',
    options: [
      { type: 'visual', text: 'Melihat foto hidangan pada buku menu atau mengamati tampilan makanan di meja sebelah.' },
      { type: 'auditory', text: 'Bertanya kepada pelayan tentang menu andalan dan mendengarkan deskripsi rasanya.' },
      { type: 'kinesthetic', text: 'Memilih makanan berdasarkan pengalaman tekstur dan sensasi rasa yang pernah dicoba sebelumnya.' }
    ]
  },
  {
    id: 19,
    question: 'Saat mempelajari bahasa asing atau istilah teknis baru, metode mana yang terasa paling cepat menempel di ingatan?',
    options: [
      { type: 'visual', text: 'Melihat ejaan katanya tertulis jelas lengkap dengan kartu bergambar atau teks terjemahan.' },
      { type: 'auditory', text: 'Mendengarkan pelafalan penutur asli dan mengucapkannya keras-keras berulang kali.' },
      { type: 'kinesthetic', text: 'Langsung memakainya dalam percakapan simulasi atau menuliskannya berulang dengan tangan.' }
    ]
  },
  {
    id: 20,
    question: 'Ketika menghadiri sebuah rapat kerja yang penting, posisi atau aktivitas apa yang membuat Anda paling fokus?',
    options: [
      { type: 'visual', text: 'Duduk di tempat yang jelas melihat layar presentasi serta wajah seluruh peserta rapat.' },
      { type: 'auditory', text: 'Mendengarkan alur diskusi secara saksama sambil sesekali menimpali pertanyaan secara verbal.' },
      { type: 'kinesthetic', text: 'Duduk dekat papan tulis/catatan aktif agar bisa menulis poin atau menggambar alur solusi.' }
    ]
  },
  {
    id: 21,
    question: 'Apa tanda paling jelas saat Anda merasa sangat antusias dan bersemangat terhadap suatu topik?',
    options: [
      { type: 'visual', text: 'Mata langsung berbinar fokus memperhatikan detail visual dan membayangkan hasilnya.' },
      { type: 'auditory', text: 'Berbicara dengan nada bersemangat dan banyak bertanya atau berbagi komentar lisan.' },
      { type: 'kinesthetic', text: 'Tubuh condong ke depan, tangan aktif bergerak, dan ingin segera langsung mencobanya.' }
    ]
  },
  {
    id: 22,
    question: 'Dalam memilih kelas kursus daring (online course), format mana yang paling Anda sukai?',
    options: [
      { type: 'visual', text: 'Materi video penuh ilustrasi visual, animasi infografis, dan modul PDF bergambar.' },
      { type: 'auditory', text: 'Sesi webinar interaktif, rekaman audio/podcast pembelajaran, dan forum tanya jawab suara.' },
      { type: 'kinesthetic', text: 'Kelas berbasis proyek langsung dengan tugas praktik nyata dan umpan balik langkah kerja.' }
    ]
  },
  {
    id: 23,
    question: 'Saat menata ruang kerja atau kamar pribadi, hal utama yang Anda prioritaskan adalah:',
    options: [
      { type: 'visual', text: 'Keserasian warna, pencahayaan yang bagus, dan tampilan visual yang rapi serta sedap dipandang.' },
      { type: 'auditory', text: 'Suasana yang tenang kedap kebisingan atau memiliki tata suara musik yang nyaman.' },
      { type: 'kinesthetic', text: 'Kenyamanan posisi duduk/gerak, akses barang yang praktis dijangkau, dan ruang lega.' }
    ]
  },
  {
    id: 24,
    question: 'Ketika menyampaikan apresiasi atau rasa terima kasih kepada orang dekat, Anda paling sering:',
    options: [
      { type: 'visual', text: 'Menuliskannya dalam kartu ucapan estetik atau memilihkan hadiah dengan kemasan menarik.' },
      { type: 'auditory', text: 'Mengucapkan kalimat apresiasi hangat secara langsung atau lewat pesan suara yang tulus.' },
      { type: 'kinesthetic', text: 'Menunjukkannya lewat tindakan nyata membantu pekerjaannya atau pelukan/tepukan hangat.' }
    ]
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
 * Mengambil 12 soal acak dari bank 24 soal VAK sekaligus mengacak
 * urutan ketiga opsi (Visual, Auditori, Kinestetik) pada setiap soal.
 */
export function generateRandomVakSession(count = 12): LearningStyleQuestion[] {
  const picked = shuffleArray(LEARNING_STYLE_QUESTIONS).slice(0, count);
  return picked.map((q) => ({
    ...q,
    options: shuffleArray(q.options)
  }));
}

export const LEARNING_STYLE_PROFILES = {
  visual: {
    title: 'Tipe Pembelajar Visual (Melihat & Mengamati)',
    tagline: 'Memahami informasi paling optimal melalui penglihatan, struktur ruang, warna, dan visualisasi.',
    characteristics: [
      'Mengingat jauh lebih baik apa yang dilihat daripada apa yang sekadar didengar secara lisan.',
      'Menyukai kerapian dokumentasi, penggunaan kode warna, bagan alur (flowchart), dan diagram.',
      'Cenderung peka terhadap detail tampilan estetika serta cepat membaca ekspresi dan bahasa tubuh.',
      'Lebih mudah menyerap konsep baru melalui peta pikiran (mind-map), infografis, atau video demonstrasi.'
    ],
    bestStudyMethods: [
      'Gunakan kode warna (stabilo atau label digital) untuk mengelompokkan kategori informasi dan prioritas kerja.',
      'Ubah dokumen teks atau laporan panjang menjadi bagan alur, tabel ringkasan, atau diagram visual.',
      'Manfaatkan video tutorial, diagram interaktif, atau presentasi grafis saat mempelajari keterampilan baru.',
      'Tempelkan papan visi, ringkasan target, atau catatan penting di area meja kerja agar mudah terlihat.'
    ],
    examStrategy: 'Saat menghadapi presentasi, sertifikasi, atau pengambilan keputusan penting, visualisasikan posisi data dan skema diagram yang telah Anda pelajari dalam ingatan.'
  },
  auditory: {
    title: 'Tipe Pembelajar Auditori (Mendengar & Berdiskusi)',
    tagline: 'Memahami informasi paling efektif melalui suara, ritme, penjelasan verbal, dan pertukaran ide lisan.',
    characteristics: [
      'Mengingat dengan sangat kuat apa yang didengar dalam diskusi, rapat, seminar, atau podcast.',
      'Sering membaca informasi penting dengan suara pelan atau berbisik untuk membantu pemrosesan otak.',
      'Sangat peka terhadap intonasi bicara dan mudah terdistraksi oleh kebisingan suara di lingkungan sekitar.',
      'Piawai dalam komunikasi verbal, presentasi lisan, bercerita, dan sesi tanya-jawab spontan.'
    ],
    bestStudyMethods: [
      'Rekam poin penting rapat atau materi pelatihan dalam bentuk audio/catatan suara untuk didengarkan ulang.',
      'Ajak rekan kerja atau komunitas berdiskusi aktif dan bertukar argumen secara lisan mengenai topik tertentu.',
      'Gunakan audiobook, podcast edukatif, atau fitur text-to-speech saat meninjau bahan bacaan panjang.',
      'Jelaskan kembali konsep yang baru dipelajari kepada orang lain untuk menguji ketajaman pemahaman Anda.'
    ],
    examStrategy: 'Saat membaca soal tes kompetensi atau menganalisis dokumen kompleks, ucapkan kalimat kunci dalam hati dengan intonasi yang jelas.'
  },
  kinesthetic: {
    title: 'Tipe Pembelajar Kinestetik (Praktik, Gerak & Pengalaman)',
    tagline: 'Menyerap pengetahuan paling cepat melalui tindakan nyata, simulasi langsung, dan keterlibatan fisik.',
    characteristics: [
      'Kurang betah duduk statis terlalu lama; produktivitas meningkat saat dapat sesekali bergerak.',
      'Sangat cepat menguasai keahlian baru jika langsung mempraktikkannya di lapangan atau simulasi nyata.',
      'Aktif menggunakan bahasa tubuh dan gestur tangan saat menyampaikan gagasan kepada orang lain.',
      'Mengingat prosedur kerja melalui pengalaman melakukan langsung (learning by doing), bukan sekadar teori.'
    ],
    bestStudyMethods: [
      'Pelajari hal baru melalui pendekatan proyek nyata (project-based) atau simulasi langsung.',
      'Gunakan teknik Pomodoro: 25 menit kerja/belajar fokus, diikuti 5 menit jeda berdiri atau peregangan ringan.',
      'Catat poin penting dengan tulisan tangan atau kartu indeks fisik untuk memicu memori motorik.',
      'Ikuti sesi workshop, praktik lapangan, atau eksperimen langsung ketimbang hanya menyimak teori pasif.'
    ],
    examStrategy: 'Saat menghadapi uji kompetensi atau wawancara kerja, tuliskan kerangka berpikir singkat di kertas buram untuk menyalurkan energi motorik dan menjaga fokus.'
  },
  multimodal: {
    title: 'Tipe Pembelajar Multimodal (Kombinasi Fleksibel)',
    tagline: 'Mampu memadukan kekuatan pengamatan visual, pendengaran verbal, dan praktik langsung secara seimbang.',
    characteristics: [
      'Sangat adaptif terhadap berbagai format pelatihan, rapat, maupun gaya komunikasi rekan kerja.',
      'Dapat menyerap materi melalui kombinasi membaca bagan, menyimak diskusi, dan langsung mempraktikkan.',
      'Memiliki fleksibilitas tinggi baik saat bekerja mandiri maupun berkolaborasi dalam tim beragam.'
    ],
    bestStudyMethods: [
      'Kombinasikan menonton materi visual, mendiskusikannya bersama tim, lalu langsung mengaplikasikannya dalam proyek nyata.',
      'Variasikan metode belajar dan bekerja tiap pekan agar seluruh indra kognitif tetap terstimulasi dengan segar.'
    ],
    examStrategy: 'Gunakan pendekatan terpadu: bayangkan kerangka visualnya, ulangi kata kuncinya dalam hati, dan susun langkah pengerjaan secara runtut di catatan.'
  }
};
