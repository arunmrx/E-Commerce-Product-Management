const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const products = require("./data");

const {
    homePage,
    productsPage,
    productPage,
    categoryPage,
    errorPage
} = require("./views");


const PORT = 3000;


const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    const pathname = parsedUrl.pathname;


    // CSS FILE
    if (pathname === "/css/style.css") {

        const cssPath = path.join(
            __dirname,
            "public",
            "css",
            "style.css"
        );


        fs.readFile(cssPath, (err, data) => {

            if (err) {

                res.writeHead(404, {
                    "Content-Type": "text/plain"
                });

                res.end("CSS file not found");

                return;
            }


            res.writeHead(200, {
                "Content-Type": "text/css"
            });

            res.end(data);

        });

        return;
    }


    // HOME ROUTE
    if (
        req.method === "GET" &&
        pathname === "/"
    ) {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(homePage());

        return;
    }


    // PRODUCTS ROUTE
    if (
        req.method === "GET" &&
        pathname === "/products"
    ) {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(productsPage(products));

        return;
    }


    // PRODUCT DETAILS ROUTE
    if (
        req.method === "GET" &&
        pathname.startsWith("/products/")
    ) {

        const id = parseInt(
            pathname.split("/")[2]
        );


        const product = products.find(
            p => p.id === id
        );


        if (!product) {

            res.writeHead(404, {
                "Content-Type": "text/html"
            });

            res.end(
                errorPage(
                    "Product Not Found",
                    "The product you are looking for does not exist."
                )
            );

            return;
        }


        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(
            productPage(product)
        );

        return;
    }


    // CATEGORY ROUTE
    if (
        req.method === "GET" &&
        pathname.startsWith("/category/")
    ) {

        const category =
            decodeURIComponent(
                pathname.split("/")[2]
            );


        const categoryProducts =
            products.filter(
                product =>
                    product.category.toLowerCase() ===
                    category.toLowerCase()
            );


        if (categoryProducts.length === 0) {

            res.writeHead(404, {
                "Content-Type": "text/html"
            });

            res.end(
                errorPage(
                    "Category Not Found",
                    "This category does not exist."
                )
            );

            return;
        }


        res.writeHead(200, {
            "Content-Type": "text/html"
        });


        res.end(
            categoryPage(
                category,
                categoryProducts
            )
        );

        return;
    }


    // 404 ROUTE
    res.writeHead(404, {
        "Content-Type": "text/html"
    });


    res.end(
        errorPage(
            "Page Not Found",
            "The page you are looking for does not exist."
        )
    );

});


server.listen(PORT, () => {

    console.log(
        `HTTP Server running at http://localhost:${PORT}`
    );

});