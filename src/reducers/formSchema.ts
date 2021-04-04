import { indexMapFormId } from 'constants'
import { FORM_SCHEMA } from '../schemas/formSchema'

const initialState = FORM_SCHEMA['BASIC_INFO']

/**
 *  “formSchema” 会作为 state 的属性
 */
const formSchema = (state = initialState, action) => {
  const FORM_ID = action.index ? indexMapFormId[action.index] : 'BASIC_INFO'
  switch (action.type) {
    case 'SET_FORM_SCHEMA':
      return FORM_SCHEMA[FORM_ID]
    default:
      return state
  }
}

export default formSchema
