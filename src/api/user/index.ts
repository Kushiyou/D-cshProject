//统一管理用户相关的接口
import request from "@/utils/request";
import type {reqLoginData,resLoginData,resUserData} from './type'

//定义枚举接口
enum userUrl{
    USER_LOGIN_URI = '/user/login',
    USER_GET_INFOR = '/user/Info'
}

//登录的接口
export const reqLogin = (data:reqLoginData)=>request.post<any,resLoginData>(userUrl.USER_LOGIN_URI,data)

//查询客户信息的接口

export const reqUserInfo = ()=>request.get<any,resUserData>(userUrl.USER_GET_INFOR)