const express = require("express");
const path = require("path");

const { engine } = require("express-handlebars");

const products = require("./data");


const app = express();

const PORT = 3001;


/* --------------------------------
   HANDLEBARS CONFIGURATION
-------------------------------- */

app.engine(
    "hbs",

    engine({
        extname: ".hbs",

        defaultLayout: "main",

        layoutsDir:
            path.join(
                __dirname,
                "views/layouts"
            ),

        partialsDir:
            path.join(
                __dirname,
                "views/partials"
            )
    })
);


app.set(
    "view engine",
    "hbs"
);


app.set(
    "views",
    path.join(
        __dirname,
        "views"
    )
);


/* --------------------------------
   STATIC FILES
-------------------------------- */

app.use(
    express.static(
        path.join(
            __dirname,
            "public"
        )
    )
);


/* --------------------------------
   HOME ROUTE
-------------------------------- */

app.get("/", (req, res) => {

    res.status(200).render(
        "home",
        {
            title: "ShopZone - Home"
        }
    );

});


/* --------------------------------
   ALL PRODUCTS
-------------------------------- */

app.get("/products", (req, res) => {

    res.status(200).render(
        "products",
        {
            title: "ShopZone - Products",

            products: products
        }
    );

});


/* --------------------------------
   PRODUCT DETAILS
   Dynamic Route
   /products/:id
-------------------------------- */

app.get(
    "/products/:id",

    (req, res) => {

        const id =
            parseInt(
                req.params.id
            );


        const product =
            products.find(
                p => p.id === id
            );


        if (!product) {

            return res
                .status(404)
                .render(
                    "404",
                    {
                        title:
                            "Product Not Found",

                        message:
                            "The product you are looking for does not exist."
                    }
                );

        }


        res.status(200).render(
            "product",
            {
                title:
                    product.name,

                product:
                    product
            }
        );

    }
);


/* --------------------------------
   CATEGORY
   Dynamic Route
   /category/:name
-------------------------------- */

app.get(
    "/category/:name",

    (req, res) => {

        const category =
            req.params.name;


        const categoryProducts =
            products.filter(
                product =>

                    product.category
                        .toLowerCase() ===

                    category.toLowerCase()
            );


        if (
            categoryProducts.length === 0
        ) {

            return res
                .status(404)
                .render(
                    "404",
                    {
                        title:
                            "Category Not Found",

                        message:
                            "The category you are looking for does not exist."
                    }
                );

        }


        res.status(200).render(
            "category",
            {
                title:
                    `${category} Products`,

                category:
                    category,

                products:
                    categoryProducts
            }
        );

    }
);


/* --------------------------------
   404 PAGE
-------------------------------- */

app.use(
    (req, res) => {

        res
            .status(404)
            .render(
                "404",
                {
                    title:
                        "Page Not Found",

                    message:
                        "The page you are looking for does not exist."
                }
            );

    }
);


/* --------------------------------
   START SERVER
-------------------------------- */

app.listen(
    PORT,

    () => {

        console.log(
            `Express Server running at http://localhost:${PORT}`
        );

    }
);