<!--Каталог столов-->
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
        name: "CatalogTables",
        components: {Product},
        //вычисляемое свойство
        computed: {
            //получаем все столы, данные всегда актуальны
            products(){
                return this.$store.getters.getCatalogTables
            }
        },
    }
</script>

<style scoped>

</style>