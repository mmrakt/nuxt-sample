import {
  firestoreAction
} from 'vuexfire'
import {
  postRef,
  firebase
} from '../plugins/firebase'


export default {
  namespaced: true,
  state: {
    posts: []
  },
  actions: {
    //データバインド（同期）
    postInit: firestoreAction(({
      bindFirestoreRef
    }) => {
      bindFirestoreRef('posts', postRef)
    }),
    add: firestoreAction((context, postData) => {
      postRef.add({
        name: postData.username,
        content: postData.newContent,
        editFlag: false,
        liked: false,
        createdAt: firebase.firestore.Timestamp.now()
      })
    }),
    remove: firestoreAction((context, id) => {
      postRef.doc(id).delete()
    }),
    open: firestoreAction((context, postId) => {
      postRef.doc(postId).update({
        editFlag: true
      })
    }),
    close: firestoreAction((context, postId) => {
      postRef.doc(postId).update({
        editFlag: false
      })
    }),
    update: firestoreAction((context, postData) => {
      postRef.doc(postData.id).update({
        content: postData.newContent
      })
    }),
    like: firestoreAction((context, postId) => {
      postRef.doc(postId).update({
        liked: true
      })
    }),
    unlike: firestoreAction((context, postId) => {
      postRef.doc(postId).update({
        liked: false
      })
    })
  },
  getters: {
    postList: state => {
      return state.posts
    },
    getPost: state => postId => {
      return state.posts.filter(post => post.id === postId)[0]
    }
  }
}
