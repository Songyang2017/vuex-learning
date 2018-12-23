<template>
  <div>
    <div>mapState</div>
    <p>userName：{{userName}}</p>
    <div><input type="text" v-focus="false" v-model="inputValue"></div>
    <p>input最后一位：{{inputValueLetter}}</p>
    <p></p>
    <p>appName：{{appName}}, version：{{appNameWithVersion}}</p>
    <button @click='change'>change AppName</button>
    <p>new State Value is：{{newVersion}}</p>
    <button @click="addStateValue">add State a Value</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

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
      userName: state => state.user.userName,
      newVersion: state => state.newVersion
    }),
    ...mapGetters([
      'appNameWithVersion'
    ]),
    inputValueLetter () {
      return this.inputValue.substr(-1, 1)
    }
  },
  mounted () {
    //
  },
  methods: {
    ...mapMutations([
      'changeAppName',
      'addAnother',
      'changeUserName'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    change () {
      this.changeAppName({
        name: 'HUAWEI'
      })
    },
    addStateValue () {
      this.changeUserName()
      this.updateAppName()
      this.addAnother({
        key: 'newVersion',
        value: 'v3.0'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
