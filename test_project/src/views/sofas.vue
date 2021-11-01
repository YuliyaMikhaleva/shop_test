<template>
    <section :class="$style.products">
        <Catalog :class="$style.products__catalog" v-bind:goods="sofas"/>
    </section>
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

<style lang="scss" module>
    @import "Products.module";
</style>