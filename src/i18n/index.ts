import { getLanguage } from '@/i18n';
import type { Locale } from './types';

const LocaleMap = {};

/**
 * register a locale
 * @param locale
 * @param localeObj
 */
export function registerLocale(locale: string, localeObj: Locale): void {
  LocaleMap[locale] = localeObj;
}

export function getLocale(locale: string): Record<string, string> {
  return LocaleMap[locale];
}

import { createIntl, createIntlCache } from 'react-intl';

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();

export const intl = createIntl(
  {
    locale: getLanguage(),
    messages: {},
  },
  cache
);

export { getLanguage } from './language';
