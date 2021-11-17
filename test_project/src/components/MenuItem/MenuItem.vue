<!--1 элемент левого меню-->
<template>
    <div>
        <div @click="changeActiveSubcategory">
            <router-link :to="link" tag="div" active-class="activeCategory"><span class="category">{{ category.name }}</span></router-link>
        </div>
    </div>
</template>


<script>
    export default {
        name: "MenuItem",
        props:['category'],
        methods: {
            changeActiveSubcategory(){
                this.$store.commit('linksModule/changeActiveSubcategory', this.category.name);
            }
        },
        computed:{
            link(){
                return (`/${this.category.parent_id}/${this.category.id}`)
            },
        }
    }
</script>

<style scoped>
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