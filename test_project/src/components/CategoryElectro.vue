<template>
    <router-link :to="category.name" style="text-decoration: none; color: inherit;"><span class="menu_item">{{ category.name }}</span></router-link>
</template>

<script>
    export default {
        name: "CategoryElectro",
        props:['category'],
    }
</script>

<style scoped>

</style>