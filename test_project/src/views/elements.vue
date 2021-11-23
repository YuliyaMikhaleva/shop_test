<template>
    <section>
        <Catalog :class="$style.products__catalog" v-bind:goods="products"/>
    </section>
</template>

<script>
    import Catalog from "../components/Catalog/Catalog";
    import {mapGetters} from "vuex"
    export default {
        name: "elements",
        components: {Catalog},
        computed:{
            ...mapGetters('productsModule',['getChilds']),
            /**
             * Подкатегория
             * @return {number} номер id подкатегории из ссылки
             */
            subcategory(){
                return parseInt(this.$route.params.subcategory)
            },
            /**
             * Фильтрация каталога по id необходимой подкатегории
             * @return {Array}
             */
            products:function(){
                return this.getChilds(this.subcategory)
            },
        }
    }
</script>

<style lang="scss" module>
    @import "Products.module";
</style>