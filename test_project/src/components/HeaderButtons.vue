<!--шапка навигации в шапке сайта -->
<template>
    <nav>
        <HeaderItem v-bind:key="group.name"
                       v-for="group of products"
                       v-bind:group="group"/>
    </nav>
</template>

<script>
    import HeaderItem from "./HeaderItem";
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

<style scoped>

</style>