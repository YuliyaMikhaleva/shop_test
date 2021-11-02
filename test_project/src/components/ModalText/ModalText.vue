<template>
    <section :class="$style['modal-text']">
        <img v-if="text==='В корзине ничего нет'" src="../../assets/img/basket.svg" width="99" height="99" alt="basket">
        <img v-if="text==='Заказ успешно создан'" class="header_basket_content_resultOrder_img" src="../../assets/img/order.png" width="140" height="109" alt="order">
        <span :class="$style['modal-text__txt']">{{ text }}</span>
    </section>
</template>

<script>
    export default {
        name: "ModalText",
        props:['text']
    }
</script>

<style lang="scss" module>
@import "ModalText.module";
</style>