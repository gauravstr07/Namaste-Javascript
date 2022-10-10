const cart = ['Apple', 'Sumsung', 'OnePlus', 'Redmi'];

createOrder(cart, function(orderId){
    proceedToPayment(orderId);
});

createOrder(cart);