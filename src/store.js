import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  title: 'To do list',
  tasks: [
    'Make a coffee',
    'Read a book',
    'Listen podcast'
  ]
}
export const mutations = {
  ADD_TASK: (state, task) => state.tasks.push(task),
  REMOVE_TASK: (state, task) => state.tasks.splice(task, 1),
  REMOVE_ALL_TASKS: (state) => (state.tasks = [])
}

export const actions = {
  removeTask: (context = {}, task) => {
    context.commit('REMOVE_TASK', task)
  },

  removeAll: ({ commit }) =>
    commit('REMOVE_ALL_TASKS')
}

export const getters = {
  countLinks: state => state.tasks.length
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
