<template>
    <section :class="$style.products">
        <Catalog :class="$style.products__catalog" v-bind:goods="chairs"/>
    </section>
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

<style lang="scss" module>
@import "Products.module";
</style>