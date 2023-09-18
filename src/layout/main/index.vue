<!--  -->
<template>
    <router-view v-slot="{Component}">
        <transition name="fade">
            <component :is="Component"></component>
        </transition>
    </router-view>
    <!-- <router-view></router-view> -->
</template>

<script setup lang='ts'>
//import { ref,reactive } from 'vue'

</script>
<style scoped>
/* @import url(); 引入css类 */
.fade-enter-from{
    opacity:0;
}
.fade-enter-active{
    transition: all 1s;
}
.fade-enter-to{
    opacity:1;
}
</style>