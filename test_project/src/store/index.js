import Vue from 'vue'
import Vuex from 'vuex'

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
    basketItems:[],
    showMebel:true,
    showElectro:false,
  },
  getters:{
    getCatalogChairs(state){
      return state.chairs
    },
    getCatalogTables(state){
      return state.tables
    },
    getCatalogSofas(state){
      return state.sofas
    },
    getCatalogLamps(state){
      return state.lamps
    },
    getCatalogGroups(state){
      return state.groups
    },
    getCatalogCategoriesMebel(state){
        return state.categoriesMebel
    },
    getCatalogCategoriesElectro(state){
        return state.categoriesElectro
    }
  },
  mutations: {
    setCatalogChairs(state, payload) {state.chairs = [...state.chairs, ...payload] },//установка каталога
    setCatalogTables(state, payload) {state.tables = [...state.tables, ...payload] },//установка каталога
    setCatalogSofas(state, payload) {state.sofas = [...state.sofas, ...payload] },//установка каталога
    setCatalogLamps(state, payload) {state.lamps = [...state.lamps, ...payload] },//установка каталога
    setCatalogGroups(state, payload) {state.groups = [...state.groups, ...payload] },//установка каталога
    setCatalogCategoriesMebel(state, payload) {state.categoriesMebel = [...state.categoriesMebel, ...payload] },//установка каталога
    setCatalogCategoriesElectro(state, payload) {state.categoriesElectro = [...state.categoriesElectro, ...payload] },//установка каталога

  },
  actions: {
    loadCatalogChairs({commit}){//передаем объекь для работы со стейтом, и с помощью деструктуризации передаем метод этого объекта - commit - вызывает какие-то мутации
      return fetch('http://test1.web-gu.ru/')
          .then(response => response.json())
          .then(data => {
            const chairs = data.filter((e) => e.parent_id === 2)
            console.log("chairs: ", chairs);
            commit('setCatalogChairs',chairs)
          });
    },
    loadCatalogTables({commit}){//передаем объекь для работы со стейтом, и с помощью деструктуризации передаем метод этого объекта - commit - вызывает какие-то мутации
      return fetch('http://test1.web-gu.ru/')
          .then(response => response.json())
          .then(data => {
            const tables = data.filter((e) => e.parent_id === 4)
            console.log("tables: ", tables);
            commit('setCatalogTables',tables)
          });
    },
    loadCatalogSofas({commit}){//передаем объекь для работы со стейтом, и с помощью деструктуризации передаем метод этого объекта - commit - вызывает какие-то мутации
      return fetch('http://test1.web-gu.ru/')
          .then(response => response.json())
          .then(data => {
            const sofas = data.filter((e) => e.parent_id === 3)
            console.log("sofas: ", sofas);
            commit('setCatalogSofas',sofas)
          });
    },
    loadCatalogLamps({commit}){//передаем объекь для работы со стейтом, и с помощью деструктуризации передаем метод этого объекта - commit - вызывает какие-то мутации
      return fetch('http://test1.web-gu.ru/')
          .then(response => response.json())
          .then(data => {
            const lamps = data.filter((e) => e.parent_id === 15)
            console.log("lamps: ", lamps);
            commit('setCatalogLamps',lamps)
          });
    },
    loadCatalogGroups({commit}){//передаем объекь для работы со стейтом, и с помощью деструктуризации передаем метод этого объекта - commit - вызывает какие-то мутации
      return fetch('http://test1.web-gu.ru/')
          .then(response => response.json())
          .then(data => {
            const products = data.filter((e) => e.parent_id === -1)
            console.log("groupsProducts: ", products);
            commit('setCatalogGroups',products)
          });
    },
    loadCatalogCategoriesMebel({commit}){//передаем объекь для работы со стейтом, и с помощью деструктуризации передаем метод этого объекта - commit - вызывает какие-то мутации
       return fetch('http://test1.web-gu.ru/')
           .then(response => response.json())
           .then(data => {
             const categories = data.filter((e) => e.parent_id === 100)
             console.log("CategoriesMebel: ", categories);
             commit('setCatalogCategoriesMebel',categories)
           });
      },
      loadCatalogCategoriesElectro({commit}){//передаем объекь для работы со стейтом, и с помощью деструктуризации передаем метод этого объекта - commit - вызывает какие-то мутации
          return fetch('http://test1.web-gu.ru/')
              .then(response => response.json())
              .then(data => {
                  const categories = data.filter((e) => e.parent_id === 14)
                  console.log("CategoriesElectro: ", categories);
                  commit('setCatalogCategoriesElectro',categories)
              });
      },
  },
})
