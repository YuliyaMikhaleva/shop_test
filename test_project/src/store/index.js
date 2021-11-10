import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import {productsModule} from "./modules/productsModule";
import {basketModule} from "./modules/basketModule";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // basket:[],
    activeLink:'Электроприборы',
    activeCategoryMebel:'Стулья',
    activeCategoryElectro:'Светильники',
    infoAboutProduct:[],
    showloader:true,
    description:[]  //массив описаний товаров по id товара
  },
  getters:{
    //получить информацию о продукте
    getInfo(state){
        return state.infoAboutProduct
    },
    getShowloader(state){
        return state.showloader
    },
    getActiveLink(state){
        return state.activeLink
    },
    getDescription(state){
        return state.description
    },
    getActiveCategoryMebel(state){
        return state.activeCategoryMebel
    },
    getActiveCategoryElectro(state){
        return state.activeCategoryElectro
    }
  },
  mutations: {
      //установить в стейт информацию о продукте
    setInfoAboutProduct(state, payload){
        state.infoAboutProduct = [...state.infoAboutProduct, ...payload]
    },
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
    setDescription(state, payload){
        state.description = [...payload]
    },
    changeActiveCategoryMebel(state,payload){
        state.activeCategoryMebel = payload
    },
    changeActiveCategoryElectro(state, payload){
        state.activeCategoryElectro = payload
    }
  },
  actions: {
    //загрузить описание к товарам
      loadDescription({commit}){
          return fetch('http://test1.web-gu.ru')
              .then(response => response.json())
              .then(data => {
                  //массив объектов с отзывами
                  let array = data.filter((el) => {
                      return el.reviews
                  })
                  let newArray = array.map((element) => Object.assign({
                      id: element.id,
                      data: element.props,
                      reviews:element.reviews
                  }))
                  console.log('NewArray:', newArray)
                  return newArray
              })
              .then( async function(newArray) {
                  let arrayDescription = [];
                  await newArray.map((element) => {
                      fetch(`http://test1.web-gu.ru/?action=show_product&id=${element.id}`)
                          .then(response => {
                                  return response.json()
                              }
                          )
                          .then((data) => {
                              arrayDescription.push(data)
                              commit('setDescription', arrayDescription)
                          })
                  });
              })
      },
  },
  //плагин для сохранения состояния конкретных ключей (у нас нет бэка, поэтому нужен плагин)
  modules:{
      productsModule,
      basketModule
  },
  plugins: [
        createPersistedState({
            paths:['basket']
        }),
  ],
})
