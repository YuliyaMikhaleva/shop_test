import store from '@/store'
import router from "../../router";
export const productsModule = {
    namespaced: true,
    state:{
        products:[],
    },
    getters:{
        /**
         * Получить каталог товаров, где parent_id = id полезной нагрузки
         * @param state
         * @param id - id товара, по которому фильтруется каталог
         * @returns {Array} отфильтрованный массив         *
         */
        getChilds: state => id => {
            return state.products.filter((item) => item.parent_id === id)
        },
    },
    mutations:{
        /**
         * Добавление продуктов в общее хранилище
         * @param state
         * @param payload
         */
        setProducts(state, payload){state.products = [ ...payload]},
    },
    actions:{
        /**
         * Загрузка товаров с API
         */
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
