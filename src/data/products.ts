export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Air Jordan 1 High "Chicago Reimagined"',
        price: 180,
        image: '/assets/images/jordan_high_red.png',
        category: 'Basketball'
    },
    {
        id: 2,
        name: 'Yeezy Boost 350 "Earth"',
        price: 230,
        image: '/assets/images/yeezy_style_earth.png',
        category: 'Lifestyle'
    },
    {
        id: 3,
        name: 'Nike Dunk Low "University Blue"',
        price: 110,
        image: '/assets/images/dunk_blue_white.png',
        category: 'Lifestyle'
    },
    {
        id: 4,
        name: 'Adidas Ultraboost "Triple Black"',
        price: 180,
        image: '/assets/images/ultraboost_black.png',
        category: 'Running'
    },
    {
        id: 5,
        name: 'Air Max 95 "Neon"',
        price: 170,
        image: '/assets/images/airmax_neon.png',
        category: 'Running'
    },
    {
        id: 6,
        name: 'Air Jordan 4 "White Cement"',
        price: 210,
        image: '/assets/images/jordan4_cement.png',
        category: 'Basketball'
    },
    {
        id: 7,
        name: 'New Balance 550 "Forest Green"',
        price: 120,
        image: '/assets/images/nb550_green.png',
        category: 'Lifestyle'
    },
    {
        id: 8,
        name: 'Converse Chuck 70 High',
        price: 90,
        image: '/assets/images/chuck70_black.png',
        category: 'Classic'
    },
    {
        id: 9,
        name: 'Vans Old Skool Pro',
        price: 75,
        image: '/assets/images/vans_oldskool.png',
        category: 'Skate'
    },
    {
        id: 10,
        name: 'Timberland 6-Inch Premium Boot',
        price: 198,
        image: '/assets/images/timberland_boot.png',
        category: 'Boots'
    },
    {
        id: 11,
        name: 'Yeezy Slide "Bone"',
        price: 70,
        image: '/assets/images/yeezy_slide_bone.png',
        category: 'Slides'
    },
    {
        id: 12,
        name: 'Salehe Bembury x Crocs Pollex',
        price: 85,
        image: '/assets/images/crocs_pollex_green.png',
        category: 'Slides'
    },
    {
        id: 13,
        name: 'Salomon XT-6 "Black"',
        price: 200,
        image: '/assets/images/salomon_xt6_black.png',
        category: 'Outdoor'
    },
    {
        id: 14,
        name: 'Asics Gel-Lyte III "Salmon"',
        price: 130,
        image: '/assets/images/asics_gellyte_salmon.png',
        category: 'Running'
    },
    {
        id: 15,
        name: 'Off-White x Air Jordan 1 "UNC"',
        price: 1200,
        image: '/assets/images/offwhite_jordan1.png',
        category: 'Hype'
    },
    {
        id: 16,
        name: 'Travis Scott x Air Jordan 1 Low',
        price: 800,
        image: '/assets/images/travis_scott_brown.png',
        category: 'Hype'
    },
    {
        id: 17,
        name: 'Nike Kobe 6 Protro "Grinch"',
        price: 600,
        image: '/assets/images/kobe_grinch.png',
        category: 'Basketball'
    },
    {
        id: 18,
        name: 'Nike LeBron 20 "Violet"',
        price: 200,
        image: '/assets/images/lebron_violet.png',
        category: 'Basketball'
    }
];
