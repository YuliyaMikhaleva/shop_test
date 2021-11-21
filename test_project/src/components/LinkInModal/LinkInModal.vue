<template>
    <a @click="$emit('on-click')" :class="[activeLink === block ? $style['link-active'] : $style['link-item'] ]">{{ title }}</a>
</template>

<script>
    export default {
        name: "LinkInModal",
        props:['title', 'activeLink','block']
    }
</script>

<style lang="scss" module>
    @import "LinkInModal.module";
</style>