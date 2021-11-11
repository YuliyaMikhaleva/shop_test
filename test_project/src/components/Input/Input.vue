<template>
    <div :class="$style['input-block']">
        <label :for="element" :class="$style['input-block__label']">{{label}}</label>
        <input :class="[errors.indexOf(error) ? $style['input-block__error']  : $style['input-block__input'] ]"
                type="text" :id="element" @input="$emit('input', $event.target.value)" :value="element">
        <ErrorFormBasket :errors="errors" :error="error" :element="element"/>
        <div v-if="errors.length && label==='Телефон'">
            <span v-for="error in errors" v-bind:key="error">
                <span v-if="error == 'phoneError'"  :class="$style['input-block__errorText']">
                    Номер телефона должен быть указан в следующей форме: +7(950)45-84-345
                </span>
            </span>
        </div>
    </div>
</template>

<script>
    import ErrorFormBasket from "../ErrorFromBasket/ErrorFormBasket";
    export default {
        name: "Input",
        components: {ErrorFormBasket},
        props:['label','errors','element','error'],
}
</script>

<style lang="scss" module>
@import "Input.module";
</style>