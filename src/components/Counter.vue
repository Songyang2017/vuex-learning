<template>
  <div>
    <button @click="increment">+</button>
    <div>{{count}}</div>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Counter',
  data () {
    return {
    }
  },
  computed: {
    ...mapState('counter', {
      count: state => state.count
    })
  },
  mounted () {

  },
  methods: {
    ...mapMutations('counter', [
        'increment',
        'decrement'
      ])
  }
}
</script>

<style scoped>

</style>
