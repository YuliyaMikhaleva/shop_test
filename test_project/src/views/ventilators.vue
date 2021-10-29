<template>
    <div>
        <Catalog v-bind:goods="ventilators"/>
    </div>
</template>

<script>
    import Catalog from "../components/Catalog/Catalog";
    export default {
        name: "ventilators",
        components: {Catalog},
        computed:{
            ventilators(){
                return this.$store.getters.getCatalogVentilators
            },
        }
    }
</script>

<style scoped>

</style>