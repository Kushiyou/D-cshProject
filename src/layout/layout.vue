<!--  -->
<template>
    <div class="container">
        <div class="side">
            <logo></logo>
        </div>
        <div class="main">
            <div class="top">dingbu</div>
            <div class="body">
                1111
            </div>
        </div>
    </div>
</template>
 
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import logo from "./logo/index.vue"

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
        height: 100%;
        background-color: $base-side-color;
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
            overflow:auto;
            padding:2%;
        }
    }
}
</style>