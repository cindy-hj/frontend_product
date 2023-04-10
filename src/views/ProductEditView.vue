<template>
    <div>
        productId: <input type="text" v-model="state.form.productId"><br>
        productName: <input type="text" v-model="state.form.productName"><br>
        productPrice: <input type="text" v-model="state.form.productPrice"><br>
        imgPath: <input type="text" v-model="state.form.imgPath"><br>
        <button @click="submit()">수정</button>
    </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
    setup () {
        const state = reactive({
            form: {
                productId:"",
                productName:"",
                productPrice:"",
                imgPath:""
            }
        })

        const submit = () => {
            axios.put("/api/modified2/product", state.form)
                .then((res)=> {
                    console.log(res);
                    alert("수정 성공");
                }).catch(()=>{
                    alert("수정 실패");
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