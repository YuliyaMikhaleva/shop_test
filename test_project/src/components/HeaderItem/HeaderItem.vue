<!--1 элемент навигации в шапке сайта(сверху)-->
<template>
    <div v-bind:class="[this.$store.getters['linksModule/getActiveLink']===group.name ? $style['item__active'] : $style['item']]"
         @click="changeActiveLink">
        <router-link :to="link" style="text-decoration: none; color: inherit;"
        >{{ group.name }}</router-link>
    </div>

</template>

<script>
    export default {
        name: "HeaderItem",
        props:['group'],
        methods: {
            //изменение активной ссылки, соответственно будут меняться стили "кнопки"
            changeActiveLink(){
                this.$store.commit('linksModule/changeActiveLink', this.group.name);
            }
        },
        computed:{
            link(){
                if (this.group.name === 'Электроприборы'){
                    return "electro"
                } else {
                    return "mebel"
                }
            }
        }
    }
</script>

<style lang="scss" module>
    @import "HeaderItem.module";
</style>