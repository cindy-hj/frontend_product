<template>
    <div>
        userId:<input type="text" v-model="state.form.userId"><br>
        userPw:<input type="text" v-model="state.form.userPw"><br>
        userName:<input type="text" v-model="state.form.userName"><br>
        address:<input type="text" v-model="state.form.address"><br>
        phone:<input type="tel" v-model="state.form.phone"><br>
        tel:<input type="tel" v-model="state.form.tel"><br>
        <button @click="submit()">추가</button>
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
            axios.post("/api/add/user", state.form)
                .then((res)=> {
                    console.log(res);
                    alert("사용자 추가 성공");
                }).catch(()=>{
                    alert("사용자 추가 실패");
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