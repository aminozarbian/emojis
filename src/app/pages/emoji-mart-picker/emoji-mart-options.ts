export type EmojiSet = 'native' | 'apple' | 'facebook' | 'google' | 'twitter';
export type Theme = 'auto' | 'light' | 'dark';
export type Icons = 'auto' | 'outline' | 'solid';
export type NavPosition = 'top' | 'bottom' | 'none';
export type PreviewPosition = 'bottom' | 'top' | 'none';
export type SearchPosition = 'sticky' | 'static' | 'none';
export type SkinTonePosition = 'preview' | 'search' | 'none';

export type MartOptions = {
  set: EmojiSet;
  theme: Theme;
  icons: Icons;
  emojiVersion: number;
  locale: string;
  autoFocus: boolean;
  navPosition: NavPosition;
  previewPosition: PreviewPosition;
  searchPosition: SearchPosition;
  skinTonePosition: SkinTonePosition;
};

export type OptionField = {
  key: keyof MartOptions;
  label: string;
  choices: { value: string; label: string }[];
};

export const defaultMartOptions: MartOptions = {
  set: 'native',
  theme: 'auto',
  icons: 'auto',
  emojiVersion: 15,
  locale: 'en',
  autoFocus: false,
  navPosition: 'top',
  previewPosition: 'bottom',
  searchPosition: 'sticky',
  skinTonePosition: 'preview',
};

export const optionFields: OptionField[] = [
  {
    key: 'set',
    label: 'Set',
    choices: [
      { value: 'native', label: 'Native' },
      { value: 'apple', label: 'Apple' },
      { value: 'facebook', label: 'Facebook' },
      { value: 'google', label: 'Google' },
      { value: 'twitter', label: 'Twitter' },
    ],
  },
  {
    key: 'theme',
    label: 'Theme',
    choices: [
      { value: 'auto', label: 'Auto' },
      { value: 'light', label: 'Light' },
      { value: 'dark', label: 'Dark' },
    ],
  },
  {
    key: 'icons',
    label: 'Icons',
    choices: [
      { value: 'auto', label: 'Auto' },
      { value: 'outline', label: 'Outline' },
      { value: 'solid', label: 'Solid' },
    ],
  },
  {
    key: 'emojiVersion',
    label: 'Emoji version',
    choices: [
      { value: '15', label: '15.0' },
      { value: '14', label: '14.0' },
      { value: '13.1', label: '13.1' },
      { value: '13', label: '13.0' },
      { value: '12.1', label: '12.1' },
      { value: '12', label: '12.0' },
      { value: '11', label: '11.0' },
      { value: '5', label: '5.0' },
      { value: '4', label: '4.0' },
      { value: '3', label: '3.0' },
      { value: '2', label: '2.0' },
      { value: '1', label: '1.0' },
    ],
  },
  {
    key: 'locale',
    label: 'Locale (UI)',
    choices: [
      { value: 'en', label: 'English' },
      { value: 'ar', label: 'العربية' },
      { value: 'be', label: 'Беларуская' },
      { value: 'cs', label: 'Čeština' },
      { value: 'de', label: 'Deutsch' },
      { value: 'es', label: 'Español' },
      { value: 'fa', label: 'پارسی' },
      { value: 'fi', label: 'Suomi' },
      { value: 'fr', label: 'Français' },
      { value: 'hi', label: 'हिन्दी' },
      { value: 'it', label: 'Italiano' },
      { value: 'ja', label: '日本語' },
      { value: 'ko', label: '한국어' },
      { value: 'nl', label: 'Nederlands' },
      { value: 'pl', label: 'Polski' },
      { value: 'pt', label: 'Português' },
      { value: 'ru', label: 'Русский' },
      { value: 'sa', label: 'संस्कृतम्' },
      { value: 'tr', label: 'Türkçe' },
      { value: 'uk', label: 'Українська' },
      { value: 'vi', label: 'Tiếng Việt' },
      { value: 'zh', label: '中文' },
    ],
  },
  {
    key: 'autoFocus',
    label: 'Auto focus',
    choices: [
      { value: 'false', label: 'False' },
      { value: 'true', label: 'True' },
    ],
  },
  {
    key: 'navPosition',
    label: 'Nav position',
    choices: [
      { value: 'top', label: 'Top' },
      { value: 'bottom', label: 'Bottom' },
      { value: 'none', label: 'None' },
    ],
  },
  {
    key: 'previewPosition',
    label: 'Preview position',
    choices: [
      { value: 'bottom', label: 'Bottom' },
      { value: 'top', label: 'Top' },
      { value: 'none', label: 'None' },
    ],
  },
  {
    key: 'searchPosition',
    label: 'Search position',
    choices: [
      { value: 'sticky', label: 'Sticky' },
      { value: 'static', label: 'Static' },
      { value: 'none', label: 'None' },
    ],
  },
  {
    key: 'skinTonePosition',
    label: 'Skin tone position',
    choices: [
      { value: 'preview', label: 'Preview' },
      { value: 'search', label: 'Search' },
      { value: 'none', label: 'None' },
    ],
  },
];

export function parseOptionValue(key: keyof MartOptions, raw: string): MartOptions[keyof MartOptions] {
  if (key === 'autoFocus') {
    return raw === 'true';
  }
  if (key === 'emojiVersion') {
    return Number(raw);
  }
  return raw;
}

export function spritesheetUrl(set: string): string {
  return `https://cdn.jsdelivr.net/npm/emoji-datasource-${set}@15.0.1/img/${set}/sheets-256/64.png`;
}

const i18nLoaders: Record<string, () => Promise<unknown>> = {
  ar: () => import('@emoji-mart/data/i18n/ar.json'),
  be: () => import('@emoji-mart/data/i18n/be.json'),
  cs: () => import('@emoji-mart/data/i18n/cs.json'),
  de: () => import('@emoji-mart/data/i18n/de.json'),
  en: () => import('@emoji-mart/data/i18n/en.json'),
  es: () => import('@emoji-mart/data/i18n/es.json'),
  fa: () => import('@emoji-mart/data/i18n/fa.json'),
  fi: () => import('@emoji-mart/data/i18n/fi.json'),
  fr: () => import('@emoji-mart/data/i18n/fr.json'),
  hi: () => import('@emoji-mart/data/i18n/hi.json'),
  it: () => import('@emoji-mart/data/i18n/it.json'),
  ja: () => import('@emoji-mart/data/i18n/ja.json'),
  ko: () => import('@emoji-mart/data/i18n/ko.json'),
  nl: () => import('@emoji-mart/data/i18n/nl.json'),
  pl: () => import('@emoji-mart/data/i18n/pl.json'),
  pt: () => import('@emoji-mart/data/i18n/pt.json'),
  ru: () => import('@emoji-mart/data/i18n/ru.json'),
  sa: () => import('@emoji-mart/data/i18n/sa.json'),
  tr: () => import('@emoji-mart/data/i18n/tr.json'),
  uk: () => import('@emoji-mart/data/i18n/uk.json'),
  vi: () => import('@emoji-mart/data/i18n/vi.json'),
  zh: () => import('@emoji-mart/data/i18n/zh.json'),
};

export async function loadMartData(
  set: EmojiSet,
  version: number,
): Promise<Record<string, unknown>> {
  const json = version === 15 ? await loadLocalSet(set) : await fetchSet(set, version);
  return structuredClone(json);
}

export async function loadMartI18n(locale: string): Promise<Record<string, unknown>> {
  const load = i18nLoaders[locale] ?? i18nLoaders['en'];
  return structuredClone(unwrapJson(await load()));
}

async function loadLocalSet(set: EmojiSet): Promise<Record<string, unknown>> {
  switch (set) {
    case 'apple':
      return unwrapJson(await import('@emoji-mart/data/sets/15/apple.json'));
    case 'facebook':
      return unwrapJson(await import('@emoji-mart/data/sets/15/facebook.json'));
    case 'google':
      return unwrapJson(await import('@emoji-mart/data/sets/15/google.json'));
    case 'twitter':
      return unwrapJson(await import('@emoji-mart/data/sets/15/twitter.json'));
    default:
      return unwrapJson(await import('@emoji-mart/data/sets/15/native.json'));
  }
}

async function fetchSet(set: EmojiSet, version: number): Promise<Record<string, unknown>> {
  const response = await fetch(
    `https://cdn.jsdelivr.net/npm/@emoji-mart/data@1.2.1/sets/${version}/${set}.json`,
  );
  if (!response.ok) {
    throw new Error(`Could not load emoji data for ${set} ${version}`);
  }
  return response.json();
}

function unwrapJson(mod: unknown): Record<string, unknown> {
  if (mod && typeof mod === 'object' && 'default' in mod && mod.default) {
    return mod.default as Record<string, unknown>;
  }
  return mod as Record<string, unknown>;
}
