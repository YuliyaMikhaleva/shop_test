<!--Карточка товара в каталоге-->
<template>
    <article :class="$style['catalog-card']" >
        <button :class="$style['catalog-card__link']"  type="button" data-bs-toggle="modal" :data-bs-target="'#' + 'N' + product.id">
						<!-- @ревью если в карточку попадёт широкая или большая картинка, то она искажается -->
            <img  :class="$style['catalog-card__img']" src="https://ilifes.ru/wp-content/uploads/2019/05/frog-face.jpg" width="353" height="246" alt="photo" />
        </button>
        <button :class="$style['catalog-card__link']"  type="button" data-bs-toggle="modal" :data-bs-target="'#' + 'N' + product.id">
            <h3 :class="$style['catalog-card__title']" >{{ product.name }}</h3>
        </button>
        <span :class="$style['catalog-card__price']" ><span> {{ product.price }}</span> ₽</span>

        <Button :class="$style['catalog-card__button']" type="button" @on-click="addToCart" :isLoading="isLoading" >{{text}}</Button>

        <div class="modal fade" :id="'N'+product.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="'N'+product.id+'Label'" aria-hidden="true">
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
            ...mapActions('basketModule',['loadToCart', 'deleteFromCart']),
            /**
             * Добавление товара в корзину по клику
             */
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
            /**
             * Удаление товара из корзины по клику
             */
            deleteFromBasket(){
                this.deleteFromCart(this.product)
                this.isAdded = false;
            }
        },
        computed:{
            ...mapGetters('basketModule',['getBasket']),
            /**
             * Статус товара: добавлен/не добавлен
             * @returns {string}
             */
            isLoading(){
                return this.isAdded
            },
            /**
             * Текст кнопки при разных состояниях
             * @returns {string}
             */
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
