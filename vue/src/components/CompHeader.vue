<template>
  <h2>{{ title }}</h2>
</template>
<script>
export default {
  name: 'comp-header',
  props: {
    title: {
      type: String,
      default: 'Gia tri mac dinh'
    }
  },
  data () {
    return {
      gt2: 'Header'
    }
  }
}
</script>

<style>

</style>
