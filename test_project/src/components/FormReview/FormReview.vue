<template>
    <form :class="$style['form-review']" @submit="checkForm">
        <span :class="$style['form-review__mark']">Оценка</span>

        <!--            Здесь будет рейтинг товара виде звёзд-->
        <StarRating v-bind:mark="mark" @update="onStepUpdate" />

        <Input :class="$style['form-review__input']" label="Имя" :errors="errors" :element="author" error="nameError" v-model="$parent.author" value="$parent.author"/>

        <label :class="$style['form-review__label']" for="review">Отзыв</label>
        <textarea :class="[errors.indexOf('nameError') ? $style['form-review__error'] : $style['form-review__textarea']]"  name="review" id="review" v-model="$parent.text">
            </textarea>
        <ErrorFormBasket v-if="text==''" :errors="errors" error="nameError" :class="$style['form-review__errorTextarea']" />

        <Button type="submit">Отправить отзыв</Button>
    </form>
</template>

<script>
    import StarRating from "../StarRating/StarRating";
    import Button from "../Button/Button";
    import Input from "../Input/Input";
    import ErrorFormBasket from "../ErrorFromBasket/ErrorFormBasket";
    export default {
        name: "FormReview",
        components: {ErrorFormBasket, Input,Button, StarRating},
        props:{
            author:{
                type:String,
                required:true,
                default:'User',
            },
            text:{
                type:String,
                required: true,
            },
            errors:{
                type: Array,
                required:true,
                default: () => [],
            },
            mark:{},
            onStepUpdate: {},
            checkForm:{}
        }
    }
</script>

<style lang="scss" module>
    @import "FormReview.module";
</style>