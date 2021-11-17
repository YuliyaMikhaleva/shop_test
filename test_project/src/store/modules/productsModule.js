export const productsModule = {
    namespaced: true,
    state:{
        products:[{name,value:[]}],//новый массив товаров со вложенностями
    },
    getters:{
        getChilds: state => id => {
            return state.products.filter((item) => item.parent_id === id)
            // если передадим id = "-1", выйдут категории (электроприборы, мебель)
            // если передадим id = "14", выйдут подкатегории (светильники, вентиляторы)
            // если передадим id = "100", выйдут подкатегории (стулья, диваны, столы)
            // если передадим id = "2", выйдут названия стульев
            // если передадим id = "3", выйдут названия диванов
            // если передадим id = "4", выйдут названия столов
            // если передадим id = "15", выйдут названия светильников
            // если передадим id = "16", выйдут названия вентиляторов
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
                    result.sort((prev,next) => prev.parent_id - next.parent_id)
                    console.log('ВСЕ ТОВАРЫ БЕЗ ГРУППИРОВКИ:', result)//все товары (не структурированный массив)
                    commit('setProducts',JSON.parse(JSON.stringify(result)));

                    //Возможно, стоит сделать такой массив, чтобы понимать, какие parent_id у нас есть
                    const result2 = [...result.reduce((hash, {parent_id, id,img,name,price,props,reviews}) => {
                        const current = hash.get(parent_id) || {parent_id, products:[]}
                        current.products.push({id,img,name,price,props,reviews});
                        return hash.set(parent_id,current)
                    },new Map).values()];
                    console.log('ТОВАРЫ СГРУППИРОВАННЫЕ ПО parent_id:', result2)//сгруппированный массив по parent_id
                })
        },
    }
}