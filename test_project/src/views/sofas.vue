<template>
    <div>
        <Catalog v-bind:goods="sofas"/>
    </div>
</template>

<script>
    import Catalog from "../components/Catalog/Catalog";
    export default {
        name: "sofas",
        components: {Catalog},
        computed:{
            sofas(){
                return this.$store.getters.getCatalogSofas
            },
        }
    }
</script>

<style scoped>

</style>