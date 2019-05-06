import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
 

function loadView(view) {
    return () => import(`../views/${view}.vue`)
}

      
export default new Router({
 
    routes: [
        {
            path: '*',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: loadView('Home')
             
        }
        ,
        {
            path: '/main',
            name: 'main',
            component: loadView('Main')

        }

        ,
        {
            path: '/now',
            name: 'now',
            component: loadView('Now')

        }

        ,
        {
            path: '/history',
            name: 'history',
            component: loadView('History')

        }

        ,
        {
            path: '/frame',
            name: 'frame',
            component: loadView('Frame')

        }
     
       
    ]
    
})
