import { firebaseAuth } from './constants'

export function fireAuth(email, password) {
  return firebaseAuth().signInWithEmailAndPassword(email, password)
}

export function fireLogout() {
  return firebaseAuth().signOut()
}
