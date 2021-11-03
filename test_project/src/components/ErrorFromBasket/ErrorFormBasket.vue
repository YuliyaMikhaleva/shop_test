<!--Ошибка в форме корзины-->
<template>
    <div v-if="errors.length">
               <span v-if="error == 'nameError' || error == 'addressError'"  class="error">
                    Поле не должно быть пустым
               </span>
    </div>
</template>

<script>
    export default {
        name: "ErrorFormBasket",
        props:['errors','error']
    }
</script>

<style scoped>
.error{
    color: #FF6969;
    font-size: 14px;
    line-height: 16px;
}
</style>