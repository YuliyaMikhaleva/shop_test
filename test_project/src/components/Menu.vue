<!--Боковое меню сайта-->
<template>
    <div class="menu">
        <CatalogCategoriesMebel v-if="$store.state.activeLink === 'Мебель'" />
        <CatalogCategoriesElectro v-if="$store.state.activeLink === 'Электроприборы'" />
    </div>
</template>

<script>
    import CatalogCategoriesMebel from "./Catalog/Catalog_categories_mebel";
    import CatalogCategoriesElectro from "./Catalog/Catalog_categories_electro";
    export default {
        name: "Menu",
        components: {CatalogCategoriesElectro, CatalogCategoriesMebel},
        computed: {//вычисляемое свойство
            products(){
                return this.$store.getters.getCatalogCategoriesMebel;
            },
            product(){
                return this.$store.getters.getCatalogCategoriesElectro;
            }
        },
    }
</script>

<style scoped>

</style>