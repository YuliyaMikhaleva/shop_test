<!--Всплывающее окно с описанием товара (само содержимое)-->
<template>
    <div :class="$style['modal-product']" >
        <a type="button" data-bs-toggle="modal" data-bs-target="#productsTransition">
            <img :class="$style['modal-product__img']" :src="product.img" width="565" height="341" alt="photo" />
        </a>
        <h3 :class="$style['modal-product__name']" >{{ product.name }}</h3>
        <span :class="$style['modal-product__price']" ><span> {{ product.price }}</span> ₽</span>
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

        <div :class="$style['modal-product__links']">
            <LinkInModal :method="goToDescription" title="Описание" block="description" :activeLink="link" />
            <LinkInModal :method="goToParametrs" title="Характеристики" block="parametrs" :activeLink="link" />
            <LinkInModal :method="goToReviews" title="Отзывы" block="reviews" :activeLink="link" />
            <LinkInModal :method="goToFormReview" title="Оставить отзыв" block="form_review" :activeLink="link" />
        </div>

        <section v-if="activeLink=='description'" v-html="description">
<!--            здесь вставится html-код с описанием товара-->
        </section>

<!--    Блок с параметрами товара       -->
        <ProductParametrs :class="$style['modal-product__parametrs']" v-if="activeLink=='parametrs'"
                :height="height"
                :valueHeight="valueHeight"
                :measureHeight="measureHeight"
                :width="width"
                :valueWidth="valueWidth"
                :measureWidth="measureWidth"
                :length="length"
                :valueLength="valueLength"
                :measureLength="measureLength"
        />
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
    export default {
        name: "ProductDescription",
        props:['product'],
        components: {FormReview, LinkInModal, ProductReviews, ProductParametrs},
        data(){
            return {
                isAdded:false,//добавлен ли товар
                activeLink:'description',
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
                text:'',
                errors:[],
            }
        },
        //с этого метода программа начинает работать
        mounted() {
            let find = this.$store.getters.getBasket.find((element) => element.id === this.product.id);
            if (find){
                this.isAdded = true;
            } else {
                this.isAdded = false;
            }

            // поиск элемента в базе данных и необходимых свойств
            let element = this.$store.getters.getDescription.find((el) => el.id === this.product.id)
            console.log('ELEMENT:',this.$store.getters.getDescription)
            this.description = element.descr;
            this.width = element.props.width.caption;
            this.valueWidth = element.props.width.value;
            this.measureWidth = element.props.width.measure;
            this.height = element.props.height.caption;
            this.valueHeight = element.props.height.value;
            this.measureHeight = element.props.height.measure;
            this.length = element.props.length.caption;
            this.valueLength = element.props.length.value;
            this.measureLength = element.props.length.measure;
            this.reviews = element.reviews
         },
        methods:{
            //добавить в корзину
            addToCart(){
                this.$store.dispatch('loadToCart', this.product);
                this.isAdded = true;
            },
            //удалить из корзины
            deleteFromBasket(){
                this.$store.commit('deleteProduct', this.product);
                this.isAdded = false;
            },
            //перейти на вкладку "описание"
            goToDescription(){
                this.activeLink='description';
                console.log(this.activeLink)
            },
            //перейти на вкладку "параметры"
            goToParametrs(){
                this.activeLink='parametrs';
            },
            //перейти на вкладку "отзывы"
            goToReviews(){
                this.activeLink='reviews';
            },
            //перейти на вкладку "добавить отзывы"
            goToFormReview(){
                this.activeLink='form_review';
            },
            //добавить новый отзыв
            addNewReview(){
                const element = Object.assign({
                    author: this.author,
                    rate: this.mark,
                    avatar: 'https://ob-kassa.ru/content/front/buhoskol_tmp1/images/reviews-icon.jpg',
                    text: this.text
                })
                this.$store.commit('turnOnShowloader');
                this.author = '';
                this.text = '';
                setTimeout(() => {
                    this.$store.commit('turnOfShowloader');
                    this.reviews.push(element);
                },1000)
            },
            //для передачи из дочернего компонента в родительский
            onStepUpdate(newData){
                this.mark = newData;
            },
            //проверить форму на ошибки
            checkForm:function(e) {
                e.preventDefault();
                this.errors=[]
                //Если нет имени, то выйдет ошибка
                if(!this.author) this.errors.push("authorError");
                if(!this.text) this.errors.push("textError");
                if(!this.errors.length){
                    this.$store.commit('turnOnShowloader');
                    setTimeout(()=>{
                        this.addNewReview()
                        this.$store.commit('turnOfShowloader');
                    },1000)
                }
            },
        },
        computed:{
            basket(){
                return this.$store.getters.getCart
            },
            link(){
                return this.activeLink
            }
        },
    }
</script>

<style lang="scss" module>
    @import "ProductDescription.module";
</style>