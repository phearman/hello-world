<template>
  <button @click='myclick'>{{value}}</button>
</template>

<script>

import mixin from './mixin'

//.ES6
export default {
  name: 'btn',
  props:['name','myurl','value'],
  mixins:[mixin],
  data () {
    return {
	
    }
  },
  watch:{
  
  },
  methods:{
	   myclick (){
        var url = this.myurl;
        var vm = this;

        $.ajax({
            url:'mydata.json',
            type:'get',
            cache:false,
            dataType:'json',
            success:function(data,status,jqXHR){
              var json =data;
              if(typeof data ==='string'){
                json = $.parseJSON(data);
              }            
                // alert(json); 
                vm.$emit('loaded',json);
            },
            error:function(jqXHR,status,error){
                var msg = this.method+"."+jqXHR.statusText+"["+jqXHR.status+"].err["+error+"]";       
                alert(msg); 
            },
      });

        
    }
  },
  mounted () {
		
  },
  destroyed () {
  
  }
}

</script>

<style>

</style>
