# E-Commerce Product Management

Node.js – HTTP, Express.js, Routing & Handlebars (Case Study 2)

This project implements the E-Commerce Product Management case study twice, as two completely separate and standalone applications.

Project Structure

E-Commerce Product Management/

|-- HTTP Implementation/
|   |-- server.js
|   |-- views.js
|   |-- data.js
|   |-- package.json
|   |
|   `-- public/
|       `-- css/
|           `-- style.css
|
`-- Express Implementation/
    |-- server.js
    |-- data.js
    |-- package.json
    |
    |-- views/
    |   |-- partials/
    |   |   |-- header.hbs
    |   |   `-- footer.hbs
    |   |
    |   |-- home.hbs
    |   |-- products.hbs
    |   |-- product.hbs
    |   |-- category.hbs
    |   `-- 404.hbs
    |
    `-- public/
        `-- css/
            `-- style.css


ROUTES

GET /

Displays the home page of the E-Commerce Product Management system.


GET /products

Displays all available products.


GET /products/:id

Displays the details of a selected product using its dynamic product ID.


GET /category/:name

Displays products belonging to a selected category using the dynamic category name.


HTTP STATUS CODES

200 - Successful request.

404 - Page, product, or category not found.

405 - Method Not Allowed when an unsupported HTTP method is used for a route.


IMPLEMENTATION A - NODE.JS HTTP MODULE

The first application is developed using Node.js's built-in HTTP module.

Express.js and Handlebars are not used in this implementation.

To run the application:

1. Open the terminal.

2. Navigate to the HTTP Implementation folder.

3. Run:

node server.js

4. Open the following URL in the browser:

http://localhost:3000/


WHAT IMPLEMENTATION A DEMONSTRATES

- Node.js built-in http module.
- Manual routing.
- Manual URL parsing.
- Dynamic route parameters.
- Manual request and response handling.
- HTTP status codes.
- Manual HTML generation.
- JavaScript template literals.
- JavaScript forEach loops.
- JavaScript if/else conditions.
- Manual CSS file serving.
- 404 error handling.

Dynamic product routing is implemented using the product ID.

For example:

/products/1

The application extracts the product ID from the URL and searches for the matching product in the product dataset.

If the product exists, its details are displayed.

If the product does not exist, a 404 error page is displayed.


IMPLEMENTATION B - EXPRESS.JS + HANDLEBARS

The second application is developed using Express.js and Handlebars.

Express.js is used for routing and request/response handling.

Handlebars is used as the template engine for dynamically generating HTML pages.

To run the application:

1. Open the terminal.

2. Navigate to the Express Implementation folder.

3. Install the required dependencies:

npm install

4. Start the application:

npm start

5. Open the following URL in the browser:

http://localhost:3001/


WHAT IMPLEMENTATION B DEMONSTRATES

- Express.js routing.
- Static routes.
- Dynamic routes.
- Route parameters.
- Express request and response handling.
- Handlebars template engine.
- Dynamic data rendering.
- Handlebars partials.
- Header and footer reuse.
- Handlebars {{#each}} loop.
- Handlebars {{#if}} conditional.
- Dynamic product information.
- Category filtering.
- express.static() for CSS files.
- Custom 404 page.


HANDLEBARS EACH LOOP

The Express implementation uses the Handlebars {{#each}} helper to display multiple products dynamically.

Example:

{{#each products}}

    <h2>{{name}}</h2>

    <p>{{category}}</p>

    <p>₹{{price}}</p>

{{/each}}

This allows the application to display multiple products without manually creating separate HTML elements for every product.


HANDLEBARS CONDITIONAL

The application uses the {{#if}} helper to display the availability of a product.

Example:

{{#if available}}

    <span>In Stock</span>

{{else}}

    <span>Out of Stock</span>

{{/if}}

This demonstrates conditional rendering in Handlebars.


HANDLEBARS PARTIALS

The Express implementation uses reusable partial templates.

Header:

views/partials/header.hbs

Footer:

views/partials/footer.hbs

These partials are reused across different pages so that common website elements do not need to be written repeatedly.


SAMPLE PRODUCT DATA

Both implementations use product data stored in data.js.

The application contains 12 products from different categories.


ELECTRONICS

1. iPhone 15
2. Samsung Galaxy S24
3. HP Pavilion Laptop
4. Sony WH-1000XM5 Headphones
5. Apple AirPods Pro


SHOES

6. Nike Air Max
7. Adidas Running Shoes


CLOTHING

8. Levi's Jeans
9. Puma T-Shirt


ACCESSORIES

10. Casio G-Shock Watch
11. Ray-Ban Sunglasses


BAGS

12. American Tourister Backpack


Each product contains information such as:

- Product ID
- Product Name
- Category
- Price
- Availability


ERROR HANDLING

Both applications contain a custom 404 error page.

For example:

/products/999

If product ID 999 does not exist, the application returns a 404 response and displays a Product Not Found page.


Another example:

/category/Unknown

If the requested category does not exist, the application returns a 404 response and displays a Category Not Found page.


COMPARISON - HTTP MODULE VS EXPRESS.JS


ROUTING

HTTP Module:

Routing is performed manually by checking the request URL and using conditions and string matching.

Express.js:

Routing is handled using Express methods such as app.get() and dynamic route parameters.


ROUTE PARAMETERS

HTTP Module:

Route parameters such as the product ID have to be extracted manually from the URL.

Express.js:

Route parameters are automatically available through req.params.


CODE COMPLEXITY

HTTP Module:

More code is required because URL parsing, routing, response handling and HTML generation are performed manually.

Express.js:

Express provides built-in routing and response methods, which reduces the amount of repetitive code.


VIEW RENDERING

HTTP Module:

HTML pages are generated manually using JavaScript template literals.

Express.js:

HTML is separated into Handlebars template files.


DYNAMIC DATA

HTTP Module:

Product data is inserted manually into HTML strings.

Express.js:

Product data can be passed directly from the server to Handlebars templates.


LOOPS

HTTP Module:

JavaScript forEach() loops are used to generate multiple product elements.

Express.js:

The Handlebars {{#each}} helper is used to display multiple products.


CONDITIONALS

HTTP Module:

JavaScript if/else conditions are used.

Express.js:

Handlebars {{#if}} and {{else}} helpers are used.


MAINTAINABILITY

HTTP Module:

As the number of routes and pages increases, manually managing routing and HTML can become more difficult.

Express.js:

Routes, views and static files are separated, making the application easier to organize and maintain.


SCALABILITY

HTTP Module:

Additional features require more manual implementation using Node.js modules.

Express.js:

Express provides middleware and an ecosystem that can be used when the application grows.


DEPENDENCIES

HTTP Module:

Uses Node.js built-in modules and does not require Express.js or Handlebars.

Express.js:

Requires Express.js and the Handlebars hbs package.


CONCLUSION

The Node.js HTTP module provides low-level control over HTTP requests and responses.

Implementation A demonstrates how routing, URL parameter handling, HTTP status codes, CSS serving and HTML generation can be performed manually using Node.js.

Express.js provides a higher-level framework that simplifies routing, request and response handling and middleware management.

Implementation B combines Express.js with Handlebars to separate server-side routing logic from HTML templates and to dynamically render product information.

Both implementations provide the same E-Commerce Product Management functionality while demonstrating two different approaches to Node.js web development.
