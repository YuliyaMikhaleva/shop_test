<template>
    <div style="display: flex; justify-content: flex-end">
        <div class="modal-dialog header_basket">
            <div class="modal-content ">
                <div class="header_basket_content">
                    <div class="header_basket_content_top">
                        <h5 class="header_basket_content_top_title">Оформить заказ</h5>
                        <button class="header_basket_content_top_btn" type="button" data-bs-dismiss="modal">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 2.01429L17.9857 0L10 7.98571L2.01429 0L0 2.01429L7.98571 10L0 17.9857L2.01429 20L10 12.0143L17.9857 20L20 17.9857L12.0143 10L20 2.01429Z" fill="black"/>
                            </svg>
                        </button>
                    </div>
                    <div  v-if="$store.state.basket.length>0" >
                        <span class="header_basket_content_text">В корзине:</span>
                        <Basket/>
                        <div class="header_basket_content_form" action="#">
                            <div style="display: flex; justify-content: space-between">
                                <div class="header_basket_content_form_block" >
                                    <label class="header_basket_content_form_block_label" for="name">Имя</label>
                                    <input class="header_basket_content_form_block_input" type="text" id="name">
                                    <span class="header_basket_content_form_block_error">Имя не должно быть пустым</span>
                                </div>
                                <div class="header_basket_content_form_block" >
                                    <label class="header_basket_content_form_block_label" for="phone">Телефон</label>
                                    <input class="header_basket_content_form_block_input" type="text" id="phone"
                                           placeholder="+ 7 (950) 45-84-345">
                                </div>
                            </div>
                            <div class="header_basket_content_form_block" >
                                <label class="header_basket_content_form_block_label" for="address">Полный адрес</label>
                                <input class="header_basket_content_form_block_input" type="text" id="address"
                                       placeholder="Ул. Пушкина, дом колотушкина">
                            </div>
                            <button @click="doOrder" class="header_basket_content_form_btn">Заказать</button>
                        </div>
                    </div>
                    <div v-if="$store.state.basket.length<=0 && !showResultOrder" class="header_basket_content_resultOrder">
                        <img class="header_basket_content_resultOrder_img" src="../assets/img/basket.svg" width="99" height="99" alt="basket">
                        <span class="header_basket_content_resultOrder_txt">В корзине ничего нет</span>
                    </div>
                    <div v-if="showResultOrder" class="header_basket_content_resultOrder">
                        <img class="header_basket_content_resultOrder_img" src="../assets/img/order.png" width="140" height="109" alt="order">
                        <span class="header_basket_content_resultOrder_txt">Заказ успешно создан</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Basket from "./Basket";
    export default {
        name: "Modal_basket",
        components: {Basket},
        data(){
            return {
                // counter: this.$store.state.basket.length,
                showParametrs:true,
                showResultOrder: false
            }
        },
        methods:{
            //сделать заказ
            doOrder: function () {
                this.showParametrs = false;
                this.showResultOrder = true;
                this.$store.commit('clearBasket');
                setTimeout(() => {
                    this.showResultOrder = false;
                }, 5000)
            },

        },
    }
</script>

<style scoped>

</style>