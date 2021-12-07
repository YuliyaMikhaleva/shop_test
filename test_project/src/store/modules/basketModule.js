import store from '@/store'
export const basketModule = {
    namespaced: true,
    state:{
        basket:[],
    },
    getters:{
        /**
         * Получение корзины товаров
         * @param {Object} state - общее хранилище модуля
         * @returns {Array} - массив корзины
         */
        getBasket(state){
            return state.basket
        },
    },
    mutations:{
        /**
         * Добавление товара в корзину
         * @param state - хранилище модуля
         * @param product - товар с конкретным id
         */
        addToCart(state, product) {
            const element = Object.assign(product);
            state.basket.push(element);
        },
        /**
         * Удаление товара из корзины
         * @param state - хранилище модуля
         * @param product - товар с конкретным id
         */
        deleteProduct(state, product){
            let find = state.basket.find((element) => element.id === product.id);
            state.basket.splice(state.basket.indexOf(find),1)
        },
        /**
         * Очистка корзины
         * @param state - хранилище модуля
         */
        clearBasket(state){
            state.basket = []
        },
    },
    actions:{
        /**
         * Загрузить товар в корзину
         * @param commit
         * @param product - товар с выбранным id
         * @returns вызывает мутацию добавления товара в корзину
         */
        loadToCart({commit}, product) {
            commit('addToCart', product)
        },
        /**
         * Заказать товар (get-запрос)
         * @param commit
         * @returns вызывает мутацию очистки корзины
         */
        loadOrder({commit}){
            store.commit('showloaderModule/turnOnShowloader');
            return fetch('http://test1.web-gu.ru/?action=send_form')
                .then(response => response.json())
                .then(() => {
                    store.commit('showloaderModule/turnOfShowloader')
                    commit('clearBasket')
                });
        },
        /**
         * Удалить товар из корзины
         * @param commit
         * @param product
         */
        deleteFromCart({commit}, product){
            commit('deleteProduct', product)
        }
    }
}