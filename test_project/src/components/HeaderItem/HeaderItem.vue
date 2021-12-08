<!--1 элемент навигации в шапке сайта(сверху)-->
<template>
        <router-link :to="link"
                     :class="[$style['item'], { [$style['activeClass']]: isActive }]"
                     >
                {{ name }}
        </router-link>
</template>

<script>
    import {mapGetters} from "vuex"
    export default {
        name: "HeaderItem",
        props:{
            id:{
                type:Number,
                required: true,
            },
            name:{
                type: String,
                required: true,
            },
            /**
             * @ревью - ок
             *
             * Предпочтительно не использользовать в пропсах объекты,
             * в данном случае лучше разбить объект на три пропса: id, name, parent_id.
             *
             * Что мы с этого получаем:
             * 	🐸 в компоненте сразу видно и понятно, с какими входными параметрами мы работаем,
             * 		 таким образом документируем частично наш компонент (главное преимущество)
             *
             * 	🐸 начинают работать подсказки редактора
             */
        },
        computed:{
            ...mapGetters('productsModule',['getChilds']),
            /**
             * Получение первого элемента сфильтрованного по необходимогу id
             * @returns {Object}
             */
            firstEl(){
                return this.getChilds(this.id).filter((item) =>
                    item.parent_id === this.id)[0]
            },
            /**
             * Ссылка на первую подкатегорию
             * @returns {string}
             */
            link(){
                return (`/${this.id}/${this.firstEl.id}`)
            },
			isActive() {
				return this.$route.params.category == this.id;
			}
        }
    }
</script>

<style lang="scss" module>
    @import "HeaderItem.module";
</style>
