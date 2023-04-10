<template>
    <div>
        <input type="text" v-model="state.form.id">
        <button @click="submit()">삭제</button>
    </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
    setup () {
        const state = reactive ({
            form: {
                id: ""
            }
        })

        const submit = () => {
            axios.delete(`/api/delete/product/${state.form.id}`)
                .then((res)=>{
                    console.log(res);
                    alert("삭제 성공");
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