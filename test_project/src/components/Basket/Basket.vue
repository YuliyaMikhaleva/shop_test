<!--Корзина со всеми выбранными товарами-->
<template>
    <div class="basket">
        <BasketItem v-bind:key="good.id" v-for="good of basket"
                    v-bind:cartItem="good" />
    </div>
</template>

<script>
    import BasketItem from "./BasketItem";
    export default {
        name: "Basket",
        components: {BasketItem},
        computed:{
            basket(){
                return this.$store.getters.getCart
            }
        }

    }
</script>

<style scoped>

</style>