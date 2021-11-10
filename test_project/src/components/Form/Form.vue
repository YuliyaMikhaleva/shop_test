<template>
    <form :class="$style.form" id="form" @submit="checkForm" action="#">
        <div :class="$style.form__wrp">
            <Input :class="$style.form__block_item" label="Имя" :errors="errors" :element="name" error="nameError" v-model="name" />
            <Input :class="$style.form__block" label="Телефон" :errors="errors" :element="phone" error="phoneError" v-model="phone"/>
        </div>
        <Input :class="$style.form__block" label="Полный адрес" :errors="errors" :element="address" error="addressError" v-model="address"/>
        <Button :class="$style.form__button" type="submit" value="Заказать"  :method="checkForm"/>
    </form>

</template>

<script>
    import Button from "../Button/Button";
    import Input from "../Input/Input";
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
            //проверить форму на ошибки
            checkForm:function(e) {
                this.errors = [];
                //Если нет имени, то выйдет ошибка
                if(!this.name) this.errors.push("nameError");
                if(!this.address) this.errors.push("addressError");
                //Если нет телефона, то выйдет ошибка
                if(!this.phone) {
                    this.errors.push("phoneError");
                } else if(!this.validPhone(this.phone)) {
                    this.errors.push("phoneError");
                }
                e.preventDefault();
                if(!this.errors.length){
                    this.$store.commit('showloaderModule/turnOnShowloader');
                    setTimeout(()=>{
                        this.doOrder();
                        this.$store.commit('showloaderModule/turnOfShowloader');
                    },2000)
                }
            },
            validPhone:function(phone) {
                var re = /^\+7\(\d{3}\)\d{2}-\d{2}-\d{3}$/;
                return re.test(phone);
            },
            doOrder: function () {
                this.$parent.showParametrs = false;
                this.$parent.showResultOrder = true;
                this.$store.dispatch('basketModule/loadOrder');
                setTimeout(() => {
                    this.$parent.showResultOrder = false;
                }, 2000)
            },
        },
    }
</script>

<style lang="scss" module>
@import "Form.module.scss";
</style>