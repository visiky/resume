import React from 'react';
import { Button } from 'antd';
import './index.less';

type Props = {};

export const Print = ({}: Props) => {
  const print = () => {
    window.print();
  };

  return (
    <Button type="primary" onClick={print}>
      PDF 下载
    </Button>
  );
};
