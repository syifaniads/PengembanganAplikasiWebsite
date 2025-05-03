# Praktikum 8 - JavaScript DOM Manipulation

Praktikum ini merupakan bagian dari mata kuliah Pengembangan Aplikasi Web (CIF64114) yang berfokus pada penerapan JavaScript untuk manipulasi DOM HTML.

## Deskripsi

Aplikasi web sederhana yang menampilkan ucapan selamat berdasarkan waktu saat ini:
- 00:01 - 10:59: "SELAMAT PAGI"
- 11:00 - 13:59: "SELAMAT SIANG"
- 14:00 - 17:59: "SELAMAT SORE"
- 18:00 - 00:00: "SELAMAT PETANG"

## Fitur

- Menampilkan ucapan selamat yang berubah secara otomatis berdasarkan waktu sistem
- Warna latar belakang dan teks yang berbeda untuk setiap waktu
- Tampilan waktu saat ini
- Efek hover pada elemen ucapan
- Deployment dengan Docker untuk kemudahan akses

## Struktur File

- `praktikum-8.html` - File HTML dengan elemen h1
- `praktikum-8.js` - File JavaScript dengan fungsi untuk manipulasi DOM
- `Dockerfile` - Konfigurasi untuk membangun image Docker
- `docker-compose.yml` - Konfigurasi untuk menjalankan container Docker
- `README.md` - Dokumentasi proyek

## Cara Menjalankan Aplikasi Lokal

### Menggunakan Browser Langsung

1. Clone repositori ini
   ```bash
   git clone https://github.com/syifaniads/praktikum8-js.git
   cd praktikum8-js
   ```

2. Buka file `praktikum-8.html` di browser web

### Menggunakan Docker

1. Pastikan Docker dan Docker Compose sudah terinstal di sistem Anda
2. Clone repositori ini
   ```bash
   git clone https://github.com/syifaniads/praktikum8-js.git
   cd praktikum8-js
   ```

3. Jalankan dengan Docker Compose
   ```bash
   docker-compose up -d
   ```

4. Buka browser dan akses aplikasi di:
   ```
   http://localhost:8080/praktikum-8.html
   ```

## Deployment ke Server Docker

1. Akses server Docker Anda melalui SSH
   ```bash
   ssh username@your-server-ip
   ```

2. Buat direktori untuk proyek
   ```bash
   mkdir -p ~/praktikum8-js
   cd ~/praktikum8-js
   ```

3. Clone repositori dari GitHub
   ```bash
   git clone https://github.com/syifaniads/praktikum8-js.git .
   ```

4. Deploy dengan Docker Compose
   ```bash
   docker-compose up -d
   ```

5. Akses aplikasi di browser
   ```
   http://your-server-ip:8080/praktikum-8.html
   ```

## Pengelolaan Container

- Untuk menghentikan container:
  ```bash
  docker-compose down
  ```

- Untuk melihat logs:
  ```bash
  docker-compose logs -f
  ```

- Untuk me-restart container:
  ```bash
  docker-compose restart
  ```

## Screenshot Aplikasi

![Screenshot Aplikasi](https://via.placeholder.com/800x400?text=Screenshot+Aplikasi)

## Implementasi Tugas

Berikut adalah implementasi dari tugas yang diberikan:

1. Membuat file HTML (`praktikum-8.html`) sesuai standar HTML5
2. Menambahkan elemen `<h1>` untuk menampilkan ucapan
3. Menghubungkan HTML dengan file JavaScript eksternal (`praktikum-8.js`)
4. Membuat fungsi JavaScript untuk manipulasi DOM berdasarkan waktu
5. Memanggil fungsi saat halaman dimuat untuk menampilkan ucapan yang sesuai

## Pemecahan Masalah

1. Jika port 8080 sudah digunakan, ubah port di `docker-compose.yml`:
   ```yaml
   ports:
     - "8081:80"  # Atau port lain yang tersedia
   ```

2. Jika ada masalah izin file:
   ```bash
   chmod 644 praktikum-8.html praktikum-8.js
   ```

3. Jika container tidak bisa diakses, periksa firewall server:
   ```bash
   sudo ufw allow 8080/tcp
   ```

## Kontributor

- Syifani Adhisty
