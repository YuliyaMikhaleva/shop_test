<!--Всплывающее окно с описанием товара (само содержимое)-->
<template>
    <div :class="$style['modal-product']" >
        <a type="button" data-bs-toggle="modal" :data-bs-target="'#' + 'N' + product.id">
            <img :class="$style['modal-product__img']" :src="product.img" width="565" height="341" alt="photo" />
        </a>
        <h3 :class="$style['modal-product__name']" >{{ product.name }}</h3>
        <span :class="$style['modal-product__price']" ><span> {{ product.price }}</span> ₽</span>
        <div class="modal fade" :id="product.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="product.id+'N'+'Label'" aria-hidden="true">
            <div style="display: flex; justify-content: flex-end">
                <!--
                    @review
                    Классы пишем по БЕМу, видимо тут забыли заменить
                -->
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

        <div :class="$style['modal-product__links']">
            <LinkInModal @on-click="goToDescription" title="Описание" block="description" :activeLink="link" />
            <LinkInModal @on-click="goToParametrs" title="Характеристики" block="parametrs" :activeLink="link" />
            <LinkInModal @on-click="goToReviews" title="Отзывы" block="reviews" :activeLink="link" />
            <LinkInModal @on-click="goToFormReview" title="Оставить отзыв" block="form_review" :activeLink="link" />
        </div>

        <section v-if="activeLink=='description'" v-html="description">
<!--            здесь вставится html-код с описанием товара-->
        </section>

<!--    Блок с параметрами товара       -->
        <ProductParametrs :class="$style['modal-product__parametrs']" v-if="activeLink=='parametrs'" :params="params"/>

<!--    Блок с отзывами о товаре       -->
        <ProductReviews v-if="activeLink=='reviews'" :reviews="reviews"/>

<!--    Блок с формой для добавления отзывов о товаре       -->
        <FormReview v-if="activeLink=='form_review'"
         :author="author" :text="text" :errors="errors" :mark="mark" :onStepUpdate="onStepUpdate" :checkForm="checkForm"/>

    </div>
</template>

<script>
    import ProductParametrs from "../ProductParametrs/ProductParametrs";
    import ProductReviews from "../ProductReviews/ProductReviews";
    import LinkInModal from "../LinkInModal/LinkInModal";
    import FormReview from "../FormReview/FormReview";
    import {mapGetters, mapActions} from "vuex"
    export default {
        name: "ProductDescription",
        props:{
            product:{
                type:Object,
                required:true,
            }
        },
        components: {FormReview, LinkInModal, ProductReviews, ProductParametrs},
        data(){
            return {
                isAdded:false,//добавлен ли товар
                activeLink:'description',
                description:'',//описание товара
                params:{},//характеристики товаров
                reviews:[],//массив отзывов
                mark:5,
                author: '',
                text:'',
                errors:[],
            }
        },
        mounted() {
            // поиск элемента в базе данных и необходимых свойств
            let element = this.getDescription.find((el) => el.id === this.product.id)
            this.description = element.descr;
            this.params = element.props;
            this.reviews = element.reviews
         },
        methods:{
            ...mapActions('showloaderModule',['addShowloader', 'deleteShowloader']),
            /**
             * @review
             * Тоже стоит сделать более универсальное решение, которое не потребует
             * добавления кода в несколько мест просто для того, чтобы добавить еще одну вкладку.
             * То есть у нас должен быть массив или объект, в котором хранится вся нужная информация,
             * и исходя из этого массива мы уже выводим и табы и ссылки на них.
             */
            /**
             * Перейти на вкладку "описание"
             */
            goToDescription(){
                this.activeLink='description';
            },
            /**
             * перейти на вкладку "параметры"
             */
            goToParametrs(){
                this.activeLink='parametrs';
            },
            /**
             * перейти на вкладку "отзывы"
             */
            goToReviews(){
                this.activeLink='reviews';
            },
            /**
             * перейти на вкладку "добавить отзывы"
             */
            goToFormReview(){
                this.activeLink='form_review';
            },
            /**
             * Добавить новый отзыв
             */
            addNewReview(){
                const element = {
                    author: this.author,
                    rate: this.mark,
                    avatar: 'https://ob-kassa.ru/content/front/buhoskol_tmp1/images/reviews-icon.jpg',
                    text: this.text
                };
                this.author = '';
                this.text = '';
                setTimeout(() => {
                    this.reviews.push(element);
                },1000)
            },
            //для передачи из дочернего компонента в родительский
            onStepUpdate(newData){
                this.mark = newData;
            },
            /**
             * Проверить форму на ошибки
             * @param e
             */
            checkForm:function(e) {
                e.preventDefault();
                this.errors=[]
                if(!this.author) this.errors.push("authorError");
                if(!this.text) this.errors.push("textError");
                if(!this.errors.length){
                    this.addShowloader();
                    setTimeout(()=>{
                        this.addNewReview()
                        this.deleteShowloader();
                    },1000)
                }
            },
        },
        computed:{
            ...mapGetters('basketModule', ["getBasket"]),
            ...mapGetters('infoModule',['getDescription']),
            ...mapActions('basketModule',['loadToCart']),
            /**
             * Активная ссылка
             * @return {string}
             */
            link(){
                return this.activeLink
            }
        },
    }
</script>

<style lang="scss" module>
    @import "ProductDescription.module";
</style>
