// public/app.js

// Function to load products from API
async function loadProducts() {
    try {
        const response = await fetch('https://api.example.com/products'); // Replace with your API endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const products = await response.json();
        console.log(products); // Do something with the product data
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function to load products
loadProducts();