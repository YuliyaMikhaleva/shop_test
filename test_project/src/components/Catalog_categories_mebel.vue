<template>
    <div>
        <CategoryMebel v-bind:key="item.id"
                  v-for="item of products"
                  v-bind:category="item"/>
    </div>
</template>

<script>
    import CategoryMebel from "./CategoryMebel";
    export default {
        name: "CatalogCategoriesMebel",
        components: {CategoryMebel},
        computed: {//вычисляемое свойство
            products(){
                return this.$store.getters.getCatalogCategoriesMebel
            }
        },
    }
</script>

<style scoped>

</style>