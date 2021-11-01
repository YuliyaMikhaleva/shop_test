<template>
    <section :class="$style.products">
        <Catalog :class="$style.products__catalog" v-bind:goods="ventilators"/>
    </section>
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

<style lang="scss" module>
    @import "Products.module";
</style>