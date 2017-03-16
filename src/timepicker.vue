<template>
	
  <input type=text>
  
</template>

<script>

import './timepicker/jquery.timepicker.css'
import './timepicker/jquery.timepicker.js'
import mixin from './mixin'

//.ES6
export default {
  name: 'timepicker',
  props:['minTime','maxTime','showDuration'],
  mixins:[mixin],
  data () {
    return {
      msg: 'Welcome, first-Comp',
	  value:'',
	  required:'',
    }
  },
  watch:{
  
  },
  methods:{
	
	showMsg(){
		// console.log('time:'+this.value);
		alert('time:'+this.value);
	},
  },
  mounted () {
	var opt={},vm=this;
	if(this.minTime){
		opt['minTime']=this.minTime;
	}
	if(this.maxTime){
		opt['maxTime']=this.maxTime;
	}
	if(this.showDuration){
		opt['showDuration']=this.showDuration;
	}
		
		$(this.$el).timepicker(opt);
		
		$(this.$el).change(function(evt,value){
				vm.value=evt.target.value;
				vm.$emit('input',vm.value);
				
		});
		
		$(this.$el).focus(function(evt,value){
			console.log('required:'+vm.required);
			//	vm.showLog();
		});
		
		
 },
 destroyed () {
  	$(this.$el).off().timepicker('remove')
 }
}

</script>

<style>

</style>
