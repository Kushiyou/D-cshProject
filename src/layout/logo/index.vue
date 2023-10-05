<!--  -->
<template>
<div class="logo_container" v-if="setting.isShow">
    <img :src='setting.logo' alt="logo">
    <p v-show="!layOutFold.$state.flod">{{ setting.title }}</p>
</div>
</template>

<script setup lang='ts'>
import useLayOutFlodStroe from '@/store/moudle/fold'
import setting from '@/setting'

const layOutFold = useLayOutFlodStroe()

</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */
.logo_container{
    height: $base-logo-height;
    display: flex;
    font-size: $base-logo-fontSize;
    line-height: 100%;
    justify-content: center;
    align-items: center;
    p{
        margin-left: 4%;
        color: #fff;
    }
}
</style>