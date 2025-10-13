// ==================== STORE CONFIGURATION ====================
const STORE_CONFIG = {
    storeName: 'جمانة',
    storeNameEn: 'Jumanah',
    tagline: 'منتجات طبيعية أصيلة',
    whatsapp: '966503780023',
    tiktok: '@jum.za',
    currency: 'ريال',
    locale: 'ar-SA',
    freeShippingThreshold: 100,
    shippingCost: 15
};

// ==================== CATEGORIES DATA ====================
const CATEGORIES = [
    {
        id: 'all',
        name: 'جميع المنتجات',
        icon: '🌟',
        nameEn: 'All Products'
    },
    {
        id: 'beverages',
        name: 'مشروبات',
        icon: '☕',
        nameEn: 'Beverages'
    },
    {
        id: 'herbs_digestive',
        name: 'أعشاب الجهاز الهضمي',
        icon: '🌿',
        nameEn: 'Digestive Herbs'
    },
    {
        id: 'herbs_hair',
        name: 'أعشاب العناية بالشعر',
        icon: '💆',
        nameEn: 'Hair Care Herbs'
    },
    {
        id: 'herbs_skin',
        name: 'أعشاب العناية بالبشرة',
        icon: '✨',
        nameEn: 'Skin Care Herbs'
    },
    {
        id: 'bundles',
        name: 'عروض وباقات',
        icon: '🎁',
        nameEn: 'Bundles & Offers'
    }
];

// ==================== PRODUCTS DATA ====================
const PRODUCTS = [
    {
        id: 'prod_001',
        name: 'قشر مع بهاراته - جاهز للاستخدام',
        nameEn: 'Qishr with Premium Spices',
        category: 'beverages',
        price: 45,
        weight: '250g',
        description: 'خلطة قشر فاخرة مع أجود أنواع البهارات التقليدية، محضرة بعناية لتمنحك نكهة أصيلة وغنية. جاهزة للاستخدام المباشر.',
        benefits: [
            'غني بمضادات الأكسدة',
            'يعزز الطاقة والنشاط',
            'خلطة متوازنة من البهارات',
            'نكهة تراثية أصيلة'
        ],
        ingredients: ['قشر القهوة', 'زنجبيل', 'قرفة', 'هيل', 'قرنفل'],
        image: 'https://images.unsplash.com/photo-1596040033229-a0b3b9b82473?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: true,
        rating: 4.8
    },
    {
        id: 'prod_002',
        name: 'قهوة عال العال الفاخرة',
        nameEn: 'Premium Al Alal Coffee',
        category: 'beverages',
        price: 65,
        weight: '250g',
        description: 'قهوة فاخرة من أجود حبوب البن المحمصة بعناية فائقة. تجربة قهوة استثنائية بنكهة غنية وعطر آسر.',
        benefits: [
            'محمصة طازجة',
            'حبوب بن فاخرة 100%',
            'نكهة غنية ومتوازنة',
            'عطر قوي ومميز'
        ],
        ingredients: ['حبوب بن عربي فاخر'],
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: true,
        rating: 4.9
    },
    {
        id: 'prod_003',
        name: 'أعشاب طبيعية للقولون',
        nameEn: 'Natural Herbs for Digestive Health',
        category: 'herbs_digestive',
        price: 55,
        weight: '150g',
        description: 'خلطة أعشاب طبيعية متوازنة ومدروسة بعناية لدعم صحة القولون والجهاز الهضمي. آمنة وفعالة.',
        benefits: [
            'يدعم صحة الجهاز الهضمي',
            'يهدئ القولون',
            'أعشاب طبيعية 100%',
            'خلطة متوازنة'
        ],
        ingredients: ['بابونج', 'نعناع', 'شمر', 'يانسون', 'كمون'],
        image: 'https://images.unsplash.com/photo-1558815294-a3e8bb3d8edd?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: false,
        rating: 4.7
    },
    {
        id: 'prod_004',
        name: 'أعشاب طبيعية لتقوية الشعر',
        nameEn: 'Natural Hair Strengthening Herbs',
        category: 'herbs_hair',
        price: 50,
        weight: '150g',
        description: 'مزيج طبيعي من الأعشاب المعروفة بفوائدها لتقوية وتكثيف الشعر وتحسين صحة فروة الرأس.',
        benefits: [
            'يقوي جذور الشعر',
            'يعزز نمو الشعر',
            'يقلل التساقط',
            'طبيعي 100%'
        ],
        ingredients: ['حناء', 'سدر', 'إكليل الجبل', 'حلبة', 'أملا'],
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: false,
        rating: 4.6
    },
    {
        id: 'prod_005',
        name: 'أعشاب طبيعية لنضارة البشرة',
        nameEn: 'Natural Skin Radiance Herbs',
        category: 'herbs_skin',
        price: 50,
        weight: '150g',
        description: 'خلطة أعشاب طبيعية للعناية بالبشرة، تمنح بشرتك النضارة والإشراقة الطبيعية.',
        benefits: [
            'ينقي البشرة',
            'يمنح النضارة',
            'مضاد للأكسدة',
            'آمن وطبيعي'
        ],
        ingredients: ['كركم', 'ورد مجفف', 'لافندر', 'بابونج', 'ريحان'],
        image: 'https://images.unsplash.com/photo-1556228852-80d7e06a6f06?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: false,
        rating: 4.7
    },
    {
        id: 'prod_006',
        name: 'باقة القشر والقهوة المميزة',
        nameEn: 'Premium Qishr & Coffee Bundle',
        category: 'bundles',
        price: 95,
        originalPrice: 110,
        discount: 15,
        weight: '500g',
        description: 'باقة مميزة تجمع قشر البن الفاخر مع القهوة عالية الجودة. هدية مثالية ووفر مضمون.',
        benefits: [
            'وفر 15 ريال',
            'هدية مثالية',
            'تنوع في المذاق',
            'جودة فائقة'
        ],
        ingredients: ['قشر البن الفاخر', 'قهوة عال العال', 'بهارات مختارة'],
        image: 'https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: true,
        isBundle: true,
        rating: 4.9
    }
];

// ==================== HELPER FUNCTIONS ====================

/**
 * Get all products
 * @returns {Array} Array of all products
 */
function getAllProducts() {
    return PRODUCTS;
}

/**
 * Get products by category
 * @param {string} categoryId - Category ID to filter by
 * @returns {Array} Array of filtered products
 */
function getProductsByCategory(categoryId) {
    if (categoryId === 'all') {
        return PRODUCTS;
    }
    return PRODUCTS.filter(product => product.category === categoryId);
}

/**
 * Get product by ID
 * @param {string} productId - Product ID
 * @returns {Object|null} Product object or null if not found
 */
function getProductById(productId) {
    return PRODUCTS.find(product => product.id === productId) || null;
}

/**
 * Get featured products
 * @returns {Array} Array of featured products
 */
function getFeaturedProducts() {
    return PRODUCTS.filter(product => product.featured);
}

/**
 * Search products by name or description
 * @param {string} query - Search query
 * @returns {Array} Array of matching products
 */
function searchProducts(query) {
    const lowercaseQuery = query.toLowerCase();
    return PRODUCTS.filter(product =>
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery) ||
        product.nameEn.toLowerCase().includes(lowercaseQuery)
    );
}

/**
 * Get all categories
 * @returns {Array} Array of all categories
 */
function getAllCategories() {
    return CATEGORIES;
}

/**
 * Get category by ID
 * @param {string} categoryId - Category ID
 * @returns {Object|null} Category object or null if not found
 */
function getCategoryById(categoryId) {
    return CATEGORIES.find(category => category.id === categoryId) || null;
}

/**
 * Format price with currency
 * @param {number} price - Price amount
 * @returns {string} Formatted price string
 */
function formatPrice(price) {
    return `${price} ${STORE_CONFIG.currency}`;
}

/**
 * Calculate discount percentage
 * @param {number} originalPrice - Original price
 * @param {number} currentPrice - Current price
 * @returns {number} Discount percentage
 */
function calculateDiscount(originalPrice, currentPrice) {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        STORE_CONFIG,
        CATEGORIES,
        PRODUCTS,
        getAllProducts,
        getProductsByCategory,
        getProductById,
        getFeaturedProducts,
        searchProducts,
        getAllCategories,
        getCategoryById,
        formatPrice,
        calculateDiscount
    };
}
