<!--Компонент рейтинга в виде звёзд-->
<template>
    <div class="star-rating">
        <div class="star-rating__wrap">
            <Star v-bind:key="count" :count="count" v-for="count of maxCount"/>
        </div>
    </div>
</template>

<script>
    import Star from "../Star/Star";
    export default {
        name: "StarRating",
        components: {Star},
        data(){
            return {
                maxCount:5,
            }
        },
        methods:{
            addMark(count){
                this.$emit('update',count)
            },
        },
    }
</script>

<style lang="scss" module>

</style>