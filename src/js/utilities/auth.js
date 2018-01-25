import { firebaseAuth, ref } from './constants'

export function fireAuth(email, password) {
  return firebaseAuth().signInWithEmailAndPassword(email, password)
}

export function fireLogout() {
  return firebaseAuth().signOut()
}

export function validateUserRoom(uid, chatRoomId) {
  return ref.child(`chatRooms/${chatRoomId}/users/${uid}`).once('value')
    .then((snapshot) => snapshot.val() || false)
}
