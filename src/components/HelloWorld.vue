<template>
  <div class="hello">
    <a-page @isLogFn="lisLogFn"></a-page>
    <b-page :isLog="login"></b-page>
    <counter></counter>
    <map-state></map-state>
  </div>
</template>

<script>
import aPage from '@/components/aPage'
import bPage from '@/components/bPage'
import Counter from '@/components/Counter'
import mapState from '@/components/mapState'

export default {
  name: 'HelloWorld',
  data () {
    return {
      login: false
    }
  },
  components: {
    aPage,
    bPage,
    Counter,
    mapState
  },
  methods: {
    lisLogFn (data) {
      if (data === 'log1211') {
        this.login = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
