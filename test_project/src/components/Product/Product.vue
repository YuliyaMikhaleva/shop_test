<!--Карточка товара в каталоге-->
<template>
    <article :class="$style['catalog-card']" >
        <a :class="$style['catalog-card__link']"  type="button" data-bs-toggle="modal" data-bs-target="#productsTransition">
            <img  :class="$style['catalog-card__img']" :src="product.img" width="353" height="246" alt="photo" />
        </a>
        <a :class="$style['catalog-card__link']"  type="button" data-bs-toggle="modal" data-bs-target="#productsTransition">
            <h3 :class="$style['catalog-card__title']" >{{ product.name }}</h3>
        </a>
        <span :class="$style['catalog-card__price']" ><span> {{ product.price }}</span> ₽</span>

        <Button :class="$style['catalog-card__button']" type="button" @on-click="addToCart" :isLoading="isLoading" >{{text}}</Button>

        <div class="modal fade" id="productsTransition" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="productsTransitionLabel" aria-hidden="true">

            <ModalDescription :class="$style.modal" :product="product"/>
        </div>
    </article>
</template>

<script>
    import Button from "../Button/Button";
    import ModalDescription from "../ModalDescription/ModalDescription"
    import {mapGetters, mapActions} from "vuex"

    export default {
        name: "Product",
        components: {ModalDescription, Button},
        props:{
            product:{
                type:Object,
                required:true,
            }
        },
        data(){
            return {
                isAdded:false//добавлен ли товар
            }
        },
        mounted() {
            let find = this.getBasket.find((element) => element.id === this.product.id);
            if (find){
                this.isAdded = true;
            } else {
                this.isAdded = false;
            }
        },
        methods:{
            ...mapActions('basketModule',['loadToCart']),
            //добавить в корзину
            addToCart(){
                if (this.isLoading === false){
                    this.loadToCart(this.product)
                    this.isAdded = 'pending';
                    setTimeout(() => {
                        this.isAdded = true;
                    },1000)
                } else {
                    this.deleteFromBasket()
                }
            },
            //удалить из корзины
            deleteFromBasket(){
                this.$store.commit('basketModule/deleteProduct', this.product);
                this.isAdded = false;
            }
        },
        //вычисляемое свойство
        computed:{
            ...mapGetters('basketModule',['getBasket']),
            isLoading(){
                return this.isAdded
            },
            text(){
                if (this.isLoading === false){
                    return "Добавить в корзину"
                } else if (this.isLoading === 'pending'){
                    return "..."
                } else {
                    return "В корзине"
                }
            }
        }
    }
</script>

<style lang="scss" module>
@import "Product.module.scss";
</style>