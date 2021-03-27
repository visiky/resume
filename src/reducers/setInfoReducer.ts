// author：kasmine [Reducer 的最佳实践](http://www.jianshu.com/p/938f8121ba0f) 几个注意点：
// createReducer should be pure function,每一个函数只实现一个功能

import { ActionTypes } from 'constants/actionTypes'
import { isArray, isObject } from 'utils'
import initialInfo from '../datas/resumeInfo'

const setBasicInfo = (state, action) => {
  let basicInfo = state.basicInfo

  var nextStateItem = action.basicInfo,
    prevStateItem = basicInfo

  if (nextStateItem == prevStateItem) return state
  if (nextStateItem == null) basicInfo = nextStateItem
  else {
    basicInfo = {
      ...prevStateItem,
      ...nextStateItem,
    }
  }
  return {
    ...state,
    basicInfo,
  }
}

const setExperience = (state, action) => {
  let experiences = state.experiences
  // if(!action.payload||state===action.payload) return state; 重写 state，覆盖相同属性
  var nextStateItem = action.experiences,
    prevStateItem = experiences[experiences.length - 1]
  if (prevStateItem === nextStateItem) return state

  // 修改state的最后一项，不是简单的替换，判断 action.payload是否为对象
  if (isObject(nextStateItem)) {
    nextStateItem = {
      ...prevStateItem,
      ...nextStateItem,
    }
  }
  // 注意不要使用 splice 修改原变量 state
  experiences = [...experiences.slice(0, -1), nextStateItem]
  return {
    ...state,
    experiences,
  }
}

const setSkill = (state, action) => {
  let skills = state.skills
  var nextStateItem = action.skills,
    prevStateItem = skills[skills.length - 1]
  if (prevStateItem === nextStateItem) return state
  if (isObject(nextStateItem)) {
    nextStateItem = {
      ...prevStateItem,
      ...nextStateItem,
    }
  }
  skills = [...skills.slice(0, -1), nextStateItem]
  return {
    ...state,
    skills,
  }
}

const setAppraisal = (state, action) => {
  let appraisals = state.appraisals
  var nextStateItem = action.appraisals,
    prevStateItem = appraisals[appraisals.length - 1]
  if (prevStateItem === nextStateItem) return state

  // if(nextStateItem === null)
  appraisals = [...appraisals.slice(0, -1), nextStateItem]
  return {
    ...state,
    appraisals,
  }
}

// TODO: 进一步抽象
const setNewExperience = (state, action) => {
  let experiences = state.experiences
  if (experiences[experiences.length - 1] == null) {
    return state
  }
  experiences = [...experiences, null]
  return {
    ...state,
    experiences,
  }
}

const setNewSkill = (state, action) => {
  let skills = state.skills
  if (skills[skills.length - 1] == null) {
    return state
  }
  skills = [...skills, null]
  return {
    ...state,
    skills,
  }
}

const setNewAppraisal = (state, action) => {
  let appraisals = state.appraisals
  if (appraisals[appraisals.length - 1] == null) {
    return state
  }
  appraisals = [...appraisals, null]
  return {
    ...state,
    appraisals,
  }
}

const deleteInfo = (state, action) => {
  let payload = action.payload
  if (!isObject(payload)) return state
  return { ...state, ...payload }
}

// 添加拖拽调整
const adjustInfo = (state, action) => {
  let payload = action.payload
  if (!isObject(payload)) return state
  return { ...state, ...payload }
}

// 进行reducer拆分 并减少reducer样板代码
function createReducer(initialState, handlers) {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

let initialState = {
  basicInfo: {},
  experiences: [],
  skills: [],
  appraisals: [],
}

// 注入我的个人信息
initialState = initialInfo

const resumeInfo = createReducer(initialState, {
  SET_BASIC_INFO: setBasicInfo,
  SET_EXPERIENCE: setExperience,
  SET_SKILL: setSkill,
  SET_APPRAISAL: setAppraisal,
  SET_NEW_EXPERIENCE: setNewExperience,
  SET_NEW_SKILL: setNewSkill,
  SET_NEW_APPRAISAL: setNewAppraisal,
  DELETE_INFO: deleteInfo,
  ADJUST_INFO: adjustInfo,
})

export default resumeInfo
