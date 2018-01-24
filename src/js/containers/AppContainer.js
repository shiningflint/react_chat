import React, { Component } from 'react'
import AuthContainer from './AuthContainer'
import ChatContainer from './ChatContainer'
import { fireGetUser, fireAuth, fireLogout } from 'utilities/auth.js'

class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { user: null }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    fireGetUser().then((user) => this.setState({ user }))
  }

  handleLogin(email, password) {
    fireAuth(email, password)
      .then((user) => this.setState({ user }))
      .catch((error) => {
        console.warn(error.code, error.message)
        return this.resetUser()
      })
  }

  handleLogout() {
    fireLogout()
      .then(() => this.resetUser())
      .catch((error) => console.warn(error))
  }

  resetUser() {
    return this.setState({ user: null })
  }

  render() {
    console.log(this.state.user)
    const authOrChat = (this.state.user === null)
      ? <AuthContainer handleLogin={this.handleLogin} />
      : <ChatContainer handleLogout={this.handleLogout} />
    return authOrChat
  }
}

export default AppContainer
