import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: null
  },
  mutations: {
    authUser (state,userData){
      state.auth = userData.auth
    },
  },
  actions: {
    login ({commit},userData){

          commit('authUser',{
              auth: userData.auth
          });
          router.push('/home');
    
  },
  logout ({commit},userData){
        
    commit('authUser',{
        auth: userData.auth
    });
    router.push('/');

},
},
getters:{
  auth(state){
      return state.auth == true 
  },
}
})
