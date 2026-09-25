# ShopSphere – Modern E-Commerce Website

ShopSphere is a responsive and interactive e-commerce website developed as part of the Cognifyz Technologies Front-End Development Internship.

The project demonstrates the complete front-end development workflow, starting from basic HTML structure and styling and progressing to responsive design, JavaScript interactions, API integration, form validation, Bootstrap-based component styling, and Sass/SCSS preprocessing.

---

## 📌 Project Overview

ShopSphere is a modern e-commerce-style website designed to provide a clean, responsive, and interactive shopping experience.

The website includes:

- Modern navigation bar
- Hero section
- Dynamic product section
- Product categories
- Promotional deals section
- Shopping cart interaction
- Interactive theme button
- Contact form with client-side validation
- Responsive layout for desktop, tablet, and mobile
- External product API integration
- Bootstrap framework integration
- Sass/SCSS preprocessing

---

## ✨ Key Features

### 🛍️ E-Commerce Interface

The website provides a modern e-commerce-style interface with:

- Product showcase
- Product categories
- Promotional deals
- Add to Cart interaction
- Cart count indicator
- Product ratings
- Product prices
- Dynamic product cards

---

### 📱 Responsive Design

The website is designed to work across:

- Desktop
- Tablet
- Mobile

Responsive CSS media queries and flexible layouts are used to maintain readability, usability, and consistent presentation across different screen sizes.

---

### 🎨 Interactive Theme

The **"Try New Look"** button provides an interactive theme/background change using JavaScript.

This feature demonstrates basic JavaScript event handling and DOM interaction.

---

### 🌐 API Integration

ShopSphere fetches product data dynamically from the DummyJSON Products API.

API endpoint:

```text
https://dummyjson.com/products?limit=0

The fetched product data is dynamically rendered into the ShopSphere product section.

The API implementation includes:

    • Fetching external JSON data
    • Parsing API responses
    • Dynamic DOM rendering
    • Product information display
    • Category-based filtering
    • Load More Products functionality
    • Add to Cart interaction
    • Loading state
    • Error handling


🛒 Shopping Cart Interaction

Users can interact with product cards using the Add to Cart button.

When a product is added:

     • The cart count is updated dynamically
     • The button provides visual feedback
     • The interaction is handled using JavaScript


📝 Contact Form Validation

The website contains a styled contact form with:

     • Name field
     • Email field
     • Message field

Client-side JavaScript validation is used to validate user input before submission.

Validation handles:

     • Empty name
     • Invalid email format
     • Empty message
     • Success feedback


🧩 Bootstrap Integration

Bootstrap 5.3.3 is integrated into the project for component-based styling and responsive layout utilities.

Bootstrap is used together with custom ShopSphere CSS to maintain the project's unique visual design.

Bootstrap-related implementation includes:

    • Responsive grid utilities
    • Navigation-related classes
    • Button classes
    • Card classes
    • Layout utilities
    • Responsive column classes


🎯 Sass / SCSS Preprocessing

The project uses Sass to improve stylesheet organization, maintainability, and reusability.

Sass source file:

SCSS/styles.scss

Compiled CSS file:

CSS/styles.css

The SCSS implementation includes:

    • Sass variables
    • Nested selectors
    • Sass mixins
    • Reusable styling
    • Responsive breakpoint variables

The styling workflow is:

SCSS/styles.scss
        ↓
       Sass
        ↓
CSS/styles.css
        ↓
   index.html

   🛠️ Technologies Used
       Frontend
         • HTML5
         • CSS3
         • JavaScript
         •  Bootstrap 5.3.3
         •  Sass / SCSS
    API
    • DummyJSON Products API

      Development Tools
       • Visual Studio Code
       • Node.js
       • npm
       • Git
       • GitHub

       ShopSphere/
│
├── CSS/
│   └── styles.css
│
├── SCSS/
│   └── styles.scss
│
├── Script/
│   ├── script.js
│   └── api.js
│
├── images/
│   └── hero image.png
│
├── Screenshots/
│   ├── Task 1/
│   ├── Task 2/
│   ├── Task 3/
│   ├── Task 4/
│   ├── Task 5/
│   ├── Task 6/
│   ├── Task 7/
│   └── Task 8/
│
├── index.html
├── package.json
├── package-lock.json
└── README.md

📚 Cognifyz Internship Task Completion
✅ Task 1 – Basic HTML Page

Created the basic HTML structure of the ShopSphere e-commerce website.

Implemented:

   • HTML document structure
   • Page title
   • Headings
   • Paragraphs
   • Image
   • Navigation
   • Product section
   • Categories
   • Deals section
   • Contact form
   • Footer

✅ Task 2 – Styling with Inline CSS

Applied initial styling to improve the appearance and presentation of the webpage.

The task introduced styling concepts such as:

 • Font styling
 • Colors
 • Backgrounds
 • Spacing
 • Basic visual presentation

 ✅ Task 3 – Responsive Design

Implemented responsive design using CSS media queries.

The website was optimized for:

 • Desktop screens
 • Tablet screens
 • Mobile screens

Responsive behavior was tested using browser resizing and device simulation.

✅ Task 4 – Interactive Button

Implemented the "Try New Look" button using JavaScript.

Clicking the button changes the website theme/background and provides interactive feedback to the user.

✅ Task 5 – API Integration

Integrated the DummyJSON Products API using JavaScript fetch().

The API data is processed and rendered dynamically inside the product section.

Implemented functionality includes:

 • API request
 • JSON response handling
 • Dynamic product rendering
 • Product information
 • Category filtering
 • Load More Products
 • Add to Cart interaction
 • Loading state
 • Error handling

✅ Task 6 – Form Styling and Validation

Created a visually styled contact form and implemented client-side validation using JavaScript.

Validation includes:

 • Name validation
 • Email validation
 • Message validation
 • User feedback
 • Successful form handling

✅ Task 7 – Component-Based Styling

Integrated Bootstrap 5.3.3 into the ShopSphere project.

Bootstrap was used alongside custom CSS for:

 • Responsive grid layout
 • Navigation-related styling
 • Buttons
 • Product cards
 • Responsive columns
 • Utility classes
 • Component-based styling

The custom ShopSphere styling was retained to preserve the project's visual identity. 

✅ Task 8 – Introduction to CSS Preprocessing

Implemented Sass/SCSS preprocessing as the final internship task.

Completed:

 1. Installed Sass using npm.
 2. Set up the project for Sass preprocessing.
 3. Created SCSS/styles.scss.
 4. Defined reusable variables for colors, spacing, typography, borders, transitions, and responsive    breakpoints.
 5. Implemented nested Sass selectors.
 6. Implemented Sass mixins for reusable hover styling.
 7. Compiled the SCSS source into CSS/styles.css.
 8. Used the compiled CSS file in index.html.
 9. Tested the final website across desktop, tablet, and mobile layouts.

⚙️ Installation and Setup
1. Clone the Repository

git clone <your-repository-url>


2. Open the Project

cd ShopSphere


3. Install Dependencies

npm install

This installs the required project dependencies, including Sass.


4. Compile Sass

Use the following command to compile the SCSS source:

npx sass SCSS/styles.scss CSS/styles.css


5. Watch Sass Changes

During development, Sass can automatically compile changes using:

npx sass --watch SCSS/styles.scss:CSS/styles.css

To stop watch mode:

Ctrl + C


6. Run the Website

Open:

index.html

in a modern web browser.

For local development, the project can also be opened using the Live Server extension in Visual Studio Code.


🎨 Sass Development

The project uses Sass features to improve stylesheet organization and reusability.

Variables

Example:

$color-dark: #171717;
$color-accent: #ff6b00;
$color-white: #ffffff;


Nesting

Example:

.navigation {
    a {
        &:hover {
            color: $color-accent;
        }
    }
}


Mixins

Example:

@mixin card-hover {
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-6px);
    }
}

These Sass features help make the stylesheet more organized, reusable, and maintainable.


📸 Screenshots
Screenshots documenting the development process are stored inside:

Screenshots/

Separate folders are maintained for each internship task:

Screenshots/
├── Task 1/
├── Task 2/
├── Task 3/
├── Task 4/
├── Task 5/
├── Task 6/
├── Task 7/
└── Task 8/

The screenshots include implementation evidence and responsive output for the completed tasks.


🧪 Testing

The final ShopSphere project was tested for:

 • Desktop responsiveness
 • Tablet responsiveness
 • Mobile responsiveness
 • Product API loading
 • Dynamic product rendering
 • Category filtering
 • Add to Cart interaction
 • Cart count update
 • Interactive theme button
 • Contact form validation
 • Sass compilation
 • Final stylesheet loading


 🧠 Learning Outcomes

Through this project, I practiced and demonstrated:

 • HTML5
 • CSS3
 • Responsive Web Design
 • Media Queries
 • JavaScript
 • DOM Manipulation
 • Event Handling
 • Form Validation
 • Fetch API
 • REST API Integration
 • Dynamic Content Rendering
 • Category Filtering
 • Shopping Cart Interaction
 • Bootstrap Framework
 • Sass / SCSS
 • Sass Variables
 • Sass Nesting
 • Sass Mixins
 • Git Version Control
 • Project Organization
 • Browser Testing
 • Responsive Debugging


 🔮 Future Improvements

Possible future improvements include:

  • Product search
  • Product details page
  • Persistent shopping cart
  • Wishlist functionality
  • User authentication
  • User accounts
  • Order history
  • Product reviews
  • Order tracking
  • Backend integration
  • Database integration
  • Checkout system
  • Payment gateway integration


  👨‍💻 Author

  Km Kajal

  Frontend Development Intern


🏢 Internship

This project was developed as part of the:

Cognifyz Technologies – Front-End Development Internship


📄 License

This project was developed for educational and internship purposes.
