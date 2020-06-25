<template>
  <dir class="list-user">
    <p>{{ title }}</p>
    <user/>
  </dir>
</template>
<script>
import User from './User.vue'
export default {
  name: 'list-user',
  data () {
    return {
      title: 'Ds user'
    }
  },
  components: {
    User
  }
}
</script>

<style>

</style>
