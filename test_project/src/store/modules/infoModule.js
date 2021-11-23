import store from '@/store'
export const infoModule = {
    namespaced:true,
    state:{
        /**
         * Описания товаров
         * @type {Array}
         */
        description:[]
    },
    getters:{
        /**
         * Получение описания товаров
         * @param state - общее хранилище модуля
         * @returns {Array} - массив описаний
         */
        getDescription(state){
            return state.description
        },
    },
    mutations:{
        setDescription(state, payload){
            state.description = [...payload]
        },
    },
    actions:{
        /**
         * Загрузить описание к товарам
         * @param commit
         * @returns вызов мутации записи описания в общее хранилище модуля
         */
        loadDescription({commit}){
            store.commit('showloaderModule/turnOnShowloader');
            return fetch('http://test1.web-gu.ru')
                .then(response => response.json())
                .then(data => {
                    /**
                     * Массив объектов с откзывами
                     */
                    let array = data.filter((el) => {
                        return el.reviews
                    })
                    let newArray = array.map((element) => Object.assign({
                        id: element.id,
                        data: element.props,
                        reviews:element.reviews
                    }))
                    return newArray
                })
                .then( async function(newArray) {
                    let arrayDescription = [];
                    await newArray.map((element) => {
                        fetch(`http://test1.web-gu.ru/?action=show_product&id=${element.id}`)
                            .then(response => {
                                    return response.json()
                                }
                            )
                            .then((data) => {
                                arrayDescription.push(data);
                                commit('setDescription', arrayDescription)
                                store.commit('showloaderModule/turnOfShowloader')
                            })
                    });
                })
        },
    }
}