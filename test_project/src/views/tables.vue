<template>
    <div>
        <Catalog v-bind:goods="tables"/>
    </div>
</template>

<script>
    import Catalog from "../components/Catalog/Catalog";
    export default {
        name: "tables",
        components: {Catalog},
        computed:{
            tables(){
                return this.$store.getters.getCatalogTables
            },
        }
    }
</script>

<style scoped>

</style>