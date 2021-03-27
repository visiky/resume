import React, { Component } from 'react'
import _ from 'lodash'
import EnhancedComponent from './EnhancedComponent'
import SkillBox from './components/SkillBox'
import ExperienceBox from './components/ExperienceBox'
import BasicInfoBox from './components/BaseInfoBox'
import AppraisalBox from './components/AppraisalBox'
import './index.less'
import 'less/style.less'
import 'less/style-print.less'

class ResumeOne extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { basicInfo, skills, appraisals, experiences } = this.props
    // 注意直接传入 SkillBox 即可
    const EnhancedSkillBox = EnhancedComponent(SkillBox),
      EnhancedAppraisalBox = EnhancedComponent(AppraisalBox),
      EnhancedExperienceBox = EnhancedComponent(ExperienceBox)
    return (
      <div className="main resume-one">
        <header>
          <h1 className="header-logo">
            <span className="header-logo_fullname"> {basicInfo.fullname} </span>
            <span className="header-logo_jobtitle">
              求职意向:{basicInfo.jobTitle}{' '}
            </span>
          </h1>
        </header>
        <BasicInfoBox basicInfo={basicInfo} />
        <EnhancedSkillBox id="skill" title="技能" subtitle="" skills={skills} />
        <EnhancedExperienceBox
          id="experienceBox"
          title="经历 && 经验"
          experiences={experiences}
        />
        <EnhancedAppraisalBox
          id="appraisal"
          title="自我评价"
          appraisals={appraisals}
        />
      </div>
    )
  }
}

export default ResumeOne
