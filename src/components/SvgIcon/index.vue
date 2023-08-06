<!--  -->
<template>
    <svg :style="{ height: height, width: width }">
        <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue'

defineProps({
    height: {
        type: String,
        default: '0.2rem'
    },
    width: {
        type: String,
        default: '0.2rem'
    },
    name: String,
    color: {
        type: String,
        default: ''
    }
})
const prefix: string = '#icon-'

</script>
<style scoped>
/* @import url(); 引入css类 */
</style>