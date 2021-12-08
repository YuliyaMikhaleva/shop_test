<!--Блок с параметрами товара-->
<template>
    <section :class="$style.parametrs">
        <template v-for="param in params">
            <div :key="param.caption" :class="$style.parametrs__line">
                <span>{{param.caption}}</span>
                <div>
                    <span :class="$style.parametrs__value">{{param.value}}</span>
                    <span :class="$style.parametrs__measure">{{param.measure}}</span>
                </div>
            </div>
        </template>
    </section>
</template>

<script>
    export default {
        name: "ProductParametrs",
        props:{
            params:{
                type:Object,
                required:true,
            }
        },
    }
</script>

<style lang="scss" module>
    @import "ProductParametrs.module";
</style>