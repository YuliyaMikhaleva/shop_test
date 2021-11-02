<!--Блок с параметрами товара-->
<template>
    <div class="modal_product_parametrs">
        <div class="modal_product_parametrs_line">
            <span>{{height}}</span>
            <div>
                <span style="margin-right: 3px">{{valueHeight}}</span>
                <span>{{measureHeight}}</span>
            </div>
        </div>
        <div class="modal_product_parametrs_line">
            <span>{{width}}</span>
            <div>
                <span style="margin-right: 3px">{{valueWidth}}</span>
                <span>{{measureWidth}}</span>
            </div>
        </div>
        <div class="modal_product_parametrs_line">
            <span>{{length}}</span>
            <div>
                <span style="margin-right: 3px">{{valueLength}}</span>
                <span>{{measureLength}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductParametrs",
        props:[
            'height','valueHeight', 'measureHeight',
            'width','valueWidth', 'measureWidth',
            'length','valueLength', 'measureLength',
        ]
    }
</script>

<style scoped>

</style>