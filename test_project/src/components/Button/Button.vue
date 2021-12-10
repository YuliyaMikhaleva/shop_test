<template>
    <button :type="type" :class="$style.button" @click="$emit('on-click')">
                    <slot/>
        <svg v-if="inBasket"  :class="$style.button__svg" width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99147 13.4124L1.77601 8.12603L0 9.9135L6.99147 17L22 1.78747L20.2365 0L6.99147 13.4124Z" fill="white"/>
        </svg>
    </button>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Button",
        props:{
            type: {
                type:String,
                required: true,
                default:'button',
                validator:function (value) {
                    return ['button','submit','reset'].indexOf(value) !==-1
                }
            },
            inBasket:{
                type:Boolean,
                required: true,
            }
        },
        computed:{
            ...mapGetters('basketModule',['getItemIds']),
        }
    }
</script>

<style lang="scss" module>
@import "Button.module";
</style>