<template>
    <section class="catalog">
        <Product v-bind:key="product.id" v-bind:product="product" v-for="product of goods"/>
        <ZeroComponent v-if="goods.length===0"/>
    </section>
</template>

<script>
    import Product from "./Product";
    import ZeroComponent from "./ZeroComponent";
    export default {
        name: "Catalog",
        props:['goods'],
        components: {ZeroComponent, Product},
    }
</script>

<style scoped>

</style>