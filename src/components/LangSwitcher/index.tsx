import React from 'react';
import cx from 'classnames';
import { Popover } from 'antd';
import qs from 'query-string';
import { getLanguage, getLocale } from '@/locale';
import { getMode } from '@/hooks/useModeSwitcher';
import './index.less';

export const LangSwitcher = ({ className }: { className?: string }) => {
  const lang = getLanguage();
  const mode = getMode();
  const i18n = getLocale();

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
        onClick={() => changeLanguage('zh_CN')}
        data-lang="zh_CN"
      >
        中
      </span>
      <span className="divider">/</span>
      <span
        className={cx('lang')}
        onClick={() => changeLanguage('en_US')}
        data-lang="en_US"
      >
        En
      </span>
    </span>
  );

  return (
    <div className={cx('language-switcher', className)}>
      {mode === 'edit' ? (
        <Popover
          content={i18n.get(
            '编辑模式下, 切换国际化会导致正在配置的内容丢失，请及时保存'
          )}
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
