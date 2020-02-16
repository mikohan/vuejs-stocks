<template>
    <div class="col-4">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">
                {{ stock.name }}
                <small>$ {{ stock.price }} | {{ stock.quantity }}</small>
            </div>
            <div class="card-body">
                <h5 class="card-title">Success card title</h5>
                <p
                    class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div class="card-footer bg-transparent border-success">
                <div class="float-left col-8">
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                        :class="{ 'border-danger': insufficientQuantity }"
                    />
                </div>
                <div class="float-right col-4">
                    <button
                        class="btn btn-outline-primary"
                        @click="sellStock"
                        :disabled="insufficientQuantity || quantity <= 0 || !isInt(quantity)"
                    >{{ insufficientQuantity ? 'LowQ' : 'Sell'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: ["stock"],
    data() {
        return {
            quantity: 0
        };
    },
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity;
        }
    },
    methods: {
        ...mapActions({
            placeSellOrder: "sellStock"
        }),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.placeSellOrder(order);

            this.quantity = 0;
        },
        isInt(n) {
            return n % 1 === 0;
        }
    }
};
</script>