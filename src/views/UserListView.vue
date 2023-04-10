<template>
    <div>
        <li v-for="(item, idx) in state.items" :key="idx">
        <span>{{ item.userId }}</span>
        <span>{{ item.userPw }}</span>
        <span>{{ item.userName }}</span>
        <span>{{ item.address }}</span>
        <span>{{ item.phone }}</span>
        <span>{{ item.tel }}</span>
        </li>
    </div>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";

export default ({
    setup() {
        const state = reactive({
            items:[]
        })

        const load = () =>{
            axios.get("/api/list/user").then(({data})=>{
                console.log(data);
                state.items = data;
            })
        }

        load();

        return {state}        
    },
})
</script>

<style lang="scss" scoped>

</style>