import Vue from 'vue'
import Vuex from 'vuex'
import post from './post'
import auth from './auth'
import view_status from './view_status'

import {
  vuexfireMutations
} from 'vuexfire'


Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      post,
      auth,
      view_status,
    },
    mutations: {
      ...vuexfireMutations,
    }
  })
}

export default store
