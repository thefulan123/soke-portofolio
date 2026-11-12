import profile from "./profile";

// Contact channels. Add new entries here and they show up on /contact.
export const socials = [
  {
    id: "github",
    label: "GITHUB",
    handle: `@${profile.github}`,
    href: profile.githubUrl,
    icon: "\u25C8",
    note: "Source code dan arsip eksperimen",
  },
  {
    id: "email",
    label: "EMAIL",
    handle: profile.email,
    href: `mailto:${profile.email}`,
    icon: "\u2709",
    note: "Jalur utama untuk kontak",
  },
  {
    id: "location",
    label: "LOCATION",
    handle: profile.location,
    href: "",
    icon: "\u25CE",
    note: "Basis kegiatan",
  },
];

export default socials;
