export const showloaderModule = {
    namespaced:true,
    state:{
        showloader:false,
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
