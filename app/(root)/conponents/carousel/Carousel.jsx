// components/carousel/CarouselClient.jsx (Client Component)
"use client";

import Link from "next/link";
import Card from "../../../components/Card";
import { useRef } from "react";

export default function CarouselClient({
    products,
    category,
    title,
    icon,
    badge,
    subtitle,
    color
}) {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className={`w-full px-2 md:px-4 my-8 md:my-12 ${color || ''} rounded-xl py-4 md:py-6`}>
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-4 px-2">
                <div className="flex items-center gap-3 mb-3 md:mb-0">
                    {icon && (
                        <span className="text-3xl md:text-4xl lg:text-5xl">
                            {icon}
                        </span>
                    )}
                    <div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                                {title || category}
                            </h2>
                            {badge && (
                                <span className="badge badge-primary badge-sm">
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
                    className="btn btn-primary btn-outline btn-xs md:btn-sm"
                >
                    View All <span className="ml-1">→</span>
                </Link>
            </div>

            {/* Divider */}
            <div className="divider divider-primary my-2"></div>

            {/* Carousel with Scroll Buttons */}
            <div className="relative group">
                {/* Left Scroll Button */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 hidden md:block hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                {/* Carousel Items */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-3 md:gap-4 pb-4 scroll-smooth hide-scrollbar"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {products.map((product, index) => (
                        <div
                            key={product._id || index}
                            className="flex-none w-40 sm:w-44 md:w-48 lg:w-52"
                        >
                            <div className="h-72 sm:h-80 md:h-96">
                                <Card product={product} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Scroll Button */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 hidden md:block hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            {/* Mobile Scroll Hint */}
            <div className="text-center mt-4 md:hidden">
                <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
                    <span>←</span> Scroll to see more <span>→</span>
                </p>
            </div>
        </div>
    );
}