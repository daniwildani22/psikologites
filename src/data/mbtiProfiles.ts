import { PersonalityDetails, MbtiTypeCode } from '../types/psychology';

export const MBTI_PROFILES: Record<MbtiTypeCode, PersonalityDetails> = {
  INTJ: {
    code: 'INTJ',
    title: 'Sang Arsitek Strategis',
    group: 'Analis',
    groupColor: 'indigo',
    badge: 'Visioner, Mandiri & Berpikir Sistematis',
    summary: 'Pribadi INTJ adalah pemikir mendalam yang menyukai strategi jangka panjang, sistem kompleks, dan pemecahan masalah secara mandiri. Mereka merencanakan masa depan dengan matang dan memiliki standar pencapaian pribadi yang tinggi.',
    quote: '"Bagi seorang perencana sejati, keberhasilan bukanlah kebetulan melainkan hasil kalkulasi yang presisi."',
    traits: ['Strategis', 'Independen', 'Kritis', 'Perfeksionis Positif', 'Fokus Visi'],
    strengths: [
      'Kemampuan analisis mendalam serta jeli melihat pola dan korelasi tersembunyi antar sistem',
      'Kemandirian dan disiplin tinggi dalam bekerja maupun mempelajari keahlian baru tanpa perlu diawasi ketat',
      'Perencanaan jangka panjang yang sangat terstruktur untuk karier, proyek, dan pengembangan diri',
      'Ketahanan mental dalam menghadapi problem logika, strategi bisnis, atau algoritma rumit'
    ],
    weaknesses: [
      'Cenderung kurang sabar dengan rekan tim yang lamban atau kurang sistematis dalam berpikir',
      'Dapat terkesan kaku, dingin, atau terlalu kritis saat menyampaikan evaluasi',
      'Rentan mengalami overthinking ketika situasi di luar kendali tidak berjalan sesuai rencana',
      'Sering mengabaikan kebutuhan istirahat emosional demi mengejar target kesempurnaan'
    ],
    studyTips: [
      'Gunakan metode *Active Recall* dan pemetaan sistem (system mapping) untuk menguasai keahlian baru dengan cepat.',
      'Tetapkan target pencapaian kuartalan yang terukur untuk menjaga arah karier dan proyek pribadi.',
      'Luangkan waktu melatih empati komunikasi agar gagasan strategis Anda lebih mudah diterima oleh tim.'
    ],
    recommendedMajors: [
      {
        category: 'Teknologi & Sains',
        majors: ['Rekayasa Perangkat Lunak & AI', 'Sains Data & Aktuaria', 'Teknik Sistem & Biomedis', 'Riset Sains Terapan'],
        reason: 'Memuaskan kebutuhan nalar logika, perancangan arsitektur sistem, dan analisis kuantitatif tingkat tinggi.'
      },
      {
        category: 'Bisnis, Sosial & Humaniora',
        majors: ['Strategi Korporasi & Keuangan', 'Hukum Bisnis & Regulasi', 'Kebijakan Publik & Geopolitik'],
        reason: 'Sangat cocok untuk merumuskan strategi jangka panjang, analisis ekonomi makro, dan tata kelola organisasi.'
      },
      {
        category: 'Kreatif & Terapan',
        majors: ['Arsitektur & Perencanaan Kota', 'Keamanan Siber (Cyber Security)'],
        reason: 'Menggabungkan visi konseptual jangka panjang dengan ketelitian teknis yang presisi.'
      }
    ],
    careerProspects: ['Software Architect', 'Data Scientist / AI Engineer', 'Analis Investasi / Finansial', 'Peneliti & Konsultan Strategi', 'Chief Strategy Officer'],
    classroomBehavior: 'Tenang namun observatif dalam rapat, fokus pada efisiensi sistem, dan bersuara tajam ketika diskusi menyentuh aspek strategis atau solusi inti.',
    friendshipAdvice: 'Belajarlah membuka diri dan mengapresiasi perbedaan ritme orang lain. Kecerdasan emosional akan menyempurnakan ketajaman intelektual Anda.'
  },

  INTP: {
    code: 'INTP',
    title: 'Sang Logikawan Pemikir',
    group: 'Analis',
    groupColor: 'indigo',
    badge: 'Kreatif, Analitis & Penjelajah Teori',
    summary: 'Pribadi INTP adalah penjelajah konsep murni yang digerakkan oleh rasa ingin tahu tanpa batas. Mereka gemar membedah cara kerja suatu hal, menemukan celah logika, dan menciptakan solusi inovatif yang out-of-the-box.',
    quote: '"Pertanyaan yang tepat sering kali jauh lebih berharga daripada jawaban yang telah disepakati."',
    traits: ['Eksploratif', 'Logis Fleksibel', 'Inovatif', 'Objektif', 'Spontan Konseptual'],
    strengths: [
      'Rasa ingin tahu intelektual luar biasa terhadap fenomena sains, teknologi, dan filosofi',
      'Kemampuan menemukan solusi alternatif yang jarang terpikirkan oleh orang kebanyakan',
      'Objektif dalam menilai situasi tanpa mudah terpengaruh bias emosional atau tren sesaat',
      'Sangat cepat menyerap konsep abstrak apabila topik tersebut memicu minatnya'
    ],
    weaknesses: [
      'Sering kesulitan menuntaskan pekerjaan rutin yang bersifat administratif dan berulang',
      'Cenderung menunda eksekusi jika terlalu asyik mengeksplorasi teori baru',
      'Bisa terjebak dalam analisis berlarut-larut (analysis paralysis) tanpa realisasi nyata',
      'Kurang nyaman dengan prosedur birokrasi kaku yang tidak disertai alasan logis'
    ],
    studyTips: [
      'Pecah proyek besar menjadi eksperimen-eksperimen kecil yang menarik untuk diselesaikan satu per satu.',
      'Gunakan teknik manajemen waktu seperti Pomodoro agar fokus tidak terpecah oleh rasa ingin tahu acak.',
      'Cari tahu prinsip dasar "mengapa" suatu metode bekerja sebelum menerapkannya.'
    ],
    recommendedMajors: [
      {
        category: 'Teknologi & Sains',
        majors: ['Ilmu Komputer & Algoritma', 'Fisika & Matematika Terapan', 'Bioteknologi', 'Teknik Elektro'],
        reason: 'Memberikan ruang luas untuk riset mendalam, eksperimen, dan pemecahan teka-teki kompleks.'
      },
      {
        category: 'Bisnis, Sosial & Humaniora',
        majors: ['Filsafat & Etika Terapan', 'Linguistik Komputasi', 'Antropologi & Psikologi Kognitif'],
        reason: 'Meneliti struktur bahasa, pola berpikir manusia, dan fenomena sosial secara mendalam.'
      },
      {
        category: 'Kreatif & Terapan',
        majors: ['Pengembangan Gim & Realitas Virtual', 'Arsitektur Informasi & UI/UX'],
        reason: 'Wadah ideal memadukan kreativitas konseptual dengan logika pemrograman terapan.'
      }
    ],
    careerProspects: ['Peneliti Sains / R&D', 'Software Engineer / Algo Developer', 'System Analyst', 'Akademisi / Penulis Teknis', 'Game Logic Designer'],
    classroomBehavior: 'Tampak pendiam di luar, namun pikirannya aktif memproses beragam keterkaitan ide. Kerap melontarkan pertanyaan kritis yang memicu diskusi baru.',
    friendshipAdvice: 'Sesekali ikutlah terlibat dalam kegiatan sosial atau kolaborasi santai tanpa harus selalu menganalisis segala sesuatunya secara teoritis.'
  },

  ENTJ: {
    code: 'ENTJ',
    title: 'Sang Komandan Visioner',
    group: 'Analis',
    groupColor: 'indigo',
    badge: 'Tegas, Berjiwa Pemimpin & Berorientasi Hasil',
    summary: 'Pribadi ENTJ adalah organisator alami yang memiliki ambisi kuat, dorongan memimpin, dan kecakapan mengeksekusi rencana secara efisien. Mereka berani mengambil tanggung jawab besar dan menggerakkan tim menuju pencapaian nyata.',
    quote: '"Tidak ada rintangan yang tak dapat diatasi jika kita memiliki tekad dan strategi eksekusi yang kokoh."',
    traits: ['Pemimpin Alami', 'Tegas', 'Efisien', 'Percaya Diri', 'Komunikatif Lugas'],
    strengths: [
      'Kepemimpinan yang kuat dalam mengorganisir tim, proyek bisnis, maupun komunitas',
      'Manajemen waktu dan delegasi tugas yang terstruktur serta berorientasi pada hasil nyata',
      'Keberanian mengambil keputusan strategis secara cepat di bawah tekanan tinggi',
      'Kemampuan public speaking dan persuasi yang meyakinkan serta berwibawa'
    ],
    weaknesses: [
      'Bisa terkesan terlalu mendominasi dan kurang peka terhadap aspek emosional rekan tim',
      'Sulit menoleransi ketidakcekatan atau standar kerja yang tidak tuntas',
      'Kurang sabar menghadapi proses birokrasi yang lambat dan berbelit-belit',
      'Terkadang menuntut orang lain bekerja dengan intensitas tinggi yang sama dengan dirinya'
    ],
    studyTips: [
      'Terapkan sistem belajar timbal balik melalui diskusi atau mentoring bersama rekan profesional.',
      'Tetapkan indikator kinerja utama (KPI) pribadi yang terukur untuk setiap target keterampilan baru.',
      'Latih keterampilan *active listening* dalam rapat agar potensi seluruh anggota tim ikut terangkat.'
    ],
    recommendedMajors: [
      {
        category: 'Teknologi & Sains',
        majors: ['Teknik Industri & Optimasi Sistem', 'Manajemen Konstruksi & Infrastruktur', 'Manajemen Kesehatan & Rumah Sakit'],
        reason: 'Memadukan efisiensi rekayasa sistem, koordinasi proyek besar, dan pengambilan keputusan taktis.'
      },
      {
        category: 'Bisnis, Sosial & Humaniora',
        majors: ['Manajemen Bisnis Internasional', 'Hukum Korporasi', 'Ilmu Politik & Tata Negara'],
        reason: 'Sangat selaras untuk calon eksekutif perusahaan, advokat strategis, dan pengambil kebijakan.'
      },
      {
        category: 'Kreatif & Terapan',
        majors: ['Product Management & Kewirausahaan', 'Manajemen Rantai Pasok Global'],
        reason: 'Mengeksekusi visi bisnis nyata dengan ketepatan operasional modern.'
      }
    ],
    careerProspects: ['Chief Executive Officer (CEO)', 'Corporate Lawyer', 'Management Consultant', 'Direktur Operasional', 'Eksekutif Kebijakan Publik'],
    classroomBehavior: 'Proaktif mengambil inisiatif dalam rapat, sering dipercaya menjadi koordinator proyek, dan lugas memberikan arahan maupun kritik konstruktif.',
    friendshipAdvice: 'Perpaduan antara ketegasan prinsip dan kehangatan empati akan membuat Anda menjadi pemimpin yang dihormati sekaligus dicintai.'
  },

  ENTP: {
    code: 'ENTP',
    title: 'Sang Inovator Pendebat',
    group: 'Analis',
    groupColor: 'indigo',
    badge: 'Cerdik, Karismatik & Pemecah Kebuntuan',
    summary: 'Pribadi ENTP adalah komunikator cerdas yang menyukai pertukaran gagasan intelektual, menantang kebiasaan lama, dan mencetuskan inovasi baru. Mereka tangkas secara mental dan gemar mencari sudut pandang yang belum tersentuh.',
    quote: '"Segala sesuatu dapat ditingkatkan jika kita berani mempertanyakan asumsi dasar yang ada."',
    traits: ['Orator Ulung', 'Penuh Ide', 'Adaptif', 'Kritis Humoris', 'Berani Beda'],
    strengths: [
      'Kecakapan berargumentasi, negosiasi, dan presentasi persuasif di hadapan audiens',
      'Sangat lincah beradaptasi dengan masalah baru yang menuntut pemecahan kreatif fleksibel',
      'Mampu mencairkan suasana kaku dengan humor cerdas serta analogi yang segar',
      'Berani mengambil risiko terukur dan menguji batas peluang baru'
    ],
    weaknesses: [
      'Sering memulai berbagai proyek menarik namun cepat kehilangan minat pada tahap penyelesaian akhir',
      'Terkadang tampak suka berdebat demi adu argumen sehingga memicu gesekan',
      'Mudah jenuh dengan pekerjaan rutin yang monoton tanpa tantangan intelektual',
      'Kurang telaten mengurus detail administrasi atau dokumentasi rutin'
    ],
    studyTips: [
      'Ubah topik yang ingin dikuasai menjadi forum diskusi interaktif atau studi kasus nyata.',
      'Bermitralah dengan rekan bertipe terstruktur (Judging) untuk menjaga konsistensi eksekusi proyek.',
      'Biasakan menuntaskan satu proyek prioritas hingga selesai sebelum melompat ke gagasan berikutnya.'
    ],
    recommendedMajors: [
      {
        category: 'Teknologi & Sains',
        majors: ['Rekayasa Perangkat Lunak Inovatif', 'Teknik Mekatronika', 'Bioteknologi Industri'],
        reason: 'Memberikan ruang bereksperimen dan menciptakan prototipe solusi masa depan.'
      },
      {
        category: 'Bisnis, Sosial & Humaniora',
        majors: ['Ilmu Komunikasi & Hubungan Masyarakat', 'Hukum Litigasi & Advokasi', 'Diplomasi & Hubungan Internasional'],
        reason: 'Mengoptimalkan kemampuan retorika, negosiasi dinamis, dan pemecahan konflik strategis.'
      },
      {
        category: 'Kreatif & Terapan',
        majors: ['Creative Advertising & Branding', 'Pengembangan Startup & Ventura'],
        reason: 'Menyalurkan gagasan brilian ke dalam kampanye kreatif dan perintisan usaha modern.'
      }
    ],
    careerProspects: ['Pengacara / Konsultan Strategi', 'Creative Director', 'Tech Entrepreneur / Founder', 'Jurnalis Investigasi', 'Business Development Lead'],
    classroomBehavior: 'Aktif melontarkan sudut pandang alternatif dalam diskusi, gemar mencairkan suasana, dan sangat unggul pada sesi tanya-jawab spontan.',
    friendshipAdvice: 'Pastikan rekan Anda memahami bahwa kritik atau perdebatan yang Anda ajukan murni untuk mempertajam ide, bukan serangan personal.'
  },

  INFJ: {
    code: 'INFJ',
    title: 'Sang Advokat Idealis',
    group: 'Diplomatis',
    groupColor: 'emerald',
    badge: 'Bijaksana, Berempati Tinggi & Berprinsip',
    summary: 'Pribadi INFJ adalah sosok hangat, visioner, dan memiliki kepedulian mendalam terhadap nilai kemanusiaan serta keadilan. Mereka memiliki intuisi tajam membaca motivasi orang lain dan berdedikasi pada pekerjaan yang bermakna.',
    quote: '"Kebaikan kecil yang dilakukan dengan penuh kesadaran mampu mengubah arah hidup seseorang."',
    traits: ['Empatis', 'Visioner Tenang', 'Berdedikasi', 'Peka Emosi', 'Penuh Makna'],
    strengths: [
      'Kemampuan menulis reflektif, menyusun narasi strategis, dan berkomunikasi secara mendalam',
      'Pendengar yang penuh empati serta tempat berbagi cerita yang aman bagi orang di sekitarnya',
      'Integritas moral tinggi dalam menjaga amanah dan kualitas pekerjaan',
      'Komitmen kuat ketika misi kerja atau hidupnya selaras dengan kemanusiaan'
    ],
    weaknesses: [
      'Rentan mengalami kelelahan emosional (*burnout*) karena terlalu menyerap beban perasaan sekitar',
      'Standar perfeksionisme pribadi yang tinggi kerap memicu tekanan batin',
      'Sulit menolak permintaan bantuan meski kapasitas waktu dan tenaga sudah penuh',
      'Cenderung memendam kekecewaan sendirian demi menjaga keharmonisan luar'
    ],
    studyTips: [
      'Ciptakan lingkungan kerja atau ruang refleksi yang tenang, rapi, dan bebas distraksi suara keras.',
      'Kaitkan setiap materi atau proyek dengan dampak positif nyatanya bagi kehidupan orang banyak.',
      'Tetapkan batasan yang sehat untuk waktu istirahat pribadi tanpa merasa bersalah.'
    ],
    recommendedMajors: [
      {
        category: 'Teknologi & Sains',
        majors: ['Kedokteran & Kesehatan Holistik', 'Farmasi Klinis', 'Ilmu Kesehatan Masyarakat'],
        reason: 'Mengabdi langsung pada pemulihan dan kesejahteraan manusia berbasis ilmu pengetahuan.'
      },
      {
        category: 'Bisnis, Sosial & Humaniora',
        majors: ['Psikologi Klinis & Konseling', 'Pengembangan SDM & Coaching', 'Sosiologi & Kesejahteraan Sosial'],
        reason: 'Sangat sejalan dengan panggilan jiwa mendampingi pertumbuhan dan potensi manusia.'
      },
      {
        category: 'Kreatif & Terapan',
        majors: ['Penulisan Kreatif & Kuratorial', 'Desain Komunikasi Berdampak Sosial'],
        reason: 'Mengekspresikan visi empati melalui karya tulis dan pesan visual yang menggugah kesadaran.'
      }
    ],
    careerProspects: ['Psikolog / Konselor', 'Dokter / Praktisi Kesehatan', 'Penulis / Editor', 'Pegiat Kemanusiaan / NGO Lead', 'Human Capital Advisor'],
    classroomBehavior: 'Tenang, santun, peka terhadap suasana hati rekan tim, dan menyerahkan hasil kerja yang penuh ketelitian serta makna.',
    friendshipAdvice: 'Beranilah berkata "tidak" dengan lembut ketika energi Anda sudah terbatas agar kesehatan mental Anda tetap terjaga.'
  },

  INFP: {
    code: 'INFP',
    title: 'Sang Mediator Bijak',
    group: 'Diplomatis',
    groupColor: 'emerald',
    badge: 'Puitis, Tulus, Kreatif & Berpegang Nilai',
    summary: 'Pribadi INFP adalah jiwa kreatif berhati tulus yang senantiasa mencari keaslian diri, keindahan makna, dan keselarasan hidup. Mereka digerakkan oleh nilai batin dan menyukai eksplorasi gagasan yang menginspirasi.',
    quote: '"Jadilah setia pada apa yang Anda yakini, bahkan ketika dunia meminta Anda menjadi seragam."',
    traits: ['Autentik', 'Empatis Mendalam', 'Imajinatif', 'Terbuka', 'Penuh Nilai Luhur'],
    strengths: [
      'Daya imajinasi kreatif dan kepekaan artistik yang kaya dalam bahasa, desain, maupun seni',
      'Toleransi tinggi serta kemampuan memahami sudut pandang beragam tanpa menghakimi',
      'Semangat dan dedikasi luar biasa ketika menekuni bidang yang menyentuh hati nuraninya',
      'Ketulusan dan komitmen teguh terhadap kejujuran prinsip pribadi'
    ],
    weaknesses: [
      'Mudah terluka atau berkecil hati saat menerima kritik tajam yang bernada keras',
      'Terkadang kesulitan bekerja dengan tuntutan birokrasi kaku dan tenggat waktu ketat yang berulang',
      'Cenderung menarik diri dari lingkungan yang penuh konflik atau persaingan agresif',
      'Kadang terlalu idealis sehingga merasa kecewa ketika realitas tak seindah harapan'
    ],
    studyTips: [
      'Gunakan jurnal reflektif, ilustrasi visual, atau pendekatan bercerita (storytelling) saat mempelajari hal baru.',
      'Tata ruang kerja atau sudut belajar Anda seestetik dan senyaman mungkin untuk memicu inspirasi.',
      'Pisahkan kritik terhadap hasil kerja dari penilaian harga diri Anda secara pribadi.'
    ],
    recommendedMajors: [
      {
        category: 'Teknologi & Sains',
        majors: ['Biologi Konservasi & Ekologi', 'Kedokteran Hewan', 'Ilmu Gizi & Kesejahteraan'],
        reason: 'Berfokus pada pelestarian alam, kelangsungan hayati, dan kepedulian terhadap sesama makhluk.'
      },
      {
        category: 'Bisnis, Sosial & Humaniora',
        majors: ['Psikologi Perkembangan & Terapi', 'Sastra & Kajian Budaya', 'Antropologi Sosial', 'Filsafat Etika'],
        reason: 'Eksplorasi mendalam terhadap jiwa manusia, narasi sastra, dan keragaman nilai budaya.'
      },
      {
        category: 'Kreatif & Terapan',
        majors: ['Desain Komunikasi Visual (DKV)', 'Perfilman & Animasi', 'Seni Rupa & Penulisan'],
        reason: 'Saluran sempurna bagi imajinasi visual, penceritaan emosional, dan karya orisinal.'
      }
    ],
    careerProspects: ['Psikolog Konseling', 'Penulis / Scriptwriter', 'Animator / Ilustrator', 'Content Strategist', 'Aktivis Lingkungan & Budaya'],
    classroomBehavior: 'Penuh perhatian, bertutur lembut, sering memiliki catatan ide kreatif yang unik, serta menjadi pendengar yang tulus bagi rekan-rekannya.',
    friendshipAdvice: 'Jangan ragu menyuarakan karya dan perspektif berharga Anda kepada publik. Dunia membutuhkan sentuhan keautentikan Anda.'
  },

  ENFJ: {
    code: 'ENFJ',
    title: 'Sang Protagonis Pemandu',
    group: 'Diplomatis',
    groupColor: 'emerald',
    badge: 'Inspiratif, Hangat, Karismatik & Kolaboratif',
    summary: 'Pribadi ENFJ adalah penggerak sosial yang memiliki karisma alami untuk menyatukan orang lain, membangkitkan semangat kolaborasi, dan membantu orang di sekitarnya bertumbuh mencapai potensi terbaiknya.',
    quote: '"Kemenangan sejati adalah saat kita dapat melangkah maju dan bertumbuh bersama-sama."',
    traits: ['Inspiratif', 'Peduli', 'Komunikator Hangat', 'Organisatoris', 'Pemberi Energi Positif'],
    strengths: [
      'Kemampuan luar biasa membangkitkan motivasi tim atau komunitas menuju tujuan bersama',
      'Kecakapan diplomasi tinggi dan mediator ulung saat terjadi perbedaan pendapat',
      'Karisma berbicara di hadapan publik dengan pembawaan yang hangat dan menggugah',
      'Kepedulian sosial yang tulus dalam kegiatan pengabdian, edukasi, dan mentoring'
    ],
    weaknesses: [
      'Cenderung terlalu memikul beban orang lain demi membuat semua pihak merasa nyaman',
      'Mudah merasa cemas atau menyalahkan diri sendiri bila timbul penolakan sosial',
      'Kurang tega mengambil keputusan tegas yang berisiko mengecewakan perasaan rekan',
      'Sering melupakan istirahat pribadi karena terlalu padat agenda membantu orang lain'
    ],
    studyTips: [
      'Bentuk kelompok diskusi atau komunitas belajar untuk saling bertukar wawasan secara aktif.',
      'Buat pembagian jadwal tegas antara waktu mendampingi orang lain dan waktu pengembangan diri pribadi.',
      'Manfaatkan metode diskusi lisan atau presentasi untuk menguatkan daya ingat terhadap materi baru.'
    ],
    recommendedMajors: [
      {
        category: 'Teknologi & Sains',
        majors: ['Ilmu Kesehatan Masyarakat', 'Kedokteran & Pelayanan Medis', 'Keperawatan'],
        reason: 'Perpaduan keilmuan medis dengan pengabdian langsung bagi kualitas hidup masyarakat.'
      },
      {
        category: 'Bisnis, Sosial & Humaniora',
        majors: ['Manajemen SDM (Human Resources)', 'Ilmu Komunikasi & Diplomasi', 'Pendidikan & Kepelatihan', 'Psikologi Organisasi'],
        reason: 'Mengoptimalkan bakat kepemimpinan dalam membina potensi manusia dan menjalin relasi publik.'
      },
      {
        category: 'Kreatif & Terapan',
        majors: ['Public Relations & Corporate Affairs', 'Pemberdayaan Masyarakat & CSR'],
        reason: 'Menjadi jembatan komunikasi strategis dan motor penggerak perubahan positif di organisasi.'
      }
    ],
    careerProspects: ['HR Director / People Lead', 'Diplomat', 'Public Relations Specialist', 'Edukator / Corporate Trainer', 'Career & Life Coach'],
    classroomBehavior: 'Aktif mengoordinasi dinamika tim, cekatan memastikan semua orang dilibatkan dalam diskusi, dan selalu menjaga semangat kebersamaan.',
    friendshipAdvice: 'Ingatlah bahwa Anda tidak memikul tanggung jawab atas kebahagiaan semua orang. Rawatlah juga energi dan kebutuhan diri sendiri.'
  },

  ENFP: {
    code: 'ENFP',
    title: 'Sang Juru Kampanye Kreatif',
    group: 'Diplomatis',
    groupColor: 'emerald',
    badge: 'Antusias, Penuh Energi, Spontan & Imajinatif',
    summary: 'Pribadi ENFP adalah magnet antusiasme yang selalu memancarkan energi segar, kaya akan ide kreatif, dan senang menjalin koneksi hangat dengan berbagai kalangan. Mereka menghargai kebebasan berekspresi dan peluang baru.',
    quote: '"Hidup adalah kanvas petualangan tanpa batas yang menunggu untuk kita warnai dengan makna."',
    traits: ['Antusias', 'Kreatif Spontan', 'Hangat Terbuka', 'Cepat Nyambung', 'Penuh Rasa Ingin Tahu'],
    strengths: [
      'Kemampuan membangun jaringan relasi luas dari berbagai latar belakang secara alami',
      'Kreativitas tinggi dalam mencetuskan konsep acara, kampanye, atau proyek multimedia',
      'Pola pikir terbuka, lincah, dan fleksibel menghadapi dinamika perubahan yang mendadak',
      'Optimisme menular yang mampu membangkitkan semangat tim di saat krisis'
    ],
    weaknesses: [
      'Mudah terdistraksi oleh ide baru yang menarik sebelum pekerjaan sebelumnya tuntas',
      'Cepat merasa bosan dengan tugas administratif yang kaku dan repetitif',
      'Terkadang kurang rapi dalam mengelola berkas, jadwal rinci, atau rutinitas harian',
      'Bisa merasa kelelahan emosional jika terlalu banyak mengambil komitmen sosial sekaligus'
    ],
    studyTips: [
      'Gunakan metode eksplorasi variatif: padukan video interaktif, diskusi kreatif, dan studi kasus.',
      'Manfaatkan aplikasi pengingat jadwal (calendar reminder) agar tenggat waktu penting tidak terlewat.',
      'Pilih suasana kerja yang dinamis dan inspiratif agar fokus kreatif tetap terjaga.'
    ],
    recommendedMajors: [
      {
        category: 'Teknologi & Sains',
        majors: ['Ilmu Lingkungan & Keberlanjutan', 'Bioteknologi Kelautan', 'Arsitektur Lanskap'],
        reason: 'Eksplorasi sains yang dinamis dan terhubung langsung dengan kelestarian hidup manusia.'
      },
      {
        category: 'Bisnis, Sosial & Humaniora',
        majors: ['Ilmu Komunikasi & Jurnalistik', 'Hubungan Masyarakat & Pemasaran', 'Psikologi Sosial', 'Studi Lintas Budaya'],
        reason: 'Dunia komunikasi penuh warna, pertukaran gagasan, dan seni memahami perilaku audiens.'
      },
      {
        category: 'Kreatif & Terapan',
        majors: ['Broadcasting & Produksi Konten', 'Desain Komunikasi Visual', 'Manajemen Acara & Hiburan'],
        reason: 'Menghidupkan ide-ide spektakuler ke dalam media digital, karya visual, dan perhelatan kreatif.'
      }
    ],
    careerProspects: ['Creative Producer', 'Brand Strategist / Marketer', 'Jurnalis / Host Media', 'Facilitator & Motivator', 'Social Media Strategist'],
    classroomBehavior: 'Ceria, aktif melontarkan ide segar, cepat mencairkan keheningan, dan membawa atmosfer penuh optimisme ke dalam tim.',
    friendshipAdvice: 'Latihlah fokus untuk menuntaskan satu prioritas hingga selesai sebelum melangkah ke petualangan ide berikutnya.'
  },

  ISTJ: {
    code: 'ISTJ',
    title: 'Sang Logistik Tertib',
    group: 'Pengawal',
    groupColor: 'blue',
    badge: 'Disiplin, Teliti, Bertanggung Jawab & Andal',
    summary: 'Pribadi ISTJ adalah pilar keandalan yang berpegang teguh pada aturan, keakuratan fakta, dan ketepatan waktu. Mereka menyukai keteraturan, mencatat informasi dengan sistematis, dan selalu menepati komitmen.',
    quote: '"Kerapian, ketekunan, dan komitmen pada integritas adalah fondasi utama kesuksesan sejati."',
    traits: ['Disiplin', 'Metodis', 'Jujur', 'Konsisten', 'Pekerja Keras'],
    strengths: [
      'Disiplin waktu dan kepatuhan tinggi terhadap komitmen maupun tenggat penyelesaian tugas',
      'Catatan kerja dan dokumentasi yang sangat rapi, lengkap, dan menjadi rujukan andalan tim',
      'Integritas moral dan rasa tanggung jawab yang kokoh dalam bekerja',
      'Ketelitian tinggi dalam mengelola angka, keuangan, prosedur hukum, dan data faktual'
    ],
    weaknesses: [
      'Cenderung merasa terganggu bila prosedur atau jadwal diubah mendadak tanpa pemberitahuan jelas',
      'Terkadang terlihat kaku atau enggan langsung beralih ke metode baru yang belum terbukti',
      'Kurang nyaman dengan lingkungan kerja yang pembagian wewenangnya kabur',
      'Kurang terbiasa mengekspresikan apresiasi emosional secara spontan'
    ],
    studyTips: [
      'Pertahankan jadwal belajar atau rutinitas pengembangan diri di jam yang konsisten setiap hari.',
      'Gunakan pendekatan terstruktur berbasis daftar cek (checklist) dan evaluasi progres berkala.',
      'Latih keluwesan diri untuk beradaptasi perlahan saat menghadapi perubahan situasi tak terduga.'
    ],
    recommendedMajors: [
      {
        category: 'Teknologi & Sains',
        majors: ['Teknik Sipil & Infrastruktur', 'Farmasi & Standar Mutu', 'Ilmu Aktuaria', 'Statistika Terapan'],
        reason: 'Membutuhkan ketelitian angka, kepatuhan standar keselamatan, dan tata kelola yang presisi.'
      },
      {
        category: 'Bisnis, Sosial & Humaniora',
        majors: ['Akuntansi, Audit & Perpajakan', 'Ilmu Hukum Perdata / Kenotariatan', 'Administrasi Keuangan Negara'],
        reason: 'Sangat presisi dalam tata kelola keuangan, kepatuhan hukum, dan audit operasional.'
      },
      {
        category: 'Kreatif & Terapan',
        majors: ['Manajemen Logistik & Rantai Pasok', 'Sistem Informasi Manajemen'],
        reason: 'Mengatur alur distribusi aset dan data operasional perusahaan secara tertib dan efisien.'
      }
    ],
    careerProspects: ['Auditor / Akuntan Publik', 'Ahli Aktuaria / Analis Risiko', 'Hakim / Notaris', 'Quality Assurance Manager', 'Database Administrator'],
    classroomBehavior: 'Tenang, teratur, selalu hadir tepat waktu dengan persiapan matang, dan menyelesaikan setiap bagian tanggung jawab tanpa perlu diingatkan.',
    friendshipAdvice: 'Berikan ruang sesekali untuk menikmati kejutan atau aktivitas spontan bersama orang terdekat tanpa harus terikat jadwal ketat.'
  },

  ISFJ: {
    code: 'ISFJ',
    title: 'Sang Pembela Setia',
    group: 'Pengawal',
    groupColor: 'blue',
    badge: 'Penyayang, Berdedikasi, Teliti & Rendah Hati',
    summary: 'Pribadi ISFJ adalah sosok pendukung yang tulus, penuh dedikasi, dan sangat memperhatikan kenyamanan orang-orang di sekitarnya. Mereka teliti mengingat detail penting dan siap membantu tanpa menuntut sorotan.',
    quote: '"Kebaikan yang tulus tak memerlukan tepuk tangan; ketenangan orang lain adalah kebahagiaan tersendiri."',
    traits: ['Setia', 'Pengayom', 'Rapi Terorganisir', 'Teliti', 'Penuh Perhatian'],
    strengths: [
      'Daya ingat kuat terhadap detail penting, tanggal bermakna, dan kebutuhan spesifik orang lain',
      'Sikap loyal, santun, dapat dipercaya, dan memiliki etos kerja yang konsisten',
      'Mampu menjaga keharmonisan serta kerapian operasional tim di balik layar',
      'Ketabahan tinggi dalam menyelesaikan pekerjaan detail yang memerlukan kesabaran ekstra'
    ],
    weaknesses: [
      'Sering sulit menolak permintaan bantuan sehingga membebani kapasitas diri sendiri',
      'Cenderung memendam kelelahan atau perasaan terluka agar tidak merepotkan orang lain',
      'Mudah merasa cemas berlebihan menghadapi perubahan besar atau penilaian yang ketat',
      'Kurang nyaman menyampaikan kritik langsung meski mengetahui ada kekeliruan'
    ],
    studyTips: [
      'Buat ringkasan terstruktur dengan penanda warna lembut agar mudah ditinjau ulang.',
      'Terapkan teknik relaksasi pernapasan dan afirmasi positif sebelum menghadapi momen evaluasi penting.',
      'Jangan ragu meminta masukan atau bantuan ketika beban pekerjaan sudah terasa terlalu berat.'
    ],
    recommendedMajors: [
      {
        category: 'Teknologi & Sains',
        majors: ['Keperawatan & Pelayanan Medis', 'Kedokteran Gigi', 'Farmasi Klinis', 'Ilmu Gizi'],
        reason: 'Kombinasi ketelitian prosedural medis dengan dedikasi tulus merawat kesehatan sesama.'
      },
      {
        category: 'Bisnis, Sosial & Humaniora',
        majors: ['Pendidikan & Pengajaran', 'Psikologi Pendidikan & Konseling', 'Administrasi Perkantoran', 'Kearsipan'],
        reason: 'Membimbing sesama dengan ketulusan serta mengelola dokumen dan layanan organisasi dengan rapi.'
      },
      {
        category: 'Kreatif & Terapan',
        majors: ['Manajemen Kuliner & Tata Boga', 'Desain Interior Fungsional'],
        reason: 'Menciptakan kenyamanan ruang tinggal serta sajian yang menghangatkan suasana.'
      }
    ],
    careerProspects: ['Tenaga Medis / Perawat', 'Pendidik / Konselor', 'Nutrisionis / Ahli Gizi', 'Office Manager / Arsiparis', 'Customer Care Specialist'],
    classroomBehavior: 'Ramah, santun, sigap membantu rekan yang kesulitan di belakang layar, dan bekerja dengan konsistensi serta kerapian tinggi.',
    friendshipAdvice: 'Utarakan perasaan dan batasan Anda secara jujur. Orang-orang terdekat Anda juga ingin mendukung dan meringankan beban Anda.'
  },

  ESTJ: {
    code: 'ESTJ',
    title: 'Sang Eksekutif Tegas',
    group: 'Pengawal',
    groupColor: 'blue',
    badge: 'Tertib, Andal, Berdedikasi & Pemimpin Lapangan',
    summary: 'Pribadi ESTJ adalah pengelola tangguh yang menjunjung tinggi ketertiban, kejelasan prosedur, dan kerja nyata. Mereka sangat andal mengoordinasikan organisasi atau proyek agar seluruh tim berjalan sesuai aturan dan target.',
    quote: '"Disiplin dan tindakan nyata adalah jembatan penghubung antara rencana dan pencapaian."',
    traits: ['Tegas', 'Praktis', 'Pekerja Keras', 'Terstruktur', 'Berorientasi Target'],
    strengths: [
      'Kemampuan memimpin organisasi, tim operasional, atau kepanitiaan besar dengan disiplin tinggi',
      'Ketegasan menjaga standar kerja serta memastikan setiap tugas selesai tepat waktu',
      'Daya tahan kerja tangguh dan kesetiaan pada tanggung jawab profesional',
      'Keahlian menyusun jadwal praktis, penganggaran, dan alur kerja yang efisien'
    ],
    weaknesses: [
      'Bisa terkesan terlalu menuntut atau kurang sabar terhadap kelambanan orang lain',
      'Cenderung mengabaikan nuansa perasaan pribadi dalam pengambilan keputusan tim',
      'Kurang terbuka terhadap ide-ide eksperimental yang belum teruji efektivitasnya',
      'Sulit bersantai apabila masih ada pekerjaan yang dirasa belum sempurna'
    ],
    studyTips: [
      'Susun jadwal kerja atau peningkatan kompetensi secara terperinci per blok waktu.',
      'Fokus pada pencapaian target praktis harian secara konsisten dan terukur.',
      'Luangkan waktu mendengarkan sudut pandang emosional rekan tim sebelum mengambil keputusan final.'
    ],
    recommendedMajors: [
      {
        category: 'Teknologi & Sains',
        majors: ['Teknik Industri & Manufaktur', 'Teknik Pertambangan & Energi', 'Teknik Sipil'],
        reason: 'Mengelola operasional lapangan, standar prosedur keselamatan, dan efisiensi produksi.'
      },
      {
        category: 'Bisnis, Sosial & Humaniora',
        majors: ['Manajemen Bisnis & Operasional', 'Hukum Tata Negara & Korporasi', 'Administrasi Publik', 'Kepemimpinan Keamanan / Militer'],
        reason: 'Penegakan ketertiban hukum, kepemimpinan terstruktur, dan tata kelola institusi.'
      },
      {
        category: 'Kreatif & Terapan',
        majors: ['Manajemen Perhotelan & Pariwisata', 'Manajemen Logistik & Proyek'],
        reason: 'Memastikan standar mutu pelayanan operasional berjalan lancar tanpa hambatan.'
      }
    ],
    careerProspects: ['Project Manager', 'Manajer Operasional', 'Perwira / Pimpinan Keamanan', 'Pengacara / Jaksa', 'Pejabat Administrasi Publik'],
    classroomBehavior: 'Berwibawa, terbiasa mengoordinasi pembagian tugas, tegas menjaga ketertiban rapat, dan fokus langsung pada eksekusi hasil.',
    friendshipAdvice: 'Berikan apresiasi hangat terhadap usaha orang di sekitar Anda, bukan hanya menuntut hasil sempurna. Kehangatan akan memperkuat wibawa Anda.'
  },

  ESFJ: {
    code: 'ESFJ',
    title: 'Sang Konsul Hangat',
    group: 'Pengawal',
    groupColor: 'blue',
    badge: 'Sosial, Suportif, Peduli Tradisi & Harmonis',
    summary: 'Pribadi ESFJ adalah perekat keharmonisan dalam komunitas yang memiliki kepekaan sosial tinggi, ramah kepada siapa saja, dan senang membangun suasana kerja maupun pergaulan yang saling mendukung.',
    quote: '"Tidak ada kebahagiaan yang lebih bermakna selain melihat lingkungan sekitar rukun dan saling menguatkan."',
    traits: ['Hangat', 'Ramah', 'Sangat Sosial', 'Peduli Harmoni', 'Praktis'],
    strengths: [
      'Mudah disukai berbagai kalangan karena pembawaan yang sopan, supel, dan penuh perhatian',
      'Cekatan mengorganisir acara kebersamaan, pertemuan komunitas, maupun kegiatan sosial',
      'Selalu berupaya memastikan tidak ada anggota tim yang merasa tersisih atau terabaikan',
      'Tekun menjaga tradisi baik, koordinasi tim, dan kenyamanan lingkungan sekitar'
    ],
    weaknesses: [
      'Sangat rentan terluka perasaannya saat menghadapi kritik keras atau penolakan sosial',
      'Mudah merasa khawatir berlebihan terhadap penilaian orang lain',
      'Sering ragu mengambil keputusan tidak populer meski keputusan itu perlu dilakukan',
      'Bisa terlalu sibuk mengurusi kepentingan sosial hingga melupakan prioritas pribadi'
    ],
    studyTips: [
      'Pelajari keterampilan baru bersama rekan atau dalam lingkungan komunitas yang saling mendukung.',
      'Gunakan daftar pencapaian (checklist) untuk membangun rasa percaya diri secara bertahap.',
      'Fokus pada kemajuan diri sendiri tanpa terlalu membandingkan dengan standar orang lain.'
    ],
    recommendedMajors: [
      {
        category: 'Teknologi & Sains',
        majors: ['Fisioterapi & Rehabilitasi', 'Kedokteran Gigi', 'Ilmu Gizi & Kesehatan Komunitas'],
        reason: 'Interaksi langsung membantu pemulihan kesehatan dengan pendekatan personal yang hangat.'
      },
      {
        category: 'Bisnis, Sosial & Humaniora',
        majors: ['Manajemen Sumber Daya Manusia', 'Pendidikan & Pelatihan', 'Ilmu Komunikasi Massa', 'Hubungan Masyarakat'],
        reason: 'Mengayomi pengembangan manusia dan membangun reputasi relasi publik yang harmonis.'
      },
      {
        category: 'Kreatif & Terapan',
        majors: ['Manajemen Event & Keprotokolan', 'Hospitality & Pariwisata'],
        reason: 'Sangat piawai menyambut tamu, mengelola acara bergengsi, dan menjaga kepuasan klien.'
      }
    ],
    careerProspects: ['Edukator / Pelatih', 'Public Relations Specialist', 'Event Organizer Director', 'Client Relationship Manager', 'Praktisi Kesehatan / Fisioterapis'],
    classroomBehavior: 'Menyapa setiap orang dengan ramah, mengingat detail penting tentang rekan-rekannya, dan menjadi penyejuk saat tim mengalami tekanan.',
    friendshipAdvice: 'Sadari bahwa Anda tidak harus menyenangkan semua orang setiap saat. Beranilah menetapkan prioritas demi ketenangan diri Anda.'
  },

  ISTP: {
    code: 'ISTP',
    title: 'Sang Virtuoso Praktis',
    group: 'Penjelajah',
    groupColor: 'amber',
    badge: 'Tenang, Praktis, Pemecah Masalah Teknis',
    summary: 'Pribadi ISTP adalah pemecah masalah langsung yang tenang, realistis, dan gemar berinteraksi secara nyata dengan alat, teknologi, mekanika, maupun aktivitas fisik. Mereka tangkas bertindak saat keadaan darurat.',
    quote: '"Tindakan nyata dan pemahaman langsung tentang cara kerja sistem jauh lebih bernilai dari ribuan teori."',
    traits: ['Praktis', 'Cepat Tanggap', 'Tenang di Bawah Tekanan', 'Logis Realistis', 'Mandiri'],
    strengths: [
      'Kecerdasan spasial dan mekanikal tinggi dalam mengoperasikan alat, teknologi, atau sistem teknis',
      'Tetap sangat tenang, jernih, dan tidak panik saat menghadapi krisis mendadak',
      'Efisien dan hemat kata namun langsung mengeksekusi solusi tepat sasaran',
      'Fleksibilitas tinggi dalam memecahkan masalah di lapangan tanpa terikat aturan kaku'
    ],
    weaknesses: [
      'Cepat bosan menyimak pembahasan teori abstrak yang tidak memiliki aplikasi nyata',
      'Cenderung irit bicara sehingga isi pikirannya terkadang sulit ditebak rekan tim',
      'Kurang nyaman dengan komitmen birokrasi kaku yang membatasi ruang geraknya',
      'Terkadang terkesan cuek terhadap basa-basi sosial di lingkungan formal'
    ],
    studyTips: [
      'Pelajari keterampilan baru melalui praktik langsung (hands-on), simulasi, atau bongkar-pasang alat.',
      'Hindari hanya membaca teori panjang; langsung terapkan ke dalam proyek kasus nyata.',
      'Selingi waktu kerja dengan aktivitas fisik atau olahraga ringan untuk menjaga ketajaman fokus.'
    ],
    recommendedMajors: [
      {
        category: 'Teknologi & Sains',
        majors: ['Teknik Mesin & Otomotif', 'Teknik Elektro & Robotika', 'Teknik Penerbangan', 'Ilmu Forensik'],
        reason: 'Mengeksplorasi cara kerja mesin, sirkuit elektronik, aerodinamika, dan investigasi teknis.'
      },
      {
        category: 'Bisnis, Sosial & Humaniora',
        majors: ['Kriminologi & Investigasi', 'Ekonomi Lapangan', 'Ilmu Keolahragaan'],
        reason: 'Analisis bukti empiris lapangan serta optimalisasi kinerja fisik dan taktis.'
      },
      {
        category: 'Kreatif & Terapan',
        majors: ['Sound & Audio Engineering', 'Desain Produk Industri', 'Penerbangan & Aviasi'],
        reason: 'Menguasai instrumen teknis presisi, perancangan produk fisik, dan kendali sistem.'
      }
    ],
    careerProspects: ['Robotics / Hardware Engineer', 'Pilot / Spesialis Aviasi', 'Teknisi Forensik', 'Product Designer', 'Field Operations Specialist'],
    classroomBehavior: 'Tenang, mengamati situasi secara cermat, dan paling bersinar ketika tim dihadapkan pada masalah teknis mendesak atau praktik langsung.',
    friendshipAdvice: 'Luangkan waktu untuk menjelaskan jalan pikiran dan solusi hebat Anda kepada tim agar mereka memahami arah langkah Anda.'
  },

  ISFP: {
    code: 'ISFP',
    title: 'Sang Petualang Artistik',
    group: 'Penjelajah',
    groupColor: 'amber',
    badge: 'Sensitif, Artistik, Hangat & Menikmati Momen',
    summary: 'Pribadi ISFP adalah kreator berhati lembut yang memaknai hidup melalui estetika, kepekaan indra, dan kebebasan berekspresi secara autentik. Mereka menghargai keragaman serta menghindari konflik yang tidak perlu.',
    quote: '"Keindahan sejati hadir pada setiap momen saat ini yang dijalani dengan ketulusan rasa."',
    traits: ['Artistik', 'Sensitif', 'Rendah Hati', 'Adaptif', 'Pecinta Alam & Estetika'],
    strengths: [
      'Kepekaan estetika tinggi terhadap harmoni warna, desain, fotografi, musik, maupun tata ruang',
      'Pembawaan ramah, santai, dan tidak suka memicu drama dalam pergaulan maupun pekerjaan',
      'Toleran serta menghargai keunikan cara hidup setiap orang di sekitarnya',
      'Fokus penuh pada kualitas pengalaman masa kini dan detail keindahan yang sering terlewatkan'
    ],
    weaknesses: [
      'Mudah merasa tertekan di lingkungan kerja yang sangat kompetitif dan kaku',
      'Kurang menyukai penyusunan rencana jangka panjang yang terlalu terikat target kaku',
      'Cenderung menghindari konfrontasi kritik dan memilih menarik diri saat kecewa',
      'Terkadang menunda pekerjaan rutin hingga suasana hati (mood) terasa selaras'
    ],
    studyTips: [
      'Kemas materi atau proyek kerja ke dalam bentuk visual estetik, sketsa, atau papan inspirasi.',
      'Putar musik instrumental yang menenangkan saat perlu berkonsentrasi menuntaskan tugas.',
      'Tetapkan target kecil yang realistis setiap hari agar pekerjaan tidak menumpuk di akhir.'
    ],
    recommendedMajors: [
      {
        category: 'Teknologi & Sains',
        majors: ['Arsitektur Lanskap', 'Kedokteran Hewan', 'Ilmu Kelautan', 'Formulasi Kosmetika & Farmasi'],
        reason: 'Memadukan keilmuan terapan dengan kecintaan terhadap alam, satwa, dan estetika.'
      },
      {
        category: 'Bisnis, Sosial & Humaniora',
        majors: ['Terapi Seni (Art Therapy)', 'Sosiologi Komunitas Kreatif', 'Kajian Seni & Budaya'],
        reason: 'Memahami ekspresi emosi manusia melalui media seni serta dinamika komunitas.'
      },
      {
        category: 'Kreatif & Terapan',
        majors: ['Desain Interior & Tata Ruang', 'Desain Mode (Fashion)', 'Fotografi & Seni Rupa', 'Animasi Digital'],
        reason: 'Mengekspresikan bakat estetika orisinal ke dalam karya visual, ruang, dan produk bernilai seni.'
      }
    ],
    careerProspects: ['Fashion / Product Designer', 'Fotografer / Sinematografer', 'Art Therapist', 'Desainer Interior', 'Ilustrator / Visual Concept Artist'],
    classroomBehavior: 'Bersahaja, memiliki sentuhan gaya personal yang khas, ramah dalam interaksi satu-lawan-satu, dan menyukai kebebasan berkarya.',
    friendshipAdvice: 'Percayalah pada nilai keunikan karya dan perspektif Anda. Dunia membutuhkan keindahan dan ketulusan yang Anda hadirkan.'
  },

  ESTP: {
    code: 'ESTP',
    title: 'Sang Pengusaha Dinamis',
    group: 'Penjelajah',
    groupColor: 'amber',
    badge: 'Berenergi, Spontan, Cerdik & Berani Mengambil Risiko',
    summary: 'Pribadi ESTP adalah sosok penuh aksi yang tangkas membaca situasi, menyukai tantangan nyata di lapangan, dan berani mengambil langkah cepat tanpa ragu. Mereka membawa dinamika berenergi tinggi di mana pun berada.',
    quote: '"Jangan hanya membicarakan peluang; bergeraklah sekarang dan wujudkan hasilnya secara nyata."',
    traits: ['Pemberani', 'Spontan', 'Realistis', 'Persuasif', 'Berorientasi Aksi'],
    strengths: [
      'Sangat cepat beradaptasi dalam situasi krisis dan tangkas memecahkan persoalan mendesak',
      'Daya tarik sosial kuat, pandai bernegosiasi, dan piawai meyakinkan klien atau rekan',
      'Unggul dalam aktivitas lapangan, kompetisi olahraga, serta eksekusi bisnis langsung',
      'Kemampuan pragmatis tinggi dalam memaksimalkan sumber daya yang tersedia'
    ],
    weaknesses: [
      'Cepat jenuh mendengarkan presentasi teori panjang tanpa rencana aksi yang jelas',
      'Terkadang bertindak impulsif tanpa memperhitungkan dampak jangka panjang',
      'Kurang sabar mengikuti aturan prosedural kaku yang dirasa memperlambat gerak',
      'Cenderung mengandalkan improvisasi di menit akhir ketimbang persiapan jauh hari'
    ],
    studyTips: [
      'Pelajari keterampilan baru secara aktif melalui simulasi peran (role play), praktik bisnis, atau studi lapangan.',
      'Gunakan format belajar cepat dan interaktif dengan umpan balik langsung.',
      'Berikan penghargaan aktivitas fisik setelah menuntaskan blok pekerjaan administratif.'
    ],
    recommendedMajors: [
      {
        category: 'Teknologi & Sains',
        majors: ['Teknik Pertambangan & Lapangan', 'Teknik Kelautan / Maritim', 'Ilmu Kepelatihan & Keolahragaan'],
        reason: 'Aktivitas dinamis di lapangan yang menuntut ketangguhan fisik dan kecekatan teknis.'
      },
      {
        category: 'Bisnis, Sosial & Humaniora',
        majors: ['Kewirausahaan (Entrepreneurship)', 'Pemasaran & Penjualan Strategis', 'Hukum Litigasi & Negosiasi'],
        reason: 'Piawai membaca peluang pasar, bernegosiasi langsung, dan menggerakkan transaksi bisnis.'
      },
      {
        category: 'Kreatif & Terapan',
        majors: ['Manajemen Olahraga & Rekreasi', 'Live Broadcasting & Jurnalisme Lapangan'],
        reason: 'Peliputan dinamis di lapangan serta pengelolaan agenda berskala besar secara cepat.'
      }
    ],
    careerProspects: ['Pengusaha / Founder Bisnis', 'Trader / Broker Investasi', 'Sales & Marketing Director', 'Atlet / Pelatih Profesional', 'Reporter Lapangan'],
    classroomBehavior: 'Penuh semangat, sering melontarkan ide praktis yang langsung bisa dicoba, dan menjadi penggerak aksi ketika diskusi mulai berlarut.',
    friendshipAdvice: 'Latihlah jeda sejenak untuk mempertimbangkan konsekuensi jangka panjang sebelum mengambil keputusan besar dalam hidup maupun karier.'
  },

  ESFP: {
    code: 'ESFP',
    title: 'Sang Penghibur Ceria',
    group: 'Penjelajah',
    groupColor: 'amber',
    badge: 'Spontan, Ekspresif, Penuh Tawa & Magnet Panggung',
    summary: 'Pribadi ESFP adalah pembawa keceriaan yang menyukai interaksi hangat, dinamika panggung, dan berbagi energi positif dengan orang-orang di sekitarnya. Mereka peka terhadap gaya hidup dan menikmati setiap momen kebersamaan.',
    quote: '"Hidup ini terlalu berharga untuk dilewatkan dengan murung; mari ciptakan kenangan bermakna setiap hari!"',
    traits: ['Ekspresif', 'Ceria', 'Spontan', 'Ramah Hangat', 'Menghidupkan Suasana'],
    strengths: [
      'Karisma panggung memukau dalam seni pertunjukan, public speaking, maupun presenter acara',
      'Kemampuan mencairkan suasana canggung seketika dan membuat siapa pun merasa disambut',
      'Sikap optimis dan hangat yang mampu mengangkat moral rekan di masa sulit',
      'Kecerdasan interpersonal praktis dalam membaca kebutuhan serta selera orang lain'
    ],
    weaknesses: [
      'Mudah teralihkan oleh aktivitas sosial seru saat seharusnya fokus menyelesaikan tugas penting',
      'Kurang menikmati analisis teori abstrak panjang atau pekerjaan data yang terisolasi',
      'Cenderung menghindari pembahasan serius yang memuat kritik atau ketegangan konflik',
      'Merasa gelisah bila harus bekerja sendirian dalam ruangan tertutup terlalu lama'
    ],
    studyTips: [
      'Pelajari hal baru secara kolaboratif bersama rekan sambil mendiskusikannya secara ekspresif.',
      'Manfaatkan konten video dinamis atau praktik langsung agar proses belajar terasa hidup.',
      'Buat sesi fokus singkat (25 menit) diselingi jeda interaksi singkat agar tidak mudah bosan.'
    ],
    recommendedMajors: [
      {
        category: 'Teknologi & Sains',
        majors: ['Kebugaran & Kesehatan Jasmani', 'Fisioterapi', 'Pelayanan Keperawatan'],
        reason: 'Memadukan gerak aktif dan interaksi medis dengan sentuhan personal yang ramah serta ceria.'
      },
      {
        category: 'Bisnis, Sosial & Humaniora',
        majors: ['Ilmu Komunikasi & Penyiaran', 'Pariwisata & Hospitaliti', 'Pendidikan Anak & Fasilitator'],
        reason: 'Dunia hiburan interaktif, layanan keramahtamahan, dan pendampingan penuh energi positif.'
      },
      {
        category: 'Kreatif & Terapan',
        majors: ['Seni Pertunjukan (Teater / Musik / Tari)', 'Tata Busana & Styling', 'Event & Public Relations'],
        reason: 'Menjadi bintang panggung, ekspresi estetika gaya hidup, dan penggerak acara berkesan.'
      }
    ],
    careerProspects: ['Entertainer / Public Figure', 'Master of Ceremonies (MC)', 'Hospitality & Tourism Specialist', 'Instruktur Kebugaran', 'Event Planner & Show Director'],
    classroomBehavior: 'Penuh senyum, memiliki jejaring pertemanan yang sangat luas, dan selalu menjadi sumber energi positif di lingkungan kerja maupun komunitas.',
    friendshipAdvice: 'Sisihkan waktu khusus untuk menata perencanaan keuangan dan target karier jangka panjang di samping menikmati serunya hari ini.'
  }
};
