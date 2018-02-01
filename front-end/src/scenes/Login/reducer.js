import {
  REQUEST as LOGIN_REQUEST,
  SUCCESS as LOGIN_SUCCESS,
  ERROR as LOGIN_ERROR
} from 'Data/authentication'

const loadingReducer = (state, action) => {
  switch (action.type) {
  case LOGIN_REQUEST:
    return true
  case LOGIN_SUCCESS:
  case LOGIN_ERROR:
    return false
  default:
    return state
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case AUTHENTICATE:
    return { ...state, isAuthenticated: true, user: action.user }
  }
}
