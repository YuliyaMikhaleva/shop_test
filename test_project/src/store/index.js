import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import {productsModule} from "./modules/productsModule";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basket:[],
    activeLink:'Электроприборы',
    activeCategoryMebel:'Стулья',
    activeCategoryElectro:'Светильники',
    infoAboutProduct:[],
    showloader:true,
    description:[]  //массив описаний товаров по id товара
  },
  getters:{
      //получить содержимое корзны
    getCart(state){
        return state.basket//эта функция возвращает корзину из хранилища
    },
      //получить информацию о продукте
    getInfo(state){
        return state.infoAboutProduct
    },
    getShowloader(state){
        return state.showloader
    },
    getBasket(state){
        return state.basket
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
    setBasket(state,payload){ state.basket = [...state.basket, ...payload]},
      //добавить в корзину
    addToCart(state, product) {
        const element = Object.assign(product);
        state.basket.push(element);
        console.log("state.basket=", state.basket)
    },
      //Удалить из корзины
    deleteProduct(state, product){
        let find = state.basket.find((element) => element.id === product.id);//находим необходимый продукт
        //удаляем из корзины товаров 1 товар с порядкового номера това с выбранным id
        this.state.basket.splice(state.basket.indexOf(find),1)//удаляем из массива корзины 1 товар начиная с индекса выбранного товара
        console.log(state.basket);
    },
      //очистить корзину
    clearBasket(state){
        state.basket = []
    },
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
      //загрузить корзину
    loadToCart({commit}, product) {
          commit('addToCart', product)//передаем в коммит good.id, чтобы вызвать мутацию addToCart
      },
      //get запрос при заказе товара с удачным результатом
    loadOrder({commit}){
        return fetch('http://test1.web-gu.ru/?action=send_form')
            .then(response => response.json())
            .then(data => {
                console.log('data=', data);
                commit('clearBasket')
            });
    },
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
      productsModule
  },
  plugins: [
        createPersistedState({
            paths:['basket']
        }),
  ],
})
