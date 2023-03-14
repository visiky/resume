import React from 'react';
import cx from 'classnames';
import { Popover } from 'antd';
import qs from 'query-string';
import { getLanguage } from '@/i18n';
import { getMode } from '@/hooks/useModeSwitcher';
import './index.less';
import { useIntl } from 'react-intl';

export const LangSwitcher = ({ className }: { className?: string }) => {
  const lang = getLanguage();
  const mode = getMode();
  const intl = useIntl();

  const changeLanguage = value => {
    if (value === lang) return;

    const {
      pathname,
      hash: currentHash,
      search: currentSearch,
    } = window.location;
    const hash = currentHash === '#/' ? '' : currentHash;
    const search = qs.stringify({
      ...qs.parse(currentSearch),
      lang: value,
    });
    window.location.href = `${pathname}?${search}${hash}`;
  };

  const RadioContent = (
    <span>
      <span
        className={cx('lang')}
        onClick={() => changeLanguage('zh-CN')}
        data-lang="zh-CN"
      >
        中
      </span>
      <span className="divider">/</span>
      <span
        className={cx('lang')}
        onClick={() => changeLanguage('en-US')}
        data-lang="en-US"
      >
        En
      </span>
    </span>
  );

  return (
    <div className={cx('language-switcher', className)}>
      {mode === 'edit' ? (
        <Popover
          content={intl.formatMessage({
            id: '编辑模式下, 切换国际化会导致正在配置的内容丢失，请及时保存',
          })}
          placement="left"
        >
          {RadioContent}
        </Popover>
      ) : (
        RadioContent
      )}
    </div>
  );
};
