// ==================== MAIN APPLICATION ====================

// State
let currentCategory = 'all';

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

async function initializeApp() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Load categories
    loadCategories();
    
    // Load products
    await loadProducts(currentCategory);
    
    // Initialize cart
    loadCartFromStorage();
    updateCartDisplay();
    
    // Setup event listeners
    setupEventListeners();
    
    console.log('✅ Jumanah Store initialized successfully');
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMobile = document.getElementById('nav-mobile');
    
    if (mobileMenuBtn && navMobile) {
        mobileMenuBtn.addEventListener('click', function() {
            navMobile.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }
    
    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-mobile a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMobile) {
                navMobile.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    });
    
    // Cart sidebar toggle
    const cartBtn = document.getElementById('cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartClose = document.getElementById('cart-close');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartBtn && cartSidebar) {
        cartBtn.addEventListener('click', function() {
            cartSidebar.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (cartClose) {
        cartClose.addEventListener('click', closeCartSidebar);
    }
    
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCartSidebar);
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Make closeCartSidebar global
window.closeCartSidebar = function() {
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        cartSidebar.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ==================== CATEGORIES ====================
function loadCategories() {
    const categoryFilter = document.getElementById('category-filter');
    if (!categoryFilter) return;
    
    categoryFilter.innerHTML = '';
    
    CATEGORIES.forEach(category => {
        const button = document.createElement('button');
        button.className = `category-btn ${category.id === currentCategory ? 'active' : ''}`;
        button.innerHTML = `
            <span>${category.icon}</span>
            <span>${category.name}</span>
        `;
        button.addEventListener('click', async function() {
            currentCategory = category.id;
            await loadProducts(currentCategory);
            
            // Update active state
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
        categoryFilter.appendChild(button);
    });
}

// ==================== PRODUCTS ====================
async function loadProducts(categoryId) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    // Show loading state
    productsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
            <i class="fas fa-spinner fa-spin" style="font-size: 3rem; color: #b6aa8e;"></i>
            <p style="margin-top: 1rem; color: #6b7280;">جاري تحميل المنتجات...</p>
        </div>
    `;
    
    const products = getProductsByCategory(categoryId);
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <div style="width: 96px; height: 96px; background: #f3f4f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                    <i class="fas fa-shopping-cart" style="font-size: 3rem; color: #9ca3af;"></i>
                </div>
                <h4 style="font-size: 1.5rem; font-weight: 700; color: #1f2937; margin-bottom: 0.5rem;">لا توجد منتجات</h4>
                <p style="color: #6b7280;">جرب فئة أخرى</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = '';
    
    // Load products one by one (async for Firebase reviews)
    for (const product of products) {
        const productCard = await createProductCard(product);
        productsGrid.appendChild(productCard);
    }
}

async function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Product badges
    let badges = '';
    if (product.featured) {
        badges += `<span class="product-badge badge-featured"><i class="fas fa-star"></i> مميز</span>`;
    }
    if (product.discount) {
        badges += `<span class="product-badge badge-discount">خصم ${product.discount}٪</span>`;
    }
    if (product.inStock) {
        badges += `<span class="product-badge badge-instock">متوفر</span>`;
    }
    
    // Product benefits (show first 2)
    let benefitsHtml = '';
    if (product.benefits && product.benefits.length > 0) {
        benefitsHtml = '<div class="product-benefits">';
        product.benefits.slice(0, 2).forEach(benefit => {
            benefitsHtml += `
                <span class="benefit-tag">
                    <i class="fas fa-leaf"></i>
                    ${benefit}
                </span>
            `;
        });
        benefitsHtml += '</div>';
    }
    
    // Get category
    const category = getCategoryById(product.category);
    
    // Original price
    const originalPriceHtml = product.originalPrice ? 
        `<span class="price-original">${product.originalPrice} ${STORE_CONFIG.currency}</span>` : '';
    
    // Get reviews summary HTML (async - waits for Firebase)
    let reviewsHTML = '';
    if (typeof createProductReviewsSummaryHTML !== 'undefined') {
        try {
            reviewsHTML = await createProductReviewsSummaryHTML(product.id);
        } catch (error) {
            console.error('Error loading reviews for product:', product.id, error);
            // Fallback if Firebase fails
            reviewsHTML = `
                <div class="product-reviews-summary" onclick="showReviewModal('${product.id}')">
                    <div class="rating-stars">
                        <i class="far fa-star star-empty"></i>
                        <i class="far fa-star star-empty"></i>
                        <i class="far fa-star star-empty"></i>
                        <i class="far fa-star star-empty"></i>
                        <i class="far fa-star star-empty"></i>
                    </div>
                    <span class="review-count">لا توجد تقييمات</span>
                </div>
            `;
        }
    }
    
    card.innerHTML = `
        <div class="product-image-wrapper">
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x300?text=صورة'">
            <div class="product-badges">
                ${badges}
            </div>
        </div>
        <div class="product-info">
            <span class="product-category">
                <span>${category.icon}</span>
                <span>${category.name}</span>
            </span>
            <h3 class="product-name">${product.name}</h3>
            ${product.weight ? `<p class="product-weight">الوزن: ${product.weight}</p>` : ''}
            <p class="product-description">${product.description}</p>
            
            ${reviewsHTML}
            
            ${benefitsHtml}
            <div class="product-footer">
                <div class="product-price-wrapper">
                    <div class="product-price">
                        <span class="price-amount">${product.price}</span>
                        <span class="price-currency">${STORE_CONFIG.currency}</span>
                    </div>
                    ${originalPriceHtml}
                </div>
                <button class="add-to-cart-btn" onclick="window.addToCartGlobal('${product.id}')" ${!product.inStock ? 'disabled' : ''}>
                    <i class="fas fa-shopping-cart"></i>
                    أضف للسلة
                </button>
            </div>
            <button class="view-reviews-btn" onclick="event.stopPropagation(); showReviewModal('${product.id}')">
                <i class="fas fa-star"></i>
                التقييمات والمراجعات
            </button>
        </div>
    `;
    
    return card;
}

// ==================== NOTIFICATIONS ====================
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    
    if (!notification || !notificationText) return;
    
    notificationText.textContent = message;
    notification.classList.remove('hidden');
    
    // Change icon based on type
    const icon = notification.querySelector('i');
    if (icon) {
        if (type === 'success') {
            icon.className = 'fas fa-check-circle';
        } else if (type === 'info') {
            icon.className = 'fas fa-info-circle';
        } else if (type === 'warning') {
            icon.className = 'fas fa-exclamation-circle';
        }
    }
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

// Make showNotification global
window.showNotification = showNotification;

// ==================== GLOBAL ADD TO CART ====================
window.addToCartGlobal = function(productId) {
    const product = getProductById(productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }
    
    addProductToCart(product);
    showNotification('تم إضافة المنتج للسلة');
}

// Make loadProducts global so reviews can reload products after adding a review
window.loadProducts = loadProducts;

console.log('✅ app.js loaded successfully');
