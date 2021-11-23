export const showloaderModule = {
    namespaced:true,
    state:{
        showloader:false,
    },
    getters:{
        /**
         * Получение состояния шоу-лоадера из хранилища
         * @param state
         * @returns {boolean}
         */
        getShowloader(state){
            return state.showloader
        },
    },
    mutations:{
        /**
         * Включить шоу-лоадер
         * @param state
         */
        turnOnShowloader(state){
            state.showloader = true;
        },
        /**
         * Выключить шоу-лоадер
         * @param state
         */
        turnOfShowloader(state){
            state.showloader = false
        },
    }

}
