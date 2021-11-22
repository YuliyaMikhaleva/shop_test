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
        props:{
            group:{
                type: Object,
                required:true,
                validator:function (obj) {
                    return Object.keys(obj).indexOf('name') !== -1
                }
            }
        },
        methods: {
            //изменение активной ссылки, соответственно будут меняться стили "кнопки"
            changeActiveLink(){
                this.$store.commit('linksModule/changeActiveLink', this.group.name);
                this.$store.commit('linksModule/changeActiveSubcategory', this.firstEl.name);
            },
        },
        computed:{
            firstEl(){
                return this.$store.getters['productsModule/getChilds'](this.group.id).filter((item) =>
                    item.parent_id === this.group.id)[0]
            },
            link(){
                return (`/${this.group.id}/${this.firstEl.id}`)
            }
        }
    }
</script>

<style lang="scss" module>
    @import "HeaderItem.module";
</style>