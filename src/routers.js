//default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Pages
import Home from '@/pages/Home'
import NotFound from '@/pages/404'

//Routering
export const router = new Router({
	// mode: 'history',
	// base: "./",
	scrollBehavior: () => ({ x: 0, y: 0 }),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '*',
			name: 'notFound',
			component: NotFound
		}
	]
})
