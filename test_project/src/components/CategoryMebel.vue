<template>
    <div v-bind:class="[this.$store.state.activeCategoryMebel === category.name ? activeClass: '', otherClass]"
         @click="changeActiveLink">
        <router-link :to="category.name" style="text-decoration: none; color: inherit;"><span class="menu_item">{{ category.name }}</span></router-link>
    </div>
</template>

<script>
    export default {
        name: "CategoryMebel",
        props:['category'],
        data (){
            return {
                activeClass: 'activeCategory',
                otherClass: ''
            }
        },
        methods: {
            changeActiveLink(){
                this.$store.state.activeCategoryMebel = this.category.name;
            }
        }
    }
</script>

<style scoped>

</style>