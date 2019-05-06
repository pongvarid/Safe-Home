import Axios from '../axios'
import f_axios from 'axios';
import _ from 'lodash'
import { make } from 'vuex-pathify'
import store from '.'
const state = {
        username:'',
        password:'',
        userList:[],
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {
    
    async checkUser(context,params){
    
        await Axios.get('/fields/7', state.userLogin)
        .then((r) => { 
            state.userList = r.data.feeds;
        }).catch((e) => { 
            alert('Error Connect server');
         }); 
       
         
    },
 
 async register(context, params) {

     await f_axios.get('https://api.thingspeak.com/update?api_key=G6WG8LDB1UCINQ6K&field7='+params)
            .then((r) => {
                alert('สมัครสมาชิกสำเร็จ');
                    location.reload();
            }).catch((e) => {
                alert('Error Connect server');
            });


    },
    
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }