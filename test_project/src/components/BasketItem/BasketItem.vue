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
            /**
             * @review
             * Лучше воспользоваться vuex методом mapMutations, для получения мутатора,
             * а затем уже им пользоваться в коде.
             * Вместо записи this.$store.commit('basketModule/deleteProduct', this.cartItem);
             *
             * Так же, желательно не вызывать мутатор напрямую из компонентов.
             * А использовать для этого экшены. То есть мы создаем экшн, который в свою очередь вызовет нужный нам мутатор.
             * Так код легче расширяется в дальнейшем (например, нам нужно будет перед изменением стора делать еще запрос к апи,
             * а его нельзя добавлять в мутатор. Соответственно придется создавать допольнительно экшн, рефакторить все компоненты,
             * где ранее вызывался напрямую мутатор и тп)
            */

            /**
             * Удаление товара из корзины по клику
             */
            deleteFromBasket() {
                    this.$store.commit('basketModule/deleteProduct', this.cartItem);
                }
            }
        }
</script>

<style lang="scss" module>
@import "BasketItem.module.scss";
</style>
