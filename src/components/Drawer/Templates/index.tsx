import React from 'react';
import { ReactSVG } from 'react-svg';
import cx from 'classnames';
import './index.less';

type Props = {
  template: string;
  onChange: (v: string) => void;
};

const TEMPLATES = [
  {
    url: 'https://gw.alipayobjects.com/zos/antfincdn/GLDkiGBSPl/moban1.svg',
    id: 'template1',
    description: '默认模板(适用于单页)',
  },
  {
    url: 'https://gw.alipayobjects.com/zos/antfincdn/GLDkiGBSPl/moban1.svg',
    id: 'template2',
    description: '建设中',
    disabled: true,
  },
  {
    url: 'https://gw.alipayobjects.com/zos/antfincdn/kT1AgHc5gU/moban2.svg',
    id: 'template3',
    description: '简易模板(适用于多页)',
  },
];

export const Templates: React.FC<Props> = props => {
  return (
    <div className="templates">
      {TEMPLATES.map(item => {
        return (
          <div
            className={cx('template-item', {
              selected: item.id === props.template,
              disabled: item.disabled,
            })}
            key={`${item.id}`}
            onClick={() => !item.disabled && props.onChange(item.id)}
          >
            <ReactSVG
              src={item.url}
              beforeInjection={svg => {
                svg.setAttribute('class', 'template');
              }}
            />
            <span className="template-description">{item.description}</span>
          </div>
        );
      })}
    </div>
  );
};
