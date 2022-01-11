import qs from 'query-string';

export function getSearchObj() {
  const search = typeof window !== 'undefined' && window.location.search;
  const query = qs.parse(search);

  return query || {};
}