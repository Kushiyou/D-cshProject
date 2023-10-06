import { defineStore } from "pinia";
interface flodTypeState {
    flod:boolean,
    reflash:boolean
}

let useLayOutFlodStroe = defineStore('layOutFlod',{
    state:():flodTypeState=>{
        return {
            flod: false,
            reflash:true
        }
    }
})

export default useLayOutFlodStroe;