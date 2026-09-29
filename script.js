
let productImage = document.getElementById("productImage");

let originalImage = productImage.src;

// Buy Now Button
document.getElementById("buyBtn").addEventListener("click", function () {
    document.getElementById("message").innerText =
        "Thank you! Your product is ready to order.";
});

// Change Product Image
document.getElementById("changeImageBtn").addEventListener("click", function () {
    productImage.src =
        "images/watch.jpg";

    originalImage = productImage.src;

    document.getElementById("productName").innerText =
        "Stylish Wrist Watch";

    document.getElementById("description").innerText =
        "A modern wristwatch for your everyday style.";

    document.getElementById("price").innerText = "Rs. 2,999";

    document.getElementById("message").innerText =
        "Product image changed!";
});

// Welcome User
document.getElementById("welcomeBtn").addEventListener("click", function () {
    let name = document.getElementById("userName").value.trim();

    if (name === "") {
        document.getElementById("welcomeMessage").innerText =
            "Please enter your name!";
    } else {
        document.getElementById("welcomeMessage").innerText =
            "Welcome, " + name + "!";
    }
});

// Mouse Over Event
productImage.addEventListener("mouseover", function () {
    productImage.src =
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600";
});

// Mouse Out Event
productImage.addEventListener("mouseout", function () {
    productImage.src = originalImage;
});

// Change Product Details
document.getElementById("detailsBtn").addEventListener("click", function () {
    document.getElementById("productName").innerText =
        "Premium Smart Watch";

    document.getElementById("description").innerText =
        "Track your daily activities with this premium smart watch.";

    document.getElementById("price").innerText = "Rs. 6,499";

    document.getElementById("message").innerText =
        "Product details updated successfully!";
});