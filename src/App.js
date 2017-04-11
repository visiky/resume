import React from 'react'
import {
  Experience,
  Skill,
  BaseInfo,
  Appraisal
}
from './components/util'
import Button from './components/Button'
import experiences from './jsons/experience'
import exp from './jsons/exp'
import skill from './jsons/skill'
import baseinfo from './jsons/baseinfo'
import appraisal from './jsons/appraisal'

const App = () => ( <div className = 'main' >
  <header>
  <h1 className = "header-logo" >
  <span className = "header-logo_fullname" > {
    baseinfo.fullname
  } </span><span className="header-logo_jobtitle">求职意向： {
  baseinfo.jobTitle
} </span> </h1 > </header> < BaseInfo baseinfo = {
baseinfo
}
/> < Skill skills = { skill} title="技能" subtitle="jekll blog:https://me-momo.github.io/kasmine.blog/(正在更新)"/> < Experience experiences = {
experiences.items
}
title = {
  experiences.title
}
subtitle = {
  experiences.subtitle
}
/> < Experience experiences = {
exp.items
}
title = {
  exp.title
}
subtitle = {
exp.subtitle
}/> < Appraisal appraisal = {
appraisal
}/> < Button / >
</div>
)

export default App