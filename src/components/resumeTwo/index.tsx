import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import _ from 'lodash'
import BasicInfoBox from './basicInfoBox'
import MainInfoBox from './mainInfoBox'

import './index.less'

class ResumeTwo extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isPreviewStyle: context.isPreviewStyle,
    }
  }

  shouldComponentUpdate(nextProps) {
    return true
  }

  render() {
    const { basicInfo, styleColor } = this.props
    const mainInfo = _.omit(this.props, 'basicInfo')

    return (
      <div className="resume-two" style={this.state.isPreviewStyle}>
        <BasicInfoBox basicInfo={basicInfo} styleColor={styleColor} />
        <MainInfoBox {...mainInfo} styleColor={styleColor} />
      </div>
    )
  }
}

ResumeTwo.contextTypes = {
  isPreviewStyle: PropTypes.object,
}
export default ResumeTwo
