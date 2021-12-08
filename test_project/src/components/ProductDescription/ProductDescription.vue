<!--Всплывающее окно с описанием товара (само содержимое)-->
<template>
    <div :class="$style['modal-product']" >
        <button style="background-color: transparent; border: none; padding: 0" data-bs-toggle="modal" :data-bs-target="'#' + 'N' + product.id">
            <img :class="$style['modal-product__img']" :src="product.img" width="565" height="341" alt="photo" />
        </button>
        <h3 :class="$style['modal-product__name']" >{{ product.name }}</h3>
        <span :class="$style['modal-product__price']" ><span> {{ product.price }}</span> ₽</span>
        <div class="modal fade" :id="product.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="product.id+'N'+'Label'" aria-hidden="true">
            <div style="display: flex; justify-content: flex-end">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div>
                            <div>
                                <h5>Информация</h5>
                                <button type="button" data-bs-dismiss="modal">
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
            <template v-for="item of Object.keys(info)">
                    <LinkInModal
                            :key="item"
                            @on-click="goToBlock(item)"
                            :title="(item=='description')?'Описание':((item == 'parametrs')?'Характеристики':((item == 'reviews')?'Отзывы':'Добавить отзывы'))"
                            :block="item" :activeLink="link"
                    />
            </template>
        </div>

        <section v-if="activeLink=='description'" v-html="info.description">
<!--            здесь вставится html-код с описанием товара-->
        </section>

<!--    Блок с параметрами товара       -->
        <ProductParametrs :class="$style['modal-product__parametrs']" v-if="activeLink=='parametrs'" :params="info.parametrs"/>

<!--    Блок с отзывами о товаре       -->
        <ProductReviews v-if="activeLink=='reviews'" :reviews="info.reviews"/>

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
                activeLink:'',
                info:{
                    description:"",
                    parametrs:{},
                    reviews:[],
                    form_review:""
                },
                headers:['Описание', 'Характеристики', 'Отзывы', 'Добавить отзывы'],
                mark:5,
                author: '',
                text:'',
                errors:[],
            }
        },
        mounted() {
            // поиск элемента в базе данных и необходимых свойств
            let element = this.getDescription.find((el) => el.id === this.product.id)
            this.info.description = element.descr;
            this.info.parametrs = element.props;
            this.info.reviews = element.reviews;
            this.activeLink = Object.keys(this.info)[0];
         },
        methods:{
            ...mapActions('showloaderModule',['addShowloader', 'deleteShowloader']),
            /**
             * Перейти на какую-либо вкладку описания товара
             */
            goToBlock(tab){
                  this.activeLink=tab;
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
                    this.info.reviews.push(element);
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
            },
        },
    }
</script>

<style lang="scss" module>
    @import "ProductDescription.module";
</style>