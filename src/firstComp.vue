<template>
   <div>
    <img :src="logo">
    <h1>{{msg}}</h1>
    <h2>Bootstrap</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
	<button @click='throwEvent'>click me</button>
  </div>
</template>

<script>
//.ES6
export default {
  name: 'app',
  props:['logo'],
  data () {
    return {
      msg: 'Welcome, first-Comp'
    }
  },
  methods:{
	throwEvent(){
		//.eventName,
		this.$emit('myclick',this.msg);
	},
  }
}

</script>

<style>
h1{
	color:blue;
}
</style>
