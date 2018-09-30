var prices = [1, 2, 3, 54, 123, 756, 43, 98, 33, 21, 32, 55, 76];

prices.sort(function(a, b) {
    return 0.5 - Math.random();
});
console.log(prices);
