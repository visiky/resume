import React from 'react'
import { Experience, Skill, BaseInfo, Appraisal } from './components/util'
import Button from './components/Button'
import experiences from './jsons/experience'
import skill from './jsons/skill'
import baseinfo from './jsons/baseinfo'
import appraisal from './jsons/appraisal'

const App = () => (
    <div className='main'>
        <header>
            <h1 className="header-logo">
                <span className="header-logo_fullname">{baseinfo.fullname}</span><span className="header-logo_jobtitle">求职意向：
                    {baseinfo.jobTitle}</span>
            </h1>
        </header>
        <BaseInfo baseinfo={baseinfo}  />
        <Skill skills={skill} />
        <Experience experiences={experiences.items} title={experiences.title} subtitle={experiences.subtitle} />
        <Appraisal appraisal={appraisal} />
        <Button />
    </div>
)

export default App