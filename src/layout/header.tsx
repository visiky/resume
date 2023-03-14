import React from 'react';
import { LangSwitcher } from '@/components/LangSwitcher';
import { getMode, useModeSwitcher } from '@/hooks/useModeSwitcher';
import { getSearchObj } from '@/helpers/location';
import { FormattedMessage } from 'react-intl';
import './header.less';

const Header: React.FC = () => {
  const mode = getMode();
  const [ModeSwitcher] = useModeSwitcher({});

  function gotoOnlineVersion() {
    const query = getSearchObj();
    if (typeof window !== 'undefined') {
      window.open(`https://visiky.github.io/resume/?user=${query.user}`);
    }
  }

  return (
    <header>
      <span />
      <span>
        {ModeSwitcher}
        {mode === 'read' && (
          <span className={'action-link'} onClick={() => window.print()}>
            <FormattedMessage id="下载 PDF" />
          </span>
        )}
        <span className={'action-link'} onClick={gotoOnlineVersion}>
          在线版本
        </span>
        <LangSwitcher />
      </span>
    </header>
  );
};

export default Header;
