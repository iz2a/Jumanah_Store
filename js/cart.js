// ==================== CART MANAGEMENT ====================

// Cart state
let cart = [];

// Load cart from localStorage on page load
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('jumanah_cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            console.error('Error loading cart:', e);
            cart = [];
        }
    }
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('jumanah_cart', JSON.stringify(cart));
}

// ==================== CART OPERATIONS ====================

/**
 * Add product to cart
 * @param {Object} product - Product object
 */
function addProductToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartDisplay();
}

/**
 * Update product quantity in cart
 * @param {string} productId - Product ID
 * @param {number} newQuantity - New quantity
 */
function updateCartQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCartToStorage();
        updateCartDisplay();
    }
}

/**
 * Remove product from cart
 * @param {string} productId - Product ID
 */
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartDisplay();
    showNotification('تم حذف المنتج من السلة', 'info');
}

/**
 * Clear entire cart
 */
function clearCart() {
    cart = [];
    saveCartToStorage();
    updateCartDisplay();
    showNotification('تم إفراغ السلة', 'info');
}

/**
 * Get cart total items count
 * @returns {number} Total number of items
 */
function getCartItemsCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

/**
 * Get cart subtotal
 * @returns {number} Subtotal amount
 */
function getCartSubtotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

/**
 * Get shipping cost
 * @param {number} subtotal - Cart subtotal
 * @returns {number} Shipping cost
 */
function getShippingCost(subtotal) {
    return subtotal >= STORE_CONFIG.freeShippingThreshold ? 0 : STORE_CONFIG.shippingCost;
}

/**
 * Get cart total (with shipping)
 * @returns {number} Total amount
 */
function getCartTotal() {
    const subtotal = getCartSubtotal();
    const shipping = getShippingCost(subtotal);
    return subtotal + shipping;
}

// ==================== CART DISPLAY ====================

/**
 * Update cart display (header badge and sidebar)
 */
function updateCartDisplay() {
    updateCartBadge();
    updateCartSidebar();
}

/**
 * Update cart badge in header
 */
function updateCartBadge() {
    const cartCount = document.getElementById('cart-count');
    const itemsCount = getCartItemsCount();
    
    cartCount.textContent = itemsCount;
    
    if (itemsCount > 0) {
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }
}

/**
 * Update cart sidebar content
 */
function updateCartSidebar() {
    const cartItemsCount = document.getElementById('cart-items-count');
    const cartItems = document.getElementById('cart-items');
    const cartFooter = document.getElementById('cart-footer');
    
    const itemsCount = getCartItemsCount();
    
    // Update items count text
    if (itemsCount === 0) {
        cartItemsCount.textContent = 'السلة فارغة';
    } else if (itemsCount === 1) {
        cartItemsCount.textContent = 'منتج واحد';
    } else if (itemsCount === 2) {
        cartItemsCount.textContent = 'منتجان';
    } else if (itemsCount <= 10) {
        cartItemsCount.textContent = `${itemsCount} منتجات`;
    } else {
        cartItemsCount.textContent = `${itemsCount} منتج`;
    }
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <h4>السلة فارغة</h4>
                <p>ابدأ بإضافة المنتجات</p>
                <button class="btn btn-primary" onclick="closeCartSidebar(); document.getElementById('products').scrollIntoView({behavior: 'smooth'})">
                    تسوق الآن
                </button>
            </div>
        `;
        cartFooter.innerHTML = '';
    } else {
        // Render cart items
        cartItems.innerHTML = cart.map(item => createCartItemHTML(item)).join('');
        
        // Render cart footer with summary
        cartFooter.innerHTML = createCartFooterHTML();
    }
}

/**
 * Create HTML for cart item
 * @param {Object} item - Cart item
 * @returns {string} HTML string
 */
function createCartItemHTML(item) {
    const subtotal = item.price * item.quantity;
    
    return `
        <div class="cart-item">
            <div class="cart-item-header">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">${item.price} ${STORE_CONFIG.currency}</p>
                    ${item.weight ? `<p class="cart-item-weight">${item.weight}</p>` : ''}
                </div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})" aria-label="تقليل الكمية">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})" aria-label="زيادة الكمية">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <div class="cart-item-subtotal">
                    <span class="subtotal-value">${subtotal} ${STORE_CONFIG.currency}</span>
                    <button class="remove-btn" onclick="removeFromCart('${item.id}')" aria-label="حذف من السلة">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Create HTML for cart footer (summary and actions)
 * @returns {string} HTML string
 */
function createCartFooterHTML() {
    const subtotal = getCartSubtotal();
    const shipping = getShippingCost(subtotal);
    const total = getCartTotal();
    
    const freeShippingNotice = subtotal > 0 && subtotal < STORE_CONFIG.freeShippingThreshold ? `
        <p class="free-shipping-notice">
            <i class="fas fa-info-circle"></i>
            أضف ${STORE_CONFIG.freeShippingThreshold - subtotal} ${STORE_CONFIG.currency} للحصول على توصيل مجاني
        </p>
    ` : '';
    
    const shippingText = shipping === 0 ? 
        '<span style="color: #059669; font-weight: 700;">مجاناً</span>' : 
        `${shipping} ${STORE_CONFIG.currency}`;
    
    return `
        <div class="cart-summary">
            <div class="summary-row">
                <span>المجموع الفرعي:</span>
                <span class="summary-value">${subtotal} ${STORE_CONFIG.currency}</span>
            </div>
            <div class="summary-row">
                <span>التوصيل:</span>
                <span class="summary-value">${shippingText}</span>
            </div>
            ${freeShippingNotice}
            <div class="summary-row total">
                <span>الإجمالي:</span>
                <span class="summary-value">${total} ${STORE_CONFIG.currency}</span>
            </div>
        </div>
        <button class="checkout-btn" onclick="sendWhatsAppOrder()">
            <i class="fab fa-whatsapp"></i>
            إتمام الطلب عبر واتساب
        </button>
        <button class="clear-cart-btn" onclick="clearCart()">
            إفراغ السلة
        </button>
        <p class="cart-note">
            سيتم تحويلك إلى واتساب لإتمام الطلب والتأكيد
        </p>
    `;
}

// ==================== WHATSAPP ORDER ====================

/**
 * Send order via WhatsApp
 */
function sendWhatsAppOrder() {
    if (cart.length === 0) {
        showNotification('السلة فارغة', 'warning');
        return;
    }
    
    const subtotal = getCartSubtotal();
    const shipping = getShippingCost(subtotal);
    const total = getCartTotal();
    
    // Format order items
    const orderItems = cart.map(item => {
        return `• ${item.name}\n  الكمية: ${item.quantity} × ${item.price} ${STORE_CONFIG.currency} = ${item.price * item.quantity} ${STORE_CONFIG.currency}`;
    }).join('\n\n');
    
    // Create message
    const message = `السلام عليكم ورحمة الله 🌿

أرغب بطلب التالي من متجر ${STORE_CONFIG.storeName}:

${orderItems}

━━━━━━━━━━━━━━━━
المجموع الفرعي: ${subtotal} ${STORE_CONFIG.currency}
التوصيل: ${shipping === 0 ? 'مجاناً
