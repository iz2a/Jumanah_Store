// ==================== FIREBASE REVIEWS SYSTEM ====================

// Wait for Firebase to be initialized
setTimeout(initializeReviews, 1000);

function initializeReviews() {
    console.log('Initializing Firebase Reviews...');
    console.log('Firebase DB available:', window.firebaseDb);
}

// Cache for reviews (reduces Firebase reads)
let reviewsCache = {};

// ==================== GET REVIEWS FROM FIREBASE ====================

async function getProductReviews(productId) {
    console.log('Getting reviews for product:', productId);
    
    // Check cache first
    if (reviewsCache[productId]) {
        console.log('Returning cached reviews:', reviewsCache[productId].length);
        return reviewsCache[productId];
    }
    
    try {
        if (!window.firebaseDb) {
            console.error('Firebase not initialized yet');
            return [];
        }
        
        const reviewsRef = window.firebaseCollection(window.firebaseDb, 'reviews');
        const q = window.firebaseQuery(
            reviewsRef, 
            window.firebaseWhere('productId', '==', productId),
            window.firebaseOrderBy('timestamp', 'desc')
        );
        
        const querySnapshot = await window.firebaseGetDocs(q);
        const reviews = [];
        
        querySnapshot.forEach((doc) => {
            reviews.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        // Cache the reviews
        reviewsCache[productId] = reviews;
        
        console.log(`✅ Loaded ${reviews.length} reviews for product ${productId}`, reviews);
        return reviews;
    } catch (error) {
        console.error('❌ Error getting reviews:', error);
        return [];
    }
}

// ==================== ADD REVIEW TO FIREBASE ====================

async function addReview(productId, rating, comment, userName) {
    console.log('Adding review:', { productId, rating, comment, userName });
    
    // Validation
    if (!productId || !rating || !comment) {
        throw new Error('Missing required fields');
    }
    
    if (rating < 1 || rating > 5) {
        throw new Error('Rating must be between 1 and 5');
    }
    
    if (comment.trim().length < 5) {
        throw new Error('Comment must be at least 5 characters');
    }
    
    try {
        if (!window.firebaseDb) {
            throw new Error('Firebase not initialized');
        }
        
        const review = {
            productId: productId,
            rating: parseInt(rating),
            comment: comment.trim(),
            userName: userName.trim() || 'مستخدم',
            timestamp: window.firebaseServerTimestamp(),
            helpful: 0
        };
        
        const docRef = await window.firebaseAddDoc(
            window.firebaseCollection(window.firebaseDb, 'reviews'), 
            review
        );
        
        // Clear cache for this product
        delete reviewsCache[productId];
        
        console.log('✅ Review added with ID:', docRef.id);
        
        return {
            id: docRef.id,
            ...review,
            timestamp: new Date()
        };
    } catch (error) {
        console.error('❌ Error adding review:', error);
        throw error;
    }
}

// ==================== CALCULATE AVERAGE RATING ====================

function calculateAverageRating(reviews) {
    if (!reviews || reviews.length === 0) return 0;
    
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
}

// ==================== GET RATING DISTRIBUTION ====================

function getRatingDistribution(reviews) {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    
    reviews.forEach(review => {
        distribution[review.rating]++;
    });
    
    return distribution;
}

// ==================== FORMAT DATE IN ARABIC ====================

function formatArabicDate(timestamp) {
    if (!timestamp) return 'الآن';
    
    try {
        // Handle Firestore Timestamp
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffMinutes = Math.floor(diffTime / (1000 * 60));
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffMinutes < 1) return 'الآن';
        if (diffMinutes < 60) return `منذ ${diffMinutes} ${diffMinutes === 1 ? 'دقيقة' : 'دقائق'}`;
        if (diffHours < 24) return `منذ ${diffHours} ${diffHours === 1 ? 'ساعة' : 'ساعات'}`;
        if (diffDays === 1) return 'أمس';
        if (diffDays < 7) return `منذ ${diffDays} أيام`;
        if (diffDays < 30) return `منذ ${Math.floor(diffDays / 7)} ${Math.floor(diffDays / 7) === 1 ? 'أسبوع' : 'أسابيع'}`;
        if (diffDays < 365) return `منذ ${Math.floor(diffDays / 30)} ${Math.floor(diffDays / 30) === 1 ? 'شهر' : 'شهور'}`;
        return `منذ ${Math.floor(diffDays / 365)} ${Math.floor(diffDays / 365) === 1 ? 'سنة' : 'سنوات'}`;
    } catch (e) {
        return 'الآن';
    }
}

// ==================== CREATE STARS HTML ====================

function createStarsHTML(rating, size = 'normal') {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const sizeClass = size === 'large' ? 'star-large' : '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += `<i class="fas fa-star star-filled ${sizeClass}"></i>`;
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHTML += `<i class="fas fa-star-half-alt star-filled ${sizeClass}"></i>`;
        } else {
            starsHTML += `<i class="far fa-star star-empty ${sizeClass}"></i>`;
        }
    }
    
    return starsHTML;
}

// ==================== CREATE PRODUCT REVIEWS SUMMARY ====================

async function createProductReviewsSummaryHTML(productId) {
    const reviews = await getProductReviews(productId);
    const avgRating = calculateAverageRating(reviews);
    const reviewCount = reviews.length;
    
    console.log(`Product ${productId}: ${reviewCount} reviews, avg: ${avgRating}`);
    
    if (reviewCount === 0) {
        return `
            <div class="product-reviews-summary" onclick="showReviewModal('${productId}')">
                <div class="rating-stars">
                    ${createStarsHTML(0)}
                </div>
                <span class="review-count">لا توجد تقييمات - كن أول من يقيم</span>
            </div>
        `;
    }
    
    const reviewText = reviewCount === 1 ? 'تقييم واحد' : 
                       reviewCount === 2 ? 'تقييمان' : 
                       `${reviewCount} تقييمات`;
    
    return `
        <div class="product-reviews-summary" onclick="showReviewModal('${productId}')">
            <div class="rating-stars">
                ${createStarsHTML(parseFloat(avgRating))}
            </div>
            <span class="rating-number">${avgRating}</span>
            <span class="review-count">(${reviewText})</span>
        </div>
    `;
}

// ==================== SHOW REVIEW MODAL ====================

async function showReviewModal(productId) {
    console.log('Opening review modal for:', productId);
    
    const product = getProductById(productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }
    
    // Show loading state
    const loadingModal = document.createElement('div');
    loadingModal.className = 'review-modal-overlay';
    loadingModal.innerHTML = `
        <div class="review-modal">
            <div class="review-modal-loading">
                <i class="fas fa-spinner fa-spin"></i>
                <p>جاري تحميل التقييمات...</p>
            </div>
        </div>
    `;
    document.body.appendChild(loadingModal);
    document.body.style.overflow = 'hidden';
    
    // Load reviews from Firebase
    const reviews = await getProductReviews(productId);
    const avgRating = calculateAverageRating(reviews);
    const distribution = getRatingDistribution(reviews);
    
    console.log('Reviews loaded:', reviews);
    
    // Remove loading modal
    loadingModal.remove();
    
    // Create actual modal
    const modal = document.createElement('div');
    modal.className = 'review-modal-overlay';
    modal.innerHTML = `
        <div class="review-modal">
            <div class="review-modal-header">
                <h3>${product.name} - التقييمات</h3>
                <button class="review-modal-close" onclick="closeReviewModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="review-modal-stats">
                <div class="overall-rating">
                    <div class="rating-number-large">${avgRating}</div>
                    <div class="rating-stars-large">
                        ${createStarsHTML(parseFloat(avgRating), 'large')}
                    </div>
                    <div class="review-count-text">${reviews.length} ${reviews.length === 1 ? 'تقييم' : reviews.length === 2 ? 'تقييمان' : 'تقييمات'}</div>
                </div>
                
                <div class="rating-distribution">
                    ${createRatingDistributionHTML(distribution, reviews.length)}
                </div>
            </div>
            
            <div class="review-modal-body">
                <button class="write-review-btn" onclick="toggleReviewForm()">
                    <i class="fas fa-pen"></i>
                    اكتب تقييمك
                </button>
                
                <form id="review-form" style="display: none;" onsubmit="submitReview(event, '${productId}')">
                    <div class="form-group">
                        <label>التقييم *</label>
                        <div class="rating-input" id="rating-input">
                            <i class="far fa-star" data-rating="1"></i>
                            <i class="far fa-star" data-rating="2"></i>
                            <i class="far fa-star" data-rating="3"></i>
                            <i class="far fa-star" data-rating="4"></i>
                            <i class="far fa-star" data-rating="5"></i>
                        </div>
                        <input type="hidden" id="rating-value" name="rating" required>
                    </div>
                    
                    <div class="form-group">
                        <label>الاسم (اختياري)</label>
                        <input type="text" id="user-name" placeholder="اسمك" class="form-input" maxlength="50">
                    </div>
                    
                    <div class="form-group">
                        <label>التعليق * (5 أحرف على الأقل)</label>
                        <textarea id="review-comment" placeholder="شاركنا رأيك في المنتج..." class="form-textarea" rows="4" required minlength="5" maxlength="500"></textarea>
                    </div>
                    
                    <button type="submit" class="submit-review-btn">
                        <i class="fas fa-paper-plane"></i>
                        إرسال التقييم
                    </button>
                </form>
            </div>
            
            <div class="review-modal-reviews">
                <h4>آراء العملاء</h4>
                <div id="reviews-list">
                    ${createReviewsListHTML(reviews)}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Setup rating stars interaction
    setTimeout(() => setupRatingStars(), 100);
}

// ==================== CREATE RATING DISTRIBUTION HTML ====================

function createRatingDistributionHTML(distribution, total) {
    let html = '';
    
    for (let rating = 5; rating >= 1; rating--) {
        const count = distribution[rating];
        const percentage = total > 0 ? (count / total * 100).toFixed(0) : 0;
        
        html += `
            <div class="distribution-row">
                <span class="distribution-label">${rating} نجوم</span>
                <div class="distribution-bar">
                    <div class="distribution-fill" style="width: ${percentage}%"></div>
                </div>
                <span class="distribution-count">${count}</span>
            </div>
        `;
    }
    
    return html;
}

// ==================== CREATE REVIEWS LIST HTML ====================

function createReviewsListHTML(reviews) {
    if (reviews.length === 0) {
        return `
            <div class="no-reviews">
                <i class="fas fa-comments"></i>
                <p>لا توجد تقييمات حتى الآن</p>
                <p class="no-reviews-sub">كن أول من يقيم هذا المنتج!</p>
            </div>
        `;
    }
    
    return reviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <div class="review-user">
                    <div class="review-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="review-user-info">
                        <strong>${review.userName || 'مستخدم'}</strong>
                        <span class="review-date">${formatArabicDate(review.timestamp)}</span>
                    </div>
                </div>
                <div class="review-rating-stars">
                    ${createStarsHTML(review.rating)}
                </div>
            </div>
            <p class="review-comment">${review.comment}</p>
        </div>
    `).join('');
}

// ==================== TOGGLE REVIEW FORM ====================

window.toggleReviewForm = function() {
    const form = document.getElementById('review-form');
    const button = document.querySelector('.write-review-btn');
    
    if (form.style.display === 'none') {
        form.style.display = 'block';
        button.innerHTML = '<i class="fas fa-times"></i> إلغاء';
        form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        form.style.display = 'none';
        button.innerHTML = '<i class="fas fa-pen"></i> اكتب تقييمك';
    }
}

// ==================== SETUP RATING STARS ====================

function setupRatingStars() {
    const stars = document.querySelectorAll('#rating-input i');
    const ratingValue = document.getElementById('rating-value');
    
    if (!stars.length || !ratingValue) return;
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            ratingValue.value = rating;
            
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.className = 'fas fa-star star-selected';
                } else {
                    s.className = 'far fa-star';
                }
            });
        });
        
        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.className = 'fas fa-star star-hover';
                } else {
                    s.className = 'far fa-star';
                }
            });
        });
    });
    
    document.getElementById('rating-input').addEventListener('mouseleave', function() {
        const currentRating = parseInt(ratingValue.value) || 0;
        stars.forEach((s, index) => {
            if (index < currentRating) {
                s.className = 'fas fa-star star-selected';
            } else {
                s.className = 'far fa-star';
            }
        });
    });
}

// ==================== SUBMIT REVIEW ====================

window.submitReview = async function(event, productId) {
    event.preventDefault();
    
    console.log('Submitting review for product:', productId);
    
    const rating = parseInt(document.getElementById('rating-value').value);
    const comment = document.getElementById('review-comment').value.trim();
    const userName = document.getElementById('user-name').value.trim();
    const submitBtn = event.target.querySelector('.submit-review-btn');
    
    // Validation
    if (!rating || rating < 1 || rating > 5) {
        if (typeof showNotification === 'function') {
            showNotification('الرجاء اختيار التقييم', 'warning');
        } else {
            alert('الرجاء اختيار التقييم');
        }
        return;
    }
    
    if (comment.length < 5) {
        if (typeof showNotification === 'function') {
            showNotification('التعليق يجب أن يكون 5 أحرف على الأقل', 'warning');
        } else {
            alert('التعليق يجب أن يكون 5 أحرف على الأقل');
        }
        return;
    }
    
    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
    
    try {
        // Add review to Firebase
        await addReview(productId, rating, comment, userName);
        
        console.log('✅ Review submitted successfully');
        
        // Show success message
        if (typeof showNotification === 'function') {
            showNotification('شكراً لتقييمك! تم إضافة رأيك بنجاح 🌟', 'success');
        } else {
            alert('شكراً لتقييمك!');
        }
        
        // Reload reviews
        const reviews = await getProductReviews(productId);
        const reviewsList = document.getElementById('reviews-list');
        if (reviewsList) {
            reviewsList.innerHTML = createReviewsListHTML(reviews);
        }
        
        // Update stats
        const avgRating = calculateAverageRating(reviews);
        const distribution = getRatingDistribution(reviews);
        
        const ratingNumberLarge = document.querySelector('.rating-number-large');
        const ratingStarsLarge = document.querySelector('.rating-stars-large');
        const reviewCountText = document.querySelector('.review-count-text');
        const ratingDistribution = document.querySelector('.rating-distribution');
        
        if (ratingNumberLarge) ratingNumberLarge.textContent = avgRating;
        if (ratingStarsLarge) ratingStarsLarge.innerHTML = createStarsHTML(parseFloat(avgRating), 'large');
        if (reviewCountText) reviewCountText.textContent = `${reviews.length} ${reviews.length === 1 ? 'تقييم' : reviews.length === 2 ? 'تقييمان' : 'تقييمات'}`;
        if (ratingDistribution) ratingDistribution.innerHTML = createRatingDistributionHTML(distribution, reviews.length);
        
        // Reset form
        document.getElementById('review-form').reset();
        document.getElementById('rating-value').value = '';
        document.querySelectorAll('#rating-input i').forEach(s => {
            s.className = 'far fa-star';
        });
        toggleReviewForm();
        
        // Reload products to update the product card rating
        if (typeof loadProducts === 'function' && typeof currentCategory !== 'undefined') {
            console.log('Reloading products...');
            loadProducts(currentCategory);
        }
        
    } catch (error) {
        console.error('❌ Error submitting review:', error);
        if (typeof showNotification === 'function') {
            showNotification('حدث خطأ، الرجاء المحاولة مرة أخرى', 'warning');
        } else {
            alert('حدث خطأ: ' + error.message);
        }
    } finally {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> إرسال التقييم';
    }
}

// ==================== CLOSE MODAL ====================

window.closeReviewModal = function() {
    const modal = document.querySelector('.review-modal-overlay');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Make functions global
window.showReviewModal = showReviewModal;
window.createProductReviewsSummaryHTML = createProductReviewsSummaryHTML;
window.getProductReviews = getProductReviews;

console.log('✅ Firebase Reviews System loaded successfully');
