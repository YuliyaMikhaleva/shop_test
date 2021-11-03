<template>
    <a @click="method" :class="[activeLink === block ? $style['link-active'] : $style['link-item'] ]">{{ title }}</a>
</template>

<script>
    export default {
        name: "LinkInModal",
        props:['method', 'title', 'activeLink','block']
    }
</script>

<style lang="scss" module>
    @import "LinkInModal.module";
</style>