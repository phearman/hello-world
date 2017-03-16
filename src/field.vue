<template>
   <input type=text @focus='addRow'>
</template>

<script>

import mixin from './mixin'

//.ES6
export default {
  name: 'field',
  props:['idx','boxes','list'],
  mixins:[mixin],
  data () {
    return {

    }
  },
  watch:{
   
  },
  methods:{
	   addRow (){
        console.log('addrow');
        if(typeof this.list ==='undefined'){
          return;
        }

        if(this.list.length -1 === this.idx){
            this.list.push({});
        } 
        let isIn=false;
        let x =0 ;
        
        for( ;x <this.boxes.length;x++){
            if(this.boxes[x]==this.idx){
              isIn=true;
            }
        }
        if(isIn ===false){
          this.boxes.push(this.idx);
        }

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
