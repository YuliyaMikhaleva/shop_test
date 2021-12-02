<!--1 элемент навигации в шапке сайта(сверху)-->
<template>
        <router-link :to="link"
                     :class="$style['item']"
                     :active-class="$style['activeClass']">
                {{ group.name }}
        </router-link>
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