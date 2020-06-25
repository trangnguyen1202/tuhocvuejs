<template>
  <h2>{{ title }}</h2>
</template>
<script>
export default {
  name: 'CompFooter',
  props: {
    title: {
      type: String,
      default: 'Gia tri mac dinh'
    }
  },
  data () {
    return {
      gt: 'Footer'
    }
  }
}
</script>

<style>

</style>
