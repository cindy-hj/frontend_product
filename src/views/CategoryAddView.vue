<template>
    <div>
        <input type="text" v-model="state.form.categoryName" @keyup.enter="submit"/>
        <button @click="submit()">저장</button>
    </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import router from "@/router";

export default {
    setup () {
        const state = reactive({
            form : {
                categoryName:"",
            },
        })

        const submit = () => {
            axios.post("/api/add/category", state.form)
                .then((res)=> {
                    console.log(res);
                    alert("입력 성공");
                    router.push("/categorylist")
                }).catch(()=>{
                    alert("입력 실패");
                })
        }

        return {
            state,
            submit
        }
    }
}
</script>

<style lang="scss" scoped>

</style>