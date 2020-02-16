<template>
    <div class="row mt-3">
        <app-stock :key="i" v-for="(stock, i) in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
    components: {
        appStock: Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
};
</script>