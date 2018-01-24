import React, { Component } from 'react'
import Auth from 'components/Auth'
import { fireAuth } from 'utilities/auth'

class AuthContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginEmail: '',
      loginPassword: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("PREVENTED!", this.state.loginEmail, this.state.loginPassword)
    fireAuth(this.state.loginEmail, this.state.loginPassword)
      .then((booyah) => console.log(booyah))
  }

  handleChange(e) {
    return this.updateLogin(e.target.name, e.target.value)
  }

  updateLogin(name, value) {
    return this.setState({ [name]: value })
  }

  render () {
    return (
      <Auth
        loginEmail={this.state.loginEmail}
        emailChange={this.handleChange}
        passwordChange={this.handleChange}
        submit={this.handleSubmit} />
    )
  }
}

export default AuthContainer
