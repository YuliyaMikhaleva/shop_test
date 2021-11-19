import store from '@/store'
export const productsModule = {
    namespaced: true,
    state:{
        products:[{name,value:[]}],//новый массив товаров со вложенностями
    },
    getters:{
        getChilds: state => id => {
            return state.products.filter((item) => item.parent_id === id)
        },
    },
    mutations:{
        setProducts(state, payload){state.products = [ ...payload]},//добавляем продукты в стейт
    },
    actions:{
        //загрузка товаров с API
        loadProducts({commit}) {
            store.commit('showloaderModule/turnOnShowloader');
            return fetch('http://test1.web-gu.ru/')
                .then(response => response.json())
                .then(result => {
                    result.sort((prev,next) => prev.id - next.id)
                    commit('setProducts',JSON.parse(JSON.stringify(result)));
                })
                .then(() => {
                    store.commit('showloaderModule/turnOfShowloader')
                })
        },
    }
}