<template>
    <div>
        제품 이름: <input type="text" v-model="state.form.productName"><br>
        제품 가격: <input type="text" v-model="state.form.productPrice"><br>
        이미지: <input type="text" v-model="state.form.imgPath" @keyup.enter="submit"><br>
        <button @click="submit()">저장</button>
    </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
    setup () {
        const state = reactive({
            form : {
                productName : "",
                productPrice : 0,
                imgPath : "",
            }
        })

        const submit = () => {
            axios.post("/api/add/product", state.form)
                .then((res) => {
                    console.log(res);
                    alert("입력 성공");
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