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
            ...mapGetters('basketModule',{ basket: 'getBasket'}),
            /**
             * Получение содержимого корзины
             * @return {string}
             */
        }
    }
</script>

<style lang="scss" module>
@import "Basket.module";
</style>
