<!--  -->
<template>
    <router-view v-slot="{ Component }">
        <transition name="bounce">
            <component :is="Component" />
        </transition>
    </router-view>
    <!-- <router-view></router-view> -->
</template>

<script setup lang='ts'>
/* import { ref,reactive,Transition  } from 'vue' */

</script>
<style scoped>
/* @import url(); 引入css类 */
.bounce-enter-from {
    opacity: 0;
}

.bounce-enter-active,
.bounce-leave-active {
    transition: all 1s;
}

.bounce-enter-to {
    opacity: 1;
}
</style>