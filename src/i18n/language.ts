import { windowIsDefined } from '@/helpers/detect-device';
import { getSearchObj } from '@/helpers/location';

/**
 * 获取语言
 */
export function getLanguage(): string {
  const query = getSearchObj();
  const lang =
    (query.lang as string) ||
    (windowIsDefined() ? navigator?.language : 'zh-CN') ||
    'zh-CN';
  typeof document !== 'undefined' && document.body.setAttribute('lang', lang);
  return lang;
}
