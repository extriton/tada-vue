import Vue from 'vue'
import Vuex from 'vuex'

// Import Modules
import chat from '@/store/modules/chat'

Vue.use(Vuex)

// States
const state = {}

// Getters
const getters = {}

// Mutations
const mutations = {}

// Actions
const actions = {}

// Modules
const modules = {
  chat
}

// Store instance
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})

export default store
