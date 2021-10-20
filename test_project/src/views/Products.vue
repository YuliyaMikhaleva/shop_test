<template>
        <div>
                <CatalogChairs v-if="$store.state.activeLink === 'Мебель' && $store.state.activeCategoryMebel=== 'Стулья'" />
                <CatalogLamps v-if="$store.state.activeLink === 'Электроприборы' && $store.state.activeCategoryElectro=== 'Светильники'"/>
                <CatalogSofas v-if="$store.state.activeLink === 'Мебель' && $store.state.activeCategoryMebel=== 'Диваны'"/>
                <CatalogTables v-if="$store.state.activeLink === 'Мебель' && $store.state.activeCategoryMebel=== 'Столы'"/>
                <ZeroComponent v-if="$store.state.activeLink === 'Электроприборы' && $store.state.activeCategoryElectro === 'Вентиляторы' "/>
        </div>
</template>

<script>
    import CatalogChairs from "../components/Catalog/Catalog_chairs";
    import CatalogLamps from "../components/Catalog/Catalog_lamps";
    import CatalogSofas from "../components/Catalog/Catalog_sofas";
    import CatalogTables from "../components/Catalog/Catalog_tables";
    import ZeroComponent from "../components/Catalog/ZeroComponent";
    export default {
        name: "Chairs",
        components: {ZeroComponent, CatalogTables, CatalogSofas, CatalogLamps, CatalogChairs},
        computed: {//вычисляемое свойство
            products(){
                return [
                        this.$store.getters.getCatalogChairs,
                        this.$store.getters.getCatalogLamps,
                        this.$store.getters.getCatalogSofas,
                        this.$store.getters.getCatalogTables
                ]
            }
        },
    }
</script>

<style scoped>

</style>