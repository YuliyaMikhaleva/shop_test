<template>
    <a href="#" class="star">
        <input @click="addMark" class="star-rating__input" :id="'star-rating-'+count" type="radio" name="rating" :value="count" >
        <label class="star-rating__ico fa fa-star-o fa-lg" :for="'star-rating-'+count" :title="count + ' out of 5 stars'"></label>
    </a>
</template>

<script>
    export default {
        name: "Star",
        props:{
            count:{
                type:Number,
                required:true,
            }
        },
        methods:{
            addMark(){
                this.$emit('update',this.count)
            },
        }
    }
</script>

<style scoped>

</style>