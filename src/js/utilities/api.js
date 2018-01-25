import { ref } from './constants'

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
