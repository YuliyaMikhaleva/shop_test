<template>
    <form :class="$style['form-review']" @submit="checkForm">
        <span :class="$style['form-review__mark']">Оценка</span>

        <!--            Здесь будет рейтинг товара виде звёзд-->
        <StarRating v-bind:mark="mark" @update="onStepUpdate" />

        <Input :class="$style['form-review__input']" label="Имя" :errors="errors" :element="$parent.author" error="nameError" v-model="$parent.author" value="$parent.author"/>

        <label :class="$style['form-review__label']" for="review">Отзыв</label>
        <textarea :class="[errors.indexOf('nameError') ? $style['form-review__error'] : $style['form-review__textarea']]"  name="review" id="review" v-model="$parent.text">
            </textarea>
        <ErrorFormBasket v-if="$parent.text==''" :errors="errors" error="nameError" :class="$style['form-review__errorTextarea']" />

        <Button type="submit" :method="checkForm" value="Отправить отзыв"/>
    </form>
</template>

<script>
    import StarRating from "../StarRating";
    import Button from "../Button/Button";
    import Input from "../Input/Input";
    import ErrorFormBasket from "../ErrorFromBasket/ErrorFormBasket";
    export default {
        name: "FormReview",
        components: {ErrorFormBasket, Input,Button, StarRating},
        props:['author','text','errors','mark','onStepUpdate','checkForm'],
    }
</script>

<style lang="scss" module>
    @import "FormReview.module";
</style>