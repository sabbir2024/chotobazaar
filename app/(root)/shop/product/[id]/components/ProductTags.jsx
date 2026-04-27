// app/product/[id]/components/ProductTags.jsx
import Link from "next/link";

export default function ProductTags({ tags }) {
    if (!tags || tags.length === 0) return null;

    const getTagStyle = (tag) => {
        const styles = {
            'premium': 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white',
            'trending': 'bg-gradient-to-r from-red-500 to-pink-500 text-white',
            'new arrival': 'bg-gradient-to-r from-green-400 to-emerald-600 text-white'
        };
        return styles[tag] || 'bg-gray-100 text-gray-700 hover:bg-gray-200';
    };

    return (
        <div className="mt-6 pt-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
                প্রোডাক্ট ট্যাগ:
            </h3>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <Link
                        key={index}
                        href={`/shop?tag=${encodeURIComponent(tag)}`}
                        className={`px-3 py-1 text-xs rounded-full transition-all duration-200 hover:scale-105 ${getTagStyle(tag)}`}
                    >
                        #{tag}
                    </Link>
                ))}
            </div>
        </div>
    );
}