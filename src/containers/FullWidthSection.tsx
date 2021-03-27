import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setVisibilityForm } from '../actions'

import LeftSection from './LeftSection'
import RightSection from './RightSection'
import ButtonGroup from './ButtonGroup'

class FullWidthSection extends Component {
  constructor() {
    super()
    this.state = {
      isPreview: false,
    }
  }
  handlePreview() {
    this.setState({
      isPreview: true,
    })
  }
  handleCanclePreview() {
    this.setState({
      isPreview: false,
    })
  }
  handlePrint() {
    window.print()
  }
  getChildContext() {
    const isPreviewStyle = {
      margin: '0 auto',
      boxShadow: '1px 1px 3px 3px #d9d9d9',
    }
    return {
      isPreviewStyle: this.state.isPreview ? isPreviewStyle : {},
    }
  }
  render() {
    return (
      <div className="fullSection">
        {!this.state.isPreview && <LeftSection ref="leftSection" />}
        <RightSection />
        <ButtonGroup
          handlePreview={this.handlePreview.bind(this)}
          handleCanclePreview={this.handleCanclePreview.bind(this)}
          handlePrint={this.handlePrint.bind(this)}
          isPreview={this.state.isPreview}
        />
      </div>
    )
  }
}

FullWidthSection.childContextTypes = {
  isPreviewStyle: PropTypes.object,
}

export default FullWidthSection
