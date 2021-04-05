import React from 'react';
import _ from 'lodash';

const BasicInfoBox = props => {
  // let types = ["school", "apartment", "graduateTime", "phone", "blog", "email"],
  let basicInfo = props.basicInfo,
    types = Object.keys(basicInfo);
  types = types.map(type => {
    if (
      basicInfo.hasOwnProperty(type) &&
      Object.prototype.toString.call(type) == '[object String]' &&
      type !== 'fullname' &&
      type !== 'jobTitle'
    ) {
      return type;
    }
  });
  // TODO: 这里需要强制刷新吗
  return (
    <section className="primary-info">
      <ul className="primary-info-list">
        {types.map(type => {
          return (
            basicInfo[type] && (
              <li
                className={
                  'primary-info-list-item primary-info-list-item_' + type
                }
                key={'basic-info-' + type}
              >
                {(type == 'phone' && (
                  <i className={'fa fa-phone-square'}></i>
                )) ||
                  (type == 'email' && <i className={'fa fa-envelope'}></i>) ||
                  (type == 'blog' && <i className={'fa fa-rss-square'}></i>)}
                &nbsp;<span>{basicInfo[type]}</span>
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
};

export default BasicInfoBox;
