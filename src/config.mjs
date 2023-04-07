import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'artem stelzer',

  origin: 'https://stelzer.dev',
  basePathname: '/',
  trailingSlash: false,

  title: 'artem stelzer',
  description: 'Artem Stelzer, FullStack developer',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: 'G-9KE2HDF0BP', // or "G-XXXXXXXXXX",
  googleSiteVerificationId: false,

  blog: {
    disabled: false,
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
