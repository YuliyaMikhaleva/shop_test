<template>
    <form :class="$style.form" id="form" @submit="checkForm" action="#">
        <div :class="$style.form__wrp">
            <Input :class="$style.form__block_item" label="Имя" :errors="errors" :element="name" error="nameError" v-model="name" />
            <Input :class="$style.form__block" label="Телефон" :errors="errors" :element="phone" error="phoneError" v-model="phone"/>
        </div>
        <Input :class="$style.form__block" label="Полный адрес" :errors="errors" :element="address" error="addressError" v-model="address"/>
        <Button :class="$style.form__button" type="submit">Заказать</Button>
    </form>

</template>

<script>
    import Button from "../Button/Button";
    import Input from "../Input/Input";
    import {mapActions} from "vuex"
    export default {
        name: "Form",
        components:{Button,Input},
        data(){
            return {
                errors:[],
                name: '',
                phone: '',
                address: '',
            }
        },
        methods:{
            /**
             * Проверить форму на ошибки
             * @param e - event
             */
            checkForm:function(e) {
                this.errors = [];
                if(!this.name) this.errors.push("nameError");
                if(!this.address) this.errors.push("addressError");
                if(!this.phone) {
                    this.errors.push("phoneError");
                } else if(!this.validPhone(this.phone)) {
                    this.errors.push("phoneError");
                }
                e.preventDefault();
                if(!this.errors.length){
                    this.doOrder();
                }
            },
            /**
             * Проверка правильности ввода номера телефона телефона
             * @param phone - номер телефона типа +7(950)45-84-345
             * @returns {boolean}
             */
            validPhone:function(phone) {
                let re = /^\+?[78]\(?\d{3}\)?\d{2}-?\d{2}-?\d{3}$/;
                return re.test(phone);
            },
            /**
             * Создание заказа
             */
            doOrder: function () {
                this.$parent.showParametrs = false;
                this.$parent.showResultOrder = true;
                this.loadOrder;
                setTimeout(() => {
                    this.$parent.showResultOrder = false;
                }, 2000)
            },
        },
        computed:{
            ...mapActions('basketModule',['loadOrder'])
        }
    }
</script>

<style lang="scss" module>
@import "Form.module.scss";
</style>