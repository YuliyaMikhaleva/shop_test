<template>
    <button :type="type" :class="$style.button" @click="method">
                    {{text}}
        <svg v-if="isLoading===true"  :class="$style.button__svg" width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99147 13.4124L1.77601 8.12603L0 9.9135L6.99147 17L22 1.78747L20.2365 0L6.99147 13.4124Z" fill="white"/>
        </svg>
    </button>
</template>

<script>
    /**
     * @ревью 
     * Используем ползовательские события вместо пропа method
     * 
     * @see https://ru.vuejs.org/v2/guide/components-custom-events.html
     * 
     */  
    export default {
        name: "Button",
        props:['isLoading', 'method','type','value'],
        computed:{
            text(){ 
                /**
                 * @ревью копмонент пока не универсален
                 * - Не учтена возможность добавить другой другой текст
                 * - На практике часто в один компонент приходится вставлять другой компонент, рекомендую присмотреться к слотам во вью
                 * 
                 * @see https://ru.vuejs.org/v2/guide/components-slots.html#ad
                 */
                if (this.value) {
                    return this.value
                } else if (this.isLoading === false){
                    return "Добавить в корзину"
                } else if (this.isLoading === 'pending'){
                    return "..."
                } else {
                    return "В корзине"
                }
            }
        }
    }
</script>

<style lang="scss" module>
@import "Button.module";
</style>