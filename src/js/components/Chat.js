import React from 'react'
import PropTypes from 'prop-types'

const ChatHeader = (props) => {
  return (
    <div className="chat-header">
      <div className="chat-header__title">
        <span className="chat-header__text" onClick={props.handleLogout}>{'User 1'}</span>
      </div>
    </div>
  )
}

const ChatContent = (props) => {
  return (
    <div className="chat-content">
      <div className="chat-inner">
      </div>
    </div>
  )
}

const ChatInput = (props) => {
  return (
    <div className="chat-input">
      <form action="" className="chat-input__form">
        <div className="chat-input__message">
          <textarea
            className="chat-input__input"
            name="chat_text"
            placeholder="message"
            onChange={props.handleChange}
            value={props.chatInput} />
        </div>
        <div className="chat-input__send">
          <button
            className="chat-input__sendbtn"
            type="submit"
            name="send"
            onClick={props.handleSend}>{"SEND"}</button>
        </div>
      </form>
    </div>
  )
}

const Chat = (props) => {
  return (
    <div className="chat-wrapper">
      <ChatHeader handleLogout={props.handleLogout} />
      <ChatContent />
      <ChatInput
        handleSend={props.handleSend}
        handleChange={props.handleChange}
        chatInput={props.chatInput} />
    </div>
  )
}

Chat.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  handleSend: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  chatInput: PropTypes.string.isRequired,
}

export default Chat
