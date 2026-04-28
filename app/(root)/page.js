// app/page.jsx
import Container from "../components/Container";
import NewsMarquee from "../components/NewsMarquee";
import CarouselServer from "./conponents/carousel/CarouselServer";
import CategoryBento from "./conponents/CategoryBento/CategoryBento";
import Hero from "./conponents/hero/Hero";

// Category configuration
const categoriesConfig = {
    'Food': {
        title: 'Fresh & Organic Food',
        subtitle: 'Healthy and delicious options',
        icon: '🍔',
        badge: 'New Arrivals',
        featured: true,
        color: 'bg-orange-50',
    },
    'Clothing': {
        title: 'Fashion Collection',
        subtitle: 'Trendy styles for everyone',
        icon: '👕',
        badge: 'Summer Sale',
        featured: true,
        color: 'bg-blue-50',
    },
    'Baby': {
        title: 'Baby Care Essentials',
        subtitle: 'Safe products for your little one',
        icon: '👶',
        badge: 'Best Sellers',
        featured: true,
        color: 'bg-pink-50',
    },
    'Fitness': {
        title: 'Fitness & Wellness',
        subtitle: 'Achieve your fitness goals',
        icon: '💪',
        badge: '-20% Off',
        featured: true,
        color: 'bg-green-50',
    },
    'Decor': {
        title: 'Home Decoration',
        subtitle: 'Beautiful pieces for your space',
        icon: '🏠',
        badge: 'New Collection',
        featured: true,
        color: 'bg-purple-50',
    },
    'Tech': {
        title: 'Latest Technology',
        subtitle: 'Smart gadgets & devices',
        icon: '💻',
        badge: 'Limited Offer',
        featured: true,
        color: 'bg-gray-50',
    },
    'Beauty': {
        title: 'Beauty & Cosmetics',
        subtitle: 'Premium skincare & makeup',
        icon: '💄',
        badge: 'Trending Now',
        featured: true,
        color: 'bg-red-50',
    }
};

export default async function Page() {
    const categories = Object.keys(categoriesConfig);
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

            {/* Dynamic Carousels - Using Server Component */}
            <div className="space-y-8 md:space-y-12">
                {categories.map((cat) => {
                    const config = categoriesConfig[cat];
                    return (
                        <CarouselServer
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