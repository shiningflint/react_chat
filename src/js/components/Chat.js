import React from 'react'
import PropTypes from 'prop-types'
import { convertHour } from 'utilities/helpers'

const ChatHeader = (props) => {
  return (
    <div className="chat-header">
      <div className="chat-header__title">
        <span className="chat-header__text" onClick={props.handleLogout}>{'User 1'}</span>
      </div>
    </div>
  )
}

const MyChat = ({ chats, chatId }) => {
  return (
    <div className="chat-item chat-item--self">
      <div className="chat-time chat-time--self">
        <span className="chat-time__txt">{convertHour(chats[chatId].timestamp)}</span>
      </div>
      <div className="chat-baloon chat-baloon--self">
        <span className="chat-baloon__body chat-baloon__body--self">{chats[chatId].chatBody}</span>
      </div>
    </div>
  )
}

const TheirChat = ({ chats, chatId }) => {
  const imgURL = "http://texasapartmentbrokers.com/wp-content/uploads/2016/01/John-Doe.png"
  return (
    <div className="chat-item">
      <div className="round-image">
        <img src={imgURL} className="round-image__img" />
      </div>
      <div className="chat-baloon">
        <span className="chat-baloon__body">{chats[chatId].chatBody}</span>
      </div>
      <div className="chat-time">
        <span className="chat-time__txt">{convertHour(chats[chatId].timestamp)}</span>
      </div>
    </div>
  )
}

const ChatContent = ({ chats, uid }) => {
  const chatKeys = Object.keys(chats)
  return (
    <div className="chat-content">
      <div className="chat-inner">
        {chatKeys.map((chatId) => {
          return chats[chatId].uid === uid
            ? <MyChat key={chatId} chats={chats} chatId={chatId} />
            : <TheirChat key={chatId} chats={chats} chatId={chatId} />
        })}
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
      <ChatContent chats={props.chats} uid={props.uid} />
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
  chats: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired,
}

export default Chat
