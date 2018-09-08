import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'To do list',
    tasks: [
      'Make a coffee',
      'Read a book',
      'Listen podcast'
    ]
  },
  getters: {
    countLinks: state => state.tasks.length
  },
  mutations: {
    ADD_TASK: (state, task) => state.tasks.push(task),
    REMOVE_LINK: (state, task) => state.tasks.splice(task, 1),
    REMOVE_ALL: (state) => (state.tasks = [])
  },
  actions: {
    removeLink: (context, task) => {
      context.commit('REMOVE_LINK', task)
    },
    removeAll ({ commit }) {
      commit('REMOVE_ALL')
    }
  }
})
