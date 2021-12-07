import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import {productsModule} from "./modules/productsModule";
import {basketModule} from "./modules/basketModule";
import {infoModule} from "./modules/infoModule";
import {showloaderModule} from "./modules/showloaderModule";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  },
  getters:{  },
  mutations: {  },
  actions: {  },
  modules:{
      productsModule,
      basketModule,
      infoModule,
      showloaderModule,
  },
    //плагин для сохранения состояния конкретных ключей (у нас нет бэка, поэтому нужен плагин)
    plugins: [
        createPersistedState({
            paths:['basket']
        }),
  ],
})
