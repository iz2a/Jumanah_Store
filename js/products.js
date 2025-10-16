// ==================== STORE CONFIGURATION ====================
const STORE_CONFIG = {
    storeName: 'جمانة',
    storeNameEn: 'Jumanah',
    tagline: 'منتجات طبيعية أصيلة',
    whatsapp: '966503780023',
    tiktok: '@jum.za',
    currency: 'ريال',
    locale: 'ar-SA',
    shippingCost: 15,
    shippingMethod: 'redbox' // Red Box delivery
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
        id: 'incense',
        name: 'بخور',
        icon: '🪔',
        nameEn: 'Incense'
    },
    {
        id: 'beauty',
        name: 'العناية',
        icon: '✨',
        nameEn: 'Beauty & Care'
    },
    {
        id: 'herbs',
        name: 'أعشاب',
        icon: '🌿',
        nameEn: 'Herbs'
    },
    {
        id: 'accessories',
        name: 'إكسسوارات',
        icon: '🧺',
        nameEn: 'Accessories'
    },
    {
        id: 'charcoal',
        name: 'فحم',
        icon: '🔥',
        nameEn: 'Charcoal'
    }
];

// ==================== PRODUCTS DATA ====================
const PRODUCTS = [
    {
        id: 'prod_001',
        name: 'قهوة',
        nameEn: 'Premium Coffee',
        category: 'beverages',
        price: 60,
        weight: '1 كيلو',
        description: 'قهوة فاخرة من أجود أنواع البن، طعمها ولا أروع والريحة تجنن..',
        benefits: [
            'طعمها يدوخ',
            'ريحة فواحة',
            'تشد البدن',
            'كيلو كامل'
        ],
        ingredients: ['بن محمص', 'هيل'],
        image: 'images/products/coffee.png',
        inStock: true,
        featured: true,
        rating: 5
    },
    {
        id: 'prod_002',
        name: 'قشر',
        nameEn: 'Qishr',
        category: 'beverages',
        price: 40,
        weight: 'علبة',
        description: 'قشر أصلي ونظيف، مفيد للجسم وطعمه ولا أحلى. جاهز وما يحتاج شي، حطه على الماي وارتاح.',
        benefits: [
            'صحي ومفيد',
            'يشد البدن',
            'طعم أصيل',
            'سهل التحضير'
        ],
        ingredients: ['قشر البن', 'زنجبيل'],
        image: 'images/products/qishr.png',
        inStock: true,
        featured: true,
        rating: 5
    },
    {
        id: 'prod_003',
        name: 'البهارات',
        nameEn: 'Spice Mix',
        category: 'spices',
        price: 10,
        weight: 'علبة',
        description: 'خلطة بهارات متنوعة تضبط كل الأكلات، ريحتها حلوة وتعطي نكهة مميزة.',
        benefits: [
            'تضبط الطبخات',
            'خلطة مزبوطة',
            'ريحة قوية',
            'سعر ممتاز'
        ],
        ingredients: ['كمون', 'كزبرة', 'فلفل أسود', 'كركم', 'قرفة'],
        image: 'images/products/spices.png',
        inStock: true,
        featured: false,
        rating: 5
    },
    {
        id: 'prod_004',
        name: 'البخور الدوسري الملكي - درجة أولى',
        nameEn: 'Royal Dosari Incense - First Grade',
        category: 'incense',
        price: 60,
        weight: 'علبة',
        description: 'بخور دوسري ملكي من أفخر الأنواع، ريحته تعطر المكان وتعطي جو راقي.',
        benefits: [
            'درجة أولى فاخرة',
            'ريحة تدوم',
            'يعطر المكان',
            'مناسب للمناسبات'
        ],
        ingredients: ['عود دوسري', 'عنبر', 'مسك'],
        image: 'images/products/bokhor.png',
        inStock: true,
        featured: true,
        rating: 5.0
    },
    {
        id: 'prod_005',
        name: 'بخور مخلط',
        nameEn: 'Mixed Incense',
        category: 'incense',
        price: 25,
        weight: 'علبة',
        description: 'بخور مخلط بريحة حلوة ومناسبة، يعطر البيت ويعطي جو لطيف.',
        benefits: [
            'ريحة منعشة',
            'سعر مناسب',
            'خلطة متنوعة',
            'يناسب الاستخدام اليومي'
        ],
        ingredients: ['عود', 'عنبر', 'مسك', 'ورد'],
        image: 'images/products/mix_b.png',
        inStock: true,
        featured: false,
        rating: 4.8
    },
    {
        id: 'prod_006',
        name: 'سدر - للشعر والبشرة',
        nameEn: 'Sidr Powder',
        category: 'beauty',
        price: 35,
        weight: 'علبة',
        description: 'سدر طبيعي للشعر والبشرة، ينظف ويغذي ويقوي الشعر ويصفي البشرة.',
        benefits: [
            'ينظف الشعر طبيعي',
            'يقوي الشعر',
            'ينقي البشرة',
            'طبيعي 100%'
        ],
        ingredients: ['سدر مطحون'],
        image: 'images/products/sdr.png',
        inStock: true,
        featured: false,
        rating: 4.9
    },
    {
        id: 'prod_007',
        name: 'سلات - صغيرة',
        nameEn: 'Small Basket',
        category: 'accessories',
        price: 10,
        weight: 'قطعة',
        description: 'سلات صغيرة حلوة للتنظيم والترتيب، عملية وشكلها أنيق.',
        benefits: [
            'عملية للتخزين',
            'حجم مناسب',
            'متينة',
            'سعر ممتاز'
        ],
        ingredients: [],
        image: 'images/products/cart.png',
        inStock: true,
        featured: false,
        rating: 4.7
    },
    {
        id: 'prod_008',
        name: 'سلات - متوسطة',
        nameEn: 'Medium Basket',
        category: 'accessories',
        price: 15,
        weight: 'قطعة',
        description: 'سلات متوسطة الحجم، تسع أكثر ومفيدة للترتيب والتنظيم.',
        benefits: [
            'حجم عملي',
            'تسع أكثر',
            'متينة',
            'شكلها حلو'
        ],
        ingredients: [],
        image: 'images/products/cart.png',
        inStock: true,
        featured: false,
        rating: 4.7
    },
    {
        id: 'prod_009',
        name: 'سلات - كبيرة',
        nameEn: 'Large Basket',
        category: 'accessories',
        price: 20,
        weight: 'قطعة',
        description: 'سلات كبيرة مناسبة للأغراض الكثيرة، عملية جداً وقوية.',
        benefits: [
            'حجم كبير',
            'عملية للأغراض الكثيرة',
            'متينة',
            'جودة عالية'
        ],
        ingredients: [],
        image: 'images/products/cart.png',
        inStock: true,
        featured: false,
        rating: 4.7
    },
    {
        id: 'prod_010',
        name: 'مناشف',
        nameEn: 'Towels',
        category: 'accessories',
        price: 10,
        weight: 'قطعة',
        description: 'مناشف ناعمة ونظيفة، تمتص الماي زين وسعرها حلو.',
        benefits: [
            'ناعمة',
            'تمتص زين',
            'نظيفة',
            'سعر مناسب'
        ],
        ingredients: [],
        image: 'images/products/towels.png',
        inStock: true,
        featured: false,
        rating: 4.8
    },
    {
        id: 'prod_011',
        name: 'وقايا',
        nameEn: 'Protectors',
        category: 'accessories',
        price: 10,
        weight: 'قطعة',
        description: 'وقايا عملية وسعرها حلو، تحمي وتحافظ على النظافة.',
        benefits: [
            'عملية',
            'تحافظ على النظافة',
            'سهلة الاستخدام',
            'سعر ممتاز'
        ],
        ingredients: [],
        image: 'images/products/glove.png',
        inStock: true,
        featured: false,
        rating: 4.8
    },
    {
        id: 'prod_013',
        name: 'فحم سريع الاشتعال',
        nameEn: 'Quick-Light Charcoal',
        category: 'charcoal',
        price: 10,
        weight: 'علبة',
        description: 'فحم سريع الاشتعال، ما يحتاج وقت ويشتغل مباشرة، عملي للبخور.',
        benefits: [
            'يشتعل بسرعة',
            'عملي جداً',
            'ما يحتاج وقت',
            'مناسب للاستخدام اليومي'
        ],
        ingredients: [],
        image: 'images/products/coals.png',
        inStock: true,
        featured: false,
        rating: 5
    },
    {
        id: 'prod_014',
        name: 'حناء',
        nameEn: 'Henna',
        category: 'beauty',
        price: 15,
        weight: 'كيس',
        description: 'حناء طبيعية للشعر، تلون وتقوي الشعر وتعطيه لمعة حلوة.',
        benefits: [
            'طبيعية 100%',
            'تقوي الشعر',
            'تعطي لون جميل',
            'آمنة للاستخدام'
        ],
        ingredients: ['حناء مطحونة'],
        image: 'images/products/hina.png',
        inStock: true,
        featured: false,
        rating: 5
    },
    {
        id: 'prod_015',
        name: 'خلطة القولون',
        nameEn: 'Colon Mix',
        category: 'herbs',
        price: 25,
        weight: 'كيس',
        description: 'خلطة أعشاب طبيعية للقولون، تريح المعدة والقولون وتساعد على الهضم.',
        benefits: [
            'تريح القولون',
            'تساعد الهضم',
            'طبيعية 100%',
            'مجربة ومضمونة'
        ],
        ingredients: ['كمون', 'شمر', 'ينسون', 'نعناع'],
        image: 'images/products/mix.png',
        inStock: true,
        featured: true,
        rating: 5
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

console.log('✅ products.js loaded successfully');