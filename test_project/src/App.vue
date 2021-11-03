<template>
    <div id="app">
        <Preloader v-if="$store.state.showloader"/>
        <Header/>
        <div class="main">
            <Menu/>
            <router-view style="width: 100%" class="router-view"/>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header/Header";
    import Menu from "./components/Menu";
    import Preloader from "./components/Preloader";
    export default {
        components:{
            Preloader,
            Header,
            Menu
        },
        mounted() {
            this.showToggle()
            this.$store.dispatch('loadProducts');
            this.$store.dispatch('loadDescription')
            // this.$store.dispatch('loadToCart');
            // this.$store.dispatch('loadInfoAboutProduct');
        },
        methods:{
            showToggle(){
                setTimeout(()=>{
                    this.$store.state.showloader=false
                },1000)
            }
        },
        watch: {
            $route() {
                this.$store.state.showloader = true;
                setTimeout(() => {
                    this.$store.state.showloader = false;
                }, 1000);
            },
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
