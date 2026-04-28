// app/product/[id]/components/RelatedProducts.jsx
import Link from "next/link";
import { apiUrl } from "../../../../../components/url";
import Card from "../../../../../components/Card";

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
                    href={`/shop?cetagory=${encodeURIComponent(tags?.join(','))}`}
                    className="text-sm text-blue-600 hover:text-blue-700"
                >
                    সব দেখুন →
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedProducts.map((product) => (
                    <Card product={product} key={product._id} />
                ))}
            </div>
        </div>
    );
}