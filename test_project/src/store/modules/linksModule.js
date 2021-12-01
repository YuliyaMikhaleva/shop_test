export const linksModule = {
    namespaced:true,
    state:{
        activeLink:'Электроприборы',
        activeSubcategory:'Светильники',
    },
    getters:{ },
    mutations:{
        /**
         * Изменить активную категорию
         * @param state
         * @param payload - на какую категорию
         */
        changeActiveLink(state, payload){
            state.activeLink = payload
        },
        /**
         * Изменить активную подкатегорию
         * @param state
         * @param payload - на какую сабкатегорию
         */
        changeActiveSubcategory(state, payload){
            state.activeSubcategory = payload
        }
    },
    actions:{
        changeCategory({commit},category){
            commit('changeActiveLink', category)
        },
        changeSubcategory({commit},subcategory){
            commit('changeActiveSubcategory', subcategory)
        },
    }

}