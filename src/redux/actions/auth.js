import * as actionTypes from './actionTypes'

export const guestLogin = () => {
  return {
    type: actionTypes.AUTH_INIT_GUEST_LOGIN
  }
}

export const serverLogin = () => {
  return {
    type: actionTypes.SERVER_LOGIN
  }
}
