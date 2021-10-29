<template>
    <div>
        <Catalog v-bind:goods="lamps"/>
    </div>
</template>

<script>
    import Catalog from "../components/Catalog/Catalog";
    export default {
        name: "lamps",
        components: {Catalog},
        computed:{
            lamps(){
                return this.$store.getters.getCatalogLamps
            },
        }
    }
</script>

<style scoped>

</style>