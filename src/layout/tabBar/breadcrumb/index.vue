<!-- 右侧面包屑 -->
<template>
    <div class="breadcrumb">
        <div class="icon" @click="changeFlod">
            <component :is="layOutFlod.$state.flod?'Fold':'Expand'"></component>
        </div>
        <div class="breadcrumb">
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span style="margin: 0 5px;">{{item.meta.title}}</span>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import useLayOutFlodStroe from '@/store/moudle/fold'
import { useRoute } from 'vue-router';

const $route = useRoute()
const layOutFlod = useLayOutFlodStroe()

let changeFlod = ()=>{
    layOutFlod.$state.flod = !layOutFlod.$state.flod
}

</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */
.breadcrumb {
        display: flex;
        width: 50%;
        height: 100%;
        align-items: center;

        .icon {
            width: 4%;
            margin-left: 2%;
        }

        .breadcrumb {
            margin-left: 1%;
            flex: 1;
        }
    }
</style>