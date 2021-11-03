<!--1 элемент левого меню-->
<template>
    <div>
        <div v-bind:class="[categoryName === category.name ? activeClass: '', otherClass]"
             @click="functionName">
            <router-link :to="category.name" style="text-decoration: none; color: inherit;"><span class="menu_item">{{ category.name }}</span></router-link>
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
                this.$store.commit('changeActiveCategoryMebel', this.category.name);
            },
            changeActiveLinkElectro(){
                this.$store.commit('changeActiveCategoryElectro', this.category.name);
            }
        },
        computed:{
            categoryName(){
                if (this.$store.getters.getActiveLink === 'Мебель'){
                    return this.$store.getters.getActiveCategoryMebel
                } else {
                    return this.$store.getters.getActiveCategoryElectro
                }
            },
            functionName(){
                if (this.$store.getters.getActiveLink === 'Мебель'){
                    return this.changeActiveLinkMebel
                } else {
                    return this.changeActiveLinkElectro
                }
            }
        }
    }
</script>

<style scoped>

</style>