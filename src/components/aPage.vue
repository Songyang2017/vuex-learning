<template>
  <div>
    <div>a</div>
    <button @click="handleClick">打开组件b</button>
  </div>
</template>

<script>
export default {
  name: 'aPage',
  methods: {
    handleClick () {
      console.log('clicked! a')
      this.$emit('isLogFn', 'log1211')
    }
  }
}
</script>

<style scoped>

</style>
