<template>
    <section :class="$style.products">
        <Catalog :class="$style.products__catalog" v-bind:goods="tables"/>
    </section>
</template>

<script>
    import Catalog from "../components/Catalog/Catalog";
    export default {
        name: "tables",
        components: {Catalog},
        computed:{
            tables(){
                return this.$store.getters['productsModule/getCatalogTables']
            },
        }
    }
</script>

<style lang="scss" module>
    @import "Products.module";
</style>