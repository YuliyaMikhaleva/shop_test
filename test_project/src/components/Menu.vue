<template>
    <div class="menu">


        <CatalogCategoriesMebel v-if="$store.state.activeLink === 'Мебель'" />
        <CatalogCategoriesElectro v-if="$store.state.activeLink === 'Электроприборы'" />
    </div>

<!--    <div class="menu">-->
<!--        <span class="menu_item">Стулья</span>-->
<!--        <span class="menu_item">Диваны</span>-->

<!--    </div>-->
</template>

<script>
    import CatalogCategoriesMebel from "./Catalog_categories_mebel";
    import CatalogCategoriesElectro from "./Catalog_categories_electro";
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