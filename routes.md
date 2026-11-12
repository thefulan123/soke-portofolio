# Routes

Router: `HashRouter` (lihat `src/main.jsx`). URL memakai `#/` supaya refresh
tidak 404 di GitHub Pages.

| Route | Component | Isi |
|---|---|---|
| `/` | `src/P3Menu.jsx` (via `App.jsx` `MenuScreen`) | Menu 5 item, video `Mainn.mp4` |
| `/about` | `src/AboutMe.jsx` | 3 bar: Identity / Focus Areas / Education |
| `/projects` | `src/ProjectsPage.jsx` | Daftar 3 proyek, kartu diagonal |
| `/projects/:slug` | `src/ProjectDetailPage.jsx` | 7 seksi: Overview, Problem, Architecture, Hardware, Software, Process, Results |
| `/skills` | `src/SkillsPage.jsx` | 6 kategori + Current Focus |
| `/resume` | `src/ResumePage.jsx` | CV 5 blok + Print/Save as PDF |
| `/contact` | `src/Socials.jsx` | GitHub, Email, Location |
| `/socials` | redirect → `/contact` | Kompatibilitas URL lama |
| `*` | redirect → `/` | Tidak ada layar hitam |

## Menu utama

1. `ABOUT ME` → `/about`
2. `PROJECTS` → `/projects`
3. `TECHNICAL SKILLS` → `/skills`
4. `RESUME` → `/resume`
5. `CONTACT` → `/contact`

Navigasi: `↑` `↓` pilih, `Enter` konfirmasi, `Esc` kembali.

## Slug proyek

- `bms-rsud-ciawi`
- `arduino-openplc`
- `embedded-sensor-monitoring`

Slug tidak valid → halaman `NOT FOUND` dengan tautan balik, bukan crash.
