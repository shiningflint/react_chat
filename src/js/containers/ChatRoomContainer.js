import React, { Component } from 'react'
import { createChatRoomAndPushUsers } from 'utilities/api'

class ChatRoomContainer extends Component {
  handleMagic() {
    createChatRoomAndPushUsers()
  }

  render () {
    return (
      <div>
        <p>{'Chat Room Container Here'}</p>
        <p onClick={this.handleMagic}>{'Magic button here'}</p>
      </div>
    )
  }
}

export default ChatRoomContainer
