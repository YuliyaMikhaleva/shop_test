<!--Боковое меню сайта-->
<template>
    <nav class="menu">
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
                if (this.$store.getters.getActiveLink === 'Электроприборы'){
                    return this.$store.getters.getMenuItemsElectro
                } else {
                    return this.$store.getters.getMenuItemsMebel
                }
            }
        },
    }
</script>

<style scoped>
.menu{
    box-shadow: 0 0px 10px 0px rgba(221, 221, 221, 1);
    background-color: white;
}
</style>