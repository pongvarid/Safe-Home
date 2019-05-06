import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify';  
Vue.use(Vuex)
import user from './user';
import node from './node';
const modules = {
    user,
    node
}

export default new Vuex.Store({
    plugins: [pathify.plugin],
    modules : modules
})
