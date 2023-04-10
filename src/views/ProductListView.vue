<template>
    <div>
        <ul>
            <li v-for="(item, idx) in state.items" :key="idx">
                <span>{{ item.productId }}</span>
                <span>{{ item.productName }}</span>
                <span>{{ item.productPrice }}</span>
                <span>{{ item.imgPath }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
import { reactive, onMounted } from "vue";

export default {
    setup () {
        const state = reactive({
            items : []
        })        

        const load = () => {
            axios.get("/api/get/product")
                .then(({data})=>{
                    console.log(data);
                    state.items = data;
                })
        }
        
        onMounted(()=>{
            load();
        })

        return {
            state,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>