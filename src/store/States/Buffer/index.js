import { unResolveEntity } from "../../../helpers/resolveEntity"

export const constants = {
  "UPDATE_BUFFER": "UPDATE_BUFFER",
  "AUTH_USER": "AUTH_USER",
  "DEAUTH_USER": "DEAUTH_USER",
  "SET_USER_ID": "SET_USER_ID",
}

export const stateName = "buffer"

export const initialState = {
  mainBuffer: {},
  isAuth: false,
  userID: ""
}

export const selectBuffer = (state) => {
  return unResolveEntity(state, stateName)
}

export const selectMainBuffer = (state) => {
  return selectBuffer(state).mainBuffer
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.UPDATE_BUFFER: {
      return {
        ...state,
        mainBuffer: {
          ...state.mainBuffer,
          ...action.payload
        }
      }
    }

    case constants.AUTH_USER: {
      return {
        ...state,
        isAuth: true
      }
    }

    case constants.DEAUTH_USER: {
      return {
        ...state,
        isAuth: false
      }
    }

    case constants.SET_USER_ID: {
      return {
        ...state,
        userID: action.payload
      }
    }

    default: {
      return state
    }
  }
}

export const UpdateMainBuffer = (payload) => ({
  type: constants.UPDATE_BUFFER,
  payload
})

export const AuthUser = () => ({
  type: constants.AUTH_USER
})

export const DeAuthUser = () => ({
  type: constants.DEAUTH_USER
})

export const SetUserID = (userID) => ({
  type: constants.SET_USER_ID,
  payload: userID
})