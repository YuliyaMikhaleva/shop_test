export const showloaderModule = {
    namespaced:true,
    state:{
        showloader:true,
    },
    getters:{
        getShowloader(state){
            return state.showloader
        },
    },
    mutations:{
        //включить шоулоадер
        turnOnShowloader(state){
            state.showloader = true;
        },
        //выключить шоулоадре
        turnOfShowloader(state){
            state.showloader = false
        },
    }

}
