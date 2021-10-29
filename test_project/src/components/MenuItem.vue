<!--1 элемент левого меню-->
<template>
    <div>
        <div v-if="this.$store.state.activeLink==='Мебель'" v-bind:class="[this.$store.state.activeCategoryMebel === category.name ? activeClass: '', otherClass]"
             @click="changeActiveLinkMebel">
            <router-link :to="category.name" style="text-decoration: none; color: inherit;"><span class="menu_item">{{ category.name }}</span></router-link>
        </div>
        <div v-if="this.$store.state.activeLink==='Электроприборы'" v-bind:class="[this.$store.state.activeCategoryElectro === category.name ? activeClass: '', otherClass]"
             @click="changeActiveLinkElectro">
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
                this.$store.state.activeCategoryMebel = this.category.name;
                console.log(this.$store.state.activeCategoryMebel)
            },
            changeActiveLinkElectro(){
                this.$store.state.activeCategoryElectro = this.category.name;
            }
        },

    }
</script>

<style scoped>

</style>