import Vue from 'vue'
import App from './App.vue'

const myPlugin={
		install: function(Vue,opt){
			Vue.prototype.utils={
				myalert(msg){
					alert('[myalert]'+msg);
				}
			}
		}
	
	
}

Vue.use(myPlugin);

new Vue({
  el: '#app',
  render: h => h(App)
})
