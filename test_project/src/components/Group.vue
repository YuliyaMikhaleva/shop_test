<template>
    <div v-bind:class="[this.$store.state.activeLink===group.name ? activeClass: '', otherClass]"
    @click="changeActiveLink">
        <router-link :to="group.name" style="text-decoration: none; color: inherit;"
                     >{{ group.name }}</router-link>
    </div>
<!--    <div class="catalog_card" >-->
<!--        <img class="catalog_card_img" :src="product.img" width="353" height="246" alt="photo" />-->
<!--        <h3 class="catalog_card_title">{{ product.name }}</h3>-->
<!--        <span class="catalog_card_price"><span> {{ product.price }}</span> ₽</span>-->
<!--        <button class="catalog_card_button">Добавить в корзину</button>-->
<!--    </div>-->
</template>

<script>
    export default {
        name: "Group",
        props:['group'],
        data (){
            return {
                activeClass: 'active',
                otherClass: 'header_block_links_item',

            }
        },

        methods: {
            changeActiveLink(){
                this.$store.state.activeLink = this.group.name;
            }
        }
    }
</script>

<style scoped>

</style>