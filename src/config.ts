import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://ShinkaiKung.github.io", // replace this with your deployed domain
  author: "Andrew",
  desc: "A tedious blog.",
  title: "RandomWalk",
  ogImage: "zozlog.jpg",
  lightAndDarkMode: true,
  postPerPage: 8,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ShinkaiKung",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
