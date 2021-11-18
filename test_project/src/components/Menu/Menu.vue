<!--Боковое меню сайта-->
<template>
    <nav class="menu">
        <!-- @ревью
            можно убирать и просто так такие комменты лучше не добавлять
             -->
        <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
        <MenuItem v-bind:key="group.id" v-bind:category="group" v-for="group of catalog" />
    </nav>
</template>

<script>
    import MenuItem from "../MenuItem/MenuItem";
    export default {
        name: "Menu",
        components: {MenuItem},
        computed: {//вычисляемое свойство
            catalog(){
                const categoryId = this.$route.params.category;
                return this.$store.getters['productsModule/getChilds'](Number(categoryId))
            }
        },
    }
</script>

<style scoped>
.menu {
    box-shadow: 0 0px 10px 0px rgba(221, 221, 221, 1);
    background-color: white;
}
</style>