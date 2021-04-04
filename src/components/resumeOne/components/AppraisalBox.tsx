import React from 'react';
import _ from 'lodash';

const AppraisalBox = props => {
  const customStyle = {
    p: {
      textIndent: '39px',
      lineHeight: '1.5em',
    },
  };
  return (
    <div>
      {props.appraisals.map((appraisal, index) => {
        return (
          <p key={appraisal + '-' + index} style={customStyle.p}>
            {appraisal}
          </p>
        );
      })}
    </div>
  );
};

export default AppraisalBox;
