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
        id: 'spices',
        name: 'بهارات',
        icon: '🌶️',
        nameEn: 'Spices'
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
        name: 'قشر مع بهاراته - جاهز وما يحتاج شي',
        nameEn: 'Qishr with Premium Spices',
        category: 'beverages',
        price: 45,
        weight: '250g',
        description: 'قشر لذيذ مخلوط مع أحلى بهارات، طعمه ولا أروع والريحة تجنن! حطيه على الماي الحار وجاهز',
        benefits: [
            'ريحته حلوة وطعمه عسل',
            'يشد البدن ويعطيك نشاط',
            'خلطة مزبوطة ومتوازنة',
            'طعم أصيل زي زمان'
        ],
        ingredients: ['قشر القهوة', 'زنجبيل', 'قرفة', 'هيل', 'قرنفل'],
        image: 'images/products/qishr-spices.jpg',
        inStock: true,
        featured: true,
        rating: 4.8
    },
    {
        id: 'prod_002',
        name: 'قهوة عال العال - محمصة طازة',
        nameEn: 'Premium Al Alal Coffee',
        category: 'beverages',
        price: 65,
        weight: '250g',
        description: 'قهوة فاخرة محمصة على أصولها، ريحتها تملا البيت وطعمها يدوخ! من أجود أنواع البن',
        benefits: [
            'محمصة طازة',
            'بن فاخر ١٠٠٪',
            'طعمها قوي ومضبوط',
            'ريحتها ولا أحلى'
        ],
        ingredients: ['حبوب بن عربي فاخر'],
        image: 'images/products/premium-coffee.jpg',
        inStock: true,
        featured: true,
        rating: 4.9
    },
    {
        id: 'prod_003',
        name: 'أعشاب للقولون والمعدة',
        nameEn: 'Natural Herbs for Digestive Health',
        category: 'herbs_digestive',
        price: 55,
        weight: '150g',
        description: 'خلطة أعشاب طبيعية تريح القولون والمعدة، كلها أعشاب مجربة وآمنة بإذن الله',
        benefits: [
            'تريح المعدة والقولون',
            'تهدي البطن',
            'أعشاب طبيعية ١٠٠٪',
            'خلطة مدروسة ومجربة'
        ],
        ingredients: ['بابونج', 'نعناع', 'شمر', 'يانسون', 'كمون'],
        image: 'images/products/digestive-herbs.jpg',
        inStock: true,
        featured: false,
        rating: 4.7
    },
    {
        id: 'prod_004',
        name: 'أعشاب تقوية الشعر وتكثيفه',
        nameEn: 'Natural Hair Strengthening Herbs',
        category: 'herbs_hair',
        price: 50,
        weight: '150g',
        description: 'خلطة أعشاب للشعر تقويه وتكثفه وتوقف التساقط بإذن الله، مجربة وفعالة',
        benefits: [
            'تقوي الشعر من الجذور',
            'تساعد على النمو',
            'توقف التساقط',
            'كلها طبيعية ١٠٠٪'
        ],
        ingredients: ['حناء', 'سدر', 'إكليل الجبل', 'حلبة', 'أملا'],
        image: 'images/products/hair-herbs.jpg',
        inStock: true,
        featured: false,
        rating: 4.6
    },
    {
        id: 'prod_005',
        name: 'أعشاب للبشرة والنضارة',
        nameEn: 'Natural Skin Radiance Herbs',
        category: 'herbs_skin',
        price: 50,
        weight: '150g',
        description: 'أعشاب طبيعية تنظف البشرة وتعطيها نضارة وإشراقة، بدون أي كيماويات',
        benefits: [
            'تنظف البشرة',
            'تعطي نضارة طبيعية',
            'مفيدة للبشرة',
            'آمنة وطبيعية'
        ],
        ingredients: ['كركم', 'ورد مجفف', 'لافندر', 'بابونج', 'ريحان'],
        image: 'images/products/skin-herbs.jpg',
        inStock: true,
        featured: false,
        rating: 4.7
    },
    {
        id: 'prod_006',
        name: 'باقة القشر والقهوة - عرض خاص',
        nameEn: 'Premium Qishr & Coffee Bundle',
        category: 'bundles',
        price: 95,
        originalPrice: 110,
        discount: 15,
        weight: '500g',
        description: 'باقة حلوة فيها القشر والقهوة مع بعض، هدية مثالية وسعرها حلو! توفر معانا ١٥ ريال',
        benefits: [
            'توفير ١٥ ريال',
            'هدية روعة',
            'نوعين بسعر واحد',
            'جودة ممتازة'
        ],
        ingredients: ['قشر البن الفاخر', 'قهوة عال العال', 'بهارات مختارة'],
        image: 'images/products/bundle-pack.jpg',
        inStock: true,
        featured: true,
        isBundle: true,
        rating: 4.9
    },
    {
        id: 'prod_010',
        name: 'عرض خاص: ٢ قهوة + قشر = هدية مجانية!',
        nameEn: '2 Coffee + Qishr Special Offer',
        category: 'bundles',
        price: 175,
        originalPrice: 175,
        weight: '750g',
        description: 'اشتري ٢ قهوة وقشر واحصلي على هدية من اختيارك (فحم أو بخور) مجاناً! عرض لفترة محدودة',
        benefits: [
            'هدية مجانية من اختيارك',
            'فحم أو بخور (أنتي اختاري)',
            'وفر على المشتريات',
            'عرض محدود'
        ],
        ingredients: ['٢ قهوة عال العال', 'قشر بالبهارات', 'هدية مجانية'],
        image: 'images/products/bundle-pack.jpg',
        inStock: true,
        featured: true,
        isBundle: true,
        specialOffer: true,
        giftOptions: ['فحم', 'بخور'],
        rating: 4.9
    },
    {
        id: 'prod_007',
        name: 'بهارات مشكلة - خلطة البيت',
        nameEn: 'Mixed Spices Blend',
        category: 'spices',
        price: 35,
        weight: '200g',
        description: 'بهارات مشكلة لذيذة للطبخ، كل شي فيها وجاهزة، تضبط أي أكلة!',
        benefits: [
            'خلطة كاملة ومتنوعة',
            'تضبط الطبخات',
            'نكهة قوية',
            'توفر عليك الوقت'
        ],
        ingredients: ['كمون', 'كزبرة', 'فلفل أسود', 'قرفة', 'هيل', 'كركم'],
        image: 'images/products/mixed-spices.jpg',
        inStock: true,
        featured: false,
        rating: 4.7
    },
    {
        id: 'prod_008',
        name: 'بهارات الكبسة - نكهة أصيلة',
        nameEn: 'Kabsa Spice Mix',
        category: 'spices',
        price: 40,
        weight: '200g',
        description: 'بهارات كبسة خاصة، ريحتها فواحة وطعمها ولا أروع، تخلي الكبسة لذيذة',
        benefits: [
            'نكهة الكبسة الأصلية',
            'ريحة فواحة',
            'خلطة مزبوطة',
            'لون جميل للأكل'
        ],
        ingredients: ['كزبرة', 'كمون', 'فلفل أسود', 'ليمون أسود', 'قرفة', 'هيل'],
        image: 'images/products/kabsa-spices.jpg',
        inStock: true,
        featured: true,
        rating: 4.8
    },
    {
        id: 'prod_009',
        name: 'بهارات المندي - طعم ولا أحلى',
        nameEn: 'Mandi Spice Mix',
        category: 'spices',
        price: 40,
        weight: '200g',
        description: 'بهارات مندي لذيذة تعطي نكهة مميزة للحم والدجاج، جربها وما راح تندم',
        benefits: [
            'نكهة مندي أصلية',
            'تناسب اللحم والدجاج',
            'طعمها رهيب',
            'خلطة مجربة'
        ],
        ingredients: ['كمون', 'كزبرة', 'فلفل أسود', 'كركم', 'بابريكا', 'هيل'],
        image: 'images/products/mandi-spices.jpg',
        inStock: true,
        featured: false,
        rating: 4.7
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
