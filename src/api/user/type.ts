//定义user接口的数据类型
//登录数据类型
export interface reqLoginData {
    username:string,
    password:string
}
interface datatype {
    token:string,
    username:string,
    password:string
}
//登录返回的数据类型
export interface resLoginData {
    code:number,
    message:string,
    data?:datatype
}

interface userInfor{
    userId:number,
    avatar:string,
    username:string,
    password:string,
    desc:string,
    roles:string[],
    buttons:Array<string>,
    routes:string[],
    token:string
}
/* 定义获取用户数据的类型 */
interface resUserDataType{
    checkDate:userInfor[]
}
export interface resUserData{
    code:number,
    data:resUserDataType
}