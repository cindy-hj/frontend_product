<template>
    <div>
        userId: <input type="text" v-model="state.form.userId"><br>
        userPw: <input type="password" v-model="state.form.userPw"><br>
        <button @click="submit()">인증</button>
    </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
    setup () {
        const state = reactive({
            form : {
                userId : "",
                userPw : ""
            }
        })

        const submit = () => {
            axios.post("/api/add/usercheck", state.form)
                .then((res)=> {
                    console.log(res);
                    alert("인증 성공");
                }).catch(()=>{
                    alert("인증 실패");
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