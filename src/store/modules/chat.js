const namespaced = true

const state = {
    connected: false,
    username: '',
    messages: [],
}

const getters = {
    CONNECTED: state => state.connected,
    USERNAME: state => state.username,
    MESSAGES: state => state.messages,
}

const mutations = {
    SET_CONNECTED (state, payload) {
        state.connected = payload
    },
    SET_USERNAME (state, payload) {
        state.username = payload
    },
    ADD_MESSAGE (state, payload) {
        state.messages.push(payload)
    }
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced
}