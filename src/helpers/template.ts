import { reduce } from 'lodash-es';
/**
 * 简单的模板引擎，使用方式如下（空格自动忽略）：
 * template('hello, {name}', { name: 'AntV' }); // hello, AntV
 * @param string
 * @param options
 */
export function template(source: string, data?: object): string {
  if (!data) {
    return source;
  }
  return reduce(
    // @ts-ignore
    data,
    (r: string, v: string, k: string) =>
      r.replace(new RegExp(`{\\s*${k}\\s*}`, 'g'), v),
    source
  );
}
