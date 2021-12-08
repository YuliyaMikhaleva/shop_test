<!--Блок с параметрами товара-->
<template>
    <section :class="$style.parametrs">
        <div :class="$style.parametrs__line">
            <span>{{params.height.caption}}</span>
            <div>
                <span :class="$style.parametrs__value">{{params.height.value}}</span>
                <span :class="$style.parametrs__measure">{{params.height.measure}}</span>
            </div>
        </div>
        <div :class="$style.parametrs__line">
            <span>{{params.width.caption}}</span>
            <div>
                <span :class="$style.parametrs__value">{{params.width.value}}</span>
                <span :class="$style.parametrs__measure">{{params.width.measure}}</span>
            </div>
        </div>
        <div :class="$style.parametrs__line">
            <span>{{params.length.caption}}</span>
            <div>
                <span :class="$style.parametrs__value">{{params.length.value}}</span>
                <span :class="$style.parametrs__measure">{{params.length.measure}}</span>
            </div>
        </div>
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