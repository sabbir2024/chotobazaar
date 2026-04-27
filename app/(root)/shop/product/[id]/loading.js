// app/loading.js
"use client";

const Loading = () => {
    return (
        <div className="min-h-screen bg-base-200">
            <div className="container mx-auto px-3 md:px-4 py-4 md:py-8">

                {/* Header Section */}
                <div className="mb-6 md:mb-8">
                    <div className="skeleton h-8 md:h-10 w-3/4 md:w-1/2 mb-2"></div>
                    <div className="skeleton h-4 md:h-5 w-1/2 md:w-1/3"></div>
                </div>

                {/* Main Layout */}
                <div className="flex flex-col lg:flex-row gap-4 md:gap-6">

                    {/* Sidebar - Categories */}
                    <div className="w-full lg:w-64 flex-shrink-0">
                        <div className="card bg-base-100 shadow-xl mb-4 md:mb-6">
                            <div className="card-body p-4 md:p-6">
                                <div className="skeleton h-6 w-28 mb-4"></div>
                                <div className="space-y-3">
                                    {/* Category N */}
                                    <div>
                                        <div className="skeleton h-5 w-8 mb-2"></div>
                                        <div className="space-y-2 ml-4">
                                            <div className="skeleton h-4 w-32"></div>
                                            <div className="skeleton h-3 w-24"></div>
                                            <div className="skeleton h-3 w-20"></div>
                                        </div>
                                    </div>

                                    {/* Category S */}
                                    <div className="mt-4">
                                        <div className="skeleton h-5 w-8 mb-2"></div>
                                        <div className="space-y-2 ml-4">
                                            <div className="skeleton h-4 w-28"></div>
                                            <div className="skeleton h-4 w-24"></div>
                                            <div className="skeleton h-4 w-28"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body p-4 md:p-6">
                                <div className="space-y-3">
                                    {['DISCOVER', 'SHOP ALL', 'NEW ARRIVALS', 'SUSTAINABILITY'].map((_, i) => (
                                        <div key={i} className="skeleton h-5 w-28"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid Section */}
                    <div className="flex-1">
                        {/* Collection Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body p-4">
                                    <div className="skeleton h-5 w-24 mb-2"></div>
                                    <div className="skeleton h-8 w-16"></div>
                                </div>
                            </div>
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body p-4">
                                    <div className="skeleton h-5 w-24 mb-2"></div>
                                    <div className="skeleton h-8 w-32"></div>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="card bg-base-100 shadow-xl">
                                    <div className="card-body p-4 md:p-6">
                                        {/* Product Image Skeleton */}
                                        <div className="skeleton h-40 md:h-48 w-full rounded-lg mb-4"></div>

                                        {/* Product Title */}
                                        <div className="skeleton h-5 md:h-6 w-3/4 mb-2"></div>

                                        {/* Price */}
                                        <div className="skeleton h-6 md:h-7 w-1/3 mb-2"></div>

                                        {/* Stock Status */}
                                        <div className="skeleton h-4 w-28 mb-2"></div>

                                        {/* Save Badge */}
                                        <div className="skeleton h-5 w-20 mb-3"></div>

                                        {/* Buttons */}
                                        <div className="flex gap-2 mt-2">
                                            <div className="skeleton h-10 w-full rounded-btn"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-base-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                        {/* Footer Column 1 */}
                        <div>
                            <div className="skeleton h-5 w-24 mb-3"></div>
                            <div className="space-y-2">
                                <div className="skeleton h-4 w-20"></div>
                                <div className="skeleton h-4 w-24"></div>
                                <div className="skeleton h-4 w-28"></div>
                            </div>
                        </div>

                        {/* Footer Column 2 */}
                        <div>
                            <div className="skeleton h-5 w-28 mb-3"></div>
                            <div className="space-y-2">
                                <div className="skeleton h-4 w-24"></div>
                                <div className="skeleton h-4 w-20"></div>
                                <div className="skeleton h-4 w-28"></div>
                            </div>
                        </div>

                        {/* Footer Column 3 */}
                        <div>
                            <div className="skeleton h-5 w-32 mb-3"></div>
                            <div className="space-y-2">
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-24"></div>
                                <div className="skeleton h-4 w-20"></div>
                            </div>
                        </div>

                        {/* Footer Column 4 - Social Media */}
                        <div>
                            <div className="skeleton h-5 w-24 mb-3"></div>
                            <div className="flex gap-3">
                                <div className="skeleton h-8 w-8 rounded-full"></div>
                                <div className="skeleton h-8 w-8 rounded-full"></div>
                                <div className="skeleton h-8 w-8 rounded-full"></div>
                                <div className="skeleton h-8 w-8 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="skeleton h-4 w-64 mx-auto"></div>
                </div>
            </div>

            {/* Optional: Loading Spinner Overlay */}
            <div className="fixed bottom-4 right-4 z-50">
                <div className="loading loading-spinner loading-lg text-primary"></div>
            </div>
        </div>
    );
};

export default Loading;