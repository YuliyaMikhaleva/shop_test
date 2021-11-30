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
    import {mapGetters} from "vuex"
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
            /**
             * Изменение активной ссылки категории и подкатегории
             */

            /**
             * @review
             * Опять же момент, что лучше использовать mapGetter, mapMutations и тп
             */
            changeActiveLink(){
                this.$store.commit('linksModule/changeActiveLink', this.group.name);
                this.$store.commit('linksModule/changeActiveSubcategory', this.firstEl.name);
            },
        },
        computed:{
            ...mapGetters('productsModule',['getChilds']),
            /**
             * Получение первого элемента сфильтрованного по необходимогу id
             * @returns {Object}
             */
            firstEl(){
                return this.getChilds(this.group.id).filter((item) =>
                    item.parent_id === this.group.id)[0]
            },
            /**
             * Ссылка на первую подкатегорию
             * @returns {string}
             */
            link(){
                return (`/${this.group.id}/${this.firstEl.id}`)
            }
        }
    }
</script>

<style lang="scss" module>
    @import "HeaderItem.module";
</style>
