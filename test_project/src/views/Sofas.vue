<template>
        <CatalogSofas/>
</template>

<script>
    import CatalogSofas from "../components/Catalog_sofas";
    export default {
        name: "Sofas",
        components: {CatalogSofas},
        computed: {//вычисляемое свойство
            products(){
                return this.$store.getters.getCatalogSofas
            }
        },
    }
</script>

<style scoped>

</style>