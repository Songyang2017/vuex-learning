<template>
  <div>
    <button @click="increment">+</button>
    <div>{{count}}</div>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Counter',
  computed: {
    ...mapState('counter', {
      count: state => state.count
    })
  },
  mounted () {
    console.log('store', this.$store)
  },
  methods: {
    increment () {
    },
    decrement () {
    }
  }
}
</script>

<style scoped>

</style>
