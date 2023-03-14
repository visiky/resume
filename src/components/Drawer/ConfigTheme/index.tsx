import { FormattedMessage } from 'react-intl';
import React, { useEffect } from 'react';
import { ColorPicker } from '../../FormCreator/ColorPicker';
import type { ThemeConfig } from '../../types';

type Props = ThemeConfig & {
  onChange: (v: Partial<ThemeConfig>) => void;
};

const FormItemStyle = {
  display: 'flex',
  alignItems: 'center',
  minWidth: '100px',
};

export const ConfigTheme: React.FC<Props> = props => {
  useEffect(() => {
    let $style = document.getElementById('dynamic');
    if (!$style) {
      $style = document.createElement('style');
      $style.setAttribute('id', 'dynamic');
      document.head.insertBefore($style, null);
    }
    const styles = `
      :root {
        --primary-color: ${props.color};
        --tag-color: ${props.tagColor};
      }
    `;
    $style.innerHTML = styles;
  }, [props.color, props.tagColor]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={FormItemStyle}>
        <span style={{ marginRight: '4px' }}>
          <FormattedMessage id="主题色" />
        </span>
        <ColorPicker
          value={props.color}
          onChange={v => props.onChange({ color: v })}
        />
      </div>
      <div style={FormItemStyle}>
        <span style={{ marginRight: '4px' }}>
          <FormattedMessage id="Tag 标签色" />
        </span>
        <ColorPicker
          value={props.tagColor}
          onChange={v => props.onChange({ tagColor: v })}
        />
      </div>
    </div>
  );
};
