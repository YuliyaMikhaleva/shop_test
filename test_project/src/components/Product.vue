<template>
    <div class="catalog_card" >
        <img class="catalog_card_img" :src="product.img" width="353" height="246" alt="photo" />
        <h3 class="catalog_card_title">{{ product.name }}</h3>
        <span class="catalog_card_price"><span> {{ product.price }}</span> ₽</span>
        <button class="catalog_card_button">Добавить в корзину</button>
    </div>
</template>

<script>
    export default {
        name: "Product",
        props:['product'],
    }
</script>

<style scoped>

</style>