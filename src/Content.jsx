import React from "react"
import { getAuthentication, selectUserContent } from "store/States/User"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

const Content = ({ isAuthenticated }) => {
  return !isAuthenticated? <Redirect to="/login-register" /> : (
    <div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isAuthenticated: getAuthentication(state)
})

export default connect(mapStateToProps)(Content)