<template>
    <div>
        userId:<input type="text" v-model="state.form.userId"><br>
        userPw:<input type="text" v-model="state.form.userPw"><br>
        userName:<input type="text" v-model="state.form.userName"><br>
        address:<input type="text" v-model="state.form.address"><br>
        phone:<input type="tel" v-model="state.form.phone"><br>
        tel:<input type="tel" v-model="state.form.tel"><br>
        <button @click="submit()">수정</button>
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
                userPw : "",
                userName : "",
                address : "",
                phone: "",
                tel: "",
            }
        })

        const submit = () => {
            axios.put("/api/modified/user", state.form)
                .then((res)=> {
                    console.log(res);
                    alert("사용자 수정 성공");
                }).catch(()=>{
                    alert("사용자 수정 실패");
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