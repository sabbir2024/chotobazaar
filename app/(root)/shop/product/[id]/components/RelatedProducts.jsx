// app/product/[id]/components/RelatedProducts.jsx
import Link from "next/link";
import { apiUrl } from "../../../../../components/url";

// ট্যাগ অনুযায়ী রিলেটেড প্রোডাক্ট ফেচ করার ফাংশন
async function fetchRelatedProductsByTags(currentId, tags) {
    if (!tags || tags.length === 0) return [];

    try {
        const tagsQuery = tags.join(',');
        const res = await fetch(
            `${apiUrl}/products?tags=${tagsQuery}&exclude=${currentId}&limit=4`,
            { cache: 'no-cache' }
        );
        const result = await res.json();
        console.log('RelatedProducts--res=>', result);
        return result.success ? result.data : [];
    } catch (error) {
        console.error('Related products fetch error:', error);
        return [];
    }
}

export default async function RelatedProducts({ currentProductId, tags }) {
    const relatedProducts = await fetchRelatedProductsByTags(currentProductId, tags);

    if (!relatedProducts || relatedProducts.length === 0) return null;

    return (
        <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    সম্পর্কিত পণ্য
                </h2>
                <Link
                    href={`/shop?tags=${encodeURIComponent(tags?.join(','))}`}
                    className="text-sm text-blue-600 hover:text-blue-700"
                >
                    সব দেখুন →
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedProducts.map((product) => (
                    <Link
                        href={`/product/${product._id}`}
                        key={product._id}
                        className="group"
                    >
                        <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 bg-white">
                            <div className="relative overflow-hidden h-48 bg-gray-100">
                                <img
                                    src={product.primaryImage || product.images?.[0]}
                                    alt={product.productName}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                {/* ট্যাগ ব্যাজ */}
                                {product.tags && product.tags[0] && (
                                    <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                                        {product.tags[0]}
                                    </span>
                                )}
                            </div>
                            <div className="p-3">
                                <p className="font-semibold text-sm line-clamp-2 mb-2 min-h-[40px]">
                                    {product.productName.length > 50
                                        ? product.productName.substring(0, 50) + '...'
                                        : product.productName}
                                </p>
                                <div className="flex items-center gap-2">
                                    <p className="text-red-600 font-bold">
                                        ৳{product.basePrice}
                                    </p>
                                    {product.comparePrice && (
                                        <p className="text-gray-400 text-sm line-through">
                                            ৳{product.comparePrice}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}