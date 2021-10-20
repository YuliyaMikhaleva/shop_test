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
    import Header from "./components/Header";
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
            this.$store.dispatch('loadCatalogChairs');
            this.$store.dispatch('loadCatalogTables');
            this.$store.dispatch('loadCatalogSofas');
            this.$store.dispatch('loadCatalogLamps');
            this.$store.dispatch('loadCatalogGroups');
            this.$store.dispatch('loadCatalogCategoriesMebel');
            this.$store.dispatch('loadCatalogCategoriesElectro');
            this.$store.dispatch('loadToCart');
            this.$store.dispatch('loadInfoAboutProduct');
        },
        methods:{
            showToggle(){
                setTimeout(()=>{
                    this.$store.state.showloader=false
                },2000)
            }
        },
        watch: {
            $route() {
                this.$store.state.showloader = true;
                setTimeout(() => {
                    this.$store.state.showloader = false;
                }, 2000);
            },
        },
    }
</script>

<style lang="scss">

</style>
