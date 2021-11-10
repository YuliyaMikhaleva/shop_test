import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import {productsModule} from "./modules/productsModule";
import {basketModule} from "./modules/basketModule";
import {infoModule} from "./modules/infoModule";
import {showloaderModule} from "./modules/showloaderModule";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeLink:'Электроприборы',
    activeCategoryMebel:'Стулья',
    activeCategoryElectro:'Светильники',
  },
  getters:{
    getActiveLink(state){
        return state.activeLink
    },
    getActiveCategoryMebel(state){
        return state.activeCategoryMebel
    },
    getActiveCategoryElectro(state){
        return state.activeCategoryElectro
    }
  },
  mutations: {
    changeActiveLink(state, payload){
        state.activeLink = payload
    },
    changeActiveCategoryMebel(state,payload){
        state.activeCategoryMebel = payload
    },
    changeActiveCategoryElectro(state, payload){
        state.activeCategoryElectro = payload
    }
  },
  actions: {  },
  modules:{
      productsModule,
      basketModule,
      infoModule,
      showloaderModule
  },
    //плагин для сохранения состояния конкретных ключей (у нас нет бэка, поэтому нужен плагин)
    plugins: [
        createPersistedState({
            paths:['basket']
        }),
  ],
})
