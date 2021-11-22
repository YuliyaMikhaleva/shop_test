<!--Ошибка в форме корзины-->
<template>
    <div v-if="errors.length">
               <span v-if="!element"  class="error">
                    Поле не должно быть пустым
               </span>
    </div>
</template>

<script>
    export default {
        name: "ErrorFormBasket",
        props:{
            errors:{
                type: Array,
                required:true,
                default:function () {
                    return []
                },
            },
            error:{
                type: String,
                required: true,
            },
            element:{
                type:String,
            }
        }
    }
</script>

<style scoped>
.error{
    color: #FF6969;
    font-size: 14px;
    line-height: 16px;
}
</style>