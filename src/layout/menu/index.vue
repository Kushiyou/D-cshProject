<!--  -->
<template>
    <template v-for="(item, index) in menuList" :key="item.path">
        <!-- 没有子路由 -->
        <template v-if="!item.children">
            <el-menu-item v-if="item.meta.show" :index="item.path">
                <template #title>
                    <span>{{ item.meta.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <!-- 仅有一个子路由 -->
        <template v-if="item.children && item.children.length == 1">
            <el-menu-item v-if="item.children[0].meta.show" :index="item.children[0].path">
                <template #title>
                    <span>{{ item.children[0].meta.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <!-- 有多个子路由 需要使用到组件递归 -->
        <template v-if="item.children && item.children.length > 1">
                <el-sub-menu :index="item.path">
                    <template #title>
                        <span>{{ item.meta.title }}</span>
                    </template>
                    <Menu :menuList="item.children"></Menu>
                </el-sub-menu>
        </template>
    </template>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

defineProps(["menuList"])
</script>

<script lang = "ts">
export default {
    name: 'Menu'
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>