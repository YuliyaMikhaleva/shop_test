<!--Каталог категорий электро: светильники/вентиляторы-->
<template>
    <div>
        <CategoryElectro v-bind:key="item.id"
                  v-for="item of products"
                  v-bind:category="item"/>
    </div>
</template>

<script>
    import CategoryElectro from "./CategoryElectro";
    export default {
        name: "CatalogCategoriesElectro",
        components: {CategoryElectro},
        computed: {//вычисляемое свойство
            products(){
                return this.$store.getters.getCatalogCategoriesElectro
            }
        },
    }
</script>

<style scoped>

</style>