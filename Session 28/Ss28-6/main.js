const cart = {
    product: [
        { name: 'Mèn mén', price: 30000, quantity: 2 },
        { name: 'Mì tôm', price: 5000, quantity: 1 },
        { name: 'Bánh bao', price: 15000, quantity: 3 },
    ],
    totalPay: function () {
        let sum = 0;
        for (const item of this.product) {
            sum += item.price * item.quantity;
        }
        return sum;
    },
};
console.log(cart.totalPay());
