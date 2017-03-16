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
	
	<field required='no' value='aaa' ></field>
	<button @click='$refs.tp.showMsg()'>call timepicker</button>
<br>
<btn myurl='mydata.json' value='查詢使用者'  @loaded='myLoaded'/>

  <button @click='getData'>測試</button>
  <button @click='clean'>clean Table</button>
<br>
 <br>
 {{boxes}}
<table border="1">
  <tr><td>#</td><td>代號</td><td>產品名稱</td></tr>
  <tr v-for="(row, idx) in users">
    <td><input type='checkbox' :value='idx' v-model="boxes"> {{idx}}</td>
    <td><field v-model='row.id' :value='row.id' :idx='idx' :boxes='boxes' :list='users'/></td>
    <td><field v-model='row.name' :value='row.name' :idx='idx' :boxes='boxes' :list='users'/></td>
  </tr>
</table>  


  </div>
</template>

<script>
//.ES6

import firstComp from './firstComp.vue'
import timepicker from './timepicker.vue'
import field from './field.vue'
import btn from './btn.vue'

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
  	firstComp,
  	timepicker,
  	field,
    btn,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
	    selectTime:'',
      users:[  
          {id:0,name:'鉛筆'},
          {id:1,name:'原子筆'}
          ],
      original:[  
          {id:0,name:'鉛筆'},
          {id:1,name:'原子筆'}
          ],
      boxes:[],

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
    myLoaded(infoOut){     
      this.users= this.users.concat(infoOut.userId);
      // console.log(this.list.length);

    },

    clean:function(){
        this.users=[].concat(this.original);
        this.boxes=[]
    },

    getData(){
    
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
                      alert(json); 
                     
                  },
                  error:function(jqXHR,status,error){
                      var msg = this.method+"."+jqXHR.statusText+"["+jqXHR.status+"].err["+error+"]";       
                      alert(msg); 
                  },
            });
    

    }


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
