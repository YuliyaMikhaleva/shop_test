import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[{name,value:[]}],//новый массив товаров со вложенностями
    basket:[],
    activeLink:'Электроприборы',
    activeCategoryMebel:'Стулья',
    activeCategoryElectro:'Светильники',
    infoAboutProduct:[],
    showloader:true,
    description:[]  //массив описаний товаров по id товара
  },
  getters:{
    //кнопки меню (слева)
    getMenuItemsElectro(state){
        return state.products[0].value
    },
    //кнопки меню (слева)
     getMenuItemsMebel(state){
        return state.products[1].value
    },
    //кнопки навигации (сверху)
    getHeaderItems(state){
        return state.products
    },
    getCatalogVentilators(state){
        return state.products[0].value[1].value
    },
    //получение каталога стульев
    getCatalogChairs(state){
        return state.products[1].value[0].value
    },
      //получение каталога столов
    getCatalogTables(state){
        return state.products[1].value[2].value
    },
      //получить каталог диванов
    getCatalogSofas(state){
        return state.products[1].value[1].value
    },
      //получить каталог светильников
    getCatalogLamps(state){
        return state.products[0].value[0].value
    },
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
    setProducts(state, payload){state.products = [ ...payload]},//добавляем продукты в стейт
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
        state.description = [...state.description, ...payload]
    },
    changeActiveCategoryMebel(state,payload){
        state.activeCategoryMebel = payload
    },
    changeActiveCategoryElectro(state, payload){
        state.activeCategoryElectro = payload
    }
  },
  actions: {
      //загрузка товаров с API
    loadProducts({commit}) {
          return fetch('http://test1.web-gu.ru/')
              .then(response => response.json())
              .then(result => JSON.parse(JSON.stringify(result)))
              .then(data => {//data - наш изначальный массив
                  console.log(data)
                  let categories = [...data.filter((e) => e.parent_id === -1)];//выведутся: электрориборы и мебель
                  let subcategoriesMebel = [...data.filter((e) => e.parent_id === 100)];//выведутся: диваны, столы, стулья
                  //меняем местами, чтобы получилось: стулья, диваны, столы
                  /*eslint no-self-assign: ["error", {"props": false}]*/
                  [subcategoriesMebel[0],subcategoriesMebel[1],subcategoriesMebel[2]]=[subcategoriesMebel[2],subcategoriesMebel[0],subcategoriesMebel[1]];
                  let subcategoriesElectro = [...data.filter((e) => e.parent_id === 14)];//выведутся: светильники, вентиляторы
                  let chairs = [...data.filter((e) => e.parent_id === 2)];//названия стульев
                  let sofas = [...data.filter((e) => e.parent_id === 3)];//названия диванов
                  let tables = [...data.filter((e) => e.parent_id === 4)];//названия столов
                  let lamps = [...data.filter((e) => e.parent_id === 15)];//названия светильников
                  let ventilators = [...data.filter((e) => e.parent_id === 10)];//пустой массив вентиляторов

                  let products = [...categories.map((element) => Object.assign({
                      name:element.name,
                      value:[]
                  }))]
                  products[0].value = [...subcategoriesElectro.map((el) => Object.assign({
                      name:el.name,
                      value:[]
                  }))]
                  products[1].value = [...subcategoriesMebel.map((el) => Object.assign({
                      name:el.name,
                      value:[]
                  }))]
                  products[0].value[0].value = lamps;//светильники
                  products[0].value[1].value = ventilators;//вентиляторы
                  products[1].value[1].value = sofas;//диваны
                  products[1].value[2].value = tables;//столы
                  products[1].value[0].value = chairs;//стулья
                  console.log('Группы товаров:', products)//Массив групп товаров (электроприборы/мебель)
                  commit('setProducts',JSON.parse(JSON.stringify(products)));
              })
      },
      //загрузить корзину
    loadToCart({commit}, product) {
          commit('addToCart', product)//передаем в коммит good.id, чтобы вызвать мутацию addToCart
          console.log(product);
          console.log('state.basket= ',this.state.basket )
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
                  console.log(newArray)//11 товаров, у которых есть reviews
                  return newArray
              })
              .then((newArray) => {
                    let arrayDescription = [];
                    newArray.map(async (element) => {
                      fetch(`http://test1.web-gu.ru/?action=show_product&id=${element.id}`)
                          .then(response => response.json())
                          .then(async (data) => {
                              await arrayDescription.push(data)
                              await console.log('arrayDescription=', arrayDescription)
                              // await commit('setDescription', arrayDescription)
                          })
                    })
                    console.log("!!!!!!!!",arrayDescription)
                    commit('setDescription', arrayDescription)
              })
      },
  },
  //плагин для сохранения состояния конкретных ключей (у нас нет бэка, поэтому нужен плагин)
  plugins: [
        createPersistedState({
            paths:['basket']
        }),
  ],
})
