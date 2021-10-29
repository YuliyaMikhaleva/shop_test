<!--Боковое меню сайта-->
<template>
    <nav class="menu">
        <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
        <MenuItem v-if="$store.state.activeLink === 'Электроприборы'"  v-bind:key="group.id" v-bind:category="group" v-for="group of catalogElectro" />
        <MenuItem v-if="$store.state.activeLink === 'Мебель'" v-bind:key="group.id" v-bind:category="group" v-for="group of catalogMebel" />
    </nav>
</template>

<script>
    import MenuItem from "./MenuItem";
    export default {
        name: "Menu",
        components: {MenuItem},
        computed: {//вычисляемое свойство
            catalogElectro(){
                return this.$store.getters.getMenuItemsElectro
            },
            catalogMebel(){
                return this.$store.getters.getMenuItemsMebel
            }
        },
    }
</script>

<style scoped>

</style>