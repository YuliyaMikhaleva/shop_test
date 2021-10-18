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
            <a @click="goToTransition" :class="[activeLink === 'transition' ? activeClass:'', otherClass]">Описание</a>
            <a @click="goToParametrs" :class="[activeLink === 'parametrs' ? activeClass:'', otherClass]">Характеристики</a>
            <a @click="goToReviews" :class="[activeLink === 'reviews' ? activeClass:'', otherClass]">Отзывы</a>
            <a @click="goToFormReview" :class="[activeLink === 'form_review' ? activeClass:'', otherClass]">Оставить отзыв</a>
        </div>
        <div v-if="activeLink=='transition'" class="modal_product_transitions" v-html="description">
<!--            <p>VIKING A3 - удобное кресло, которое станет удачным выбором для домашнего использования и для офиса. Кресло выдерживает нагрузку до 181 кг. Высота сиденья регулируется при помощи надежного механизма. Спинка качается, при желании ее можно прочно зафиксировать в вертикальном положении. Эргономичная конструкция помогает снизить нагрузку на мышцы и уменьшить усталость от долгой работы за компьютером. Кресло закреплено на прочной и устойчивой </p>-->
        </div>
        <div v-if="activeLink=='parametrs'" class="modal_product_parametrs">
            <div class="modal_product_parametrs_line">
                <span>{{height}}</span>
                <div>
                    <span style="margin-right: 3px">{{valueHeight}}</span>
                    <span>{{measureHeight}}</span>
                </div>

            </div>
            <div class="modal_product_parametrs_line">
                <span>{{width}}</span>
                <div>
                    <span style="margin-right: 3px">{{valueWidth}}</span>
                    <span>{{measureWidth}}</span>
                </div>

            </div>
            <div class="modal_product_parametrs_line">
                <span>{{length}}</span>
                <div>
                    <span style="margin-right: 3px">{{valueLength}}</span>
                    <span>{{measureLength}}</span>
                </div>
            </div>
        </div>
        <div v-if="activeLink=='reviews'">
            <div class="review" v-bind:key="review.author" v-for="review of reviews" v-bind:review="review">
                <img class="review_photo" style="border-radius: 50%" :src="review.avatar" alt="avatar" width="50" height="50">
                <div class="review_block">
                    <div class="review_block_header">
                        <span class="review_block_header_name">{{review.author}}</span>
                        <img class="review_block_header_reiting" src="../assets/img/reiting.png" alt="reiting" width="103" height="18">
                    </div>
                    <p class="review_txt">{{review.text}}</p>
                </div>
            </div>
        </div>
        <div v-if="activeLink=='form_review'" class="form_review" >
             <span class="form_review_mark">Оценка</span>
             <img class="form_review_img" src="../assets/img/reiting.png" alt="reiting">
             <label class="form_review_label" for="name">Имя</label>
             <input class="form_review_input" type="text" id="name"
                       placeholder="Ул. Пушкина, дом колотушкина">
             <label class="form_review_label" for="review">Отзыв</label>
            <textarea class="form_review_textarea" name="review" id="review" >
                Он подходит именно для питья, для утоления жажды. Этот квас сильногазированный. После вскрытия бутылки газ сохраняется в ней в течении суток. Квас сладкий, послевкусие придаёт небольшую кислинку. Квас тёмного цвета.
            </textarea>
            <button  class="form_review_btn">Отправить отзыв</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ProductInTransition",
        props:['product'],
        data(){
            return {
                isAdded:false,//добавлен ли товар
                activeLink:'transition',
                activeClass: 'activeLinkInTransition',
                otherClass:'modal_product_links_item',
                description:'',//описание товара
                width:'',//параметр ширина
                valueWidth:'',//значение ширины
                measureWidth:'',//единицы измерения
                height:'',//параметр высота
                valueHeight:'',//значение высоты
                measureHeight:'',//единицы измерения
                length:'',//параметр глубина
                valueLength:'',//значение глубины
                measureLength:'',//единицы измерения
                reviews:[],//массив отзывов

            }
        },
        mounted() {
            let find = this.$store.state.basket.find((element) => element.id === this.product.id);
            if (find){
                this.isAdded = true;
            } else {
                this.isAdded = false;
            }
            // function getInfoAboutProduct() {
                fetch(`http://test1.web-gu.ru/?action=show_product&id=${this.product.id}`)
                    .then(response => response.json())
                    .then(data => {
                        // const info = data.filter((e) => e.parent_id === 17)
                        this.description = data.descr;
                        this.width = data.props.width.caption;
                        this.valueWidth = data.props.width.value;
                        this.measureWidth = data.props.width.measure;
                        this.height = data.props.height.caption;
                        this.valueHeight = data.props.height.value;
                        this.measureHeight = data.props.height.measure;
                        this.length = data.props.length.caption;
                        this.valueLength = data.props.length.value;
                        this.measureLength = data.props.length.measure;
                        this.reviews = data.reviews
                    });
            // }

        },
        methods:{
            addToCart(){
                this.$store.dispatch('loadToCart', this.product);
                this.isAdded = true;
            },
            deleteFromBasket(){
                this.$store.commit('deleteProduct', this.product);
                this.isAdded = false;
            },
            goToTransition(){
                this.activeLink='transition';
            },
            goToParametrs(){
                this.activeLink='parametrs';
            },
            goToReviews(){
                this.activeLink='reviews';
            },
            goToFormReview(){
                this.activeLink='form_review';
            }

        },
        computed:{
            basket(){
                return this.$store.getters.getCart
            },
        },


    }
</script>

<style scoped>

</style>