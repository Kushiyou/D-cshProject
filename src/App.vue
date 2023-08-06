

<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
//import SvgIcon from './components/SvgIcon/index.vue'
// import {reqLogin,reqUserInfo} from '@/api/user/index'
// import { onMounted } from "vue";

// import type {reqLoginData} from '@/api/user/type'

// let dataList:reqLoginData = {
//       username:'陈思华',
//       password:'kuriyamamirai'
//     }
// onMounted(()=>{
//   /* request<resLoginData>({
//     url:'/api/user/login',
//     method:'post',
//     data:{
//       username:'陈思华',
//       password:'kuriyamamirai'
//     }
//   }).then((res)=>{
//     console.log(res.data.username,'222');
    
//   }) */
//   reqLogin(dataList).then(res=>{
//     console.log(res.data.password,'6666');
    
//   })
// })

// reqUserInfo().then(res=>{
//   console.log(res.data.checkDate[0].roles);
  
// })

</script>
<style scoped lang="scss">
 h1{
  color: $color;
 }
</style>
