<!--Компонент индикатора загрузки (лоадера)-->
<template>
    <transition name="fade">
        <div class="preloader">
            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only"></span>
            </div>
            <p></p>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Preloader",
    }
</script>

<style scoped>
    .preloader{
        background: white;
        opacity: 50%;
        width: 100%;
        height: 100%;
        z-index: 9999;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>