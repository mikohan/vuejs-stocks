<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Stock Trander</router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link class="nav-item" to="/portfolio" activeClass="active" tag="li">
                    <a class="nav-link">Portfolio</a>
                </router-link>
                <router-link class="nav-item" to="/stocks" activeClass="active" tag="li">
                    <a class="nav-link">Stocks</a>
                </router-link>
                <li class="nav-item dropdown" :class="{ show: isDropDownShow }">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        @click="isDropDownShow = !isDropDownShow"
                    >Save & Load</a>
                    <div
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                        :class="{ show: isDropDownShow }"
                    >
                        <a class="dropdown-item" href="#" @click="saveData(); isDropDownShow = !isDropDownShow;">Save</a>
                        <a class="dropdown-item" href="#" @click="loadData(); isDropDownShow = !isDropDownShow;" >Load Data</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="#" class="nav-link" @click="endDay">End Day</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Funds:
                        <b>{{ funds | currency }}</b>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
            return {
        isDropDownShow: false
        }
    }, 
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    },
    methods: {
        ...mapActions({
            randomizeStocks: 'randomizeStocks',
            fetchData: 'loadData'
        }),
        endDay() {
            this.randomizeStocks();
        },
        saveData() {
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks
            };
            this.$http.put('data.json', data);
        },
        loadData() {
            this.fetchData();
        }
    }
};
</script>