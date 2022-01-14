import React from 'react';
import { Template1 } from './Template1';
import { Template2 } from './Template2';
import { Template3 } from './Template3';

export const Resume: React.FC<any> = ({ template, ...restProps }) => {
  const Template = React.useMemo(() => {
    switch (template) {
      case 'template2':
        return Template2;
      case 'template3':
        return Template3;
      default:
        return Template1;
    }
  }, [template]);

  return Template ? <Template {...restProps} /> : null;
};
