<!--  -->
<template>
    <div class="container">
        <div class="side" :class="{ flod: layOutFold.$state.flod ? true : false }">
            <logo></logo>
            <el-scrollbar class="scrollbar">
                <el-menu :default-active="$route.path" :collapse="layOutFold.$state.flod ? true : false" unique-opened active-text-color="pink" background-color="#001529"
                    text-color="white">
                    <Menu :menuList="userStore.menuRouter"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <div class="main" :class="{ flod: layOutFold.$state.flod ? true : false }">
            <div class="top" :class="{ flod: layOutFold.$state.flod ? true : false }">
                <TabBar></TabBar>
            </div>
            <div class="body" :class="{ flod: layOutFold.$state.flod ? true : false }">
                <Main></Main>
            </div>
        </div>
    </div>
</template>
 
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import useUserStroe from "@/store/moudle/user"
import logo from "./logo/index.vue"
import Menu from "./menu/index.vue";
import Main from "./main/index.vue";
import TabBar from "./tabBar/index.vue";
import { useRoute } from "vue-router";
import useLayOutFlodStroe from '@/store/moudle/fold'


const userStore = useUserStroe()
const layOutFold = useLayOutFlodStroe()
const $route = useRoute()

</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */
.container {
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: antiquewhite;

    .side {
        width: $base-side-width;
        overflow: hidden;
        height: 100%;
        background-color: $base-side-color;
        transition: all 0.3s;

        .scrollbar {
            width: 100%;
            height: calc(100% - $base-logo-height);
        }
        &.flod{
            width: $min-side-width;
        }
    }

    .main {
        width: calc(100% - $base-side-width);
        height: 100%;

        .top {
            height: $base-top-height;
            width: 100%;
            background-color: $base-top-color;
        }

        .body {
            height: calc(100% - $base-top-height);
            width: 100%;
            background-color: $base-body-color;
            overflow: auto;
            padding: 2%;
        }
        &.flod{
            width: calc(100% - $min-side-width);
        }
    }
}
</style>