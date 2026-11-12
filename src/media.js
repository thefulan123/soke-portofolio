// Media stored in public/media is served as-is (not bundled), so the
// production build stays small. BASE_URL keeps the paths correct when the
// site is deployed under a subpath such as /soke-portofolio/.
const base = import.meta.env.BASE_URL;

export const media = {
  menu: `${base}media/Mainn.mp4`,
  about: `${base}media/main1.mp4`,
  resume: `${base}media/main2.mp4`,
  contact: `${base}media/main3.mp4`,
};

export default media;
