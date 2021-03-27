import React from 'react';
import { Upload, Icon, message } from 'antd';


class Avatar extends React.Component {
  
  constructor(){
      super();
      this.state = {
          imageUrl: null,
          file: null,
          fileList: [{
            uid: -1,
            name: 'default.png',
            status: 'done',
            url: '/images/avatar.png',
          }]
      }
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ file, fileList}){
    if (file.status === 'error') {
       console.log("here")
    }
    this.setState({
        fileList:fileList,
        file:file
    })
  }

  render() {
    return (
        <Upload
            listType="picture-card"
            fileList={this.state.fileList}
            onChange={this.handleChange}>
            { this.state.fileList.length <= 0 && 
            <div style={{ color: "rgba(0, 0, 0, 0.85)",fontWeight: 600,marginTop: "10px" }}>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>}
        </Upload>
    );
  }
}

export default Avatar;