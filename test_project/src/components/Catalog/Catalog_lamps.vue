<!--Каталог светильников-->
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
        name: "CatalogLamps",
        components: {Product},
        //вычисляемое свойство
        computed: {
            //получаем все светильники, данные всегда актуальны
            products(){
                return this.$store.getters.getCatalogLamps
            }
        },
    }
</script>

<style scoped>

</style>