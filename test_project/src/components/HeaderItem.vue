<!--1 элемент навигации в шапке сайта(сверху)-->
<template>
    <div v-bind:class="[this.$store.state.activeLink===group.name ? activeClass: '', otherClass]"
         @click="changeActiveLink">
        <router-link :to="group.name" style="text-decoration: none; color: inherit;"
        >{{ group.name }}</router-link>
    </div>

</template>

<script>
    export default {
        name: "HeaderItem",
        props:['group'],
        data (){
            return {
                activeClass: 'active',
                otherClass: 'header_block_links_item',
            }
        },
        methods: {
            //изменение активной ссылки, соответственно будут меняться стили "кнопки"
            changeActiveLink(){
                this.$store.state.activeLink = this.group.name;
                console.log(this.$store.state.activeLink )
            }
        }
    }
</script>

<style scoped>

</style>