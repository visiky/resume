import React from 'react'
import _ from 'lodash'
import 'less/variables.less'

const SkillBox = (props) => {
  // TODO:接受一个level属性，定义样式
  const skills = props.skills
  const getSkillItemStyle = (skillLevel) => {
    if (!skillLevel || skillLevel < 50) {
      let width =
        skillLevel || skillLevel == '' ? 'max-content' : skillLevel + '%'
      return {
        color: '@deep-green',
        backgroundColor: '#eaf6d0',
        borderColor: '#80bd01',
        width: width,
      }
    } else {
      return {
        color: 'ff742a',
        backgroundColor: '#fff6dd',
        borderColor: '#fdbc40',
        width: skillLevel + '%',
      }
    }
  }
  return (
    <ul className="skill-list--master">
      {skills.map((skill) => {
        const {
          skillLevel,
          skillDescription1,
          skillDescription2,
          skillDescription3,
          skillType,
        } = { ...skill }
        return (
          skillType && (
            <li
              className={'skill-list-item skill-list-item_' + skillType}
              key={skillType}
            >
              <h3
                className="skill-list-item_name"
                style={getSkillItemStyle(skillLevel)}
              >
                {skillType}
              </h3>
              <div className="skill-list-item_detail">
                {skillDescription1 && (
                  <p>
                    <i
                      className="fa fa-check-circle-o"
                      style={{ marginRight: '5px' }}
                    ></i>
                    {skillDescription1}
                  </p>
                )}
                {skillDescription2 && (
                  <p>
                    <i
                      className="fa fa-check-circle-o"
                      style={{ marginRight: '5px' }}
                    ></i>
                    {skillDescription2}
                  </p>
                )}
                {skillDescription3 && (
                  <p>
                    <i
                      className="fa fa-check-circle-o"
                      style={{ marginRight: '5px' }}
                    ></i>
                    {skillDescription3}
                  </p>
                )}
              </div>
            </li>
          )
        )
      })}
    </ul>
  )
}

export default SkillBox
