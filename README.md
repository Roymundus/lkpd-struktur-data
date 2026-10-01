# LKPD Web — Algoritma & Struktur Data

Website LKPD interaktif untuk:
- Search Algorithm
- Sort Algorithm
- Stack
- Queue

## Fitur
1. Responsif untuk HP.
2. Kolom jawaban langsung di website.
3. Progress pengerjaan.
4. Autosave manual ke localStorage melalui tombol Simpan.
5. Download LKPD menjadi PDF.
6. File PDF diberi nama otomatis berdasarkan nama kelompok.

## Cara menggunakan
Buka `index.html` di browser.

Catatan:
- Tombol Download PDF menggunakan library `html2pdf.js` dari CDN, sehingga koneksi internet diperlukan saat membuat PDF.
- Jawaban tersimpan di browser/perangkat yang digunakan. Jika cache/site data browser dihapus atau pindah perangkat, data tidak ikut pindah.
- Website ini belum mengunggah otomatis ke Google Drive.

## Alur pengumpulan yang disarankan
1. Siswa mengisi LKPD.
2. Siswa menekan Simpan.
3. Siswa menekan Download PDF.
4. Siswa mengunggah PDF ke folder Google Drive kelas.

## Pengembangan berikutnya
Jika ingin dipakai secara nyata di sekolah, website dapat dikembangkan menjadi:
- login siswa,
- daftar nama/kelompok,
- autosave ke database,
- tombol "Kumpulkan",
- integrasi Google Drive/Google Apps Script,
- dashboard guru untuk melihat status pengumpulan,
- penilaian otomatis untuk beberapa soal.
