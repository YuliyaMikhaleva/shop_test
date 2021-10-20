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
                        <div>
                            <span v-bind:key="n" v-for="n of review.rate">
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5468 5.72227L17.9471 6.03531C18.97 6.08748 19.3686 7.36199 18.5939 7.98806L14.3895 11.4315L15.7584 16.619C16.0141 17.5954 14.9235 18.3556 14.0812 17.8264L9.47815 14.9271L4.92027 17.8189C4.03276 18.3854 2.93466 17.5134 3.25807 16.5444L4.59685 11.3868L0.407516 7.98061C-0.382216 7.33963 0.0540168 6.08748 1.04682 6.02786L6.48469 5.69246L8.45526 0.698757C8.8238 -0.240357 10.1626 -0.225451 10.5311 0.698757L12.5468 5.72227ZM11.3961 6.9297C11.4562 7.08622 11.6067 7.18311 11.7721 7.18311H11.7947L16.8415 7.47379L12.8778 10.7234C12.7499 10.8278 12.7048 10.9992 12.7499 11.1557L12.7574 11.1781L14.036 16.0227L9.69626 13.2874C9.56088 13.1979 9.38037 13.2054 9.24499 13.3023L9.22995 13.3097L4.96539 16.0227L6.25153 11.0812C6.28913 10.9321 6.23649 10.7756 6.11615 10.6787L2.16749 7.46633L7.29698 7.1533C7.45493 7.14585 7.59031 7.04895 7.65048 6.89989L9.50823 2.18941L11.3961 6.9297Z" fill="#F1C450"/>
                                </svg>
                            </span>
                           <span v-bind:key="n" v-for="n of (5-review.rate)">
                                <svg class="review_block_header_reiting" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5468 5.72227L17.9471 6.03531C18.97 6.08748 19.3686 7.36199 18.5939 7.98806L14.3895 11.4315L15.7584 16.619C16.0141 17.5954 14.9235 18.3556 14.0812 17.8264L9.47815 14.9271L4.92027 17.8189C4.03276 18.3854 2.93466 17.5134 3.25807 16.5444L4.59685 11.3868L0.407516 7.98061C-0.382216 7.33963 0.0540168 6.08748 1.04682 6.02786L6.48469 5.69246L8.45526 0.698757C8.8238 -0.240357 10.1626 -0.225451 10.5311 0.698757L12.5468 5.72227ZM11.3961 6.9297C11.4562 7.08622 11.6067 7.18311 11.7721 7.18311H11.7947L16.8415 7.47379L12.8778 10.7234C12.7499 10.8278 12.7048 10.9992 12.7499 11.1557L12.7574 11.1781L14.036 16.0227L9.69626 13.2874C9.56088 13.1979 9.38037 13.2054 9.24499 13.3023L9.22995 13.3097L4.96539 16.0227L6.25153 11.0812C6.28913 10.9321 6.23649 10.7756 6.11615 10.6787L2.16749 7.46633L7.29698 7.1533C7.45493 7.14585 7.59031 7.04895 7.65048 6.89989L9.50823 2.18941L11.3961 6.9297Z" fill="#E4E4E4"/>
                                </svg>
                            </span>
                        </div>

<!--                        <img class="review_block_header_reiting" src="../assets/img/reiting.png" alt="reiting" width="103" height="18">-->
                    </div>
                    <p class="review_txt">{{review.text}}</p>
                </div>
            </div>
        </div>
        <div v-if="activeLink=='form_review'" class="form_review" >
             <span class="form_review_mark">Оценка</span>
            <StarRating v-bind:mark="mark" @update="onStepUpdate" />
<!--             <img class="form_review_img" src="../assets/img/reiting.png" alt="reiting">-->
             <label class="form_review_label" for="name">Имя</label>
             <input class="form_review_input" type="text" id="name"
                        v-model="author">
             <label class="form_review_label" for="review">Отзыв</label>
            <textarea class="form_review_textarea" name="review" id="review" v-model="text">
                Он подходит именно для питья, для утоления жажды. Этот квас сильногазированный. После вскрытия бутылки газ сохраняется в ней в течении суток. Квас сладкий, послевкусие придаёт небольшую кислинку. Квас тёмного цвета.
            </textarea>
            <button  @click="addNewReview" class="form_review_btn">Отправить отзыв</button>
        </div>
    </div>
</template>

<script>
    import StarRating from "./StarRating";
    export default {
        name: "ProductInTransition",
        props:['product'],
        components: {StarRating},
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
                mark:5,
                author: '',
                text:''
            }
        },
        mounted() {
            let find = this.$store.state.basket.find((element) => element.id === this.product.id);
            if (find){
                this.isAdded = true;
            } else {
                this.isAdded = false;
            }
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
            },
            addNewReview(){
                const element = Object.assign({
                    author: this.author,
                    rate: this.mark,
                    avatar: 'https://ob-kassa.ru/content/front/buhoskol_tmp1/images/reviews-icon.jpg',
                    text: this.text
                })
                this.reviews.push(element);
                console.log(this.reviews)
            },
            onStepUpdate(newData){
                this.mark = newData;
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