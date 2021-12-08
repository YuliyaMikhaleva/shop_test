<!--Боковое меню сайта-->
<template>
    <nav class="menu">
        <MenuItem v-bind:key="group.id"
                  :id="group.id"
                  :parent_id="group.parent_id"
                  :name="group.name"
                  v-for="group of catalog" />
    </nav>
</template>

<script>
    import MenuItem from "../MenuItem/MenuItem";
    import {mapGetters} from "vuex"
    export default {
        name: "Menu",
        components: {MenuItem},
        computed: {
            ...mapGetters('productsModule', ["getChilds"]),
            /**
             * Показать подкатегории меню в зависимости от того, на какой вкладке категории мы находимся
             * @returns {Array}
             */
            catalog(){
                const categoryId = this.$route.params.category;
                return this.getChilds(Number(categoryId))
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