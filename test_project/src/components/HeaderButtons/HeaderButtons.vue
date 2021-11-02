<!--шапка навигации в шапке сайта -->
<template>
    <nav :class="$style['header-buttons']">
        <HeaderItem :class="$style['header-buttons__item']" v-bind:key="group.name"
                       v-for="group of products"
                       v-bind:group="group"/>
    </nav>
</template>

<script>
    import HeaderItem from "../HeaderItem/HeaderItem";
    export default {
        name: "HeaderButtons",
        components: {HeaderItem},
        computed: {//вычисляемое свойство
            products(){
                return this.$store.getters.getHeaderItems
            }
        },
    }
</script>

<style lang="scss" module>
    @import "HeaderButtons.module";
</style>