<!--Каталог диванов-->
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
        name: "CatalogSofas",
        components: {Product},
        //вычисляемое свойство
        computed: {
            //получаем все диваны, данные всегда актуальны
            products(){
                return this.$store.getters.getCatalogSofas
            }
        },
    }
</script>

<style scoped>

</style>