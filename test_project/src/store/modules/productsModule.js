import store from '@/store'
import router from "../../router";
export const productsModule = {
    namespaced: true,
    state:{
        products:[],//новый массив товаров со вложенностями
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
                    commit('setProducts',result);
                })
                .then(() => {
                    store.commit('showloaderModule/turnOfShowloader');

                })
                .then(async () => {
                    let category = await this.getters['productsModule/getChilds'](-1)[0];
                    let subCategory = await this.getters['productsModule/getChilds'](category.id)[0].id;
                    router.push({path: `/${category.id}/${subCategory}`}).catch((err) => console.log(err))
                })
        },
    }
}
