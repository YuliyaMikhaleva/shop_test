<template>
    <section :class="$style['modal-text']">
        <img v-if="$parent.title==='В корзине ничего нет'" src="../../assets/img/basket.svg" width="99" height="99" alt="basket">
        <img v-if="$parent.title==='Заказ успешно создан'" src="../../assets/img/order.png" width="140" height="109" alt="order">
        <slot :class="$style['modal-text__txt']"/>
    </section>
</template>

<script>
    export default {
        name: "ModalText",
    }
</script>

<style lang="scss" module>
@import "ModalText.module";
</style>