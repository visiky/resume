import { combineReducers } from 'redux'
import resumeInfo from './setInfoReducer'
// import visibilityFormId from './VisibilityFormId'
import formSchema from './formSchema'
import { indexMapFormId } from 'constants'

const actionType = (state = 'SET_BASIC_INFO', action) => {
  const FORM_ID = action.index ? indexMapFormId[action.index] : 'BASIC_INFO'
  switch (action.type) {
    case 'SET_FORM_SCHEMA':
      return 'SET_' + FORM_ID
    default:
      return state
  }
}

const styleColor = (state = '#273F75', action) => {
  switch (action.type) {
    case 'SET_STYLE_COLOR':
      return action.color
    default:
      return state
  }
}

const templateId = (state = '2', action) => {
  switch (action.type) {
    case 'SET_TEMPLATE':
      return action.templateId
    default:
      return state
  }
}

const rootReducer = combineReducers({
  resumeInfo,
  formSchema,
  actionType,
  styleColor,
  templateId,
})

// here,this.state = {...,formSchema,actionType}

export default rootReducer
