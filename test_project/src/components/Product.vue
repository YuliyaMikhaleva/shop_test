<template>
    <div class="catalog_card" >
        <a type="button" data-bs-toggle="modal" data-bs-target="#productsTransition">
            <img  class="catalog_card_img" :src="product.img" width="353" height="246" alt="photo" />
        </a>
        <a type="button" data-bs-toggle="modal" data-bs-target="#productsTransition">
            <h3 class="catalog_card_title">{{ product.name }}</h3>
        </a>
        <span class="catalog_card_price"><span> {{ product.price }}</span> ₽</span>
        <button v-if="isAdded === false" @click="addToCart" class="catalog_card_button">Добавить в корзину</button>
        <button v-if="isAdded === true" @click="deleteFromBasket" class="catalog_card_button">В корзине</button>
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
                            <ProductInTransition :product="product"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductInTransition from "./ProductInTransition";
    export default {
        name: "Product",
        components: {ProductInTransition},
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
            addToCart(){
                this.$store.dispatch('loadToCart', this.product);
                this.isAdded = true;
            },
            deleteFromBasket(){
                this.$store.commit('deleteProduct', this.product);
                this.isAdded = false;
            }
        },
        computed:{
            basket(){
                return this.$store.getters.getCart
            },



        }
    }
</script>

<style scoped>

</style>