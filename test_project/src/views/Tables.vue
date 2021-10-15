<template>
        <CatalogTables/>
</template>

<script>
    import CatalogTables from "../components/Catalog_tables";
    export default {
        name: "Tables",
        components: {CatalogTables},
        computed: {//вычисляемое свойство
            products(){
                return this.$store.getters.getCatalogTables
            }
        },
    }
</script>

<style scoped>

</style>