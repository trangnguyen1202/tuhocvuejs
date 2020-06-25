<template>
  <div id="app">
    <comp-header  v-bind:title="title"/>
    <list-user/>
    <CompFooter/>
  </div>
</template>

<script>

import CompHeader from './components/CompHeader.vue'
import CompFooter from './components/CompFooter.vue'
import ListUser from './components/ListUser.vue'
export default {
  name: 'App',
  data () {
    return {
      title: 'hello vue js'
    }
  },
  components: {
    CompHeader,
    CompFooter,
    ListUser
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
