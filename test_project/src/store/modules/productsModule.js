export const productsModule = {
    namespaced: true,
    state:{
        /**
         * @ревью 
         * Если надо описать ключи объктов в массиве, то можно воспользоватся JSDoc 
         * @see https://jsdoc.app/ - ссылка на документацию
         * 
         * Пример:
         */

        /**
         * @typedef Product
         * @type {object}
         * @property {string} name - название товара.
         * @property {Product[]} value - дочерние продукты.
         * 
         * @type {Product[]} products
         */
        products:[],//новый массив товаров со вложенностями
        // products:[{name,value:[]}],//новый массив товаров со вложенностями
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
            return fetch('http://test1.web-gu.ru/')
                .then(response => response.json())
                .then(result => {
                    result.sort((prev,next) => prev.id - next.id)
                    /**
                     * @ревью 
                     * Не нужные логи не забываем убирать
                     */
                    console.log('ВСЕ ТОВАРЫ БЕЗ ГРУППИРОВКИ:', result)//все товары (не структурированный массив)
                    /**
                     * @ревью 
                     * Избыточное преобразование 
                     */
                    commit('setProducts', JSON.parse(JSON.stringify(result)));
                })
        },
    }
}

// /**
//  * @type Product
//  */
// const product = {};

// product.value