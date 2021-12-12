<!--1 элемент левого меню-->
<template>
            <router-link :to="link" active-class="activeCategory" class="link">
                <span class="category">
                    {{ name }}
                </span>
            </router-link>
</template>

<script>
    export default {
        name: "MenuItem",
        props:{
            id:{
                type: Number,
                required:true,
            },
            parent_id:{
                type: Number,
                required:true,
            },
            name:{
                type: String,
                required:true,
            }
        },
        computed:{
            /**
             * Ссылка на подкатегорию
             * @returns {string}
             */
            link(){
                return (`/${this.parent_id}/${this.id}`)
            },
        }
    }
</script>

<style>
    .link{
        text-decoration: none;
        color: #424242;
    }
    .category{
        background-color: white;
        display: block;
        height: 54px;
        border-bottom: 1px solid #E4E4E4;
        box-sizing: border-box;
        font-family: Roboto;
        font-weight: 400;
        line-height: 54px;
        padding-left: 30px;
        box-sizing: border-box;
        text-decoration: none;
    }
    .category:hover{
        color: #FF6969;
        cursor: pointer;
    }

</style>