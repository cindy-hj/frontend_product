<template>
    <div>
        <ul>
            <li v-for="(item, idx) in state.items" :key="idx">
                <span>{{ item.categoryId }}&nbsp;</span>
                <span>{{ item.categoryName }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import axios from "axios";

export default {
    setup () {
        const state = reactive({
            items: [],
        })

        const load = () => {
            axios.get("/api/get/category")
                .then(({data})=> {
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