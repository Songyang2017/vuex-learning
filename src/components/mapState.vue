<template>
  <div>
    <div>mapState</div>
    <div><input type="text" v-focus="false" v-model="inputValue"></div>
    <p>input最后一位：{{inputValueLetter}}</p>
    <p></p>
    <p>appName：{{appName}}, version：{{appNameWithVersion}}</p>
    <p>userName：{{userName}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      inputValue: ''
    }
  },
  directives: {
    focus: {
      inserted: (el, binding) => {
        el.focus()
      }
    }
  },
  computed: {
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName
    }),
    ...mapGetters([
      'appNameWithVersion'
    ]),
    inputValueLetter () {
      return this.inputValue.substr(-1, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
