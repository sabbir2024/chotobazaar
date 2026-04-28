import Container from "../components/Container";
import NewsMarquee from "../components/NewsMarquee";
import Carousel from "./conponents/carousel/Carousel";
import CategoryBento from "./conponents/CategoryBento/CategoryBento";
import Hero from "./conponents/hero/Hero";

// Category configuration with titles, icons, and badges
const categoriesConfig = {
    'Food': {
        title: 'Fresh & Organic Food',
        subtitle: 'Healthy and delicious options',
        icon: '🍔',
        badge: 'New Arrivals',
        featured: true,
        color: 'bg-orange-50',
        banner: '/images/food-banner.png'
    },
    'Clothing': {
        title: 'Fashion Collection',
        subtitle: 'Trendy styles for everyone',
        icon: '👕',
        badge: 'Summer Sale',
        featured: true,
        color: 'bg-blue-50',
        banner: '/images/clothing-banner.jpg'
    },
    'Baby': {
        title: 'Baby Care Essentials',
        subtitle: 'Safe products for your little one',
        icon: '👶',
        badge: 'Best Sellers',
        featured: true,
        color: 'bg-pink-50',
        banner: '/images/baby-banner.jpg'
    },
    'Fitness': {
        title: 'Fitness & Wellness',
        subtitle: 'Achieve your fitness goals',
        icon: '💪',
        badge: '-20% Off',
        featured: true,
        color: 'bg-green-50',
        banner: '/images/fitness-banner.jpg'
    },
    'Decor': {
        title: 'Home Decoration',
        subtitle: 'Beautiful pieces for your space',
        icon: '🏠',
        badge: 'New Collection',
        featured: true,
        color: 'bg-purple-50',
        banner: '/images/decor-banner.jpg'
    },
    'Tech': {
        title: 'Latest Technology',
        subtitle: 'Smart gadgets & devices',
        icon: '💻',
        badge: 'Limited Offer',
        featured: true,
        color: 'bg-gray-50',
        banner: '/images/tech-banner.jpg'
    },
    'Beauty': {
        title: 'Beauty & Cosmetics',
        subtitle: 'Premium skincare & makeup',
        icon: '💄',
        badge: 'Trending Now',
        featured: true,
        color: 'bg-red-50',
        banner: '/images/beauty-banner.jpg'
    }
};
export default async function Page() {
    // Safe check for categories
    const categories = Object.keys(categoriesConfig || {});

    // Featured categories for Bento (all are featured true now)
    const featuredCategories = categories.filter(cat => categoriesConfig[cat]?.featured === true);

    return (
        <Container>
            <Hero />
            <NewsMarquee />

            {/* Category Bento Section */}
            {featuredCategories.length > 0 && (
                <div className="my-8 md:my-12">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Shop by Category
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base">
                            Discover amazing products across our {categories.length} categories
                        </p>
                    </div>
                    <CategoryBento categories={featuredCategories} categoriesConfig={categoriesConfig} />
                </div>
            )}

            {/* Dynamic Carousels for each category */}
            <div className="space-y-8 md:space-y-12">
                {categories.map((cat) => {
                    const config = categoriesConfig[cat];
                    return (
                        <Carousel
                            key={cat}
                            category={cat}
                            title={config.title}
                            icon={config.icon}
                            badge={config.badge}
                            subtitle={config.subtitle}
                            color={config.color}
                        />
                    );
                })}
            </div>
        </Container>
    );
}