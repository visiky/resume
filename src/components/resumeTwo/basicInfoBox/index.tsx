import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import BasicInfoList from './BasicInfoList'
import { Upload, Icon } from 'antd'
import Avatar from './Avatar'

class BasicInfoBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      fileList: [],
    }
    this.handleChange = this.handleChange.bind(this)
  }
  shouldComponentUpdate() {
    // console.log("here")
    return true
  }
  handleChange({ file, fileList }) {
    this.setState({ file: file, fileList: fileList })
  }
  render() {
    const customStyle = {
      infoBox: {
        background: this.props.styleColor,
      },
      avatar: {
        display: 'block',
        margin: '0 auto 5px',
      },
      fullname: {
        fontSize: '24px',
      },
      jobTitle: {
        fontFamily: 'PingFangSC-Regular',
        fontSize: '18px',
      },
    }

    const { avatar, fullname, jobTitle } = this.props.basicInfo || {}
    const basicInfo = _.omit(
      this.props.basicInfo,
      'avatar',
      'fullname',
      'jobTitle'
    )
    return (
      <div className="basic-info-box" style={customStyle.infoBox}>
        <div
          style={{
            textAlign: 'center',
            margin: '30px 0',
          }}
        >
          <Avatar />
          <h1 style={customStyle.fullname}>{fullname}</h1>
          <p>{jobTitle}</p>
        </div>
        <BasicInfoList {...basicInfo} />
      </div>
    )
  }
}

export default BasicInfoBox
