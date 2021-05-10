import { unResolveEntity } from "../../../helpers/resolveEntity"

export const stateName = "authentication_new"

export const constants = {
  "SET_TOKEN": "SET_TOKEN",
  "SET_ID": "SET_ID",
  "SET_USER_DETAILS": "SET_USER_DETAILS",
  "SET_CURRENT_SCREEN": "SET_CURRENT_SCREEN",
  "CHECK_AUTHENTICATION": "CHECK_AUTHENTICATION",
  "ENABLE_AUTH": "ENABLE_AUTH",
  "DISABLE_AUTH": "DISABLE_AUTH"
}

export const initialState = {
  token: "",
  id: "",
  userData: {},
  isAuthenticated: false,
  currentScreen: ""
}

export const screenTypes = {
  "PENDING": "PENDING",
  "COMPLETED": "COMPLETED"
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.SET_TOKEN: {
      return {
        ...state,
        token: action.payload
      }
    }

    case constants.ENABLE_AUTH: {
      return {
        ...state,
        isAuthenticated: true
      }
    }

    case constants.DISABLE_AUTH: {
      return {
        ...state,
        isAuthenticated: false,
        userData: {}
      }
    }

    case constants.SET_ID: {
      return {
        ...state,
        id: action.payload
      }
    }

    case constants.SET_USER_DETAILS: {
      return {
        ...state,
        userData: action.payload
      }
    }

    case constants.SET_CURRENT_SCREEN: {
      return {
        ...state,
        currentScreen: action.payload
      }
    }

    default: {
      return state
    }
  }
}

export const AuthenticateUser = () => ({
  type: constants.ENABLE_AUTH
})

export const DeAuthenticateUser = () => ({
  type: constants.DISABLE_AUTH
})

export const getAuthentication = state => {
  const content = unResolveEntity(state, stateName)
  return content.isAuthenticated? content.isAuthenticated : false
}

export const setUserID = (userID) => ({
  type: constants.SET_ID,
  payload: userID
})

export const SetUserDetails = (userDetails) => ({
  type: constants.SET_USER_DETAILS,
  payload: userDetails
})

export const selectUserContent = state => {
  return state.entities[stateName]
}