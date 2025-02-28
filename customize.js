document.addEventListener("DOMContentLoaded", async function () {
    // try {

    //     const response = await fetch("your-api-endpoint", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer your-access-token",             },
    //     });

    //     if (!response.ok) throw new Error("Failed to fetch purchase data");
	// const cartItems = window.checkoutData?.products || [];
    //     const data = await response.json();
    //     // Extract purchase data
    //     const purchases = data?.message?.data || [];

    //           const hasRecurringProduct = purchases.some(purchase => 
    //         purchase.billingCycleType === "RECURRING"
    //     );

        if (hasRecurringProduct) {
            displayRecurringCheckbox();
        }

    // } catch (error) {
    //     console.error("Error fetching purchase data:", error);
    // }
});

// Function to create and display the checkbox
function displayRecurringCheckbox() {
    const radioContainer = document.getElementById("#i2bfyo"); // Change this to the correct container
	console.log ('radio container >>>>',radioContainer)
}
