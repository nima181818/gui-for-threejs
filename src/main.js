// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as three from 'three'
import idgenerator from './utils/idgenerator.js'
import orbitHelper from './threetools/orbitcontrol.js';
window.THREE = three
orbitHelper.initOrbitControls();

window.idgenerator = idgenerator
// console.log(THREE)
Vue.config.productionTip = false
let templeftmesh = null;
Vue.prototype.settempmesh = function(that){
	templeftmesh = that
}
Vue.prototype.gettempmesh = function(that){
	return templeftmesh
}
console.log(process)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
