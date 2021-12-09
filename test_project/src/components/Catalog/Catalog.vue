<template>
    <section :class="$style.catalog">
        <Product
                :product="product"
                :pending="pending"
                :method="addToCart"
                :class="$style.catalog__product"
                :key="product.id"
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
                let find = this.getBasket().find((element) => element.id === product.id)
                if (!find){
                    this.loadToCart(product);
                    this.addPending('pending'+ product.id)
                    setTimeout(() => {
                        this.addPending(product.id);
                    },1000)
                } else  {
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
            /**
             * Текст кнопки при разных состояниях
             * @returns {string}
             */
            pending(){
                return this.getPending
            }
        }

    }
</script>

<style lang="scss" module>
    @import "Catalog.module";
</style>