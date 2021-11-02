<!--Всплывающее окно корзины-->
<template>
    <div :class="$style.modal">
        <div :class="$style.modal__dialog" class="modal-dialog header_basket">
            <div :class="$style.modal__content" class="modal-content ">
                <div :class="$style.basket">
                    <header :class="$style.basket__header">
                        <h5 :class="$style.basket__title">Оформить заказ</h5>
                        <button :class="$style.basket__btn" type="button" data-bs-dismiss="modal">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 2.01429L17.9857 0L10 7.98571L2.01429 0L0 2.01429L7.98571 10L0 17.9857L2.01429 20L10 12.0143L17.9857 20L20 17.9857L12.0143 10L20 2.01429Z" fill="black"/>
                            </svg>
                        </button>
                    </header>
                    <section  v-if="this.$store.getters.getBasket.length>0" >
                        <span :class="$style.basket__text">В корзине:</span>
<!--                        здесь будет корзина с товарами-->
                        <Basket/>
                        <Form/>
                    </section>
                    <ModalText :class="$style.basket__modaltext" :text="title"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Basket from "../Basket/Basket";
    import Form from "../Form/Form";
    import ModalText from "../ModalText/ModalText";
    export default {
        name: "Modal_basket",
        components: {ModalText, Form, Basket},
        data(){
            return {
                showParametrs:true,
                showResultOrder: false,
            }
        },
        computed:{
            title(){
                if (this.$store.getters.getBasket.length<=0 && !this.showResultOrder){
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