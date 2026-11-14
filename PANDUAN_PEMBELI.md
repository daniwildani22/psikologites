# 📘 PANDUAN LENGKAP PENGGUNAAN & INSTALASI SOURCE CODE
## PSIKOLOGI EMPATI — Website Asesmen Kepribadian, Gaya Belajar & Minat Karier (Umum)

Terima kasih telah membeli source code produk digital ini! Dokumen ini berisi panduan langkah-demi-langkah bagi Anda atau pembeli Anda untuk menjalankan website ini di laptop/komputer secara lokal (offline) maupun meng-online-kannya ke internet secara gratis.

---

## ⚡ CARA CEPAT (Untuk Pengguna Windows)
Jika Anda menggunakan Windows dan sudah menginstal **Node.js**:
1. Ekstrak file `.zip` ini ke folder di laptop Anda.
2. Klik dua kali (**Double Click**) pada file:
   👉 `jalankan_aplikasi.bat`
3. Aplikasi akan otomatis menginstal komponen dan membuka browser di `http://localhost:3000`. Selesai!

---

## 🛠️ CARA MANUAL / PENGGUNA MAC & LINUX

### Syarat Awal (Prerequisites)
Pastikan laptop Anda sudah memiliki **Node.js** (Versi 18 ke atas atau versi LTS).
- Unduh gratis di: [https://nodejs.org](https://nodejs.org) (pilih versi *LTS* yang direkomendasikan).
- Setelah instalasi Node.js selesai, buka Terminal / Command Prompt.

---

### Langkah 1: Buka Folder Proyek di Terminal
1. Ekstrak file `.zip` source code ini.
2. Buka aplikasi **Terminal** (Mac/Linux) atau **Command Prompt / PowerShell** (Windows).
3. Arahkan terminal ke folder proyek:
   ```bash
   cd path/ke/folder-proyek
   ```
   *(Tips: Anda juga bisa membuka folder di VS Code lalu tekan `Ctrl + ~` untuk membuka terminal terintegrasi).*

---

### Langkah 2: Instal Komponen / Dependencies
Ketik perintah berikut lalu tekan Enter:
```bash
npm install
```
*Tunggu 1–2 menit hingga seluruh pustaka yang dibutuhkan selesai terpasang.*

---

### Langkah 3: Jalankan Aplikasi di Laptop
Ketik perintah berikut:
```bash
npm run dev
```
Setelah muncul tulisan `VITE v... ready in ... ms`:
Buka peramban (Google Chrome, Edge, Safari) lalu akses alamat:
👉 **`http://localhost:3000`**

Aplikasi sudah berjalan penuh di laptop Anda tanpa membutuhkan koneksi internet (bisa digunakan offline untuk pelatihan, acara kantor, maupun penggunaan pribadi)!

---

## 🌐 CARA MENG-ONLINE-KAN WEBSITE KE INTERNET (100% GRATIS)

Jika Anda ingin website ini dapat diakses oleh peserta, klien, atau rekan tim dari rumah melalui HP masing-masing tanpa menyewa hosting bulanan:

### Menggunakan Vercel (Paling Direkomendasikan):
1. Buat akun gratis di [https://vercel.com](https://vercel.com).
2. Unggah folder proyek ini ke akun GitHub Anda, atau instal Vercel CLI di terminal laptop:
   ```bash
   npm i -g vercel
   vercel
   ```
3. Ikuti petunjuk di layar (tekan Enter untuk opsi default).
4. Dalam 1 menit, Anda akan mendapatkan tautan website online gratis (contoh: `psikologi-empati.vercel.app`) yang aktif selamanya!

### Menggunakan Netlify:
1. Jalankan perintah kompilasi di laptop:
   ```bash
   npm run build
   ```
2. Folder bernama `dist/` akan tercipta.
3. Buka [https://app.netlify.com/drop](https://app.netlify.com/drop) lalu seret (*drag and drop*) folder `dist` tersebut. Website Anda langsung online seketika!

---

## 🎨 CARA KUSTOMISASI UNTUK ORGANISASI / KLIEN ANDA

Source code ini dirancang sangat rapi dan modular sehingga sangat mudah diubah:

1. **Mengubah Judul & Nama Lembaga**:
   - Buka file `/src/components/Navbar.tsx` dan ubah teks `PSIKOLOGI EMPATI`.
   - Buka `/src/components/PrintReport.tsx` untuk mengubah Kop Surat resmi lembaga konseling, HR, atau organisasi Anda.

2. **Menyesuaikan Soal MBTI atau Rekomendasi Karier**:
   - Soal MBTI: `/src/data/mbtiQuestions.ts`
   - Profil 16 Kepribadian & Rekomendasi Karier: `/src/data/mbtiProfiles.ts`
   - Soal Gaya Belajar VAK: `/src/data/learningStyleData.ts`
   - Soal Minat Karier RIASEC: `/src/data/riasecData.ts`

---

## 📞 BANTUAN & PERTANYAAN
Jika Anda menemui kendala saat instalasi atau ingin bertanya seputar pengembangan fitur, silakan hubungi tim pengembang melalui email atau kontak yang tertera pada invoice pembelian produk Anda.

Selamat berkarya dan semoga bermanfaat bagi pengembangan potensi diri dan kesehatan mental masyarakat!
