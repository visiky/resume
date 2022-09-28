import fetch from 'cross-fetch';
import _ from 'lodash-es';
import type { ResumeConfig } from '@/components/types';
import { customAssign } from './customAssign';

export function fetchResume(
  lang: string,
  branch: string,
  user: string
): Promise<ResumeConfig> {
  return fetch(
    `https://raw.githubusercontent.com/${user}/${user}/${branch}/resume.json`
  )
    .then(data => {
      if (data.status !== 200) {
        return Promise.reject(new Error());
      }
      return data.json();
    })
    .then(data => {
      return _.omit(customAssign({}, data, _.get(data, ['locales', lang])), [
        'locales',
      ]);
    });
}
