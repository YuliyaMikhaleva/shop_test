<!--                            Всплывающее окно с описанием товара-->
<template>
                <div :class="$style.modal">
                    <div class="modal-dialog" :class="$style.modal__wrp">
                        <div class="modal-content" :class="$style.modal__content">
                            <div>
                                <HeaderModal :class="$style.modal__header" title="Информация"/>

                                <ProductDescription :product="product"/>

                            </div>
                        </div>
                    </div>
                </div>

</template>

<script>
    import ProductDescription from "../ProductDescription";
    import HeaderModal from "../HeaderModal/HeaderModal";
    export default {
        name: "ModalDescription",
        components: {HeaderModal, ProductDescription},
        props:['product']
    }
</script>

<style lang="scss" module>
    @import "ModalDescription.module";
</style>