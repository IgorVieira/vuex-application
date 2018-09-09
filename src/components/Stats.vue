<template>
  <div class="stats">
    <button v-on:click="removeAllTasks" class="stats-remove-all">Remove all tasks</button>
    <p class="stats-text">There are currently {{ countLinks }} links </p>
    <p>{{ msg }}</p>
  </div>
</template>

<script>

import { mapGetters, mapMutations, mapActions, mapState } from 'vuex'

export default {
  name: 'Stats',
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapState([
      'tasks'
    ]),
    ...mapGetters([
      'countLinks'
    ])
  },
  methods: {
    ...mapMutations(['REMOVE_ALL_TASKS']),
    ...mapActions(['removeAll']),
    removeAllTasks () {
      this.removeAll().then(() => {
        this.msg = 'They have been removed'
        setTimeout(() => {
          this.cleanMessage()
        }, 1500)
      })
    },
    cleanMessage () {
      this.msg = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .stats {
    display: flex;
    margin-bottom: 34px;
  }

  .stats-text {
    margin-left: 12px;
  }

  .stats-remove-all {
    outline: none;
    cursor: pointer;
    border: none;
    padding: 11px;
    text-transform: uppercase;
    color: grey;
    box-shadow: 0 5px 5px lightgrey;
  }
</style>
