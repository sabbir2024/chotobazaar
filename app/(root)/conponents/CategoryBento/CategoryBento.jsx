import Link from "next/link";

export default function CategoryBento({ categories, categoriesConfig }) {
    const featuredList = categories.map(catName => ({
        id: catName,
        ...categoriesConfig[catName]
    }));
    console.log('process.env.NEXT_PUBLIC_MONGODB_URI', process.env.NEXT_PUBLIC_MONGODB_URI);


    return (
        <div className="w-full">
            {/* Flex wrap - multi-line rounded cards */}
            <div className="flex flex-wrap justify-center gap-4">
                {featuredList.map((category) => (
                    <Link
                        key={category.title}
                        href={`/shop?category=${category?.id}`}
                        className="group block"
                    >
                        <div className={`${category.color} w-36 sm:w-40 md:w-44 rounded-2xl p-4 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>

                            {/* Icon */}
                            <div className="text-3xl sm:text-4xl mb-2 transition-transform duration-300 group-hover:scale-110">
                                {category.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xs sm:text-sm font-semibold text-stone-800 group-hover:text-amber-700 transition-colors">
                                {category.title.split(' ')[0]}
                            </h3>

                            {/* Optional badge dot */}
                            {category.badge && (
                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mx-auto mt-1.5 opacity-60" />
                            )}
                        </div>
                    </Link>
                ))}
            </div>

            {/* View all link */}
            <div className="flex justify-center mt-8">
                <Link
                    href="/categories"
                    className="text-xs text-stone-400 hover:text-amber-700 tracking-wide uppercase transition-colors"
                >
                    View all {categories.length} categories →
                </Link>
            </div>
        </div>
    );
}