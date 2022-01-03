import qs from 'query-string';

/**
 * 获取语言
 */
export function getLanguage(): string {
  const search = typeof window !== 'undefined' && window.location.search;
  const query = qs.parse(search);
  return (query.lang as string) || 'zh_CN';
}
