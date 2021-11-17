<template>
    <section>
        <Catalog :class="$style.products__catalog" v-bind:goods="products"/>
    </section>
</template>

<script>
    import Catalog from "../components/Catalog/Catalog";
    export default {
        name: "elements",
        components: {Catalog},
        computed:{
            subcategory(){
                return parseInt(this.$route.params.subcategory)
            },
            products:function(){
                return this.$store.getters['productsModule/getChilds'](this.subcategory)
            },
        }
    }
</script>

<style lang="scss" module>
    @import "Products.module";
</style>