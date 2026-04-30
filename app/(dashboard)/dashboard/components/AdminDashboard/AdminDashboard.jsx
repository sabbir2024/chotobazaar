// components/AdminDashboard.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderTopbar from '../HeaderTopbar';
import AnalyticsBentoGrid from '../AnalyticsBentoGrid';

export default function AdminDashboard({ user, orders }) {
    const [searchQuery, setSearchQuery] = useState('');

    // Product data
    const products = [
        {
            id: '#PROD-8291',
            name: 'Chronos Elite VII',
            category: 'Timepieces',
            stock: 42,
            price: 1250.00,
            status: 'In Stock',
            statusColor: 'emerald',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS0Joz4nA3KpoD8q5wTLrvRV78isBRuWL3ehZVjSF-EwdADE4n7LwNRrZXT41b-dVXZXHHI_-T-5lC4fH0QUPaWHREibK-6FdOqglAeScQvAVKV5pkwCEdBwkI3LRIv8Vcmhu9S8kEUESNjhrm1rZuniVOPWIR6RguZdS6ZBhCZDMlei365wM8Cil_wo23IIvvqj24qDJAyV8Y4EMDOf9NbpxrVEvdS6ZtDuuCjC-ckOWkIkCAQmUeLz8-Kdjj8PDduRaYZ__otQ'
        },
        {
            id: '#PROD-1102',
            name: 'Aura Studio Pods',
            category: 'Audio',
            stock: 8,
            price: 299.00,
            status: 'Low Stock',
            statusColor: 'orange',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0cZayAPrS04CdtYXCWmsziOHtT5ySSSlJfwLkDKzeKUlTCL1WDe9_CwGGziJ5gr5olVyGWQbJhNNhmLHXFARCy3SCKA2bQoLKb4wX5nYdMLodr1lNDkoEujGiXHLzJ0U2ElFPTJtWCnICluLGnJdwJoo7aDd_ADvbLAX5FD6hNECU4pn_XzQwVqtxLApi4YgyxgHtmU2LTtYnB1PGEgRRLfpSSEjoFpg_m3gRQxm40WX432HM_IHMMDH-VQsbZWOGIRLRt_nZRw'
        },
        {
            id: '#PROD-4432',
            name: 'Nomad Travel Case',
            category: 'Travel',
            stock: 156,
            price: 450.00,
            status: 'In Stock',
            statusColor: 'emerald',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1SsZRGzG5f8KIwRCKIisWuJ7l-gZKXx-Kw_8QebYdSAL0XGHO9fe-CG6SmNuQf6O5NYrptZl4QnkRs3b6cpTl_WA01nknqzZnA51uABQlQ980NRqkvvXvK4_ICaA3Ln8ttOIclV7C56LBslbRrpukAae0Yhaob5fZDMUtlb5jesFdysJbxMqFjO_ZaG9BGzvLZOC2y4pCYsxBlLU9X2HMCZks3H88QvW8N3lbfLUSoQcyT8nkdTeUfgxdz4BZaQOKiR7i3Iux5A'
        }
    ];

    const getStatusColor = (statusColor) => {
        const colors = {
            emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
            orange: 'bg-orange-50 text-primary border-orange-100',
        };
        return colors[statusColor] || 'bg-gray-50 text-gray-600 border-gray-100';
    };

    return (
        <main className="flex-1 p-4 md:p-6 lg:p-10 space-y-6 md:space-y-10 max-w-7xl mx-auto">
            {/* Header & Top Bar */}
            <HeaderTopbar user={user} />

            {/* Analytics Bento Grid */}
            <AnalyticsBentoGrid user={user} orders={orders?.data} />



            {/* Dynamic User Section Split */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* Order Tracking */}
                <div className="bg-surface-container-low p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-base sm:text-lg font-bold">Shipment Tracking</h3>
                        <span className="material-symbols-outlined text-on-surface-variant">local_shipping</span>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-surface-container-lowest p-4 rounded-2xl flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <div>
                                    <p className="text-xs font-bold">Order #9921 - En Route</p>
                                    <p className="text-[10px] text-on-surface-variant">London, UK → New York, US</p>
                                </div>
                            </div>
                            <button className="text-[10px] font-bold text-primary uppercase tracking-wider hover:underline">
                                Track
                            </button>
                        </div>
                        <div className="bg-surface-container-lowest p-4 rounded-2xl flex items-center justify-between opacity-60">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                <div>
                                    <p className="text-xs font-bold">Order #9810 - Delivered</p>
                                    <p className="text-[10px] text-on-surface-variant">Paris, FR → Berlin, DE</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                        </div>
                    </div>
                </div>

                {/* Personalized Recommendations */}
                <div className="bg-surface-container-lowest p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-surface-container overflow-hidden relative">
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6">
                        <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-black uppercase px-2 sm:px-3 py-1 rounded-full tracking-tighter">
                            Just For You
                        </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-2">Curated Collection</h3>
                    <p className="text-xs text-on-surface-variant mb-4 sm:mb-6">Based on your recent aesthetic choices.</p>
                    <div className="flex gap-3 sm:gap-4">
                        <div className="flex-1 group">
                            <div className="aspect-square bg-surface-container rounded-xl sm:rounded-2xl overflow-hidden mb-2 sm:mb-3">
                                <img
                                    alt="Linen Shirt"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh6Mz7Mwy0kxV9Ikze68SUH4viheFuVPqRePJTYFPp-Pz7xsyzNZpUmFBEB5sUJWbHQa4dMC9Q40tkHNCVpLnrMkfjYEfN8RhoYghrfVWHgZpewquHb_MWzPTUIRcSmYcLRNH8r89lDkTliYCzW6ITVepzpgtZjQ3cpJO8Sr-tdLXgjEtC5tRRHG6E3icKorlePqH9N89WXd-UzVQdW0ppjfbCtxtq8w5VXgp8OHHLxuroy_iQKxrg--H4VV69BXrNUtOF9wEDGw"
                                />
                            </div>
                            <p className="text-xs font-bold truncate">Oversized Linen Shirt</p>
                            <p className="text-[10px] text-primary font-bold">$89.00</p>
                        </div>
                        <div className="flex-1 group">
                            <div className="aspect-square bg-surface-container rounded-xl sm:rounded-2xl overflow-hidden mb-2 sm:mb-3">
                                <img
                                    alt="Accessories"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxk9UnhAsONyTxYHcowoxQAAmweTpztUWTG1GZLdEqjzjeD1QSn7mYAAsOZHRE0zeJReDlN-SOZd1b4oqDABFsGgKY_2uuwwWc6d9LPxcRZigsAGKM7_1pgD8hxf9KE1DQE8oMfUEXxpuViVW3PS15oXSYRt4Xtb-ieoWf6HL-zyBuDe9FXL-bpz22Tu5oQYJJL4wxI2djJq6K6p9ZXoHulAnfLasmtN7UGlPCvUWUoZbXw5syDGNqSzMQo1v_L7txOPnQpEUAQA"
                                />
                            </div>
                            <p className="text-xs font-bold truncate">Minimalist Silver Band</p>
                            <p className="text-[10px] text-primary font-bold">$120.00</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}