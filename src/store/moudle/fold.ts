import { defineStore } from "pinia";
interface flodTypeState {
    flod:boolean
}

let useLayOutFlodStroe = defineStore('layOutFlod',{
    state:():flodTypeState=>{
        return {
            flod: false
        }
    }
})

export default useLayOutFlodStroe;