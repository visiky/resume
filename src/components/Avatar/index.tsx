import React, { useState } from 'react';
import { Upload, Avatar as AntdAvatar } from 'antd';
import './index.less';

export const Avatar = ({ avatarSrc, className }) => {
  const [fileList, setFileList] = useState<any[]>([{ thumbUrl: avatarSrc }]);

  const handleChange = ({ file: newFile, fileList: newFileList }) => {
    if (newFile.status === 'error') {
      console.error('upload avatar error:');
    }
    setFileList(newFileList);
  };

  return (
    <div className="avatar">
      {fileList.length > 0 && <AntdAvatar className={className} src={fileList[0]?.thumbUrl} />}
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
