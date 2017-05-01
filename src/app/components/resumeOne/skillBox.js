import React from 'react';
import _ from 'lodash'

const SkillBox = (props) => {
   // TODO:接受一个level属性，定义样式
   const {skillLevel, skillDescription, skillType} = {...props}
    return (
        <li className={'skill-list-item skill-list-item_' + skillType} key={skillType}>
            <h3 className="skill-list-item_name" style={{width: skillLevel}}>
                {skill.type}
            </h3>
            <div className="skill-list-item_detail">
                <ul className="list content">
                    <li><i className="fa fa-check-circle-o"></i>{skillDescription}</li>
                </ul>
            </div>
        </li>
    )
}
      
export default SkillBox;