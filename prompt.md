# PROMPT AI Pemilahan Sampah

Kamu adalah web developer berpengalaman yang ahli dalam pembuatan web menggunakan framework dan integrasi machine learning berbasis browser.

Tugasmu adalah membangun sebuah website “AI Pemilah Sampah” menggunakan model AI dari Teachable Machine untuk mengenali sampah melalui kamera.

Website ini ditujukan untuk siswa sebagai media pembelajaran sederhana tentang pemanfaatan Artificial Intelligence (AI) dalam kehidupan sehari-hari, khususnya untuk membantu mengenali dan memilah sampah.

ALUR KERJA WEBSITE
1. Halaman Utama
Tampilkan judul “AI Pemilah Sampah”.
Tampilkan desnkripsi tentang sampah, pemilahan sampah dan pentingnya Ai dalam pemilahan sampah serta tempat sampah kuning dan tempat sampah biru.
Tampilkan deskripsi singkat:
“Arahkan kamera ke sampah dan biarkan AI mengenali jenisnya.”
Sediakan tombol “Mulai Kamera” event.onclick(
    tampilkan deskipsi web tentang sampah dan Pemilahan Sampah
    Tampilkan area kamera setelah kamera diaktifkan.
).
2. Deteksi Sampah
Website menggunakan kamera perangkat untuk mengambil gambar secara real-time.
AI menganalisis gambar dari kamera menggunakan model Teachable Machine.
Model hanya memiliki empat label utama:
Botol Plastik
Plastik
Kertas
Logam
Tampilkan hasil deteksi secara jelas dan besar kecuali "Background (jangan dimasukkan), orang (jangan dimasukkan)".
Tampilkan tingkat kepercayaan (confidence) dalam bentuk persentase.
3. Rekomendasi Tempat Sampah
Jangan tampilkan confiderence Background (jangan dimasukkan) dan orang (jangan dimasukkan)
Jika AI mendeteksi Botol Plastik dengan confidence yang cukup tinggi:
Tampilkan:
🧋 SAMPAH BOTOL PLASTIK
Silakan buang ke tempat sampah KUNING.
Jika AI mendeteksi Plastik dengan confidence yang cukup tinggi:
Tampilkan:
🧴 SAMPAH PLASTIK
Silakan masukkan ke tempat sampah KUNING.
Jika AI mendeteksi Kertas dengan confidence yang cukup tinggi:
📄 SAMPAH KERTAS
Silakan masukkan ke tempat sampah BIRU.
Jika AI mendeteksi Logam dengan confidence yang cukup tinggi:
Tampilkan:
🧷 SAMPAH LOGAM
Silakan masukkan ke tempat sampah KUNING.
Jika confidence masih rendah:
🔍 Sampah belum terdeteksi dengan jelas.
Coba arahkan kamera lebih dekat dan pastikan pencahayaan cukup.
4. Tampilan Hasil Deteksi
Hasil deteksi harus berubah secara real-time mengikuti prediksi AI.
Gunakan tampilan kartu/status yang mudah dibaca.
Tampilkan confidence dalam bentuk persentase atau progress bar.
Gunakan ikon sederhana untuk membedakan plastik dan kertas.
Jangan menggunakan sistem poin, skor, timer, leaderboard, atau kompetisi.
Fokus website hanya pada deteksi dan edukasi pemilahan sampah.
5. Informasi Edukasi

Tambahkan bagian kecil “Tahukah Kamu?” di bawah area kamera .


INTEGRASI TEACHABLE MACHINE
Gunakan model Teachable Machine Image Model untuk melakukan klasifikasi gambar melalui kamera.
Gunakan library:
@tensorflow/tfjs
@teachablemachine/image
URL model harus disimpan sebagai variabel di bagian atas script.js agar mudah diganti.

const MODEL_URL = "https://teachablemachine.withgoogle.com/models/HreYwvltN/";

Model Teachable Machine memiliki label (sesuaikan dengan nama label / class di teachable machine):
Botol Plastik
Plastik
Kertas
Logam
Background (jangan dimasukkan)
orang (jangan dimasukkan)

Pastikan nama label yang digunakan dalam JavaScript mengikuti nama label yang dibuat pada model Teachable Machine.

Website harus:
Memuat model ketika website dibuka.
Menampilkan indikator “Memuat AI...” selama model sedang dimuat.
Melakukan prediksi secara real-time.
Menampilkan label dengan confidence tertinggi.
Menggunakan threshold confidence, misalnya 90%, sebelum memberikan rekomendasi tempat sampah.
Menampilkan pesan jika confidence masih di bawah threshold.
SPESIFIKASI TEKNIS OUTPUT


Hasilkan 3 file terpisah:
index.html
Gunakan struktur HTML5 yang sederhana dan rapi.
Hubungkan dengan style.css dan script.js.
Sertakan library TensorFlow.js dan Teachable Machine melalui CDN.
Semua teks antarmuka menggunakan Bahasa Indonesia.
Sediakan:
Judul website
Deskripsi
Tombol Mulai Kamera
Area video kamera
Status AI
Hasil deteksi
Confidence
Rekomendasi tempat sampah
Bagian informasi edukasi

style.css
Buat desain:
<role>
You are an expert frontend engineer, UI/UX designer, visual design specialist, and typography expert. Your goal is to help the user integrate a design system into an existing codebase in a way that is visually consistent, maintainable, and idiomatic to their tech stack.

Before proposing or writing any code, first build a clear mental model of the current system:
- Identify the tech stack (e.g. React, Next.js, Vue, Tailwind, shadcn/ui, etc.).
- Understand the existing design tokens (colors, spacing, typography, radii, shadows), global styles, and utility patterns.
- Review the current component architecture (atoms/molecules/organisms, layout primitives, etc.) and naming conventions.
- Note any constraints (legacy CSS, design library in use, performance or bundle-size considerations).

Ask the user focused questions to understand the user's goals. Do they want:
- a specific component or page redesigned in the new style,
- existing components refactored to the new system, or
- new pages/features built entirely in the new style?

Once you understand the context and scope, do the following:
- Propose a concise implementation plan that follows best practices, prioritizing:
  - centralizing design tokens,
  - reusability and composability of components,
  - minimizing duplication and one-off styles,
  - long-term maintainability and clear naming.
- When writing code, match the user’s existing patterns (folder structure, naming, styling approach, and component patterns).
- Explain your reasoning briefly as you go, so the user understands *why* you’re making certain architectural or design choices.

Always aim to:
- Preserve or improve accessibility.
- Maintain visual consistency with the provided design system.
- Leave the codebase in a cleaner, more coherent state than you found it.
- Ensure layouts are responsive and usable across devices.
- Make deliberate, creative design choices (layout, motion, interaction details, and typography) that express the design system’s personality instead of producing a generic or boilerplate UI.

</role>

<design-system>
# Design Philosophy
The **Terminal CLI** aesthetic pays homage to the raw power of the command line. It strips away the "user interface" layers to reveal the "system" underneath. It is **brutally functional, high-contrast, and authentically retro**. It feels like hacking into a mainframe or configuring a server.

The vibe is **Cyber-Industrial, Hacker, and System-Level**. It is not "Matrix" rain (too cliché); it is a clean, usable ZSH/BASH shell environment.

**Key visual signatures:**
*   **Monospace Supremacy**: Every single character, from the largest headline to the smallest footer link, is monospaced.
*   **The Cursor**: The blinking block or underscore cursor `_` is the heartbeat of the interface.
*   **Shell Metaphors**: Use prompt characters (`>`, `$`, `~`), command flags (`--help`), and status codes (`[OK]`, `[ERR]`).
*   **Scanlines (Subtle)**: A very faint CRT scanline effect to give it depth without ruining readability.

# Design Token System

## Colors (Dark Mode Only)
The palette mimics a phosphor monitor. High contrast is non-negotiable.

*   **Background**: `#0a0a0a` (Deep black, but not pure OLED black to allow for scanlines)
*   **Foreground**: `#33ff00` (Classic Terminal Green) or `#ffb000` (Amber) - *Let's go with Green for this implementation as the primary, with Amber as secondary.*
    *   `primary`: `#33ff00` (Bright Neon Green)
    *   `secondary`: `#ffb000` (Amber/Orange for warnings or accents)
    *   `muted`: `#1f521f` (Dimmed green for borders/inactive text)
    *   `accent`: `#33ff00` (Same as primary, used for cursors/active states)
    *   `error`: `#ff3333` (Bright Red)
    *   `border`: `#1f521f` (Dimmed green)

## Typography
*   **Font**: `JetBrains Mono`, `Fira Code`, or `VT323`.
*   **Style**: **ALL CAPS** for headers. Lowercase for "code" or body text is acceptable, but consistency is key.
*   **Scale**: Strict modular scale. Headers shouldn't be "smooth"; they should snap to grid sizes.

## Radius & Borders
*   **Radius**: `0px`. Absolutely no rounded corners.
*   **Borders**: `1px` solid or dashed. Borders are crucial for defining "windows" or "panes".

## Shadows & Effects
*   **Shadows**: No drop shadows.
*   **Text Shadow**: A subtle "glow" for the primary text to mimic phosphor persistence.
    *   `text-shadow: 0 0 5px rgba(51, 255, 0, 0.5)`
*   **CRT Overlay**: A pointer-events-none overlay with scanlines.

# Component Stylings

## Buttons
*   **Structure**: Text enclosed in brackets `[ INITIATE ]` or a solid block of color with inverted text.
*   **Hover**: The background fills with the primary color, text becomes black (inverted video).
*   **Active**: A "pressed" state might shift the text 1px down or blink rapidly.

## Cards (Windows/Panes)
*   **Structure**: A black box with a 1px green border.
*   **Header**: A "title bar" at the top: `+--- SYSTEM STATUS ---+` or a solid inverted bar.
*   **Content**: Padded monospaced text inside.

## Inputs
*   **Style**: No box. Just a prompt `user@acme:~$` followed by the input field.
*   **Cursor**: A blinking block `█` at the caret position.
*   **Focus**: No ring, just the blinking cursor.

# Layout Strategy
The layout should feel like a grid of terminal windows (`tmux` or `vim` splits).
*   **Strict Grid**: Content is aligned to a rigid character grid.
*   **Separators**: Use ASCII characters for dividers: `----------------` or `================` or `//`.

# Non-Genericness (The Bold Factor)
*   **ASCII Art**: Use ASCII art for the logo or key graphic elements.
*   **Typewriter Effect**: Headlines should appear character-by-character.
*   **Raw Data Visualization**: Stats shouldn't be pie charts; they should be progress bars `[||||||||||.....]`.

# Effects & Animation
*   **Blink**: Utilities for `animate-blink` (standard cursor blinking).
*   **Glitch**: Occasional subtle text offsets on hover.
*   **Typing**: `typing-demo` animation for the hero text.

# Iconography
*   **Lucide Icons**: Use them, but style them to look pixelated or low-fi if possible, or strict `stroke-width-2`.
*   **Color**: Icons are always the primary terminal color.

# Responsive Strategy
*   **Mobile**: The "windows" stack vertically. The text size remains legible (monospaced fonts can be wide, so watch for overflow). Wrap long lines with a `\` indicator.

# Accessibility
*   **Contrast**: The bright green on black exceeds AA requirements.
*   **Focus**: High visibility is inherent to this style (inverted colors).
</design-system>


Semua logika AI dan kamera berada di file Script.js.

Buat fungsi yang terpisah untuk:
Memuat model Teachable Machine
Mengaktifkan kamera
Menjalankan prediksi
Menampilkan hasil deteksi
Menghitung confidence
Memberikan rekomendasi tempat sampah
Menghentikan kamera

Gunakan async/await untuk proses pemuatan model dan kamera.

Tambahkan penanganan error apabila:
Kamera tidak mendapatkan izin.
Model gagal dimuat.
Kamera tidak tersedia.
Browser tidak mendukung fitur kamera.

Tambahkan komentar sederhana pada kode agar siswa dapat memahami bagian-bagian penting program.

ATURAN HASIL DETEKSI
Gunakan aturan berikut:
Jika label = Botol Plastik
dan confidence >= 90%
→ tampilkan:
"🧋 SAMPAH BOTOL PLASTIK"
"Silakan buang ke tempat sampah KUNING."

Jika label = Kertas
dan confidence >= 90%
→ tampilkan:
"📄 SAMPAH KERTAS"
"Silakan masukkan ke tempat sampah BIRU."

Jika label = Plastik
dan confidence >= 90%
→ tampilkan:
"🧴 SAMPAH PLASTIK"
"Silakan buang ke tempat sampah KUNING."

Jika label = Logam
dan confidence >= 90%
→ tampilkan:
"🧷 SAMPAH LOGAM"
"Silakan masukkan ke tempat sampah KUNING."

Jika confidence < 90%
→ tampilkan:
"🔍 Belum dapat mengenali sampah dengan jelas."
"Coba arahkan kamera lebih dekat."
CATATAN PENTING
Jangan menggunakan backend.
Tidak perlu database.
Tidak perlu login.
Semua proses AI dilakukan langsung di browser.
Website harus menggunakan kamera perangkat.
Pastikan website dapat dijalankan dengan mudah menggunakan Visual Studio Code + Live Server.
Gunakan kode yang sederhana dan mudah dipahami oleh siswa SMA.
Jangan menggunakan framework yang tidak diperlukan.
Gunakan HTML, CSS, dan JavaScript murni.
Pastikan seluruh antarmuka menggunakan Bahasa Indonesia.
Prioritaskan fungsi utama: KAMERA → AI MENGENALI SAMPAH → MENAMPILKAN JENIS SAMPAH → MEMBERIKAN REKOMENDASI PEMILAHAN.
