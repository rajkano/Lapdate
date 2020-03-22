// eslint-disable-next-line no-unused-vars
import * as actionTypes from './actions/actionTypes'

export const initialState = {
  testKey: false,
  lang: 'en'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // create your cases and update state here
    case actionTypes.LANGUAGE_CHANGE:
      // return {
      //   ...state
      // }
    return {
      ...state,
      lang: action.lang
    }
    default: return state
  }
}

export default reducer
