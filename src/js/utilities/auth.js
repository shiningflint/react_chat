import { firebaseAuth } from './constants'

export function fireAuth(email, password) {
  return firebaseAuth().signInWithEmailAndPassword(email, password)
}

export function fireGetUser() {
  return new Promise((resolve, reject) => {
    firebaseAuth().onAuthStateChanged((user) => {
      user ? resolve(user.uid) : reject(() => console.warn('Error authenticating user'))
    })
  })
}

export function fireLogout() {
  return firebaseAuth().signOut()
}
