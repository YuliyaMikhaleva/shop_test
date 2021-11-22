<!--Всплывающее окно корзины-->
<template>
    <div :class="$style.modal">
        <div :class="$style.modal__dialog" class="modal-dialog header_basket">
            <div :class="$style.modal__content" class="modal-content ">
                <div :class="$style.basket">

                    <HeaderModal :class="$style.basket__header" title="Оформить заказ"/>

                    <section  v-if="getBasket.length>0" >
                        <span :class="$style.basket__text">В корзине:</span>
<!--                        здесь будет корзина с товарами-->
                        <Basket/>
                        <Form/>
                    </section>
                    <ModalText :class="$style.basket__modaltext">{{title}}</ModalText>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Basket from "../Basket/Basket";
    import Form from "../Form/Form";
    import ModalText from "../ModalText/ModalText";
    import HeaderModal from "../HeaderModal/HeaderModal";
    import {mapGetters} from "vuex"
    export default {
        name: "Modal_basket",
        components: {HeaderModal, ModalText, Form, Basket},
        data(){
            return {
                showParametrs:true,
                showResultOrder: false,
            }
        },
        computed:{
            ...mapGetters('basketModule',['getBasket']),
            title(){
                if (this.getBasket.length<=0 && !this.showResultOrder){
                    return "В корзине ничего нет"
                } else if (this.showResultOrder){
                    return "Заказ успешно создан"
                } else {
                    return ""
                }
            }
        }


    }
</script>

<style lang="scss" module>
@import "ModalBasket.module.scss";
</style>