import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import {productsModule} from "./modules/productsModule";
import {basketModule} from "./modules/basketModule";
import {infoModule} from "./modules/infoModule";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeLink:'Электроприборы',
    activeCategoryMebel:'Стулья',
    activeCategoryElectro:'Светильники',
    showloader:true,
  },
  getters:{
    getShowloader(state){
        return state.showloader
    },
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
      //включить шоулоадер
    turnOnShowloader(state){
        state.showloader = true;
    },
      //выключить шоулоадре
    turnOfShowloader(state){
        state.showloader = false
    },
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
  actions: {

  },
  //плагин для сохранения состояния конкретных ключей (у нас нет бэка, поэтому нужен плагин)
  modules:{
      productsModule,
      basketModule,
      infoModule
  },
  plugins: [
        createPersistedState({
            paths:['basket']
        }),
  ],
})
