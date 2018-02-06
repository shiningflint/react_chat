import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chat from 'components/Chat'
import ChatUnvalidated from 'components/ChatUnvalidated'
import { validateUserRoom } from 'utilities/auth'
import { postChat, apiGetChat } from 'utilities/api'

class ChatContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userValidated: false,
      errorMessage: 'User has not been validated.',
      chatInput: "",
      chats: {},
    }
    this.handleSend = this.handleSend.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    validateUserRoom(this.props.uid, this.props.chatRoomId)
      .then((result) => {
        this.setState({ userValidated: result })
        this.getChats(this.props.chatRoomId)
      })
  }

  getChats(chatRoomId) {
    apiGetChat(chatRoomId).then((chats) => this.setState({ chats }))
  }

  handleSend(e) {
    e.preventDefault()
    const timeStamp = Date.now()
    postChat(this.props.uid, this.props.chatRoomId, this.state.chatInput, timeStamp)
      .then(() => this.getChats(this.props.chatRoomId))
    this.resetChatInput()
  }

  handleChange(e) {
    return this.updateChatInput(e.target.value)
  }

  resetChatInput() {
    return this.setState({ chatInput: "" })
  }

  updateChatInput(value) {
    return this.setState({ chatInput: value })
  }

  render () {
    const validatedComponent = this.state.userValidated
      ? <Chat
        handleLogout={this.props.handleLogout}
        handleSend={this.handleSend}
        handleChange={this.handleChange}
        chatInput={this.state.chatInput}
        chats = {this.state.chats} />
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
