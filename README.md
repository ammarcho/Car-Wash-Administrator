# CAR WASH ADMINISTRATOR
Car Wash Administrator adalah platform manajemen antrean cuci kendaraan berbasis web yang mengintegrasikan performa backend C++ dengan antarmuka React. Proyek ini menerapkan konsep struktur data Linked List untuk mengelola antrean pesanan secara real-time menggunakan sistem Queue, serta menyimpan riwayat transaksi menggunakan sistem Stack.

## Prasyarat
Sebelum menjalankan proyek ini, pastikan kamu sudah menginstal:
* **Frontend:** React.js
* **Backend:** C++ (Crawl Framework)

## Struktur Proyek
* **/car-wash:** Folder berisi aplikasi React.
* **/backend:** Folder berisi server C++ (termasuk server.exe).

## Cara Menjalankan Proyek
Ikuti langkah-langkah di bawah ini untuk menjalankan aplikasi secara lokal.

1. **Menjalankan Backend (C++)**
Backend proyek ini dibangun menggunakan C++ dan dikompilasi ke dalam bentuk executable.
* Buka terminal atau Command Prompt.
* Masuk ke direktori backend:
  Bash
  cd path/to/backend
* jalankan server:
  ./server.exe

2. **Menjalankan Frontend (React)**
Setelah backend aktif, kamu bisa menjalankan antarmuka pengguna.

* Buka terminal baru.
* Masuk ke direktori frontend:

  Bash
  cd path/to/frontend
  
  Instal dependensi (hanya jika baru pertama kali atau ada perubahan package.json):
  Bash
  npm install
  
* Jalankan aplikasi dalam mode pengembangan:
  Bash
  npm start atau npm run dev
  Buka http://localhost:{ PORT Yang tertera di terminal } di browser kamu.

## Teknologi yang Digunakan
* Frontend: React.js
* Backend: C++ (Crawl)

Komunikasi: REST API / HTTP
