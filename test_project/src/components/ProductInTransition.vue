<template>
    <div class="modal_product" >
        <a type="button" data-bs-toggle="modal" data-bs-target="#productsTransition">
            <img  class="modal_product_img" :src="product.img" width="565" height="341" alt="photo" />
        </a>
        <h3 class="modal_product_name">{{ product.name }}</h3>
        <span class="modal_product_price"><span> {{ product.price }}</span> ₽</span>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal_product_links">
            <a class="modal_product_links_item">Описание</a>
            <a class="modal_product_links_item">Характеристики</a>
            <a class="modal_product_links_item">Отзывы</a>
            <a class="modal_product_links_item">Оставить отзыв</a>
        </div>
        <div class="modal_product_transitions">
            <p>VIKING A3 - удобное кресло, которое станет удачным выбором для домашнего использования и для офиса. Кресло выдерживает нагрузку до 181 кг. Высота сиденья регулируется при помощи надежного механизма. Спинка качается, при желании ее можно прочно зафиксировать в вертикальном положении. Эргономичная конструкция помогает снизить нагрузку на мышцы и уменьшить усталость от долгой работы за компьютером. Кресло закреплено на прочной и устойчивой </p>
        </div>
        <div class="modal_product_parametrs">
            <div class="modal_product_parametrs_line">
                <span>Высота</span>
                <span>50 мм</span>
            </div>
            <div class="modal_product_parametrs_line">
                <span>Ширина</span>
                <span>60 мм</span>
            </div>
            <div class="modal_product_parametrs_line">
                <span>Красота</span>
                <span>60 мм</span>
            </div>
        </div>

        <div class="review">
            <img class="review_photo" src="../assets/img/avatar.png" alt="avatar" width="50" height="50">
            <div class="review_block">
                <div class="review_block_header">
                    <span class="review_block_header_name">Олег Олегов</span>
                    <img class="review_block_header_reiting" src="../assets/img/reiting.png" alt="reiting" width="103" height="18">
                </div>
                <p class="review_txt">Он подходит именно для питья, для утоления жажды. Этот квас сильногазированный. После вскрытия бутылки газ сохраняется в ней в течении суток. Квас сладкий, послевкусие придаёт небольшую кислинку. Квас тёмного цвета.</p>

            </div>
        </div>
        <div class="review">
            <img class="review_photo" src="../assets/img/avatar.png" alt="avatar" width="50" height="50">
            <div class="review_block">
                <div class="review_block_header">
                    <span class="review_block_header_name">Олег Олегов</span>
                    <img class="review_block_header_reiting" src="../assets/img/reiting.png" alt="reiting" width="103" height="18">
                </div>
                <p class="review_txt">Он подходит именно для питья, для утоления жажды. Этот квас сильногазированный. После вскрытия бутылки газ сохраняется в ней в течении суток. Квас сладкий, послевкусие придаёт небольшую кислинку. Квас тёмного цвета.</p>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductInTransition",
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