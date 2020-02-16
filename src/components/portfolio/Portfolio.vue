<template>
    <div class="row mt-3">
        <app-stock :key="i" v-for="(stock,i) in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from './Stock.vue';

export default {
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    },
    components: {
        appStock: Stock
    }
};
</script>