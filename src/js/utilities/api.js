import { ref } from './constants'
import { convertTimeStamp } from './helpers'

function addUserToChatRoom(chatRoomId, uid) {
  return ref.child(`chatRooms/${chatRoomId}/users/${uid}`).set(true)
}

export function createChatRoomAndPushUsers() {
  const user1 = "4TmgsMFNwvgC5WSov61fybPGH4F3"
  const user2 = "IhyE5TzdkONp12R6Y6uMTCeSUGo2"
  const chatRoomId = ref.child('chatRooms').push().key
  console.log("and the room shall be created with user1 and user2!")
  addUserToChatRoom(chatRoomId, user1)
  addUserToChatRoom(chatRoomId, user2)
  return
}

export function postChat(uid, chatRoomId, chatBody, timestamp) {
  const chatId = ref.child(`chats/${chatRoomId}`).push().key
  return ref.child(`chats/${chatRoomId}/${chatId}`).set({
    uid, chatId, chatBody, timestamp
  })
}

export function listenChat(chatRoomId, callBack, errorCallBack) {
  return ref.child(`chats/${chatRoomId}`).on('value', callBack, errorCallBack)
}
