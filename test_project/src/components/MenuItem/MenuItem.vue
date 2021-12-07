<!--1 элемент левого меню-->
<template>
            <router-link :to="link" active-class="activeCategory" class="link">
                <span class="category">
                    {{ category.name }}
                </span>
            </router-link>
</template>

<script>
    export default {
        name: "MenuItem",
        props:{
            category:{
                type: Object,
                required:true,
                validator:function (obj) {
                    return Object.keys(obj).indexOf('name') !== -1
                }
            }
        },
        computed:{
            /**
             * Ссылка на подкатегорию
             * @returns {string}
             */
            link(){
                return (`/${this.category.parent_id}/${this.category.id}`)
            },
        }
    }
</script>

<style scoped>
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
        font-family: Roboto_regular;
        line-height: 54px;
        padding-left: 30px;
        box-sizing: border-box;
        text-decoration: none;
    }
    .category:hover{
        color: #FF6969;
        cursor: pointer;
    }

    @media (max-width: 500px) {
        .category{
            font-size: 14px;
            padding-left: 15px;
            padding-right: 15px;
            box-sizing: border-box;
        }
    }

</style>