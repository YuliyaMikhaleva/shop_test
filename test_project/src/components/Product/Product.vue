<!--Карточка товара в каталоге-->
<template>
    <article class="catalog_card" >
        <a type="button" data-bs-toggle="modal" data-bs-target="#productsTransition">
            <img  class="catalog_card_img" :src="product.img" width="353" height="246" alt="photo" />
        </a>
        <a type="button" data-bs-toggle="modal" data-bs-target="#productsTransition">
            <h3 class="catalog_card_title">{{ product.name }}</h3>
        </a>
        <span class="catalog_card_price"><span> {{ product.price }}</span> ₽</span>

        <Button :type="button" :method="addToCart" :isLoading="isLoading" :class="$style.button"/>
<!--&lt;!&ndash;        Если товар добавлен, будет кнопка "добавлено"&ndash;&gt;-->
<!--        <button v-if="isAdded === false" @click="addToCart" class="catalog_card_button" style="width: 219px">Добавить в корзину</button>-->
<!--&lt;!&ndash;        Если товар загружается, будет кнопка загрузки&ndash;&gt;-->
<!--        <button v-if="isAdded === 'pending'" @click="addToCart" class="catalog_card_button" style="width: 219px">...</button>-->
<!--&lt;!&ndash;        Если товар не добавлен, будет кнопка "добавить в корзину"&ndash;&gt;-->
<!--        <button v-if="isAdded === true" @click="deleteFromBasket" class="catalog_card_button">В корзине-->

<!--            <svg class="catalog_card_button_svg" width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M6.99147 13.4124L1.77601 8.12603L0 9.9135L6.99147 17L22 1.78747L20.2365 0L6.99147 13.4124Z" fill="white"/>-->
<!--            </svg>-->
<!--        </button>-->
        <div class="modal fade" id="productsTransition" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="productsTransitionLabel" aria-hidden="true">
            <div style="display: flex; justify-content: flex-end">
                <div class="modal-dialog header_basket">
                    <div class="modal-content ">
                        <div class="header_basket_content">
                            <div class="header_basket_content_top">
                                <h5 class="header_basket_content_top_title">Информация</h5>
                                <button class="header_basket_content_top_btn" type="button" data-bs-dismiss="modal">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 2.01429L17.9857 0L10 7.98571L2.01429 0L0 2.01429L7.98571 10L0 17.9857L2.01429 20L10 12.0143L17.9857 20L20 17.9857L12.0143 10L20 2.01429Z" fill="black"/>
                                    </svg>
                                </button>
                            </div>

<!--                            Всплывающее окно с описанием товара-->
                            <ProductDescription :product="product"/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
    import ProductDescription from "../ModalDescription/ProductDescription";
    import Button from "../Button/Button";
    export default {
        name: "Product",
        components: { Button, ProductDescription},
        props:['product'],
        data(){
            return {
                isAdded:false//добавлен ли товар
            }
        },
        mounted() {
            let find = this.$store.state.basket.find((element) => element.id === this.product.id);
            if (find){
                this.isAdded = true;
            } else {
                this.isAdded = false;
            }
        },
        methods:{
            //добавить в корзину
            addToCart(){
                console.log('FALSE')
                if (this.isLoading === false){
                    this.$store.dispatch('loadToCart', this.product);
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
                this.$store.commit('deleteProduct', this.product);
                this.isAdded = false;
            }
        },
        //вычисляемое свойство
        computed:{
            //будет считать корзину в настоящий момент и постоянно обновлять
            basket(){
                return this.$store.getters.getCart
            },
            isLoading(){
                console.log(this.isAdded)
                return this.isAdded
            },
        }
    }
</script>

<style lang="scss" module>
@import "Product.module.scss";
</style>