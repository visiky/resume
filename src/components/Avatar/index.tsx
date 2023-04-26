import React, { useState } from 'react';
import { Upload, Avatar as AntdAvatar } from 'antd';
import './index.less';

export const Avatar = ({
  avatarSrc,
  className,
  shape = 'circle',
  size = 'default',
}) => {
  return (
    <div className={`avatar ${!avatarSrc ? 'avatar-hidden' : ''}`}>
      {avatarSrc ? (
        // @ts-ignore
        <AntdAvatar
          className={className}
          src={avatarSrc}
          shape={shape as any}
          size={size as any}
        />
      ) : (
        <span className="avatar-upload-tip">头像地址为空</span>
      )}
    </div>
  );
};
