<template>
    <div id="app">
        <Header/>
        <div class="main">
            <Menu/>
            <router-view />
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Menu from "./components/Menu";
    export default {
        components:{
            Header,
            Menu
        },
        mounted() {
            this.$store.dispatch('loadCatalogChairs');
            this.$store.dispatch('loadCatalogTables');
            this.$store.dispatch('loadCatalogSofas');
            this.$store.dispatch('loadCatalogLamps');
            this.$store.dispatch('loadCatalogGroups');
            this.$store.dispatch('loadCatalogCategoriesMebel');
            this.$store.dispatch('loadCatalogCategoriesElectro');
        }
    }
</script>

<style lang="scss">

</style>
