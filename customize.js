document.addEventListener('DOMContentLoaded', function () {
    // Assuming cartData is fetched from API but cannot do the api call causing CORS error
const cartItems = cartData.items || [];  // Replace cartData with the actual variable

// Function to check for recurring products
function checkForRecurringProduct(cartItems) {
  return cartItems.some(item => item.fulfillmentCycleType === 'RECURRING');
}

// Show or hide checkbox based on recurring products
// id of the checkbox radio container 'i2bfyo'
if (checkForRecurringProduct(cartItems)) {
  document.getElementById('i2bfyo').style.display = 'block';
} else {
  document.getElementById('i2bfyo').style.display = 'none';
}
});