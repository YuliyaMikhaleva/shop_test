<template>
    <div>
        <Group v-bind:key="item.id"
               v-for="item of products"
               v-bind:group="item"
        />
    </div>
</template>

<script>
    import Group from "./Group";
    export default {
        name: "CatalogGroups",
        components: {Group},
        computed: {//вычисляемое свойство
            products(){
                return this.$store.getters.getCatalogGroups
            },
        },
    }
</script>

<style scoped>

</style>