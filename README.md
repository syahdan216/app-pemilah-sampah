![AI Pemilah Sampah](https://shieldcn.dev/header/glow.svg?title=AI+Pemilah+Sampah&subtitle=Sebuah+web+untuk+Ulangan+KKA&logo=vercel&size=wide&mode=dark&font=jetbrains-mono&border=false&image=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1614850523459-c2f4c699c52e%3Fw%3D1600%26q%3D70%26fit%3Dcrop%26fm%3Djpg&overlay=0.7)

# 

# AI Pemilah Sampah

Website edukasi sederhana untuk anak SMA yang mengajarkan pemanfaatan *Artificial Intelligence* (AI) dalam memilah sampah di kehidupan sehari-hari.

## 🎯 Deskripsi
Aplikasi web ini menggunakan kamera perangkat untuk mengenali jenis sampah secara *real-time*. Tujuannya adalah memberikan edukasi kepada siswa mengenai pentingnya memilah sampah dan bagaimana teknologi AI dapat membantu mengotomatisasi proses tersebut.

## ✨ Fitur
- **Deteksi Real-Time**: Menggunakan kamera webcam perangkat untuk memindai sampah.
- **Rekomendasi Pemilahan**: Memberikan instruksi tempat sampah yang tepat (misal: Tempat Sampah Kuning untuk botol plastik/logam, Biru untuk kertas).
- **Indikator Kepercayaan (Confidence)**: Menampilkan seberapa yakin AI terhadap tebakannya menggunakan *progress bar*.
- **Pilih Kamera (Multi-Camera)**: Fitur baru yang memungkinkan pengguna memilih sumber input kamera (misalnya kamera depan/belakang) secara langsung.
- **Tampilan Bersebelahan**: Umpan visual kamera (Optical Sensor) dan output AI (Prediction) ditampilkan berdampingan di desktop, atau bertumpuk rapi di mobile.
- **Tanpa Backend**: Seluruh pemrosesan AI berjalan 100% di browser sisi klien, sehingga privasi aman dan mudah dijalankan (cukup dengan Live Server).

## 🎨 Desain (Cyberpunk / Glitch)
Antarmuka web ini mengadopsi prinsip desain **Cyberpunk**:
- **Warna**: Mengambil tema *High-Tech, Low-Life* dengan latar belakang Void Black (`#0a0a0f`), serta lampu neon Cyan, Magenta, dan Hijau Matrix (`#00ff88`).
- **Bentuk**: Pemotongan sudut (chamfered corners) layaknya *Heads-Up Display* militer/robot.
- **Tipografi**: Memadukan font futuristik `Orbitron` dan `JetBrains Mono`.
- **Tekstur & Efek**: Filter layar CRT (Scanline), efek *Chromatic Aberration* (RGB Shift) yang *glitchy*, dan glow neon pada tombol serta card.

## 🧠 Model AI
Proyek ini ditenagai oleh **Google Teachable Machine (Image Classification)**.
- Library: `@tensorflow/tfjs` dan `@teachablemachine/image`
- Link model AI ( https://teachablemachine.withgoogle.com/models/5M97g-o4W/ ) 
- Model dilatih khusus untuk mengenali 4 kelas utama:
  1. **Botol Plastik**
  2. **Plastik**
  3. **Kertas**
  4. **Logam**
- Sistem menggunakan batas kepercayaan (threshold) sebesar 90% sebelum mengeluarkan rekomendasi pasti untuk menghindari tebakan yang salah.
