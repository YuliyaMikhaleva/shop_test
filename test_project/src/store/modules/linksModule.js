export const linksModule = {
    namespaced:true,
    state:{
        activeLink:'Электроприборы',
        activeSubcategory:'Светильники',
    },
    getters:{ },
    mutations:{
        changeActiveLink(state, payload){
            state.activeLink = payload
        },
        changeActiveSubcategory(state, payload){
            state.activeSubcategory = payload
        }
    }

}