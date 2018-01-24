import { firebaseAuth } from './constants'

export function fireAuth(email, password) {
  return firebaseAuth().signInWithEmailAndPassword(email, password)
    .catch((error) => console.log(error.code, error.message))
}
