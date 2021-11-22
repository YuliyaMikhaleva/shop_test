<!--Товар в корзине-->
<template>
         <article :class="$style['basket-item']">
                <img :class="$style['basket-item__img']" :src="cartItem.img" width="138" height="97" alt="photo" />
                <div :class="$style['basket-item__txt']">
                    <h3 :class="$style['basket-item__title']">{{  cartItem.name }}</h3>
                    <span :class="$style['basket-item__price']"><span> {{ cartItem.price }} </span> ₽</span>
                    <button :class="$style['basket-item__button']" @click="deleteFromBasket" >Убрать из корзины</button>
                </div>
         </article>
</template>

<script>
    export default {
        name: "BasketItem",
        props: {
            cartItem: {
                type: Object,
                required:true,
            }
        },
        methods: {
                // удаление товара из корзины
                deleteFromBasket() {
                    this.$store.commit('basketModule/deleteProduct', this.cartItem);
                }
            }
        }
</script>

<style lang="scss" module>
@import "BasketItem.module.scss";
</style>