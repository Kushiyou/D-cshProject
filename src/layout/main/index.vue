<!--  -->
<template>
    <router-view v-slot="{ Component }">
        <transition name="bounce">
            <component :is="Component" v-if="flag" />
        </transition>
    </router-view>
    <!-- <router-view></router-view> -->
</template>

<script setup lang='ts'>
import { ref,nextTick,watch  } from 'vue'
import useLayOutFlodStroe from "@/store/moudle/fold"

const layOutFlodStroe = useLayOutFlodStroe()
//重新挂载的标志----用于刷新
const flag = ref(true)
watch(()=>layOutFlodStroe.$state.reflash,()=>{
    flag.value = false
    nextTick(()=>{
        flag.value = true
    })
    
})
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