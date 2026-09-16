function header() {
    return `
        <header class="main-header">

            <div class="logo">
                🛍️ ShopZone
            </div>

            <nav>
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/category/Electronics">Electronics</a>
                <a href="/category/Shoes">Shoes</a>
                <a href="/category/Clothing">Clothing</a>
            </nav>

        </header>
    `;
}


function footer() {
    return `
        <footer>

            <h3>🛍️ ShopZone</h3>

            <p>
                E-Commerce Product Management System
            </p>

            <p>
                © 2026 ShopZone. All Rights Reserved.
            </p>

        </footer>
    `;
}


function layout(title, content) {

    return `
        <!DOCTYPE html>

        <html lang="en">

        <head>

            <meta charset="UTF-8">

            <meta name="viewport"
                  content="width=device-width, initial-scale=1.0">

            <title>${title}</title>

            <link rel="stylesheet"
                  href="/css/style.css">

        </head>

        <body>

            ${header()}

            <main class="container">

                ${content}

            </main>

            ${footer()}

        </body>

        </html>
    `;
}


function homePage() {

    return layout(
        "ShopZone - Home",

        `
        <section class="hero">

            <div class="hero-content">

                <span class="badge">
                    Welcome to ShopZone
                </span>

                <h1>
                    Everything You Need,
                    <span>All in One Place.</span>
                </h1>

                <p>
                    Explore electronics, fashion, shoes,
                    accessories and more.
                </p>

                <a class="button"
                   href="/products">
                    Explore Products →
                </a>

            </div>

        </section>


        <section class="info-section">

            <h2>Why ShopZone?</h2>

            <div class="info-grid">

                <div class="info-card">
                    <div class="icon">📦</div>
                    <h3>Wide Collection</h3>
                    <p>
                        Choose from different products
                        and categories.
                    </p>
                </div>


                <div class="info-card">
                    <div class="icon">💰</div>
                    <h3>Great Products</h3>
                    <p>
                        Find products for your daily needs.
                    </p>
                </div>


                <div class="info-card">
                    <div class="icon">⚡</div>
                    <h3>Easy Browsing</h3>
                    <p>
                        Quickly find products using
                        categories.
                    </p>
                </div>

            </div>

        </section>
        `
    );
}


function productsPage(products) {

    let productHTML = "";

    products.forEach(product => {

        productHTML += `

            <div class="product-card">

                <div class="product-icon">
                    🛍️
                </div>

                <div class="product-content">

                    <span class="category">
                        ${product.category}
                    </span>

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="price">
                        ₹${product.price}
                    </p>

                    ${
                        product.available

                        ? `
                            <p class="available">
                                ● In Stock
                            </p>
                          `

                        : `
                            <p class="out">
                                ● Out of Stock
                            </p>
                          `
                    }

                    <a class="small-button"
                       href="/products/${product.id}">
                        View Details
                    </a>

                </div>

            </div>

        `;
    });


    return layout(
        "ShopZone - Products",

        `

        <div class="page-heading">

            <span class="badge">
                Our Collection
            </span>

            <h1>All Products</h1>

            <p>
                Browse our complete product collection.
            </p>

        </div>


        <div class="product-grid">

            ${productHTML}

        </div>

        `
    );
}


function productPage(product) {

    return layout(
        `${product.name} - ShopZone`,

        `

        <div class="details-card">

            <div class="details-icon">
                🛍️
            </div>

            <div>

                <span class="category">
                    ${product.category}
                </span>

                <h1>
                    ${product.name}
                </h1>

                <p class="big-price">
                    ₹${product.price}
                </p>

                <p>
                    <strong>Product ID:</strong>
                    ${product.id}
                </p>

                <p>
                    <strong>Category:</strong>
                    ${product.category}
                </p>

                ${
                    product.available

                    ? `
                        <p class="available">
                            ● Product Available
                        </p>
                      `

                    : `
                        <p class="out">
                            ● Currently Out of Stock
                        </p>
                      `
                }

                <a class="button"
                   href="/products">
                    ← Back to Products
                </a>

            </div>

        </div>

        `
    );
}


function categoryPage(category, products) {

    let productHTML = "";

    products.forEach(product => {

        productHTML += `

            <div class="product-card">

                <div class="product-icon">
                    🛍️
                </div>

                <div class="product-content">

                    <span class="category">
                        ${product.category}
                    </span>

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="price">
                        ₹${product.price}
                    </p>

                    ${
                        product.available

                        ? `
                            <p class="available">
                                ● In Stock
                            </p>
                          `

                        : `
                            <p class="out">
                                ● Out of Stock
                            </p>
                          `
                    }

                    <a class="small-button"
                       href="/products/${product.id}">
                        View Details
                    </a>

                </div>

            </div>

        `;
    });


    return layout(
        `${category} - ShopZone`,

        `

        <div class="page-heading">

            <span class="badge">
                Category
            </span>

            <h1>${category}</h1>

            <p>
                Products available in this category.
            </p>

        </div>


        <div class="product-grid">

            ${productHTML}

        </div>

        `
    );
}


function errorPage(title, message) {

    return layout(
        "404 - ShopZone",

        `

        <div class="error-page">

            <div class="error-number">
                404
            </div>

            <h1>${title}</h1>

            <p>
                ${message}
            </p>

            <a class="button"
               href="/">
                ← Go to Home
            </a>

        </div>

        `
    );
}


module.exports = {
    homePage,
    productsPage,
    productPage,
    categoryPage,
    errorPage
};