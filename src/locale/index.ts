import { get } from 'lodash';
import { template } from '../helpers/template';
import { getLanguage } from './language';
import { Locale } from './types';

const LocaleMap = {};

/**
 * register a locale
 * @param locale
 * @param localeObj
 */
export function registerLocale(locale: string, localeObj: Locale): void {
  LocaleMap[locale] = localeObj;
}

/**
 * get locale of specific language
 * @param lang
 * @returns
 */
export function getLocale(locale?: string) {
  const lang = locale || getLanguage();
  return {
    get: (key: string | string[], obj?: Record<string, any>) => {
      return template(
        get(LocaleMap[lang], key) || get(LocaleMap['zh_CN'], key) || key,
        obj
      );
    },
  };
}

export { getLanguage } from './language';
