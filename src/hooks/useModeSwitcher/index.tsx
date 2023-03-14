import React from 'react';
import cx from 'classnames';
import { Popover } from 'antd';
import qs from 'query-string';
import { FormattedMessage } from 'react-intl';
import { getSearchObj } from '@/helpers/location';
import './index.less';

export function getMode() {
  const query = getSearchObj();
  return (query ? query.mode : 'read') as string;
}

export const useModeSwitcher = ({
  className,
}: {
  className?: string;
}): [JSX.Element, string, (v) => void] => {
  const mode = getMode();
  const query = getSearchObj();

  const changeMode = value => {
    if (value === mode) return;
    const {
      pathname,
      hash: currentHash,
      search: currentSearch,
    } = window.location;
    const hash = currentHash === '#/' ? '' : currentHash;
    const search = qs.stringify({
      ...qs.parse(currentSearch),
      mode: value,
    });

    window.location.href = `${pathname}?${search}${hash}`;
  };

  const canPreview = !query.user;

  return [
    <div className={cx('mode-switcher', className)}>
      {mode !== 'edit' && (
        <span className={cx('mode-item')} onClick={() => changeMode('edit')}>
          <FormattedMessage id="编辑" />
        </span>
      )}
      {mode === 'edit' &&
        (canPreview ? (
          <Popover content={<FormattedMessage id="无用户信息，不允许预览" />}>
            <span>
              <FormattedMessage id="预览" />
            </span>
          </Popover>
        ) : (
          <span className={cx('mode-item')} onClick={() => changeMode('read')}>
            <FormattedMessage id="预览" />
          </span>
        ))}
    </div>,
    mode,
    changeMode,
  ];
};
