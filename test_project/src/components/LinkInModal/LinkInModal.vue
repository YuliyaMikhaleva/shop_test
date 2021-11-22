<template>
    <a @click="$emit('on-click')" :class="[activeLink === block ? $style['link-active'] : $style['link-item'] ]">{{ title }}</a>
</template>

<script>
    export default {
        name: "LinkInModal",
        props:{
            title:{
                type:String,
                required:true,
            },
            activeLink:{
                type:String,
                required:true,
                default:function () {
                    return 'link'
                },
                validator:function (value) {
                    return value == 'link'
                }
            },
            block:{
                type:String,
                required:true,
            }
        }
    }
</script>

<style lang="scss" module>
    @import "LinkInModal.module";
</style>