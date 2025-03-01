document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch("https://api.checkoutchamp.com/order/surcharge/?loginId=123&password=12345&mode=CALC&cardNumber=4809035904248714&shipPostalCode=30078&postalCode=30092&product1_id=1");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();  // Change to .json() if API returns JSON
        console.log("API Response: >>>>>>", data);
        return data;  // Now you can use this data elsewhere
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    // Function to check for recurring products
    function checkForRecurringProduct(cartItems) {
    return cartItems.some(item => item.fulfillmentCycleType === 'RECURRING');
    }

    // Show or hide checkbox based on recurring products
    const checkboxContainer = document.getElementById('i2bfyo');
    if (checkboxContainer) {
    checkboxContainer.style.display = checkForRecurringProduct(cartItems) ? 'block' : 'none';
    }
    
  });
  