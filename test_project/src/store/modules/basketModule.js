export const basketModule = {
    namespaced: true,
    state:{
        basket:[],
    },
    getters:{
        //получить содержимое корзны
        getCart(state){
            return state.basket//эта функция возвращает корзину из хранилища
        },
        getBasket(state){
            return state.basket
        },
    },
    mutations:{
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
            state.basket.splice(state.basket.indexOf(find),1)//удаляем из массива корзины 1 товар начиная с индекса выбранного товара
            console.log(state.basket);
        },
        //очистить корзину
        clearBasket(state){
            state.basket = []
        },
    },
    actions:{
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
    }
}