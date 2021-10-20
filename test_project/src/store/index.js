import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chairs:[],
    tables:[],
    sofas:[],
    lamps:[],
    groups:[],
    categoriesMebel:[],
    categoriesElectro:[],
    basket:[],
    activeLink:'Электроприборы',
    activeCategoryMebel:'Диваны',
    activeCategoryElectro:'Светильники',
    infoAboutProduct:[],
    showloader:true
  },
  getters:{
    //получение каталога стульев
    getCatalogChairs(state){
      return state.chairs
    },
      //получение каталога столов
    getCatalogTables(state){
      return state.tables
    },
      //получить каталог диванов
    getCatalogSofas(state){
      return state.sofas
    },
      //получить каталог светильников
    getCatalogLamps(state){
      return state.lamps
    },
      //получить каталог групп товаров (мебель/электроприборы)
    getCatalogGroups(state){
      return state.groups
    },
      //получить категории мебели
    getCatalogCategoriesMebel(state){
        return state.categoriesMebel
    },
      //получить категории электроприборов
    getCatalogCategoriesElectro(state){
        return state.categoriesElectro
    },
      //получить содержимое корзны
    getCart(state){
        return state.basket//эта функция возвращает корзину из хранилища
    },
      //получить информацию о продукте
    getInfo(state){
        return state.infoAboutProduct
    }

  },
  mutations: {
    setCatalogChairs(state, payload) {state.chairs = [...state.chairs, ...payload] },//установка каталога стульев
    setCatalogTables(state, payload) {state.tables = [...state.tables, ...payload] },//установка каталога столов
    setCatalogSofas(state, payload) {state.sofas = [...state.sofas, ...payload] },//установка каталога диванов
    setCatalogLamps(state, payload) {state.lamps = [...state.lamps, ...payload] },//установка каталога светильников
    setCatalogGroups(state, payload) {state.groups = [...state.groups, ...payload] },//установка каталога групп товаров
    setCatalogCategoriesMebel(state, payload) {state.categoriesMebel = [...state.categoriesMebel, ...payload] },//установка каталога категорий мебели
    setCatalogCategoriesElectro(state, payload) {state.categoriesElectro = [...state.categoriesElectro, ...payload] },//установка каталога категорий электро
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
    }
  },
  actions: {
      //загрузка каталога стульев с API
    loadCatalogChairs({commit}){//передаем объекь для работы со стейтом, и с помощью деструктуризации передаем метод этого объекта - commit - вызывает какие-то мутации
      return fetch('http://test1.web-gu.ru/')
          .then(response => response.json())
          .then(data => {
            const chairs = data.filter((e) => e.parent_id === 2)
            console.log("chairs: ", chairs);
            commit('setCatalogChairs',chairs)
          });
    },
      //загрузка каталога столов с API
      loadCatalogTables({commit}){//передаем объекь для работы со стейтом, и с помощью деструктуризации передаем метод этого объекта - commit - вызывает какие-то мутации
      return fetch('http://test1.web-gu.ru/')
          .then(response => response.json())
          .then(data => {
            const tables = data.filter((e) => e.parent_id === 4)
            console.log("tables: ", tables);
            commit('setCatalogTables',tables)
          });
    },
      //загрузка каталога диванов с API
      loadCatalogSofas({commit}){//передаем объекь для работы со стейтом, и с помощью деструктуризации передаем метод этого объекта - commit - вызывает какие-то мутации
      return fetch('http://test1.web-gu.ru/')
          .then(response => response.json())
          .then(data => {
            const sofas = data.filter((e) => e.parent_id === 3)
            console.log("sofas: ", sofas);
            commit('setCatalogSofas',sofas)
          });
    },
      //загрузка каталога светильников с API
      loadCatalogLamps({commit}){//передаем объекь для работы со стейтом, и с помощью деструктуризации передаем метод этого объекта - commit - вызывает какие-то мутации
      return fetch('http://test1.web-gu.ru/')
          .then(response => response.json())
          .then(data => {
            const lamps = data.filter((e) => e.parent_id === 15)
            console.log("lamps: ", lamps);
            commit('setCatalogLamps',lamps)
          });
    },
      //загрузка каталога групп товаров с API
      loadCatalogGroups({commit}){//передаем объекь для работы со стейтом, и с помощью деструктуризации передаем метод этого объекта - commit - вызывает какие-то мутации
      return fetch('http://test1.web-gu.ru/')
          .then(response => response.json())
          .then(data => {
            const products = data.filter((e) => e.parent_id === -1)
            console.log("groupsProducts: ", products);
            commit('setCatalogGroups',products)
          });
    },
      //загрузка каталога категорий мебели с API
      loadCatalogCategoriesMebel({commit}){//передаем объекь для работы со стейтом, и с помощью деструктуризации передаем метод этого объекта - commit - вызывает какие-то мутации
       return fetch('http://test1.web-gu.ru/')
           .then(response => response.json())
           .then(data => {
             const categories = data.filter((e) => e.parent_id === 100)
             console.log("CategoriesMebel: ", categories);
             commit('setCatalogCategoriesMebel',categories)
           });
      },
      //загрузка каталога категорий электро с API
      loadCatalogCategoriesElectro({commit}){//передаем объекь для работы со стейтом, и с помощью деструктуризации передаем метод этого объекта - commit - вызывает какие-то мутации
          return fetch('http://test1.web-gu.ru/')
              .then(response => response.json())
              .then(data => {
                  const categories = data.filter((e) => e.parent_id === 14)
                  console.log("CategoriesElectro: ", categories);
                  commit('setCatalogCategoriesElectro',categories)
              });
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
    }
  },
  //плагин для сохранения состояния конкретных ключей (у нас нет бэка, поэтому нужен плагин)
  plugins: [
        createPersistedState({
            paths:['basket']
        }),
    ],
})

