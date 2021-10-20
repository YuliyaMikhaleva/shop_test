<!--Каталог стульев-->
<template>
    <div class="catalog" >
        <Product v-bind:key="item.id"
                 v-for="item of products"
                 v-bind:product="item" />
    </div>
</template>

<script>
    import Product from "./Product";
    export default {
        name: "CatalogChairs",
        components: {Product},
        //вычисляемое свойство
        computed: {
            //получаем все стулья, данные всегда актуальны
            products(){
                return this.$store.getters.getCatalogChairs
            }
        },
    }
</script>

<style scoped>

</style>