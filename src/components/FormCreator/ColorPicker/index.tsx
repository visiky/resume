import { Dropdown } from 'antd';
import React, { useMemo, useCallback } from 'react';
import { SketchPicker } from 'react-color';
import cx from 'classnames';
import _ from 'lodash-es';
import './index.less';

const DEFAULT_COLORS = [
  '#F4664A',
  '#E86452',
  '#FF9845',
  '#FAAD14',
  '#F6BD16',
  '#5AD8A6',
  '#30BF78',
  '#6DC8EC',
  '#5B8FF9',
  '#1E9493',
  '#945FB9',
  '#FF99C3',
  '#5D7092',
];

type ColorPickerProps = {
  value: string;
  onChange?: (value) => void;
  canChangeColor?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

export const ColorPicker: React.FC<ColorPickerProps> = props => {
  const {
    value: color,
    onChange,
    style,
    canChangeColor = true,
    className,
  } = props;

  const onColorChange = useCallback(
    newColor => {
      const {
        rgb: { r, g, b, a },
      } = newColor;
      const alpha =
        color === undefined || _.lowerCase(color) === 'transparent' ? 1 : a;
      onChange?.(`rgba(${r}, ${g}, ${b}, ${alpha})`);
    },
    [onChange, color]
  );

  const overlay = useMemo(() => {
    return (
      <SketchPicker
        color={color}
        className="color-picker-overlay"
        onChangeComplete={onColorChange}
        presetColors={DEFAULT_COLORS}
      />
    );
  }, [onColorChange, color]);
  return (
    <Dropdown
      overlay={overlay}
      trigger={['click', 'hover']}
      disabled={!canChangeColor}
    >
      <div
        style={{ backgroundColor: color, ...style }}
        className={cx('color-block', className)}
      />
    </Dropdown>
  );
};
