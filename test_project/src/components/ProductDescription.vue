<!--Всплывающее окно с описанием товара-->
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
            <a @click="goToDescription" :class="[activeLink === 'description' ? activeClass:'', otherClass]">Описание</a>
            <a @click="goToParametrs" :class="[activeLink === 'parametrs' ? activeClass:'', otherClass]">Характеристики</a>
            <a @click="goToReviews" :class="[activeLink === 'reviews' ? activeClass:'', otherClass]">Отзывы</a>
            <a @click="goToFormReview" :class="[activeLink === 'form_review' ? activeClass:'', otherClass]">Оставить отзыв</a>
        </div>

        <div v-if="activeLink=='description'" class="modal_product_transitions" v-html="description">
<!--            здесь вставится html-код с описанием товара-->
        </div>

<!--    Блок с параметрами товара       -->
        <ProductParametrs v-if="activeLink=='parametrs'"
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

        <div v-if="activeLink=='form_review'" class="form_review" >
             <span class="form_review_mark">Оценка</span>

<!--            Здесь будет рейтинг товара виде звёзд-->
            <StarRating v-bind:mark="mark" @update="onStepUpdate" />



             <label class="form_review_label" for="name">Имя</label>
            <!--         Указание на ошибку пустого поля -->
            <div v-if="errors.length">
                 <span v-for="error in errors" v-bind:key="error">
                      <span v-if="error == 'textError'"  class="header_basket_content_form_block_error">
                           Поле не должно быть пустым
                      </span>
                 </span>
            </div>
             <input :class="[errors.indexOf('textError') ? errorClass:'', normClass ]" type="text" id="name"
                        v-model="author">

             <label class="form_review_label" for="review">Отзыв</label>
            <!--         Указание на ошибку пустого поля -->
            <div v-if="errors.length">
                 <span v-for="error in errors" v-bind:key="error">
                      <span v-if="error == 'authorError'"  class="header_basket_content_form_block_error">
                           Поле не должно быть пустым
                      </span>
                 </span>
            </div>
            <textarea :class="[errors.indexOf('authorError') ? errorClass:'', normClassArea]"  name="review" id="review" v-model="text">
                Он подходит именно для питья, для утоления жажды. Этот квас сильногазированный. После вскрытия бутылки газ сохраняется в ней в течении суток. Квас сладкий, послевкусие придаёт небольшую кислинку. Квас тёмного цвета.
            </textarea>
            <Button :method="checkForm" value="Отправить отзыв"/>
<!--            <button  @click="checkForm" class="form_review_btn">Отправить отзыв</button>-->
        </div>

    </div>
</template>

<script>
    import StarRating from "./StarRating";
    import ProductParametrs from "./ProductParametrs";
    import ProductReviews from "./ProductReviews";
    import Button from "./Button/Button";
    export default {
        name: "ProductDescription",
        props:['product'],
        components: {Button, ProductReviews, ProductParametrs, StarRating},
        data(){
            return {
                isAdded:false,//добавлен ли товар
                activeLink:'description',
                activeClass:'activeLinkInDescription',
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
                text:'',
                errors:[],
                errorClass:'errorClass',
                normClass:'form_review_input',
                normClassArea:'form_review_textarea'
            }
        },
        //с этого метода программа начинает работать
        mounted() {
            let find = this.$store.state.basket.find((element) => element.id === this.product.id);
            if (find){
                this.isAdded = true;
            } else {
                this.isAdded = false;
            }
            //Запрос к API для получения информации о товаре
                fetch(`http://test1.web-gu.ru/?action=show_product&id=${this.product.id}`)
                    .then(response => response.json())
                    .then(data => {
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
                this.$store.state.showloader = true
                this.author = '';
                this.text = '';
                setTimeout(() => {
                    this.$store.state.showloader = false;
                    this.reviews.push(element);
                },1000)
                console.log(this.reviews)
            },
            //для передачи из дочернего компонента в родительский
            onStepUpdate(newData){
                this.mark = newData;
            },
            //проверить форму на ошибки
            checkForm:function() {
                //Если нет имени, то выйдет ошибка
                if(!this.author) this.errors.push("authorError");
                if(!this.text) this.errors.push("textError");
                if(!this.errors.length){
                    console.log(this.errors)
                    this.$store.state.showloader=true;
                    setTimeout(()=>{
                        this.addNewReview()
                        this.$store.state.showloader=false;
                    },1000)
                }
            },
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