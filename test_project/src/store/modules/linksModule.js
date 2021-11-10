export const linksModule = {
    namespaced:true,
    state:{
        activeLink:'Электроприборы',
        activeCategoryMebel:'Стулья',
        activeCategoryElectro:'Светильники',
    },
    getters:{
        getActiveLink(state){
            return state.activeLink
        },
        getActiveCategoryMebel(state){
            return state.activeCategoryMebel
        },
        getActiveCategoryElectro(state){
            return state.activeCategoryElectro
        }
    },
    mutations:{
        changeActiveLink(state, payload){
            state.activeLink = payload
        },
        changeActiveCategoryMebel(state,payload){
            state.activeCategoryMebel = payload
        },
        changeActiveCategoryElectro(state, payload){
            state.activeCategoryElectro = payload
        }
    }

}