import React from 'react';
import { ReactSVG } from 'react-svg';
import { ThemeConfig } from '../../types';
import './index.less';

type Props = ThemeConfig & {
  onChange: (v: Partial<ThemeConfig>) => void;
};

const TEMPLATE_1 =
  'https://gw.alipayobjects.com/zos/antfincdn/GLDkiGBSPl/moban1.svg';

export const Templates: React.FC<Props> = props => {
  return (
    <div className="templates">
      <div className="template-item">
        <ReactSVG
          src={TEMPLATE_1}
          beforeInjection={svg => {
            svg.setAttribute('class', 'template');
          }}
        />
        <span className="template-description">默认模板</span>
      </div>
    </div>
  );
};
