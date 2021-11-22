<template>
    <div id="app">
        <Preloader v-if="getShowloader"/>
        <Header/>
        <div class="main">
            <Menu class="main__menu"/>
            <router-view  class="router-view"/>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header/Header";
    import Menu from "./components/Menu/Menu";
    import Preloader from "./components/Preloader/Preloader";
    import {mapGetters} from "vuex"
    export default {
        components:{
            Preloader,
            Header,
            Menu
        },
        mounted() {
            this.$store.dispatch('productsModule/loadProducts');
            this.$store.dispatch('infoModule/loadDescription')
        },
        computed:{
          ...mapGetters('showloaderModule',['getShowloader'])
        },
        created () {// Считываем информацию о статусе в localStorage, когда страница загружается
            localStorage.getItem("userMsg") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("userMsg"))));

            // Сохраняем информацию в vuex в localStorage при обновлении страницы
            window.addEventListener("beforeunload",()=>{
                localStorage.setItem("userMsg",JSON.stringify(this.$store.state))
            })
        },

    }
</script>

<style lang="scss">

</style>
