<!--Блок с параметрами товара-->
<template>
    <section :class="$style.parametrs">
        <div :class="$style.parametrs__line">
            <span>{{height}}</span>
            <div>
                <span :class="$style.parametrs__value">{{valueHeight}}</span>
                <span>{{measureHeight}}</span>
            </div>
        </div>
        <div :class="$style.parametrs__line">
            <span>{{width}}</span>
            <div>
                <span :class="$style.parametrs__value">{{valueWidth}}</span>
                <span>{{measureWidth}}</span>
            </div>
        </div>
        <div :class="$style.parametrs__line">
            <span>{{length}}</span>
            <div>
                <span :class="$style.parametrs__value">{{valueLength}}</span>
                <span>{{measureLength}}</span>
            </div>
        </div>
    </section>
</template>

<script>
    /**
     * @ревью тут та же история с тем, то характиристики могут добавляться, да и компонент можно сделать проще
     */
    export default {
        name: "ProductParametrs",
        props:[
            'height','valueHeight', 'measureHeight',
            'width','valueWidth', 'measureWidth',
            'length','valueLength', 'measureLength',
        ]
    }
</script>

<style lang="scss" module>
    @import "ProductParametrs.module";
</style>