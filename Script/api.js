const API_URL = "https://dummyjson.com/products?limit=0";

const productGrid = document.getElementById("productGrid");
const viewAllButton = document.querySelector(".view-all-button");

let allProducts = [];
let visibleProducts = [];
let currentCategory = "all";
let visibleCount = 12;

let cartCount = 0;


/* FETCH PRODUCTS */

async function fetchProducts() {
    try {

        showLoadingState();

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        allProducts = data.products;

        console.log("Products loaded successfully:", data);
        console.log(`Total products: ${allProducts.length}`);

        createCategoryFilters();

        currentCategory = "all";
        visibleProducts = allProducts;

        renderProducts();

    } catch (error) {

        console.error("Failed to load products:", error);

        showErrorState();
    }
}


/* LOADING STATE */

function showLoadingState() {

    productGrid.innerHTML = `
        <div class="products-message">
            <div class="loading-spinner"></div>
            <p>Loading products...</p>
        </div>
    `;

    if (viewAllButton) {
        viewAllButton.style.display = "none";
    }
}


/* ERROR STATE */

function showErrorState() {

    productGrid.innerHTML = `
        <div class="products-message error-message">
            <strong>Unable to load products.</strong>
            <p>Please check your internet connection and try again.</p>
            <button class="retry-button" id="retryButton">
                Try Again
            </button>
        </div>
    `;

    if (viewAllButton) {
        viewAllButton.style.display = "none";
    }

    const retryButton = document.getElementById("retryButton");

    if (retryButton) {
        retryButton.addEventListener("click", fetchProducts);
    }
}


/* CATEGORY FILTERS */

function createCategoryFilters() {

    const shopSection = document.querySelector(".shop-section");

    const sectionHeading = shopSection.querySelector(".section-heading");

    const existingFilter = document.querySelector(".category-filters");

    if (existingFilter) {
        existingFilter.remove();
    }

    const categories = [
        "all",
        ...new Set(allProducts.map(product => product.category))
    ];

    const filterWrapper = document.createElement("div");

    filterWrapper.className = "category-filters";

    categories.forEach(category => {

        const button = document.createElement("button");

        button.className = "category-filter";

        if (category === "all") {
            button.classList.add("active");
        }

        button.textContent =
            category === "all"
                ? "All Products"
                : formatCategoryName(category);

        button.dataset.category = category;

        button.addEventListener("click", () => {

            currentCategory = category;
            visibleCount = 12;

            document
                .querySelectorAll(".category-filter")
                .forEach(filter => {
                    filter.classList.remove("active");
                });

            button.classList.add("active");

            if (category === "all") {
                visibleProducts = allProducts;
            } else {
                visibleProducts = allProducts.filter(
                    product => product.category === category
                );
            }

            renderProducts();
        });

        filterWrapper.appendChild(button);
    });

    sectionHeading.insertAdjacentElement(
        "afterend",
        filterWrapper
    );
}


/* CATEGORY NAME FORMATTER */

function formatCategoryName(category) {

    return category
        .replace(/-/g, " ")
        .replace(/\b\w/g, letter => letter.toUpperCase());
}


/* RENDER PRODUCTS */

function renderProducts() {

    productGrid.innerHTML = "";

    const productsToShow =
        visibleProducts.slice(0, visibleCount);

    if (productsToShow.length === 0) {

        productGrid.innerHTML = `
            <div class="products-message">
                <strong>No products found.</strong>
                <p>Try another category.</p>
            </div>
        `;

        if (viewAllButton) {
            viewAllButton.style.display = "none";
        }

        return;
    }


    productsToShow.forEach(product => {

        const productCard =
            document.createElement("article");

      productCard.className = "product-card card h-100 col-12 col-md-6 col-lg-3";


        const rating =
            Math.max(1, Math.min(5, Math.round(product.rating)));


        const stars =
            "★".repeat(rating) +
            "☆".repeat(5 - rating);


        const price =
            Math.round(product.price * 90);


        const badge =
            product.discountPercentage >= 10
                ? "Sale"
                : product.stock < 20
                    ? "Limited"
                    : "New";


        productCard.innerHTML = `
            <div class="product-image">

                <img
                    src="${product.thumbnail}"
                    alt="${escapeHTML(product.title)}"
                    loading="lazy"
                >

                <span class="product-badge">
                    ${badge}
                </span>

            </div>


            <div class="product-info card-body">

                <span class="product-category">
                    ${escapeHTML(
                        formatCategoryName(product.category)
                    )}
                </span>


                <h3>
                    ${escapeHTML(product.title)}
                </h3>


                <div class="product-rating">

                    ${stars}

                    <span>
                        (${product.reviews?.length ?? product.stock})
                    </span>

                </div>


                <div class="product-bottom">

                    <strong>
                        ₹${price.toLocaleString("en-IN")}
                    </strong>

                    <button
                        class="add-cart btn"
                        data-product-id="${product.id}"
                    >
                        Add to Cart
                    </button>

                </div>

            </div>
        `;


        productGrid.appendChild(productCard);
    });


    attachCartEvents();

    updateLoadMoreButton();
}


/* LOAD MORE */

function updateLoadMoreButton() {

    if (!viewAllButton) {
        return;
    }

    if (visibleCount >= visibleProducts.length) {

        viewAllButton.style.display = "none";

        return;
    }

    viewAllButton.style.display = "inline-flex";

    viewAllButton.textContent =
        `Load More Products (${visibleProducts.length - visibleCount} remaining)`;
}


if (viewAllButton) {

    viewAllButton.addEventListener("click", event => {

        event.preventDefault();

        visibleCount += 12;

        renderProducts();

    });
}


/* CART */

function attachCartEvents() {

    const cartButtons =
        document.querySelectorAll(".add-cart");


    cartButtons.forEach(button => {

        button.addEventListener("click", () => {

            cartCount++;

            updateCartCount();


            const originalText =
                button.textContent;

            button.textContent =
                "Added ✓";


            button.disabled = true;


            setTimeout(() => {

                button.textContent =
                    originalText;

                button.disabled = false;

            }, 1000);

        });

    });
}


/* CART COUNT */

function updateCartCount() {

    const cartCountElement =
        document.querySelector(".cart-count");

    if (cartCountElement) {

        cartCountElement.textContent =
            cartCount;
    }
}


/* BASIC HTML ESCAPE */

function escapeHTML(value) {

    const div = document.createElement("div");

    div.textContent = value;

    return div.innerHTML;
}


/* START APPLICATION */

fetchProducts();
