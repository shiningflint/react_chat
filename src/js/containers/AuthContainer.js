import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Auth from 'components/Auth'

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
    this.resetAuth()
    this.props.handleLogin(this.state.loginEmail, this.state.loginPassword)
  }

  handleChange(e) {
    return this.updateLogin(e.target.name, e.target.value)
  }

  updateLogin(name, value) {
    return this.setState({ [name]: value })
  }

  resetAuth() {
    this.setState({
      loginEmail: '',
      loginPassword: '',
    })
  }

  render () {
    return (
      <Auth
        loginEmail={this.state.loginEmail}
        loginPassword={this.state.loginPassword}
        emailChange={this.handleChange}
        passwordChange={this.handleChange}
        submit={this.handleSubmit} />
    )
  }
}

AuthContainer.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}

export default AuthContainer
