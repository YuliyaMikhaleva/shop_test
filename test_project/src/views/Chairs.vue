<template>
        <CatalogChairs/>
</template>

<script>
    import CatalogChairs from "../components/Catalog_chairs";
    export default {
        name: "Chairs",
        components: {CatalogChairs},
        computed: {//вычисляемое свойство
            products(){
                return this.$store.getters.getCatalogChairs
            }
        },
    }
</script>

<style scoped>

</style>