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
        //console.log('url:'+url);

        // let data ={};
        // data.userId =[];
        // data.userId.push({
        //   'id':5,
        //   'name':'name-5',
        // });
        // this.$emit('loaded',data);
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


        // $.ajax({
        //     'dataType': "json",
        //     'contentType':'application/json;charset=UTF-8',
        //     'data':{
        //       a:123
        //     },
        //     'url': url,
        //     'success': function(){  
             
        //       console.log('success....');          
        //       // console.log('data:'+data);
        //       // this.$emit('loaded',data);
        //     }
        // }).done(function(){
        //       console.log('done....');
        // });
        
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
