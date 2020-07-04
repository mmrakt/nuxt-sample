import * as firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"

var firebaseConfig = {
  //firebase構成オブジェクト
  apiKey: "AIzaSyC6qBEhqet5sCNRw_Dm-7FEfNPPSaHhLRU",
  authDomain: "sample-4343c.firebaseapp.com",
  databaseURL: "https://sample-4343c.firebaseio.com",
  projectId: "sample-4343c",
  storageBucket: "sample-4343c.appspot.com",
  messagingSenderId: "517839382746",
  appId: "1:517839382746:web:921d4f5e1903a8ef751de3"
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
const postRef = db.collection('posts')
const statusRef = db.collection('statuses')

export {
  firebase,
  db,
  postRef,
  statusRef
}
