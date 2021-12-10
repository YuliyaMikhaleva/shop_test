<template>
    <section :class="$style.catalog">
        <Product
                :product="product"
                :pending="pending"
                :class="$style.catalog__product"
                :key="product.id"
                :nameButton="nameButton(product.id)"
                v-for="product of goods"/>
        <ZeroComponent :class="$style.catalog__zeropage" v-if="goods.length===0"/>
    </section>
</template>

<script>
    import Product from "../Product/Product";
    import ZeroComponent from "../ZeroComponent/ZeroComponent";
    import {mapGetters, mapActions} from "vuex";
    export default {
        name: "Catalog",
        props:{
            goods:{
                type: Array,
                required:true,
                default:() => [],
            }
        },
        components: {ZeroComponent, Product},
        methods:{
            ...mapActions('basketModule',['loadToCart', 'deleteFromCart','addPending']),
            ...mapGetters('basketModule',['getBasket']),
            /**
             * Добавление товара в корзину по клику
             */
            addToCart(product){
                if (!this.item(product.id)){
                    this.loadToCart(product);
                    this.addPending(product.id)
                    setTimeout(() => {
                        this.addPending(false);
                    },1000)
                } else {
                    this.deleteFromBasket(product)
                }
            },
            /**
             * Удаление товара из корзины по клику
             */
            deleteFromBasket(product){
                this.deleteFromCart(product)
                this.addPending(false);
            }
        },
        computed:{
            ...mapGetters('basketModule',['getPending']),
            ...mapGetters('basketModule',['getItemIds','getItemInBasket']),
            /**
             * Текст кнопки при разных состояниях
             * @returns {string}
             */
            pending(){
                return this.getPending
            },
            /**
             * Проверка по id наличия такого товара в корзине в корзине
             * @param {id}
             * @returns {Boolean}
             */
            item(){
                return this.getItemInBasket
            },
            /**
             * Проверка по id наличия такого id в корзине
             * @param {id}
             * @returns {String}: "...", "В корзине", "Добавить в корзину"
             */
            nameButton(){
                return this.getItemIds
            },
        }
    }
</script>

<style lang="scss" module>
    @import "Catalog.module";
</style>