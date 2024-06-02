document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById("productGrid");
    const cartCount = document.getElementById("cartCount");
    let cartItems = 0;

    const products = [
        { id: 1, title: "Producto 1", price: "$14.99", image: "https://http2.mlstatic.com/D_NQ_NP_603726-MLA75438982255_032024-O.webp" },
        { id: 2, title: "Producto 2", price: "$23.70", image: "https://www.aibitech.com/24456-home_default/medidor-de-consumo-corriente-energ%C3%ADa-electrica-ut-230b-us-con-monitor-lcd-autovoltaje-hasta-15a.jpg" },
        { id: 3, title: "Producto 3", price: "$49.99", image: "https://www.eproteca.com/wp-content/uploads/2017/01/Medidor-de-Energia-Acuvim-series-L-Accuenergy-Eproteca-Costa-Rica-1.jpg" }
    ];

    function loadProducts() {
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";

            const productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.title;
            productImage.className = "product-image";

            const productInfo = document.createElement("div");
            productInfo.className = "product-info";

            const productTitle = document.createElement("h2");
            productTitle.className = "product-title";
            productTitle.textContent = product.title;

            const productPrice = document.createElement("p");
            productPrice.className = "product-price";
            productPrice.textContent = product.price;

            const addToCartButton = document.createElement("button");
            addToCartButton.className = "add-to-cart-button";
            addToCartButton.textContent = "Agregar al carrito";
            addToCartButton.addEventListener("click", () => {
                cartItems++;
                cartCount.textContent = `Carrito: ${cartItems} objetos`;
            totalAmount.textContent = `Total a pagar: $${(cartItems * producto.price).toFixed(2)}`;
});


            productInfo.appendChild(productTitle);
            productInfo.appendChild(productPrice);
            productInfo.appendChild(addToCartButton);
            productCard.appendChild(productImage);
            productCard.appendChild(productInfo);

            productGrid.appendChild(productCard);
        });
    }

    loadProducts();
});
