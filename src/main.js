import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue' 
import Estudios from './views/Estudios.vue'
import Experiencia from './views/Experiencia.vue'
import Conocimientos from './views/Conocimientos.vue'
import Contacto from './views/Contacto.vue'
import Portafolio from './views/Portafolio.vue'

Vue.config.productionTip = false

// enable vue-router plugin
Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Home },
	{ path: '/estudios', component: Estudios },
	{ path: '/experiencia', component: Experiencia },
	{ path: '/conocimientos', component: Conocimientos },
	{ path: '/contacto', component: Contacto },
	{ path: '/portafolio', component: Portafolio },
];

const router = new VueRouter({
	routes: routes,
	mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
