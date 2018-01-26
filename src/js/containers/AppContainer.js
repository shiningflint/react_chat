import React, { Component } from 'react'
import AuthContainer from './AuthContainer'
import ChatContainer from './ChatContainer'
import ChatRoomContainer from './ChatRoomContainer'
import { firebaseAuth, chatRoomId } from 'utilities/constants'
import { fireAuth, fireLogout } from 'utilities/auth'

class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { user: null }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setUser(user.uid)
      } else {
        this.resetUser()
      }
    })
  }

  handleLogin(email, password) {
    fireAuth(email, password)
      .then((user) => this.setState({ user: user.uid }))
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

  setUser(user) {
    return this.setState({ user })
  }

  resetUser() {
    return this.setState({ user: null })
  }

  render() {
    const authOrChat = (this.state.user === null)
      ? <AuthContainer handleLogin={this.handleLogin} />
      : <ChatContainer handleLogout={this.handleLogout} chatRoomId={chatRoomId} uid={this.state.user} />
    return authOrChat
  }
}

export default AppContainer
