<template>
    <div>
        <input type="text" v-model="state.form.categoryId">
        <input type="text" v-model="state.form.categoryName" @keyup.enter="submit">
        <button @click="submit()">수정</button>
    </div>
</template>
<script>
import router from '@/router';
import axios from 'axios';
import { reactive } from 'vue';

export default {
    setup () {
        const state = reactive({
            form : {
                categoryId:"",
                categoryName:"",
            }
        })

        const submit = () => {
            axios.put("/api/modified/category", state.form)
                .then((res) => {
                    console.log(res);
                    alert("수정완료");
                    router.push("/categorylist");
                }).catch(()=> {
                    alert("수정실패");
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