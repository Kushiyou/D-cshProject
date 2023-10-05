<!-- 顶部导航 -->
<template>
    <div class="topTabBar">
        <Breadcrumb></Breadcrumb>
        <Setting></Setting>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Breadcrumb from "./breadcrumb/index.vue"
import Setting from './setting/index.vue'

</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */
.topTabBar {
    display: flex;
    width: 100%;
    height: 100%;
}
</style>