<!--Всплывающее окно корзины-->
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
<!--                        здесь будет корзина с товарами-->
                        <Basket/>

                        <form id="form" @submit="checkForm" class="header_basket_content_form" action="#">
                            <div style="display: flex; justify-content: flex-start">
                                <div class="header_basket_content_form_phone" >
                                    <label class="header_basket_content_form_block_label" for="name">Имя</label>
                                    <input :class="[errors.indexOf('nameError') ? errorClass:'', 'header_basket_content_form_block_input' ]" type="text" id="name" v-model="name">

<!--                                    Указание на ошибку пустого поля-->
                                    <ErrorFormBasket :errors="errors"/>

                                </div>
                                <div class="header_basket_content_form_block" >
                                    <label class="header_basket_content_form_block_label" for="phone">Телефон</label>
                                    <input :class="[errors.indexOf('phoneError') ? errorClass:'', 'header_basket_content_form_block_input' ]" type="text" id="phone"
                                            v-model="phone">

<!--                                    Указание на ошибку пустого поля-->
                                    <ErrorFormBasket :errors="errors"/>
<!--                                    Указание на ошибку номера телефона -->
                                    <div v-if="errors.length">
                                        <span v-for="error in errors" v-bind:key="error">
                                            <span v-if="error == 'phoneError'"  class="header_basket_content_form_block_error">
                                                    Номер телефона должен быть указан в следующей форме: +7(950)45-84-345
                                            </span>
                                        </span>
                                    </div>

                                </div>
                            </div>
                            <div class="header_basket_content_form_address" >
                                <label class="header_basket_content_form_block_label" for="address">Полный адрес</label>
                                <input :class="[errors.indexOf('addressError') ? errorClass:'', 'header_basket_content_form_block_input' ]" type="text" id="address"
                                        v-model="address"/>
                            </div>

<!--                                    Указание на ошибку пустого поля-->
                            <ErrorFormBasket :errors="errors"/>

                            <button type="submit" class="header_basket_content_form_btn">Заказать</button>
                        </form>


                    </div>
                    <div v-if="$store.state.basket.length<=0 && !showResultOrder" class="header_basket_content_resultOrder">
                        <img class="header_basket_content_resultOrder_img" src="../../assets/img/basket.svg" width="99" height="99" alt="basket">
                        <span class="header_basket_content_resultOrder_txt">В корзине ничего нет</span>
                    </div>
                    <div v-if="showResultOrder" class="header_basket_content_resultOrder">
                        <img class="header_basket_content_resultOrder_img" src="../../assets/img/order.png" width="140" height="109" alt="order">
                        <span class="header_basket_content_resultOrder_txt">Заказ успешно создан</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Basket from "./Basket";
    import ErrorFormBasket from "./ErrorFormBasket";
    export default {
        name: "Modal_basket",
        components: {ErrorFormBasket, Basket},
        data(){
            return {
                showParametrs:true,
                showResultOrder: false,
                errors:[],
                name: '',
                phone: '',
                address: '',
                errorClass: 'errorClass',
                normClass:''
            }
        },
        methods:{
            //сделать заказ
            doOrder: function () {
                    this.showParametrs = false;
                    this.showResultOrder = true;
                    this.$store.dispatch('loadOrder');
                    setTimeout(() => {
                        this.showResultOrder = false;
                    }, 2000)
                },
            //проверить форму на ошибки
            checkForm:function(e) {
                this.errors = [];
                //Если нет имени, то выйдет ошибка
                if(!this.name) this.errors.push("nameError");
                if(!this.address) this.errors.push("addressError");
                //Если нет телефона, то выйдет ошибка
                if(!this.phone) {
                    this.errors.push("phoneError");
                    console.log(this.errors)
                } else if(!this.validPhone(this.phone)) {
                    this.errors.push("phoneError");
                    console.log(this.errors)
                }
                e.preventDefault();
                if(!this.errors.length){
                    console.log(this.errors)
                    this.$store.state.showloader=true;
                    setTimeout(()=>{
                        this.doOrder();
                        this.$store.state.showloader=false;
                    },2000)
                }
            },
            //проверка номера телефона: должен иметь вид +7(000)00-00-000.
            validPhone:function(phone) {
                var re = /^\+7\(\d{3}\)\d{2}-\d{2}-\d{3}$/;
                return re.test(phone);
            }
            },
        }
</script>

<style scoped>

</style>