import firebase from 'firebase'

// FIREBASE CONSTANTS
const config = {
    apiKey: "AIzaSyCBoWh9_Zl5oeKGFjYu9FfG9vCBknHCnyA",
    authDomain: "chat-prototype-fff59.firebaseapp.com",
    databaseURL: "https://chat-prototype-fff59.firebaseio.com",
    projectId: "chat-prototype-fff59",
    storageBucket: "chat-prototype-fff59.appspot.com",
    messagingSenderId: "331297495444"
  }
firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const chatRoomId = "-L3gZnDhS2nWKNYimkXC"
