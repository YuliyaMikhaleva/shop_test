<!--Карточка товара в каталоге-->
<template>
    <article :class="$style['catalog-card']" >
        <button :class="$style['catalog-card__link']"  type="button" data-bs-toggle="modal" :data-bs-target="'#' + 'N' + product.id">
						<!-- @ревью если в карточку попадёт широкая или большая картинка, то она искажается -->
            <img  :class="$style['catalog-card__img']" src="https://ilifes.ru/wp-content/uploads/2019/05/frog-face.jpg" alt="photo" />
        </button>
        <button :class="$style['catalog-card__link']"  type="button" data-bs-toggle="modal" :data-bs-target="'#' + 'N' + product.id">
            <h3 :class="$style['catalog-card__title']" >{{ product.name }}</h3>
        </button>
        <span :class="$style['catalog-card__price']" ><span> {{ product.price }}</span> ₽</span>

        <Button :class="$style['catalog-card__button']"
                type="button"
                @on-click="$parent.addToCart(product)"
                :inBasket="(nameButton==='В корзине' && true)">{{nameButton}}</Button>

        <div class="modal fade" :id="'N'+product.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="'N'+product.id+'Label'" aria-hidden="true">
            <ModalDescription :class="$style.modal" :product="product"/>
        </div>
    </article>
</template>

<script>
    import Button from "../Button/Button";
    import ModalDescription from "../ModalDescription/ModalDescription"

    export default {
        name: "Product",
        components: {ModalDescription, Button},
        props:{
            product:{
                type:Object,
                required:true,
            },
            pending:{
                type:[Boolean,Number],
                required:true,
            },
            nameButton:{
                type:String,
                required:true,
            },
        },
    }
</script>

<style lang="scss" module>
@import "Product.module.scss";
</style>
