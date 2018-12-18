<template>
  <div>
    <div>b</div>
    <div v-show="isLogFn">组件b弹窗</div>
  </div>
</template>

<script>
export default {
  name: 'bPage',
  props: {
    isLog: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  computed: {
    isLogFn () {
      if (this.isLog === true) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>

</style>
