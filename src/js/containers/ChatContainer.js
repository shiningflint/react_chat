import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatContainer extends Component {
  render () {
    return (
      <div>
        <p>{'Welcome to the chat!'}</p>
        <a onClick={this.props.handleLogout}>{'Logout'}</a>
      </div>
    )
  }
}

ChatContainer.propTypes = {
  handleLogout: PropTypes.func.isRequired,
}

export default ChatContainer
