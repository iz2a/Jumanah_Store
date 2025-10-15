// ==================== CART MANAGEMENT ====================

// Cart state
let cart = [];

// Load cart from localStorage on page load
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('jumanah_cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            console.log('Cart loaded from storage:', cart);
        } catch (e) {
            console.error('Error loading cart:', e);
            cart = [];
        }
    }
}

// Save cart to localStorage
function saveCartToStorage() {
    try {
        localStorage.setItem('jumanah_cart', JSON.stringify(cart));
        console.log('Cart saved to storage');
    } catch (e) {
        console.error('Error saving cart:', e);
    }
}

// ==================== CART OPERATIONS ====================

function addProductToCart(product) {
    console.log('Adding to cart:', product);
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
        console.log('Updated quantity for existing item');
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
        console.log('Added new item to cart');
    }
    
    saveCartToStorage();
    updateCartDisplay();
}

function updateCartQuantity(productId, newQuantity) {
    console.log('Updating quantity:', productId, newQuantity);
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

function removeFromCart(productId) {
    console.log('Removing from cart:', productId);
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartDisplay();
    if (typeof showNotification === 'function') {
        showNotification('تم حذف المنتج من السلة', 'info');
    }
}

function clearCart() {
    console.log('Clearing cart');
    cart = [];
    saveCartToStorage();
    updateCartDisplay();
    if (typeof showNotification === 'function') {
        showNotification('تم إفراغ السلة', 'info');
    }
}

function getCartItemsCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getShippingCost() {
    // Fixed shipping cost - no free shipping
    if (typeof STORE_CONFIG === 'undefined') return 15;
    return STORE_CONFIG.shippingCost;
}

function getCartTotal() {
    const subtotal = getCartSubtotal();
    const shipping = getShippingCost();
    return subtotal + shipping;
}

// Make functions globally accessible
window.addProductToCart = addProductToCart;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.sendWhatsAppOrder = sendWhatsAppOrder;

// ==================== CART DISPLAY ====================

function updateCartDisplay() {
    updateCartBadge();
    updateCartSidebar();
}

function updateCartBadge() {
    const cartCount = document.getElementById('cart-count');
    if (!cartCount) return;

    const itemsCount = getCartItemsCount();
    cartCount.textContent = itemsCount;

    if (itemsCount > 0) {
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }
}

function updateCartSidebar() {
    const cartItemsCount = document.getElementById('cart-items-count');
    const cartItems = document.getElementById('cart-items');
    const cartFooter = document.getElementById('cart-footer');

    if (!cartItemsCount || !cartItems || !cartFooter) return;

    const itemsCount = getCartItemsCount();

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

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <h4>السلة فارغة</h4>
                <p>ابدأ بإضافة المنتجات</p>
                <button class="btn btn-primary" onclick="window.closeCartSidebar(); document.getElementById('products').scrollIntoView({behavior: 'smooth'})">
                    تسوق الآن
                </button>
            </div>
        `;
        cartFooter.innerHTML = '';
    } else {
        cartItems.innerHTML = cart.map(item => createCartItemHTML(item)).join('');
        cartFooter.innerHTML = createCartFooterHTML();
    }
}

function createCartItemHTML(item) {
    const subtotal = item.price * item.quantity;
    const currency = typeof STORE_CONFIG !== 'undefined' ? STORE_CONFIG.currency : 'ريال';

    return `
        <div class="cart-item">
            <div class="cart-item-header">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/96x96?text=صورة'">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">${item.price} ${currency}</p>
                    ${item.weight ? `<p class="cart-item-weight">${item.weight}</p>` : ''}
                </div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="window.updateCartQuantity('${item.id}', ${item.quantity - 1})" aria-label="تقليل الكمية">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="window.updateCartQuantity('${item.id}', ${item.quantity + 1})" aria-label="زيادة الكمية">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <div class="cart-item-subtotal">
                    <span class="subtotal-value">${subtotal} ${currency}</span>
                    <button class="remove-btn" onclick="window.removeFromCart('${item.id}')" aria-label="حذف من السلة">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createCartFooterHTML() {
    const subtotal = getCartSubtotal();
    const shipping = getShippingCost();
    const total = getCartTotal();
    const currency = typeof STORE_CONFIG !== 'undefined' ? STORE_CONFIG.currency : 'ريال';

    // Shipping info with Red Box branding
    const shippingInfo = `
        <div style="background: linear-gradient(135deg, #dc2626, #ef4444); color: white; padding: 8px 12px; border-radius: 8px; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; font-size: 0.875rem;">
            <i class="fas fa-truck" style="font-size: 1.25rem;"></i>
            <div style="flex: 1;">
                <div style="font-weight: 700; margin-bottom: 2px;">الشحن عبر Red Box</div>
                <div style="font-size: 0.75rem; opacity: 0.9;">التوصيل خلال 2-3 أيام</div>
            </div>
            <div style="font-weight: 700; font-size: 1.125rem;">${shipping} ${currency}</div>
        </div>
    `;

    return `
        <div class="cart-summary">
            <div class="summary-row">
                <span>المجموع الفرعي:</span>
                <span class="summary-value">${subtotal} ${currency}</span>
            </div>
            ${shippingInfo}
            <div class="summary-row total">
                <span>الإجمالي:</span>
                <span class="summary-value">${total} ${currency}</span>
            </div>
        </div>
        <button class="checkout-btn" onclick="window.sendWhatsAppOrder()">
            <i class="fab fa-whatsapp"></i>
            إتمام الطلب عبر واتساب
        </button>
        <button class="clear-cart-btn" onclick="window.clearCart()">
            إفراغ السلة
        </button>
        <p class="cart-note">
            سيتم تحويلك إلى واتساب لإتمام الطلب والتأكيد
        </p>
    `;
}

// ==================== WHATSAPP ORDER ====================

function sendWhatsAppOrder() {
    if (cart.length === 0) {
        if (typeof showNotification === 'function') {
            showNotification('السلة فارغة', 'warning');
        } else {
            alert('السلة فارغة');
        }
        return;
    }

    const subtotal = getCartSubtotal();
    const shipping = getShippingCost();
    const total = getCartTotal();
    const currency = typeof STORE_CONFIG !== 'undefined' ? STORE_CONFIG.currency : 'ريال';
    const storeName = typeof STORE_CONFIG !== 'undefined' ? STORE_CONFIG.storeName : 'جمانة';
    const whatsapp = typeof STORE_CONFIG !== 'undefined' ? STORE_CONFIG.whatsapp : '966503780023';

    const orderItems = cart.map(item => {
        return `• ${item.name}\n  الكمية: ${item.quantity} × ${item.price} ${currency} = ${item.price * item.quantity} ${currency}`;
    }).join('\n\n');

    const message = `السلام عليكم ورحمة الله 🌿

أرغب بطلب التالي من متجر ${storeName}:

${orderItems}

━━━━━━━━━━━━━━━━
المجموع الفرعي: ${subtotal} ${currency}
الشحن (Red Box): ${shipping} ${currency}
الإجمالي النهائي: ${total} ${currency}
━━━━━━━━━━━━━━━━

شكراً لكم ✨`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodedMessage}`;

    console.log('Opening WhatsApp with order:', whatsappUrl);
    window.open(whatsappUrl, '_blank');
}

console.log('✅ cart.js loaded successfully');