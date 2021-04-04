import React, { Component } from 'react'
import _ from 'lodash'
import BoxWrapper from './BoxWrapper'
import SkillBox from './SkillBox'
import ExperienceBox from './ExperienceBox'
import AppraisalBox from './AppraisalBox'

class MainInfoBox extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps) {
    return true
  }

  render() {
    const { skills, appraisals, experiences, styleColor } = this.props
    // 注意直接传入 SkillBox 即可
    const EnhancedSkillBox = BoxWrapper(SkillBox),
      EnhancedAppraisalBox = BoxWrapper(AppraisalBox),
      EnhancedExperienceBox = BoxWrapper(ExperienceBox)
    return (
      <div className="main-info-box">
        <EnhancedExperienceBox
          id="experience"
          title="工作经历／项目经验"
          experiences={experiences}
          styleColor={styleColor}
        />
        <EnhancedSkillBox
          id="skill"
          title="技能"
          skills={skills}
          styleColor={styleColor}
        />
        <EnhancedAppraisalBox
          id="appraisal"
          title="自我评价"
          appraisals={appraisals}
          styleColor={styleColor}
        />
      </div>
    )
  }
}

export default MainInfoBox
