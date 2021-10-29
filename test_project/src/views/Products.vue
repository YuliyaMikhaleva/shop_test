<template>
        <div>
                <Catalog v-if="$store.state.activeLink === 'Электроприборы' && $store.state.activeCategoryElectro=== 'Светильники'" v-bind:goods="lamps" />
                <Catalog v-if="$store.state.activeLink === 'Мебель' && $store.state.activeCategoryMebel=== 'Стулья'" v-bind:goods="chairs"/>
                <Catalog v-if="$store.state.activeLink === 'Мебель' && $store.state.activeCategoryMebel=== 'Диваны'" v-bind:goods="sofas"/>
                <Catalog v-if="$store.state.activeLink === 'Мебель' && $store.state.activeCategoryMebel=== 'Столы'" v-bind:goods="tables"/>
                <Catalog v-if="$store.state.activeLink === 'Электроприборы' && $store.state.activeCategoryElectro=== 'Вентиляторы'" v-bind:goods="ventilators"/>
        </div>
</template>

<script>
    import Catalog from "../components/Catalog/Catalog";
    export default {
        name: "Products",
        components: {
                Catalog,
        },
        computed: {//вычисляемое свойство
            lamps(){
                    return this.$store.getters.getCatalogLamps
            },
            chairs(){
                    return this.$store.getters.getCatalogChairs
            },
            sofas(){
                    return this.$store.getters.getCatalogSofas
            },
            tables(){
                    return this.$store.getters.getCatalogTables
            },
            ventilators(){
                    return this.$store.getters.getCatalogVentilators
            },
        },
    }

</script>

<style scoped>

</style>