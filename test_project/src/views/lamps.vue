<template>
    <section :class="$style.products">
        <Catalog :class="$style.products__catalog" v-bind:goods="lamps"/>
    </section>
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

<style lang="scss" module>
    @import "Products.module";
</style>