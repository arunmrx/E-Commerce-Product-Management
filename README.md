# E-Commerce Product Management

### Node.js – HTTP, Express.js, Routing & Handlebars (Case Study 2)

This project implements the **E-Commerce Product Management** case study **twice**, as two completely separate, standalone applications:

```text
E-Commerce Product Management/

│
├── HTTP Implementation/          (Node.js core "http" module, no Express/Handlebars)
│   ├── server.js
│   ├── views.js
│   ├── data.js
│   ├── package.json
│   └── public/
│       └── css/
│           └── style.css
│
└── Express Implementation/       (Express.js + Handlebars)
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
    │   └── category.hbs
    └── public/
        └── css/
            └── style.css

Both applications implement the same e-commerce functionality so that the Node.js HTTP module and Express.js implementation can be compared directly.

Routes
Route	Description
GET /	Home page
GET /products	Display all products
GET /products/:id	Display details of a selected product
GET /category/:name	Display products belonging to a category

Examples:

/
 /products
 /products/1
 /products/5
 /category/Electronics
 /category/Shoes
 /category/Clothing

Any invalid or unknown route returns HTTP 404 Not Found.

If a valid route is requested using an unsupported HTTP method, the application can return HTTP 405 Method Not Allowed where method handling is implemented.

Implementation A – Node.js http Module

The first application is built using Node.js's built-in http module.

It does not use Express.js or Handlebars.

Running the application
cd "HTTP Implementation"
node server.js

Then open:

http://localhost:3000/
What it demonstrates
Manual routing using Node.js's built-in http module.
Manual URL parsing using the request URL.
Dynamic route parameters such as /products/:id.
Category-based dynamic routing using /category/:name.
Manual HTTP response handling using:
res.writeHead()
res.end()
Explicit HTTP status codes:
200 – Successful request
404 – Product/category/route not found
HTML pages are generated manually using JavaScript template literals in views.js.
Product information is stored in data.js.
Product lists are generated using JavaScript loops such as forEach().
Product availability is handled using JavaScript conditions.
CSS files are served manually using Node.js file-system functionality.
No Express.js or Handlebars is used in this implementation.
Example Dynamic Route
GET /products/1

The application extracts the product ID from the URL, searches for the matching product in the dataset, and displays its details.

For example:

/products/1

displays the details of the product with ID 1.

Implementation B – Express.js + Handlebars

The second application uses Express.js for routing and Handlebars (hbs) for dynamic HTML rendering.

Running the application
cd "Express Implementation"
npm install
npm start

Then open:

http://localhost:3001/
What it demonstrates
Express.js routing using methods such as:
app.get('/', ...)
app.get('/products', ...)
app.get('/products/:id', ...)
app.get('/category/:name', ...)
Dynamic route parameters using:
req.params.id
req.params.name
Handlebars as the template engine:
app.set('view engine', 'hbs');
Separate .hbs files for different pages.
Reusable Handlebars partials:
header.hbs
footer.hbs
Dynamic product rendering from server-side data.
{{#each}} loops for displaying multiple products.
{{#if}} conditional blocks for product availability.
Category filtering using route parameters.
express.static() for serving CSS files.
Custom 404 page for invalid routes.
Dynamic data passed from the Express server to Handlebars templates.
Example Handlebars Loop
{{#each products}}
    <h2>{{name}}</h2>
    <p>₹{{price}}</p>
{{/each}}

This allows multiple products to be displayed dynamically without manually writing HTML for every product.

Conditional Rendering

Product availability is displayed using a Handlebars conditional:

{{#if available}}
    <span>In Stock</span>
{{else}}
    <span>Out of Stock</span>
{{/if}}

This demonstrates conditional/helper functionality required by the assignment.

Sample Product Data

Both implementations use an e-commerce product dataset stored in data.js.

The dataset contains 12 products from different categories.

Electronics
iPhone 15
Samsung Galaxy S24
HP Pavilion Laptop
Sony WH-1000XM5 Headphones
Apple AirPods Pro
Shoes
Nike Air Max
Adidas Running Shoes
Clothing
Levi's Jeans
Puma T-Shirt
Accessories
Casio G-Shock Watch
Ray-Ban Sunglasses
Bags
American Tourister Backpack

Each product contains information such as:

ID
Product Name
Category
Price
Availability

For example:

Product ID: 1
Name: iPhone 15
Category: Electronics
Price: ₹69,999
Availability: In Stock
Error Handling

Both implementations include error handling for invalid routes and unavailable products.

Example
/products/999

If product ID 999 does not exist, the application displays a custom 404 Not Found page.

Similarly:

/category/Unknown

returns a 404 response when the requested category does not exist.

Comparison: HTTP Module vs Express.js
Aspect	Node.js http Module – Implementation A	Express.js – Implementation B
Routing	Routing is handled manually by checking URLs and using conditions/string matching.	Routing is handled using Express methods such as app.get() and route parameters.
Route Parameters	Parameters such as product ID must be extracted manually from the URL.	Parameters are automatically available through req.params.
Code Complexity	More code is required because routing, responses and HTML generation are handled manually.	Less boilerplate because Express provides routing and response helpers.
View Rendering	HTML is generated manually using JavaScript template literals.	HTML is separated into .hbs Handlebars template files.
Dynamic Data	Data is inserted manually into HTML strings.	Server-side data can be passed directly to Handlebars templates.
Loops	JavaScript loops such as forEach() are used to generate product cards.	Handlebars {{#each}} is used to display product lists.
Conditions	JavaScript if/else conditions are used.	Handlebars {{#if}} and {{else}} are used.
Maintainability	As the application grows, manually managing routes and HTML can become more difficult.	Separate routes, views and static files make the application easier to organize.
Scalability	Additional features require more manual implementation using Node.js modules.	Express provides middleware and an ecosystem that can be used when the application grows.
Dependencies	Uses Node.js built-in modules and does not require Express or Handlebars.	Requires Express.js and Handlebars (hbs).
Learning Purpose	Useful for understanding how Node.js handles HTTP requests and responses internally.	Useful for building structured web applications with simpler routing and template rendering.
In Short

The Node.js http module provides low-level control over HTTP requests and responses. In Implementation A, routing, URL parameter handling, status codes, CSS serving and HTML generation are handled manually.

Express.js provides a higher-level framework that simplifies routing, request/response handling and middleware management. Combined with Handlebars, it also allows HTML views to be separated from the server-side routing code.

Therefore, the two implementations demonstrate the same E-Commerce Product Management functionality using two different approaches:

Implementation A
Node.js HTTP Module
        ↓
Manual Routing
        ↓
Manual HTML Generation
        ↓
HTTP Response


Implementation B
Express.js
        ↓
Express Routing
        ↓
Handlebars Templates
        ↓
Dynamic Rendering
        ↓
HTTP Response

This project demonstrates the practical difference between using the built-in Node.js HTTP module and using Express.js with Handlebars for developing a web-based E-Commerce Product Management system.


### Bhai ek important baat

Tere friend ke README mein **Online Food Delivery** ke hisaab se `POST /order`, order data, etc. hai. Tere **E-Commerce Product Management** assignment mein woh cheezein nahi hain, isliye maine unko copy nahi kiya. Maine README ko **tere actual project ke routes, 12 products, HTTP implementation aur Express + HBS requirements** ke according rakha hai.

**GitHub mein bas `README.md` ke andar ye pura content paste kar de.**
