document.addEventListener('DOMContentLoaded', async function () {
    console.log('Hello World!');
  
    try {
      const response = await fetch(
        'https://api.checkoutchamp.com/order/query/?loginId=testapi&password=abc123&lastName=Robinson&startDate=8%2F7%2F14',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const cartItems = await response.json();
      
      // Function to check for recurring products
      function checkForRecurringProduct(cartItems) {
        return cartItems.some(item => item.fulfillmentCycleType === 'RECURRING');
      }
  
      // Show or hide checkbox based on recurring products
      const checkboxContainer = document.getElementById('i2bfyo');
      if (checkboxContainer) {
        checkboxContainer.style.display = checkForRecurringProduct(cartItems) ? 'block' : 'none';
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  