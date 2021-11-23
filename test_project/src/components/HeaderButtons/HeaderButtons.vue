<!--шапка навигации в шапке сайта -->
<template>
    <nav :class="$style['header-buttons']">
        <HeaderItem :class="$style['header-buttons__item']" v-bind:key="group.name"
                       v-for="group of products"
                       v-bind:group="group"/>
    </nav>
</template>

<script>
    import HeaderItem from "../HeaderItem/HeaderItem";
    import {mapGetters} from "vuex"
    export default {
        name: "HeaderButtons",
        components: {HeaderItem},
        computed: {
            ...mapGetters('productsModule',['getChilds']),
            /**
             * Вывод самых крупных категорий товаров магазины (например, Электроприборы и Мебель)
             * @returns {Array}
             */
            products(){
                return this.getChilds(-1)
        }
        },
    }
</script>

<style lang="scss" module>
    @import "HeaderButtons.module";
</style>