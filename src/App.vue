<template>
  <div id="app">
    <first-comp logo="http://www.icsc.com.tw/images/2012ICSClogo.png" @myclick="receive"></first-comp>
    <h2>Ecosystem</h2>
    <ul>  
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
	<timepicker ref="tp" minTime='12:00am' maxTime='18:00am' v-model="selectTime" required='yes'  showDuration=true ></timepicker>{{selectTime | fmt24hr}}
	
	<field required='no' ></field>
	<button @click='$refs.tp.showMsg()'>call tp</button>
  </div>
</template>

<script>
//.ES6

import firstComp from './firstComp.vue'
import timepicker from './timepicker.vue'
import field from './field.vue'

export default {
  name: 'app',
  filters:{
	fmt24hr:function(value){
		if(value===''){
			return '';
		}        
		var time=value.split(':');
		var hour=time[0];
		var mins='';
		if(time.length>1){
			mins=time[1].replace(/am|pm/,'');
		}
    
		if(value.indexOf('pm')>=0){
			hour =parseInt(time[0])+12;
		}
		return hour+':'+mins;
	},
  },
  components:{
	firstComp:firstComp,
	timepicker,
	field:field,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
	  selectTime:'',
    }
  },
   mounted () {
		var opt={},vm=this;
  },
  methods:{
	receive(msg){
		//alert(msg);
		this.utils.myalert(msg);

	},
  }
}




</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
