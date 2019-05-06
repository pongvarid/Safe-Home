import Axios from '../axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'
import store from '.'
const state = {
    nodeA:{},
    nodeB:{},
    nodeAList:[],
    nodeBList:[]
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {

async loadingNode(context,params){
        await Axios.get('/fields/1/last.json?timezone=Asia%2FBangkok')
    .then((r) => {
        state.nodeA = r.data.created_at
    }).catch((e) => { 
    
     });

        await Axios.get('/fields/2/last.json?timezone=Asia%2FBangkok')
            .then((r) => {
                state.nodeB = r.data.created_at
            }).catch((e) => {

            });
},
    async loadingNodeList(context, params){
        await Axios.get('/fields/1.json?timezone=Asia%2FBangkok')
            .then((r) => {
                state.nodeAList = r.data.feeds
            }).catch((e) => {

            });

        await Axios.get('/fields/2.json?timezone=Asia%2FBangkok')
            .then((r) => {
                state.nodeBList = r.data.feeds
            }).catch((e) => {

            });
}

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }