<!--Компонент рейтинга в виде звёзд-->
<template>
    <div class="star-rating">
        <div class="star-rating__wrap">
            <input @click="addMark5" class="star-rating__input" id="star-rating-5" type="radio" name="rating" value="5" >
            <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-5" title="5 out of 5 stars"></label>
            <input @click="addMark4" class="star-rating__input" id="star-rating-4" type="radio" name="rating" value="4" >
            <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-4" title="4 out of 5 stars" ></label>
            <input @click="addMark3" class="star-rating__input" id="star-rating-3" type="radio" name="rating" value="3">
            <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-3" title="3 out of 5 stars" ></label>
            <input @click="addMark2" class="star-rating__input" id="star-rating-2" type="radio" name="rating" value="2">
            <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-2" title="2 out of 5 stars" ></label>
            <input @click="addMark1" class="star-rating__input" id="star-rating-1" type="radio" name="rating" value="1">
            <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-1" title="1 out of 5 stars"></label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StarRating",
        props:['mark'],
        methods:{
            addMark1(){
                this.$emit('update',1)
            },
            addMark2(){
                this.$emit('update',2)
            },
            addMark3(){
                this.$emit('update',3)
            },
            addMark4(){
                this.$emit('update',4)
            },
            addMark5(){
                this.$emit('update',5)
            }
        },
    }
</script>

<style lang="scss" module>

</style>