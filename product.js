// Mock Products Data
const mockProducts = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        category: "Electronics",
        price: 299.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        description: "High-quality wireless headphones with noise cancellation",
        reviews: 245
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        category: "Electronics",
        price: 199.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        description: "Track your fitness goals with this smart watch",
        reviews: 189
    },
    {
        id: 3,
        name: "Organic Cotton T-Shirt",
        category: "Clothing",
        price: 29.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
        description: "Comfortable organic cotton t-shirt",
        reviews: 67
    },
    {
        id: 4,
        name: "Professional Camera Lens",
        category: "Electronics",
        price: 899.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
        description: "Professional grade camera lens for photographers",
        reviews: 156
    },
    {
        id: 5,
        name: "Stylish Leather Jacket",
        category: "Clothing",
        price: 159.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
        description: "Premium leather jacket with modern design",
        reviews: 89
    },
    {
        id: 6,
        name: "Gaming Mechanical Keyboard",
        category: "Electronics",
        price: 129.99,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
        description: "Mechanical keyboard perfect for gaming",
        reviews: 203
    },
    {
        id: 7,
        name: "Ceramic Coffee Mug Set",
        category: "Home",
        price: 39.99,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
        description: "Beautiful ceramic coffee mug set of 4",
        reviews: 124
    },
    {
        id: 8,
        name: "Designer Sneakers",
        category: "Clothing",
        price: 119.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        description: "Trendy designer sneakers for everyday wear",
        reviews: 298
    },
    {
        id: 9,
        name: "Smart Home Speaker",
        category: "Electronics",
        price: 89.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        description: "Voice-controlled smart speaker for your home",
        reviews: 167
    },
    {
        id: 10,
        name: "Minimalist Desk Lamp",
        category: "Home",
        price: 79.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        description: "Modern minimalist desk lamp with LED lighting",
        reviews: 78
    },
    {
        id: 11,
        name: "Yoga Mat Premium",
        category: "Sports",
        price: 49.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        description: "High-quality yoga mat for your practice",
        reviews: 145
    },
    {
        id: 12,
        name: "Bluetooth Portable Speaker",
        category: "Electronics",
        price: 59.99,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
        description: "Compact bluetooth speaker with great sound",
        reviews: 234
    },
    {
        id: 13,
        name: "Luxury Candle Set",
        category: "Home",
        price: 69.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1602874801006-42272d9c9da7?w=400&h=300&fit=crop",
        description: "Luxury scented candle set for relaxation",
        reviews: 92
    },
    {
        id: 14,
        name: "Running Shoes",
        category: "Sports",
        price: 139.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
        description: "Lightweight running shoes for athletes",
        reviews: 276
    },
    {
        id: 15,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 39.99,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
        description: "Ergonomic wireless mouse for productivity",
        reviews: 188
    }
];

// Global State
let filteredProducts = [...mockProducts];
let currentFilters = {
    category: 'All',
    maxPrice: 1000,
    searchTerm: '',
    sortBy: 'name'
};
let favorites = new Set();
let cart = [];
let viewMode = 'grid';

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const productCount = document.getElementById('product-count');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const priceSlider = document.getElementById('price-slider');
const maxPriceDisplay = document.getElementById('max-price');
const categoryButtons = document.getElementById('category-buttons');
const resetFiltersBtn = document.getElementById('reset-filters');
const filterToggle = document.getElementById('filter-toggle');
const filterSidebar = document.getElementById('filter-sidebar');
const filterOverlay = document.getElementById('filter-overlay');
const closeSidebar = document.getElementById('close-sidebar');
const cartBtn = document.getElementById('cart-btn');
const cartBadge = document.getElementById('cart-badge');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');
const noResults = document.getElementById('no-results');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    renderProducts();
    updateProductCount();
});

// Event Listeners
function initializeEventListeners() {
    // Search
    searchInput.addEventListener('input', handleSearch);
    
    // Sort
    sortSelect.addEventListener('change', handleSort);
    
    // Price slider
    priceSlider.addEventListener('input', handlePriceChange);
    
    // Category buttons
    categoryButtons.addEventListener('click', handleCategoryClick);
    
    // Reset filters
    resetFiltersBtn.addEventListener('click', resetAllFilters);
    
    // Mobile filter toggle
    filterToggle.addEventListener('click', toggleMobileFilter);
    closeSidebar.addEventListener('click', closeMobileFilter);
    filterOverlay.addEventListener('click', closeMobileFilter);
    
    // View toggle
    gridViewBtn.addEventListener('click', () => setViewMode('grid'));
    listViewBtn.addEventListener('click', () => setViewMode('list'));
}

// Search Functionality
function handleSearch(e) {
    currentFilters.searchTerm = e.target.value.toLowerCase();
    applyFilters();
}

// Sort Functionality
function handleSort(e) {
    currentFilters.sortBy = e.target.value;
    applyFilters();
}

// Price Filter
function handlePriceChange(e) {
    const maxPrice = parseInt(e.target.value);
    currentFilters.maxPrice = maxPrice;
    maxPriceDisplay.textContent = `$${maxPrice}`;
    applyFilters();
}

// Category Filter
function handleCategoryClick(e) {
    if (e.target.classList.contains('category-btn')) {
        // Remove active class from all buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        e.target.classList.add('active');
        
        currentFilters.category = e.target.dataset.category;
        applyFilters();
    }
}

// Apply All Filters
function applyFilters() {
    filteredProducts = mockProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(currentFilters.searchTerm) ||
                             product.description.toLowerCase().includes(currentFilters.searchTerm);
        const matchesCategory = currentFilters.category === 'All' || product.category === currentFilters.category;
        const matchesPrice = product.price <= currentFilters.maxPrice;
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    
    // Sort products
    sortProducts();
    renderProducts();
    updateProductCount();
}

// Sort Products
function sortProducts() {
    filteredProducts.sort((a, b) => {
        switch (currentFilters.sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'reviews':
                return b.reviews - a.reviews;
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });
}

// Render Products
function renderProducts() {
    if (filteredProducts.length === 0) {
        productsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    productsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    
    // Add event listeners to product cards
    addProductEventListeners();
}

// Create Product Card HTML
function createProductCard(product) {
    const isInCart = cart.some(item => item.id === product.id);
    const isFavorite = favorites.has(product.id);
    
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <div class="image-overlay"></div>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
                <div class="category-badge">${product.category}</div>
            </div>
            
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-text">${product.rating}</span>
                    <span class="reviews-text">(${product.reviews} reviews)</span>
                </div>
                
                <div class="product-footer">
                    <h4 class="product-price">$${product.price.toFixed(2)}</h4>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Generate Star Rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star star"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt star"></i>';
    }
    
    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star star empty"></i>';
    }
    
    return starsHTML;
}

// Add Event Listeners to Product Cards
function addProductEventListeners() {
    // Add any additional event listeners if needed
}

// Add to Cart
function addToCart(productId) {
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartBadge();
    showToast(`${product.name} added to cart!`);
}

// Toggle Favorite
function toggleFavorite(productId) {
    if (favorites.has(productId)) {
        favorites.delete(productId);
    } else {
        favorites.add(productId);
    }
    
    // Update the favorite button visual state
    const favoriteBtn = document.querySelector(`[data-id="${productId}"] .favorite-btn`);
    if (favoriteBtn) {
        favoriteBtn.classList.toggle('active', favorites.has(productId));
    }
    
    const product = mockProducts.find(p => p.id === productId);
    const action = favorites.has(productId) ? 'added to' : 'removed from';
    showToast(`${product.name} ${action} favorites!`);
}

// Update Cart Badge
function updateCartBadge() {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartBadge.textContent = itemCount;
    cartBadge.classList.toggle('visible', itemCount > 0);
}

// Update Product Count
function updateProductCount() {
    productCount.textContent = `${filteredProducts.length} Products`;
}

// Reset All Filters
function resetAllFilters() {
    currentFilters = {
        category: 'All',
        maxPrice: 1000,
        searchTerm: '',
        sortBy: 'name'
    };
    
    // Reset UI elements
    searchInput.value = '';
    sortSelect.value = 'name';
    priceSlider.value = 1000;
    maxPriceDisplay.textContent = '$1000';
    
    // Reset category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('[data-category="All"]').classList.add('active');
    
    applyFilters();
}

// Mobile Filter Functions
function toggleMobileFilter() {
    filterSidebar.classList.add('open');
    filterOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileFilter() {
    filterSidebar.classList.remove('open');
    filterOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// View Mode Functions
function setViewMode(mode) {
    viewMode = mode;
    
    gridViewBtn.classList.toggle('active', mode === 'grid');
    listViewBtn.classList.toggle('active', mode === 'list');
    
    productsGrid.classList.toggle('list-view', mode === 'list');
}

// Toast Notification
function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        font-weight: 600;
        max-width: 300px;
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateY(100px)';
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Handle window resize for mobile filter
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        closeMobileFilter();
    }
});