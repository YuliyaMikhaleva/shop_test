<template>
    <section :class="$style.catalog">
        <Product :class="$style.catalog__product" v-bind:key="product.id" v-bind:product="product" v-for="product of goods"/>
        <ZeroComponent :class="$style.catalog__zeropage" v-if="goods.length===0"/>
    </section>
</template>

<script>
    import Product from "../Product/Product";
    import ZeroComponent from "../ZeroComponent/ZeroComponent";
    export default {
        name: "Catalog",
        props:{
            goods:{
                type: Array,
                required:true,
                /**
                 * @review
                 * Тут не жесткое правило, а просто совет:
                 * можно писать вместо
                 * default:function () {
                 *   return []
                 * },
                 *
                 * default: () => []
                 *
                 * Так получается просто более короткая и быстрая запись.
                 * Но тут решения остается за вами, это не обязательно.
                 *
                 * Можно почитать, если не вникали в тему стрелочных функций:
                 * https://learn.javascript.ru/arrow-functions-basics
                 */
                default:function () {
                    return []
                },
            }
        },
        components: {ZeroComponent, Product},
    }
</script>

<style lang="scss" module>
    @import "Catalog.module";
</style>
