# Soke's Portfolio

Portfolio pribadi **Syauqi Dhiaulhaq** — mahasiswa D3 Teknik Elektronika,
Politeknik Negeri Bandung (Polban), 2024–2027.

Live: https://thefulan123.github.io/soke-portofolio/

Dibangun dari template visual Persona 3 (React 19 + Vite + React Router +
Framer Motion), dengan seluruh konten, routing, dan aset yang sudah diganti.

## Menjalankan lokal

```bash
npm install
npm run dev      # http://localhost:5173/soke-portofolio/
npm run build    # output ke dist/
npm run preview  # cek hasil build
npm run lint
npm run smoke    # smoke test 9 route pakai puppeteer (butuh dev/preview hidup)
```

## Struktur

```
src/
  content/          # satu sumber data — edit di sini untuk update konten
    profile.js      # nama, email, kampus, periode, minat
    projects.js     # registry proyek + isi halaman detail
    skills.js       # kategori keahlian
    socials.js      # kanal kontak
  media.js          # path video (public/media, tidak di-bundle)
  P3Menu.jsx        # menu utama gaya Persona 3
  PageShell.jsx     # shell halaman konten (scroll + ESC/back)
  ProjectsPage.jsx  /projects
  ProjectDetailPage.jsx  /projects/:slug
  SkillsPage.jsx    /skills
  ResumePage.jsx    /resume
  Socials.jsx       /contact
  AboutMe.jsx       /about
routes.md           # daftar route + perilakunya
```

## Update portofolio

Tambah proyek baru = tambah satu objek di `src/content/projects.js`. Halaman
`/projects` dan `/projects/<slug>` otomatis ikut. Tidak perlu sentuh komponen.

## Deploy

Push ke `main` → GitHub Actions (`.github/workflows/deploy.yml`) build lalu
publish ke Pages. Base path `/soke-portofolio/` diatur di `vite.config.js`.

Router memakai `HashRouter` supaya refresh pada `/projects/...` tidak 404 di
GitHub Pages (tidak ada rewrite rule di sana).

## Aset

Video asli (239 MB) tidak disimpan di repo. Versi 720p ada di `public/media/`
(total ±19.8 MB). File asli disimpan di luar repo di
`C:\Users\Administrator\Downloads\ABDM\originals\`.
