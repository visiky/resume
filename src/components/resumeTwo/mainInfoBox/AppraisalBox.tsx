import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import DragWrapper from 'components/common/DragWrapper'
import showConfirm from 'components/common/Confirm'
import { Tooltip } from 'antd'

const AppraisalBox = (props, context) => {
  const _context = context // issues：避免回调中访问不到context
  const handleContextMenu = (e, index) => {
    e.preventDefault()
    showConfirm(null, '确定删除？').then(
      (message) => {
        let nextAppraisals = props.appraisals
        nextAppraisals.splice(index, 1)
        _context.deleteInfo({ appraisals: nextAppraisals })
      },
      (message) => {}
    )
  }
  const appraisals = props.appraisals
  return (
    <div className="appraisal-box">
      <div className="section-list-item">
        {appraisals.map((appraisal, index) => {
          return (
            <Tooltip
              placement="right"
              title={'右键删除'}
              key={appraisal + '-' + index}
            >
              <p
                style={{ textIndent: '30px' }}
                className="section-list-item__content"
                onContextMenu={(e) => {
                  handleContextMenu(e, index)
                }}
              >
                {appraisal}
              </p>
            </Tooltip>
          )
        })}
      </div>
    </div>
  )
}

AppraisalBox.contextTypes = {
  deleteInfo: PropTypes.func,
}
export default AppraisalBox
