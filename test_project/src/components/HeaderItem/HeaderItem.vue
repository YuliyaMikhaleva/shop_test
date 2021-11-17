<!--1 элемент навигации в шапке сайта(сверху)-->
<template>
    <div @click="changeActiveLink">
        <router-link :to="link"
                     tag="div"
                     :class="$style['item']"
                     :active-class="$style['activeClass']"
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
                const newName = this.$store.getters['productsModule/getChilds'](this.group.id).filter((item) =>
                item.parent_id === this.group.id)[0].name
                this.$store.commit('linksModule/changeActiveSubcategory', newName);
            },
        },
        computed:{
            link(){
                const linkId = this.$store.getters['productsModule/getChilds'](this.group.id).filter((item) =>
                    item.parent_id === this.group.id
                )[0].id;
                return (`/${this.group.id}/${linkId}`)
            }
        }
    }
</script>

<style lang="scss" module>
    @import "HeaderItem.module";
</style>