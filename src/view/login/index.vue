<!--  -->
<template>
    <div class="main_login_contaner">
        <el-row>
            <el-col :span="12">
            </el-col>
            <el-col :span="12">
                <div class="box-card">
                    <p class="login_title" style="margin-bottom: 20px;">登 录</p>
                    <div class="login_contaner">
                        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="65px"
                            class="demo-ruleForm">
                            <el-form-item prop="username">
                                <span style="font-size: 1rem;font-weight: 500;">账号：</span>
                                <el-input v-model="ruleForm.username" style="width: 250px" type="text" autocomplete="off" />
                            </el-form-item>
                            <el-form-item prop="password">
                                <span style="font-size: 1rem;font-weight: 500;">密码：</span>
                                <el-input v-model="ruleForm.password" style="width: 250px" show-password=true
                                    type="password" autocomplete="off" />
                            </el-form-item>
                            <el-form-item>
                                <div class="btn_box">
                                    <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                                    <el-button @click="resetForm(ruleFormRef)">清除</el-button>
                                </div>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
//elementUI
import type { FormInstance, FormRules } from 'element-plus'
import { ElNotification } from 'element-plus'
//封装的请求
import { reqLogin } from '../../api/user/index'
//封装的根据时间获取欢迎语
import welcomenWord from '../../utils/time'
//引入vue-router
import { useRouter } from 'vue-router'
//引入user小仓库
import useUserStore from '../../store/moudle/user'
import { resLoginData } from '@/api/user/type'
let userStore = useUserStore()
let $router = useRouter()

const ruleFormRef = ref<FormInstance>()

const validateusername = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入账号'))
    } else {
        if (ruleForm.password !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('password', () => null)
        }
        callback()
    }
}
const validatepassword = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    username: '',
    password: ''
})

const rules = reactive<FormRules<typeof ruleForm>>({
    username: [{ validator: validateusername, trigger: 'blur' }],
    password: [{ validator: validatepassword, trigger: 'blur' }],
})

//表单验证
const submitForm = async (formEl: FormInstance | undefined) => {
    let validate = await formEl?.validate()
    if (validate) {
        login()
    }

}

const login = async () => {
    try {
        let res: resLoginData = await reqLogin(ruleForm)
        if (res.code == 200) {
            //存token
            userStore.setToken((res.data?.token) as string)
            ElNotification({
                type: 'success',
                message: '欢迎回来 ',
                title: `${welcomenWord},${res?.data?.username}欢迎您!`
            })
            $router.push({
                name: 'home'
            })
        }
    } catch (error: any) {
        ElNotification({
            type: 'error',
            message: (error as any).message
        })
        console.log((error as any).message, '5555555');

    }

}

// const submitForm = async(formEl: FormInstance | undefined) => {
//     if (!formEl) return
//     formEl.validate((valid) => {
//         if (valid) {
//             reqLogin(ruleForm).then((res) => {
//                 if (res.code == 200) {
//                     console.log(res.data);
//                     ElNotification({
//                         title: '欢迎',
//                         message: '登录成功',
//                         type: 'success',
//                     })
//                     userStore.setToken(res.data.token);
//                     $router.push({
//                         name:'home'
//                     })
//                 }else{
//                     console.log(res,'失败的res');
//                     ElNotification({
//                         type:'error',
//                         message:'登录失败'
//                     })
//                 }

//             })
//         } else {
//             console.log('error submit!')
//             return false
//         }
//     })
// }

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}


</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
.main_login_contaner {
    height: 100vh;
    width: 100%;
    text-align: center;
    background: url('@/assets/image/loginBgc.png') no-repeat center/100%;

    .box-card {
        position: relative;
        left: 20%;
        top: 150%;
        background-color: skyblue;
        width: 50%;
        padding: 20px;
        border-radius: 5px;

        .login_title {
            font-size: 2rem;
            color: #000;
            margin-bottom: .25rem;
        }

        .login_contaner {
            margin-top: .25rem;
            font-size: .8rem;

            .btn_box {
                display: flex;
                margin-left: 5rem;
            }
        }
    }
}
</style>