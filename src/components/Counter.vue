<template>
	<div>
		<button @click="increment">+</button>
		<div>{{count}}</div>
    	<button @click="decrement">-</button>
	</div>
</template>

<script>
import store from 'store'

export default {
	name: 'Counter',
	computed: {
		count() {
			return store.state.count
		}
	},
	mounted() {
		console.log('store', store);
	},
	methods: {
		increment() {
			store.commit('increment')
		},
		decrement() {
			store.commit('decrement')
		}
	}
}
</script>

<style scoped>
	
</style>