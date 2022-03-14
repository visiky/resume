import React from 'react';
import { LangSwitcher } from '@/components/LangSwitcher';
import { useModeSwitcher, Mode } from '@/hooks/useModeSwitcher';
import { getSearchObj } from '@/helpers/location';
import env, { Env } from '@/helpers/env';
import './header.less';

const Header: React.FC = () => {
  const [ModeSwitcher, mode] = useModeSwitcher({});

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
        {env !== Env.Prod && mode !== Mode.Read && (
          <span className={'action-link'} onClick={gotoOnlineVersion}>
            在线版本
          </span>
        )}
        <LangSwitcher />
      </span>
    </header>
  );
};

export default Header;
