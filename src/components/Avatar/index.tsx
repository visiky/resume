import React, { useState, useEffect } from 'react';
import { Upload, Avatar as AntdAvatar } from 'antd';
import './index.less';

export const Avatar = ({ avatarSrc, className }) => {
  const [fileList, setFileList] = useState<any[]>([]);
  const [src, setSrc] = useState();

  useEffect(() => {
    setSrc(avatarSrc);
  }, [avatarSrc]);

  useEffect(() => {
    setFileList(
      src
        ? [
            {
              uid: -1,
              name: '',
              status: 'done',
              url: src,
            },
          ]
        : []
    );
  }, [src]);

  const handleChange = ({ file: newFile, fileList: newFileList }) => {
    if (newFile.status === 'error') {
      console.error('upload avatar error:');
    }
    setFileList(newFileList);
    setSrc(newFileList[0]?.thumbUrl);
  };

  return (
    <div className="avatar">
      {fileList.length > 0 && <AntdAvatar className={className} src={src} />}
      <Upload
        listType="picture-card"
        fileList={fileList}
        onChange={handleChange}
        className={'btn-upload'}
        style={{ display: fileList.length > 0 ? 'none' : 'block' }}
      >
        {fileList.length <= 0 && (
          <div style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
            <div className="ant-upload-text">Upload</div>
          </div>
        )}
      </Upload>
    </div>
  );
};
