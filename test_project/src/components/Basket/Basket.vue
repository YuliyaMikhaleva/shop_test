<!--Корзина со всеми выбранными товарами-->
<template>
    <div :class="$style.basket">
        <BasketItem :class="$style.basket__item" v-bind:key="good.id" v-for="good of basket"
                    v-bind:cartItem="good" />
    </div>
</template>

<script>
    import BasketItem from "../BasketItem/BasketItem"
    import {mapGetters} from "vuex"
    export default {
        name: "Basket",
        components: {BasketItem},
        computed:{
            /**
             * @review
             * Вместо дублирования с помощью дополнительного computed свойства, лучше
             * воспользоваться стандартным алиасом (псевдонимом свойства) от вью, либо пользоваться напрямую через имя геттера
             * (вместо basket использоваться везде getBasket).
             *
             * Пример с алиасом:
             * ...mapGetters('basketModule', { basket: 'getBasket' })
             *
             * https://vuex.vuejs.org/guide/getters.html#the-mapgetters-helper
            */
            ...mapGetters('basketModule', ['getBasket']),
            /**
             * Получение содержимого корзины
             * @return {string}
             */
            basket(){
                return this.getBasket
            }
        }
    }
</script>

<style lang="scss" module>
@import "Basket.module";
</style>
