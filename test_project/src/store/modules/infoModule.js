export const infoModule = {
    namespaced:true,
    state:{
        description:[]  //массив описаний товаров по id товара
    },
    getters:{
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
        //загрузить описание к товарам
        loadDescription({commit}){
            return fetch('http://test1.web-gu.ru')
                .then(response => response.json())
                .then(data => {
                    //массив объектов с отзывами
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
                                // console.log('Этот массив:', arrayDescription);
                                commit('setDescription', arrayDescription)
                            })
                    });
                })
        },
    }
}