<!--Ошибка в форме корзины-->
<template>
    <div v-if="errors.length">
         <span v-for="error in errors" v-bind:key="error">
               <span v-if="error == 'nameError'"  class="header_basket_content_form_block_error">
                    Поле не должно быть пустым
               </span>
         </span>
    </div>
</template>

<script>
    export default {
        name: "ErrorFormBasket",
        props:['errors']
    }
</script>

<style scoped>

</style>