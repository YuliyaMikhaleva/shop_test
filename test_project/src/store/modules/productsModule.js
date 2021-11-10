export const productsModule = {
    namespaced: true,
    state:{
        products:[{name,value:[]}],//новый массив товаров со вложенностями
    },
    getters:{
        //кнопки меню (слева)
        getMenuItemsElectro(state){
            return state.products[0].value
        },
        //кнопки меню (слева)
        getMenuItemsMebel(state){
            return state.products[1].value
        },
        //кнопки навигации (сверху)
        getHeaderItems(state){
            return state.products
        },
        getCatalogVentilators(state){
            return state.products[0].value[1].value
        },
        //получение каталога стульев
        getCatalogChairs(state){
            return state.products[1].value[0].value
        },
        //получение каталога столов
        getCatalogTables(state){
            return state.products[1].value[2].value
        },
        //получить каталог диванов
        getCatalogSofas(state){
            return state.products[1].value[1].value
        },
        //получить каталог светильников
        getCatalogLamps(state){
            return state.products[0].value[0].value
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
                .then(result => JSON.parse(JSON.stringify(result)))
                .then(data => {//data - наш изначальный массив
                    console.log(data)
                    let categories = [...data.filter((e) => e.parent_id === -1)];//выведутся: электрориборы и мебель
                    let subcategoriesMebel = [...data.filter((e) => e.parent_id === 100)];//выведутся: диваны, столы, стулья
                    //меняем местами, чтобы получилось: стулья, диваны, столы
                    /*eslint no-self-assign: ["error", {"props": false}]*/
                    [subcategoriesMebel[0],subcategoriesMebel[1],subcategoriesMebel[2]]=[subcategoriesMebel[2],subcategoriesMebel[0],subcategoriesMebel[1]];
                    let subcategoriesElectro = [...data.filter((e) => e.parent_id === 14)];//выведутся: светильники, вентиляторы
                    let chairs = [...data.filter((e) => e.parent_id === 2)];//названия стульев
                    let sofas = [...data.filter((e) => e.parent_id === 3)];//названия диванов
                    let tables = [...data.filter((e) => e.parent_id === 4)];//названия столов
                    let lamps = [...data.filter((e) => e.parent_id === 15)];//названия светильников
                    let ventilators = [...data.filter((e) => e.parent_id === 10)];//пустой массив вентиляторов

                    let products = [...categories.map((element) => Object.assign({
                        name:element.name,
                        value:[]
                    }))]
                    products[0].value = [...subcategoriesElectro.map((el) => Object.assign({
                        name:el.name,
                        value:[]
                    }))]
                    products[1].value = [...subcategoriesMebel.map((el) => Object.assign({
                        name:el.name,
                        value:[]
                    }))]
                    products[0].value[0].value = lamps;//светильники
                    products[0].value[1].value = ventilators;//вентиляторы
                    products[1].value[1].value = sofas;//диваны
                    products[1].value[2].value = tables;//столы
                    products[1].value[0].value = chairs;//стулья
                    console.log('Группы товаров:', products)//Массив групп товаров (электроприборы/мебель)
                    commit('setProducts',JSON.parse(JSON.stringify(products)));
                })
        },
    }
}