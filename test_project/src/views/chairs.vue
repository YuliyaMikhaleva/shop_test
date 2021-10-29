<template>
    <div>
        <Catalog v-bind:goods="chairs"/>
    </div>
</template>

<script>
    import Catalog from "../components/Catalog/Catalog";
    export default {
        name: "chairs",
        components: {Catalog},
        computed:{
            chairs(){
                return this.$store.getters.getCatalogChairs
            },
        }
    }
</script>

<style scoped>

</style>