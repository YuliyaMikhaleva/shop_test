<template>
        <div class="newProducts">
            <div class="basketItem" >
                <img class="basketItem_img" :src="cartItem.img" width="138" height="97" alt="photo" />
                <div class="basketItem_txt">
                    <h3 class="basketItem_txt_title">{{  cartItem.name }}</h3>
                    <span class="basketItem_txt_price"><span> {{ cartItem.price }} </span> ₽</span>
                    <button @click="deleteFromBasket" class="basketItem_txt_button">Убрать из корзины</button>
                </div>
         </div>


    </div>
<!---->
</template>

<script>
    export default {
        name: "BasketItem",
        props: ['cartItem'],
        methods:{
            deleteFromBasket(){
                this.$store.commit('deleteProduct', this.cartItem);
                console.log(this.$store.state.basket)
            }
        }
    }
</script>

<style scoped>

</style>