import React from 'react'
import PropTypes from 'prop-types'

const Chat = (props) => {
  return (
    <div>
      <p>{'Welcome to the chat!'}</p>
      <a onClick={props.handleLogout}>{'Logout'}</a>
    </div>
  )
}

Chat.propTypes = {
  handleLogout: PropTypes.func.isRequired,
}

export default Chat
