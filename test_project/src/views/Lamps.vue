<template>
        <CatalogLamps/></template>

<script>
    import CatalogLamps from "../components/Catalog_lamps";
    export default {
        name: "Lamps",
        components: {CatalogLamps},
        computed: {//вычисляемое свойство
            products(){
                return this.$store.getters.getCatalogLamps
            }
        },
    }
</script>

<style scoped>

</style>