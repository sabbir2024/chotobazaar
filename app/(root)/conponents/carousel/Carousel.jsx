import Link from "next/link";
import { apiUrl } from "../../../components/url";
import Card from "../../../components/Card";

export default async function Carousel({ category, title, icon, badge, subtitle, color }) {
    // Safe check for category
    if (!category) return null;

    try {
        const results = await fetch(`${apiUrl}/products?category=${category}&limit=6`, {
            cache: 'no-store',
            next: { revalidate: 3600 } // 1 hour revalidation
        });

        const data = await results.json();
        const products = data?.success ? data?.data : [];

        // Don't show carousel if no products
        if (!products || products.length === 0) return null;

        return (
            <div className={`px-2 md:px-4 my-8 md:my-12 ${color || ''} rounded-xl py-4 md:py-6 transition-all hover:shadow-lg`}>
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-4 px-2">
                    <div className="flex items-center gap-3 mb-3 md:mb-0">
                        {icon && (
                            <span className="text-3xl md:text-4xl lg:text-5xl animate-bounce">
                                {icon}
                            </span>
                        )}
                        <div>
                            <div className="flex items-center gap-2 flex-wrap">
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                                    {title || category}
                                </h2>
                                {badge && (
                                    <span className="badge badge-primary badge-sm md:badge-md">
                                        {badge}
                                    </span>
                                )}
                            </div>
                            {subtitle && (
                                <p className="text-xs md:text-sm text-gray-500 mt-1">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>

                    <Link
                        href={`/shop?category=${encodeURIComponent(category)}`}
                        className="btn btn-primary btn-outline btn-xs md:btn-sm lg:btn-md"
                    >
                        View All
                        <span className="text-base md:text-lg ml-1">→</span>
                    </Link>
                </div>

                {/* Divider */}
                <div className="divider divider-primary my-2 md:my-3"></div>

                {/* Carousel Items */}
                <div className="carousel carousel-center rounded-box space-x-3 md:space-x-4 p-3 md:p-4 overflow-x-auto scrollbar-hide">
                    {products.map((product, index) => (
                        <div key={product._id || index} className="carousel-item sm:mx-w-md">
                            <div className="w-40 sm:w-44 md:w-52 lg:w-56 h-72 sm:h-80 md:h-96">
                                <Card product={product} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Navigation Hint */}
                <div className="text-center mt-3 md:mt-4 lg:hidden">
                    <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
                        <span>←</span> Swipe to see more <span>→</span>
                    </p>
                </div>
            </div>
        );
    } catch (error) {
        return null;
    }
}