<!--1 элемент левого меню-->
<template>
    <div>
        <div v-bind:class="[categoryName === category.name ? activeClass: '', otherClass]"
             @click="functionName">
            <router-link :to="link" style="text-decoration: none; color: inherit;"><span class="category">{{ category.name }}</span></router-link>
        </div>
    </div>
</template>


<script>
    export default {
        name: "MenuItem",
        props:['category'],
        data (){
            return {
                activeClass: 'activeCategory',
                otherClass: ''
            }
        },
        methods: {
            //изменение активной ссылки, соответственно будут меняться стили "кнопки"
            changeActiveLinkMebel(){
                this.$store.commit('linksModule/changeActiveCategoryMebel', this.category.name);
            },
            changeActiveLinkElectro(){
                this.$store.commit('linksModule/changeActiveCategoryElectro', this.category.name);
            }
        },
        computed:{
            categoryName(){
                if (this.$store.getters['linksModule/getActiveLink'] === 'Мебель'){
                    return this.$store.getters['linksModule/getActiveCategoryMebel']
                } else {
                    return this.$store.getters['linksModule/getActiveCategoryElectro']
                }
            },
            functionName(){
                if (this.$store.getters['linksModule/getActiveLink'] === 'Мебель'){
                    return this.changeActiveLinkMebel
                } else {
                    return this.changeActiveLinkElectro
                }
            },
            link(){
                if (this.category.name === 'Стулья'){
                    return "chairs"
                } else if (this.category.name === 'Столы'){
                    return "tables"
                } else if (this.category.name === 'Диваны'){
                    return "sofas"
                } else if (this.category.name === 'Светильники'){
                    return "lamps"
                } else {
                    return "ventilators"
                }
            }
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
    }
    .category:hover{
        color: #FF6969;
        cursor: pointer;
    }
</style>