import { firestoreAction } from 'vuexfire'
import { statusRef } from '../plugins/firebase'

export default {
  namespaced: true,
  state: {
    statuses: []
  },
  actions: {
    init: firestoreAction(({ bindFirestoreRef }) => {
      bindFirestoreRef('statuses', statusRef)
    }),
    remove: firestoreAction((id) => {
      statusRef.doc(id).delete()
    }),
    toggle: firestoreAction((status) => {
      statusRef.doc(status.id).update({
        done: !status.done
      })
    })
  },
  getters: {
    orderedStatus: (state) => {
      return state.statuses
    }
  }
}
