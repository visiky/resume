import React from 'react';
import { HeartTwoTone } from '@ant-design/icons';
import { ColorPicker } from '../FormCreator/ColorPicker';
import { ThemeConfig } from '../types';

type Props = ThemeConfig & {
  onChange: (v: Partial<ThemeConfig>) => void;
};

export const ConfigTheme: React.FC<Props> = props => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <HeartTwoTone style={{ marginRight: '4px' }} />
      <div style={{ display: 'flex', alignItems: 'center', minWidth: '80px' }}>
        <span style={{ marginRight: '4px' }}>主题色</span>
        <ColorPicker
          value={props.color}
          onChange={v => props.onChange({ color: v })}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', minWidth: '80px' }}>
        <span style={{ marginRight: '4px' }}>tag 标签色</span>
        <ColorPicker
          value={props.tagColor}
          onChange={v => props.onChange({ color: v })}
        />
      </div>
    </div>
  );
};
