<!--Компонент рейтинга в виде звёзд-->
<template>
    <div class="star-rating">
        <form class="star-rating__wrap">
            <template v-for="count in array">
                <input :key="'input-'+count" @click="addMark(count)" class="star-rating__input" :id="'star-rating-'+count" type="radio" name="rating" :value="count">
                <label :key="'label-'+count" class="star-rating__ico fa fa-star-o fa-lg" :for="'star-rating-'+count" :title="count + ' out of 5 stars'"></label>
            </template>
        </form>
    </div>
</template>

<script>

    export default {
        name: "StarRating",
        data(){
            return {
                maxCount:5,
                array:[],
            }
        },
        methods:{
            addMark(count){
                this.$emit('update',count);

            },
        },
        mounted() {
            let x = [];
            for (let i=1; i<=this.maxCount; i++){
                x = [...x, i]
            }
            this.array = x.reverse()
            console.log(this.array)
        }

    }
</script>

<style lang="scss" module>

</style>