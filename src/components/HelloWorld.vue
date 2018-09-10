<template>
  <div class="container">
    <div>
      <h1>{{ title }}</h1>
      <p>{{ error_msg }}</p>
      <form @submit.prevent="addTask" class="form-task">
        <input class="link-input" type="text" placeholder="Add another task" v-model="newTask"/>
        <button class="form-add">Add</button>
      </form>
      <stats/>
      <ul>
        <li v-for="(task, index) in tasks" v-bind:key="index">
          {{ task }}
          <button v-on:click="removeTaskById(index)" class="rm">Remove</button>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>

import stats from '@/components/Stats.vue'

import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      newTask: '',
      error_msg: ''
    }
  },
  components: {
    stats
  },
  computed: {
    ...mapState([
      'title',
      'tasks'
    ])
  },
  methods: {
    ...mapMutations([
      'ADD_TASK'
    ]),
    ...mapActions([
      'removeTask'
    ]),
    addTask: function () {
      this.validationInput(this.newTask)
      this.newTask = ''
    },
    removeTaskById: function (link) {
      this.removeTask(link)
    },
    validationInput: function(task) {
      task === '' ?
      this.errorMessage() :
      this.ADD_TASK(task)
    },
    errorMessage: function() {
      this.error_msg = 'Please, write an task here'

      setTimeout(() => {
        this.error_msg = ''
      }, 1500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css';

  html,
  #app,
  .home {
    height: 100%;
  }

  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .container {
    text-align: center;
    padding-top: 100px;
    padding-left: 50px;
    padding-right: 50px
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    padding: 20px;
    background: lightsteelblue;
    color: #ffffff;
    text-align: left;
    margin-bottom: 8px;
  }

  input {
    border: none;
    padding: 20px;
    width: calc(100% - 40px);
    box-shadow: 0 5px 5px lightgrey;
    margin-bottom: 50px;
    outline: none;
  }

  .rm {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background: #f9d0e3;
    border: none;
    padding: 5px;
    color: #ff0076;
    cursor:pointer;
  }

  .form-task {
    display: flex;
  }

  .form-add {
    margin-left: 43px;
    margin-bottom: 51px;
    outline: none;
    cursor: pointer;
    border: none;
    padding-left: 21px;
    padding-right: 22px;
    text-transform: uppercase;
    color: snow;
    -webkit-box-shadow: 0 5px 5px lightgrey;
    box-shadow: 0 5px 5px lightgrey;
    background: plum;
  }

  @media screen and (min-width: 850px){
    .container {
      padding-left: 250px;
      padding-right: 250px
    }
  }

  @media screen and (max-width: 600px){
    .form-task {
      display: grid;
    }

    .form-add {
      margin-left: 0px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }

</style>
