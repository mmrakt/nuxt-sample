import {
  firestoreAction
} from 'vuexfire'
import {
  statusRef,
  firebase
} from '../plugins/firebase'

export default {
  namespaced: true,
  state: {
    statuses: []
  },
  actions: {
    init: firestoreAction(({
      bindFirestoreRef
    }) => {
      bindFirestoreRef('statuses', statusRef)
    }),
    remove: firestoreAction((context, id) => {
      statusRef.doc(id).delete()
    }),
    toggle: firestoreAction((context, status) => {
      statusRef.doc(status.id).update({
        done: !status.done
      })
    })
  },
  getters: {
    orderedStatus: state => {
      return state.statuses
    }
  }
}
