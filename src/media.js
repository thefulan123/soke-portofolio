// Media stored in public/media is served as-is (not bundled), so the
// production build stays small. BASE_URL keeps the paths correct when the
// site is deployed under a subpath such as /soke-portofolio/.
const base = import.meta.env.BASE_URL;

// Bump this whenever files in public/media are replaced so browsers do not
// keep serving the previous version from the 10-minute GitHub Pages cache.
const v = "20261112b";

export const media = {
  menu: `${base}media/Mainn.mp4?v=${v}`,
  about: `${base}media/main1.mp4?v=${v}`,
  resume: `${base}media/main2.mp4?v=${v}`,
  contact: `${base}media/main3.mp4?v=${v}`,
};

export default media;
