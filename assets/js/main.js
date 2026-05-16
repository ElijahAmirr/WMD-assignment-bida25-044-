// Product catalog — White Label Fragrances. Prices in BWP (Botswana Pula).
function formatBwp(amount) {
  return `BWP ${amount.toFixed(2)}`;
}

const products = [
  {
    id: 1,
    name: "Floret Eau de Parfum",
    category: "50ml Fragrances",
    scent: "50ml · Floral bouquet",
    price: 500,
    stock: 18,
    rating: 4.9,
    reviews: 86,
    sale: "",
    available: true,
    image: "PICS/products/floret.jpeg",
  },
  {
    id: 2,
    name: "Honey Patchouli Eau de Parfum",
    category: "50ml Fragrances",
    scent: "50ml · Warm honey & patchouli",
    price: 500,
    stock: 22,
    rating: 4.8,
    reviews: 112,
    sale: "",
    available: true,
    image: "PICS/products/honey-patchouli.jpeg",
  },
  {
    id: 3,
    name: "Sweet Pear Eau de Parfum",
    category: "50ml Fragrances",
    scent: "50ml · Juicy pear & white florals",
    price: 500,
    stock: 20,
    rating: 4.7,
    reviews: 74,
    sale: "",
    available: true,
    image: "PICS/products/sweet-pear.jpeg",
  },
  {
    id: 4,
    name: "Turkish Rose Eau de Parfum",
    category: "50ml Fragrances",
    scent: "50ml · Velvet rose petals",
    price: 500,
    stock: 16,
    rating: 4.8,
    reviews: 95,
    sale: "",
    available: true,
    image: "PICS/products/turkish-rose.jpeg",
  },
  {
    id: 5,
    name: "Oud Rose Eau de Parfum",
    category: "Premium Collection",
    scent: "80ml · Oud & damask rose",
    price: 900,
    stock: 12,
    rating: 4.9,
    reviews: 143,
    sale: "Bestseller",
    available: true,
    image: "PICS/products/oud-rose.jpeg",
  },
  {
    id: 6,
    name: "Diphuka Eau de Parfum",
    category: "Premium Collection",
    scent: "80ml · Signature amber blend",
    price: 900,
    stock: 10,
    rating: 4.9,
    reviews: 128,
    sale: "",
    available: true,
    image: "PICS/products/diphuka.jpeg",
  },
  {
    id: 7,
    name: "A Light Dream Eau de Parfum",
    category: "Premium Collection",
    scent: "80ml · Soft musk & florals",
    price: 900,
    stock: 14,
    rating: 4.8,
    reviews: 91,
    sale: "",
    available: true,
    image: "PICS/products/a-light-dream.jpeg",
  },
  {
    id: 8,
    name: "Dessert Rose Eau de Parfum",
    category: "Premium Collection",
    scent: "80ml · Warm rose & sandalwood",
    price: 900,
    stock: 11,
    rating: 4.8,
    reviews: 67,
    sale: "",
    available: true,
    image: "PICS/products/dessert-rose.jpeg",
  },
  {
    id: 9,
    name: "In My Shirt Eau de Parfum",
    category: "Premium Collection",
    scent: "80ml · Clean cotton & musk",
    price: 900,
    stock: 15,
    rating: 4.7,
    reviews: 58,
    sale: "",
    available: true,
    image: "PICS/products/in-my-shirt.jpeg",
  },
  {
    id: 10,
    name: "Saffron Oud Eau de Parfum",
    category: "Premium Collection",
    scent: "80ml · Saffron, oud & amber",
    price: 900,
    stock: 9,
    rating: 4.9,
    reviews: 102,
    sale: "",
    available: true,
    image: "PICS/products/saffron-oud.jpeg",
  },
  {
    id: 11,
    name: "Rich Vanilla Eau de Parfum",
    category: "Premium Collection",
    scent: "80ml · Creamy vanilla & woods",
    price: 900,
    stock: 13,
    rating: 4.8,
    reviews: 79,
    sale: "",
    available: true,
    image: "PICS/products/rich-vanilla.jpeg",
  },
  {
    id: 12,
    name: "Red Poppy Reed Diffuser",
    category: "Diffusers",
    scent: "200ml · Floral poppy accord",
    price: 500,
    stock: 8,
    rating: 4.7,
    reviews: 44,
    sale: "",
    available: true,
    image: "PICS/products/red-poppy-diffuser.jpeg",
  },
  {
    id: 13,
    name: "Cinnamon Orchid Reed Diffuser",
    category: "Diffusers",
    scent: "200ml · Spiced orchid & cinnamon",
    price: 500,
    stock: 7,
    rating: 4.8,
    reviews: 52,
    sale: "",
    available: true,
    image: "PICS/products/cinnamon-orchid-diffuser.jpeg",
  },
  {
    id: 14,
    name: "Mandarin Rose Body Soufflé",
    category: "Body Care",
    scent: "200g · Citrus rose body soufflé",
    price: 270,
    stock: 19,
    rating: 4.8,
    reviews: 63,
    sale: "",
    available: true,
    image: "PICS/products/mandarin-rose-body-care.jpeg",
  },
  {
    id: 15,
    name: "Blushing Rose Hand & Body Polish",
    category: "Body Care",
    scent: "200g · Exfoliating rose polish",
    price: 380,
    stock: 14,
    rating: 4.7,
    reviews: 41,
    sale: "",
    available: true,
    image: "PICS/products/mandarin-rose-body-care.jpeg",
  },
  {
    id: 16,
    name: "Selemo Hand & Body Soufflé",
    category: "Body Care",
    scent: "100g · Nourishing body soufflé",
    price: 210,
    stock: 17,
    rating: 4.6,
    reviews: 36,
    sale: "",
    available: true,
    image: "PICS/products/mandarin-rose-body-care.jpeg",
  },
];

const cartKey = "wlf_cart";
const wishlistKey = "wlf_wishlist";
let appliedDiscount = 0;

function getStoredItems(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function setStoredItems(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function productCardTemplate(product) {
  return `
    <div class="col-sm-6 col-lg-4">
      <article class="product-card">
        <img src="${product.image}" class="product-image mb-3" alt="${product.name}" width="800" height="800" loading="lazy" />
        <div class="d-flex justify-content-between align-items-start gap-2">
          <h3 class="h5 mb-1">${product.name}</h3>
          ${product.sale ? `<span class="badge-sale">${product.sale}</span>` : ""}
        </div>
        <p class="small-meta mb-2">${product.scent}</p>
        <p class="mb-1"><strong>${formatBwp(product.price)}</strong></p>
        <p class="small-meta mb-1">Stock: ${product.stock}</p>
        <p class="small-meta mb-2">Rating: ${product.rating}/5 (${product.reviews} reviews)</p>
        <p class="small-meta mb-3">${product.available ? "Available" : "Out of Stock"}</p>
        <div class="d-flex gap-2">
          <button class="btn btn-brand btn-sm flex-fill" data-add-cart="${product.id}" ${!product.available ? "disabled" : ""}>Add to Cart</button>
          <button class="btn btn-outline-brand btn-sm flex-fill" data-add-wishlist="${product.id}">Wishlist</button>
        </div>
      </article>
    </div>`;
}

function renderFeaturedProducts() {
  const featuredEl = document.getElementById("featuredProducts");
  if (!featuredEl) return;
  featuredEl.innerHTML = products.slice(0, 3).map(productCardTemplate).join("");
}

function renderProductGrid(category = "all", query = "") {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const normalizedQuery = query.trim().toLowerCase();
  const filtered = products.filter((item) => {
    const categoryMatch = category === "all" || item.category === category;
    const searchMatch =
      !normalizedQuery ||
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.scent.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery);
    return categoryMatch && searchMatch;
  });

  grid.innerHTML = filtered.length
    ? filtered.map(productCardTemplate).join("")
    : '<p class="text-center">No products found for your search.</p>';
}

function addToList(storageKey, productId) {
  const items = getStoredItems(storageKey);
  items.push(productId);
  setStoredItems(storageKey, items);
}

function removeFromList(storageKey, index) {
  const items = getStoredItems(storageKey);
  items.splice(index, 1);
  setStoredItems(storageKey, items);
}

function calculateTotals() {
  const cartIds = getStoredItems(cartKey);
  const subtotal = cartIds.reduce((sum, id) => {
    const item = products.find((product) => product.id === id);
    return item ? sum + item.price : sum;
  }, 0);

  const discountValue = subtotal * appliedDiscount;
  const total = subtotal - discountValue;

  const subtotalValue = document.getElementById("subtotalValue");
  const discountValueEl = document.getElementById("discountValue");
  const totalValue = document.getElementById("totalValue");

  if (subtotalValue && discountValueEl && totalValue) {
    subtotalValue.textContent = formatBwp(subtotal);
    discountValueEl.textContent =
      discountValue > 0 ? `-${formatBwp(discountValue)}` : formatBwp(0);
    totalValue.textContent = formatBwp(total);
  }
}

function renderCartAndWishlist() {
  const cartContainer = document.getElementById("cartItems");
  const wishlistContainer = document.getElementById("wishlistItems");
  if (!cartContainer || !wishlistContainer) return;

  const cartIds = getStoredItems(cartKey);
  const wishlistIds = getStoredItems(wishlistKey);

  cartContainer.innerHTML = cartIds.length
    ? cartIds
        .map((id, index) => {
          const item = products.find((product) => product.id === id);
          return item
            ? `<div class="cart-item d-flex justify-content-between align-items-center gap-2">
                <div>
                  <h3 class="h6 mb-1">${item.name}</h3>
                  <p class="small-meta mb-0">${formatBwp(item.price)}</p>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <label class="small-meta" for="qty-${index}">Qty</label>
                  <input id="qty-${index}" type="number" min="1" value="1" class="form-control form-control-sm" style="width: 70px" />
                  <button class="btn btn-sm btn-outline-danger" data-remove-cart="${index}">Remove</button>
                </div>
              </div>`
            : "";
        })
        .join("")
    : '<p class="mb-0">Your cart is empty.</p>';

  wishlistContainer.innerHTML = wishlistIds.length
    ? wishlistIds
        .map((id, index) => {
          const item = products.find((product) => product.id === id);
          return item
            ? `<div class="cart-item d-flex justify-content-between align-items-center gap-2">
                <div>
                  <h3 class="h6 mb-1">${item.name}</h3>
                  <p class="small-meta mb-0">${item.scent}</p>
                </div>
                <button class="btn btn-sm btn-outline-danger" data-remove-wishlist="${index}">Remove</button>
              </div>`
            : "";
        })
        .join("")
    : '<p class="mb-0">Your wishlist is empty.</p>';

  calculateTotals();
  renderRecommendations();
}

function renderRecommendations() {
  const recommendationContainer = document.getElementById("recommendations");
  if (!recommendationContainer) return;
  recommendationContainer.innerHTML = products.slice(3, 6).map(productCardTemplate).join("");
}

function setupCategoryFilters() {
  const filterButtons = document.querySelectorAll(".category-filter");
  const searchInput = document.getElementById("globalSearch");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderProductGrid(button.dataset.category, searchInput ? searchInput.value : "");
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const activeButton = document.querySelector(".category-filter.active");
      const category = activeButton ? activeButton.dataset.category : "all";
      renderProductGrid(category, searchInput.value);
    });
  }
}

function setupGlobalHandlers() {
  document.addEventListener("click", (event) => {
    const addCartBtn = event.target.closest("[data-add-cart]");
    const addWishlistBtn = event.target.closest("[data-add-wishlist]");
    const removeCartBtn = event.target.closest("[data-remove-cart]");
    const removeWishlistBtn = event.target.closest("[data-remove-wishlist]");

    if (addCartBtn) {
      addToList(cartKey, Number(addCartBtn.dataset.addCart));
      renderCartAndWishlist();
      alert("Item added to cart.");
    }

    if (addWishlistBtn) {
      addToList(wishlistKey, Number(addWishlistBtn.dataset.addWishlist));
      renderCartAndWishlist();
      alert("Item added to wishlist.");
    }

    if (removeCartBtn) {
      removeFromList(cartKey, Number(removeCartBtn.dataset.removeCart));
      renderCartAndWishlist();
    }

    if (removeWishlistBtn) {
      removeFromList(wishlistKey, Number(removeWishlistBtn.dataset.removeWishlist));
      renderCartAndWishlist();
    }
  });
}

function setupPromoCode() {
  const promoBtn = document.getElementById("applyPromo");
  if (!promoBtn) return;

  promoBtn.addEventListener("click", () => {
    const codeInput = document.getElementById("promoCode");
    const promoMessage = document.getElementById("promoMessage");
    const value = codeInput.value.trim().toUpperCase();

    if (value === "GLOW20") {
      appliedDiscount = 0.2;
      promoMessage.textContent = "Promo applied: 20% discount activated.";
      promoMessage.className = "small mt-2 mb-0 text-success";
    } else if (value === "LUXE10") {
      appliedDiscount = 0.1;
      promoMessage.textContent = "Promo applied: 10% discount activated.";
      promoMessage.className = "small mt-2 mb-0 text-success";
    } else {
      appliedDiscount = 0;
      promoMessage.textContent = "Invalid promo code. Try GLOW20 or LUXE10.";
      promoMessage.className = "small mt-2 mb-0 text-danger";
    }

    calculateTotals();
  });
}

function setupCheckoutConcept() {
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (!checkoutBtn) return;

  checkoutBtn.addEventListener("click", () => {
    if (!getStoredItems(cartKey).length) {
      alert("Your cart is empty.");
      return;
    }

    alert("Checkout successful. A receipt has been sent to your email (concept simulation).");
    setStoredItems(cartKey, []);
    appliedDiscount = 0;
    renderCartAndWishlist();
  });
}

function setupNewsletterForm() {
  const newsletterForm = document.getElementById("newsletterForm");
  if (!newsletterForm) return;

  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("newsletterEmail");
    const messageEl = document.getElementById("newsletterMessage");

    if (!emailInput.checkValidity()) {
      messageEl.textContent = "Please enter a valid email address.";
      messageEl.className = "small mt-2 mb-0 text-danger";
      return;
    }

    messageEl.textContent = "Thank you for subscribing to White Label updates.";
    messageEl.className = "small mt-2 mb-0 text-success";
    newsletterForm.reset();
  });
}

function setupContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const feedback = document.getElementById("formMessage");

    if (!contactForm.checkValidity()) {
      contactForm.classList.add("was-validated");
      feedback.textContent = "Please complete all required fields correctly.";
      feedback.className = "small mt-3 text-danger";
      return;
    }

    feedback.textContent = "Your message has been submitted. Our team will contact you soon.";
    feedback.className = "small mt-3 text-success";
    contactForm.reset();
    contactForm.classList.remove("was-validated");
  });
}

function init() {
  renderFeaturedProducts();
  renderProductGrid();
  renderCartAndWishlist();
  setupCategoryFilters();
  setupGlobalHandlers();
  setupPromoCode();
  setupCheckoutConcept();
  setupNewsletterForm();
  setupContactForm();
}

document.addEventListener("DOMContentLoaded", init);
