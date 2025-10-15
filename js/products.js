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
        name: 'القهوة',
        nameEn: 'Premium Coffee',
        category: 'beverages',
        price: 60,
        weight: '1 كيلو',
        description: 'قهوة فاخرة من أجود أنواع البن، طعمها ولا أروع والريحة تجنن. حطها على الماي الحار وجاهزة.',
        benefits: [
            'طعمها يدوخ',
            'ريحة فواحة',
            'تشد البدن',
            'كيلو كامل'
        ],
        ingredients: ['بن محمص', 'هيل'],
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: true,
        rating: 4.9
    },
    {
        id: 'prod_002',
        name: 'القشر',
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
        image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: true,
        rating: 4.8
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
        image: 'https://images.unsplash.com/photo-1596040033229-a0b3b9b82473?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: false,
        rating: 4.6
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
        image: 'https://images.unsplash.com/photo-1608814170972-1011d76c215b?w=800&h=600&fit=crop&q=80',
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
        image: 'https://images.unsplash.com/photo-1610374259048-1e7c8b90ca1d?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: false,
        rating: 4.5
    },
    {
        id: 'prod_006',
        name: 'السدر - للشعر والبشرة',
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
        image: 'https://images.unsplash.com/photo-1556228852-80d7e06a6f06?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: false,
        rating: 4.7
    },
    {
        id: 'prod_007',
        name: 'السلات - صغيرة',
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
        image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: false,
        rating: 4.4
    },
    {
        id: 'prod_008',
        name: 'السلات - متوسطة',
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
        image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: false,
        rating: 4.5
    },
    {
        id: 'prod_009',
        name: 'السلات - كبيرة',
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
        image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: false,
        rating: 4.6
    },
    {
        id: 'prod_010',
        name: 'المناشف',
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
        image: 'https://images.unsplash.com/photo-1622196276330-090f40da56ab?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: false,
        rating: 4.3
    },
    {
        id: 'prod_011',
        name: 'الوقايا',
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
        image: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: false,
        rating: 4.2
    },
    {
        id: 'prod_012',
        name: 'الفحم الملون',
        nameEn: 'Colored Charcoal',
        category: 'charcoal',
        price: 10,
        weight: 'علبة',
        description: 'فحم ملون للبخور، يشتعل بسرعة وألوانه حلوة تعطي جو مميز.',
        benefits: [
            'ألوان جميلة',
            'يشتعل بسرعة',
            'مناسب للبخور',
            'سعر ممتاز'
        ],
        ingredients: [],
        image: 'https://images.unsplash.com/photo-1525904097878-94fb15835963?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: false,
        rating: 4.4
    },
    {
        id: 'prod_013',
        name: 'الفحم سريع الاشتعال',
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
        image: 'https://images.unsplash.com/photo-1571695431715-4a7e2e0c4b7c?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: false,
        rating: 4.5
    },
    {
        id: 'prod_014',
        name: 'الحناء',
        nameEn: 'Henna',
        category: 'beauty',
        price: 15,
        weight: 'الكيد (حوالي 350g)',
        description: 'حناء طبيعية للشعر، تلون وتقوي الشعر وتعطيه لمعة حلوة.',
        benefits: [
            'طبيعية 100%',
            'تقوي الشعر',
            'تعطي لون جميل',
            'آمنة للاستخدام'
        ],
        ingredients: ['حناء مطحونة'],
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: false,
        rating: 4.6
    },
    {
        id: 'prod_015',
        name: 'خلطة القولون',
        nameEn: 'Colon Mix',
        category: 'herbs',
        price: 25,
        weight: 'علبة',
        description: 'خلطة أعشاب طبيعية للقولون، تريح المعدة والقولون وتساعد على الهضم.',
        benefits: [
            'تريح القولون',
            'تساعد الهضم',
            'طبيعية 100%',
            'مجربة ومضمونة'
        ],
        ingredients: ['كمون', 'شمر', 'ينسون', 'نعناع'],
        image: 'https://images.unsplash.com/photo-1571193816567-85a26ee13863?w=800&h=600&fit=crop&q=80',
        inStock: true,
        featured: true,
        rating: 4.8
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