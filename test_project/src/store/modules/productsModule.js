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
            return fetch('http://test1.web-gu.ru/')
                .then(response => response.json())
                .then(result => {
                    result.sort((prev,next) => prev.id - next.id)
                    console.log('ВСЕ ТОВАРЫ БЕЗ ГРУППИРОВКИ:', result)//все товары (не структурированный массив)
                    commit('setProducts',JSON.parse(JSON.stringify(result)));
                })
        },
    }
}