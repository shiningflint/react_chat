import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chat from 'components/Chat'
import ChatUnvalidated from 'components/ChatUnvalidated'
import { validateUserRoom } from 'utilities/auth'

class ChatContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userValidated: false,
      errorMessage: 'User has not been validated.'
    }
  }

  componentDidMount() {
    validateUserRoom(this.props.uid, this.props.chatRoomId)
      .then((result) => this.setState({ userValidated: result }))
  }

  render () {
    const validatedComponent = this.state.userValidated
      ? <Chat handleLogout={this.props.handleLogout} />
      : <ChatUnvalidated errorMessage={this.state.errorMessage} />
    return validatedComponent
  }
}

ChatContainer.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  chatRoomId: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
}

export default ChatContainer
