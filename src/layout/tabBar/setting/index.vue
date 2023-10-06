<!-- 右侧设置 -->
<template>
    <div class="setting">
        <el-button icon="Refresh" size="large" @click="refresh" circle />
        <el-button icon="FullScreen" size="large" @click="fullScreen" circle />
        <el-button icon="Setting" size="large" circle />
        <el-button circle size="large" tag="div">
            <div class="imgBox"><img src="../../../assets/image/headerImg.png"></div>
        </el-button>
        <div class="dropdown">
            <el-dropdown>
                <span class="el-dropdown-link">
                    Kushiyou
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import useLayOutFlodStroe from "@/store/moudle/fold"
import useUserStroe from "@/store/moudle/user"

//路由器
const $Router = useRouter()
//路由对象
const $Route = useRoute()

const layOutFlodStroe = useLayOutFlodStroe()
const userStroe = useUserStroe()
const refresh = () => {
    layOutFlodStroe.$state.reflash = !layOutFlodStroe.$state.reflash
}
const fullScreen = () => {
    let full = document.fullscreenElement
    if (!full) {
        document.documentElement.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
}
//退出登录
const loginOut = () => {
    userStroe.token = ''
    userStroe.avatar = ''
    userStroe.userName = ''
    //跳转登录页面
    $Router.push({ name: 'login', query: { redirect: $Route.path } })
}

</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */
.setting {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .imgBox {

        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .dropdown {
        margin: 0 1%;
    }
}
</style>