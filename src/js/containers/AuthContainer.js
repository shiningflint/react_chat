import React, { Component } from 'react'
import Auth from 'components/Auth'

class AuthContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  render () {
    return (
      <Auth email={this.state.email} />
    )
  }
}

export default AuthContainer
