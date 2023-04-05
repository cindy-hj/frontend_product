<template>
    <div>
        <input type="text" v-model="state.form.categoryId" @keyup.enter="submit">
        <button @click="submit()">삭제</button>
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
                categoryId:"",
            }
        })

        const submit = () => {
            axios.delete(`api/delete/category/${state.form.categoryId}`, state.form)
                .then((res)=> {
                    console.log(res);
                    alert("삭제 성공");
                    router.push("/categorylist");
                }).catch(()=>{
                    alert("삭제 실패");
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