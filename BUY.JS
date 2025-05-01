 // Function to submit address form
 function submitAddress() {
    const addressLine1 = document.getElementById("address-line1").value;
    const addressLine2 = document.getElementById("address-line2").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const country = document.getElementById("country").value;

    if (!addressLine1 || !city || !zipCode || !country) {
        alert("Please fill in all required fields.");
        return;
    }

    alert("Address submitted successfully!");
    // Optionally, store the address in a variable or send it to a server here
}

// Function to process the payment
function processPayment() {
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked');
    const statusSection = document.getElementById("order-status-section");
    const paymentStatus = document.getElementById("payment-status");

    if (!selectedMethod) {
        alert("Please select a payment method.");
        return;
    }

    if (selectedMethod.value === "cod") {
        paymentStatus.innerText = "Payment Method: Cash on Delivery. Please pay when the order arrives.";
    } else if (selectedMethod.value === "card") {
        paymentStatus.innerText = "Payment Successful. Thank you for paying online.";
    }

    statusSection.style.display = "block";
}
