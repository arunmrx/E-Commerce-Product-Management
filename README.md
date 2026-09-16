# E-Commerce Product Management

Node.js – HTTP, Express.js, Routing & Handlebars (Case Study 2)

This project implements the E-Commerce Product Management case study twice, as two completely separate and standalone applications.

Project Structure:

E-Commerce Product Management/

├── HTTP Implementation/
│   ├── server.js
│   ├── views.js
│   ├── data.js
│   ├── package.json
│   └── public/
│       └── css/
│           └── style.css
│
└── Express Implementation/
    ├── server.js
    ├── data.js
    ├── package.json
    ├── views/
    │   ├── partials/
    │   │   ├── header.hbs
    │   │   └── footer.hbs
    │   ├── home.hbs
    │   ├── products.hbs
    │   ├── product.hbs
    │   ├── category.hbs
    │   └── 404.hbs
    └── public/
        └── css/
            └── style.css


ROUTES

GET /                         - Home page
GET /products                 - Display all products
GET /products/:id             - Display selected product details
GET /category/:name           - Display products by category

Any invalid route returns HTTP 404 Not Found.


IMPLEMENTATION A – NODE.JS HTTP MODULE

The first application is developed using the built-in Node.js HTTP module.

Express.js and Handlebars are not used in this implementation.

How to run:

cd "HTTP Implementation"
node server.js

Open the following URL in the browser:

http://localhost:3000/


WHAT IT DEMONSTRATES

1. Manual routing using the Node.js HTTP module.
2. Manual URL parsing.
3. Static routes such as / and /products.
4. Dynamic routes such as /products/:id.
5. Dynamic category routes such as /category/:name.
6. Manual request and response handling.
7. HTTP status codes such as 200 and 404.
8. HTML generation using JavaScript template literals.
9. Product data management using data.js.
10. CSS file serving using Node.js.
11. Custom 404 error page.
12. No Express.js or Handlebars is used.


IMPLEMENTATION B – EXPRESS.JS + HANDLEBARS

The second application is developed using Express.js and Handlebars.

How to run:

cd "Express Implementation"
npm install
npm start

Open the following URL in the browser:

http://localhost:3001/


WHAT IT DEMONSTRATES

1. Express.js routing.
2. Static and dynamic routes.
3. Route parameters using req.params.
4. Handlebars as the template engine.
5. Dynamic data rendering.
6. Handlebars partials for header and footer.
7. {{#each}} loop for displaying multiple products.
8. {{#if}} and {{else}} for product availability.
9. express.static() for serving CSS files.
10. Custom 404 error page.
11. Separate template files for different pages.
12. Dynamic category filtering.


HANDLEBARS FEATURES USED

The Express implementation uses Handlebars to dynamically generate the web pages.

Each Loop:

{{#each products}}
    {{name}}
    {{price}}
{{/each}}

The {{#each}} helper is used to display multiple products dynamically.

Conditional Rendering:

{{#if available}}
    In Stock
{{else}}
    Out of Stock
{{/if}}

The {{#if}} helper is used to display the availability status of each product.


SAMPLE PRODUCT DATA

Both implementations use the same product dataset stored in data.js.

The project contains 12 products from different categories.

Electronics:

1. iPhone 15
2. Samsung Galaxy S24
3. HP Pavilion Laptop
4. Sony WH-1000XM5 Headphones
5. Apple AirPods Pro

Shoes:

6. Nike Air Max
7. Adidas Running Shoes

Clothing:

8. Levi's Jeans
9. Puma T-Shirt

Accessories:

10. Casio G-Shock Watch
11. Ray-Ban Sunglasses

Bags:

12. American Tourister Backpack


Each product contains:

ID
Product Name
Category
Price
Availability


EXAMPLE DYNAMIC ROUTES

Product details:

/products/1

This displays the details of product ID 1.

Another example:

/products/5

This displays the details of product ID 5.

Category example:

/category/Electronics

This displays all products belonging to the Electronics category.

Other examples:

/category/Shoes
/category/Clothing
/category/Accessories


ERROR HANDLING

Both implementations include a custom 404 error page.

Example:

/products/999

If product ID 999 does not exist, the application returns a 404 Product Not Found page.

Another example:

/category/Unknown

If the category does not exist, the application returns a 404 Category Not Found page.

Any unknown URL also returns a 404 Page Not Found response.


COMPARISON – HTTP MODULE VS EXPRESS.JS

Routing:

Node.js HTTP Module:
Routing is handled manually by checking the request URL and HTTP method.

Express.js:
Routing is handled using Express methods such as app.get() and route parameters.

Code Complexity:

Node.js HTTP Module:
More code is required because URL parsing, routing and response handling are done manually.

Express.js:
Less boilerplate code is required because Express provides built-in routing and response methods.

Route Parameters:

Node.js HTTP Module:
Route parameters must be extracted manually from the URL.

Express.js:
Route parameters are automatically available through req.params.

View Rendering:

Node.js HTTP Module:
HTML pages are generated manually using JavaScript template literals.

Express.js:
HTML pages are created using separate Handlebars template files.

Dynamic Data:

Node.js HTTP Module:
Product data is manually inserted into generated HTML.

Express.js:
Product data is passed directly from the server to Handlebars templates.

Loops:

Node.js HTTP Module:
JavaScript loops such as forEach() are used.

Express.js:
The Handlebars {{#each}} helper is used.

Conditions:

Node.js HTTP Module:
JavaScript if/else conditions are used.

Express.js:
Handlebars {{#if}} and {{else}} helpers are used.

Maintainability:

Node.js HTTP Module:
As the number of routes and features increases, manually managing the application can become more difficult.

Express.js:
Routes, templates and static files are separated, making the application easier to maintain.

Scalability:

Node.js HTTP Module:
Additional features require more manual implementation.

Express.js:
Express provides middleware and an ecosystem that can be used to add more features as the application grows.

Dependencies:

Node.js HTTP Module:
Uses built-in Node.js modules and does not require Express or Handlebars.

Express.js:
Requires Express.js and Handlebars.


CONCLUSION

The Node.js HTTP module provides low-level control over HTTP requests and responses. In Implementation A, routing, URL parameter handling, status codes, CSS serving and HTML generation are handled manually.

Express.js provides a higher-level framework that simplifies routing and request/response handling. Handlebars allows HTML templates to be separated from the server-side application logic.

This project demonstrates the same E-Commerce Product Management system using two different approaches:

Implementation A:

Node.js HTTP Module
        ↓
Manual Routing
        ↓
Manual HTML Generation
        ↓
HTTP Response


Implementation B:

Express.js
        ↓
Express Routing
        ↓
Handlebars Templates
        ↓
Dynamic Data Rendering
        ↓
HTTP Response
