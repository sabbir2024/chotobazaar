// components/carousel/CarouselServer.jsx (Server Component - No 'use client')
import { apiUrl } from "../../../components/url";
import CarouselClient from "./Carousel";

export default async function CarouselServer({ category, title, icon, badge, subtitle, color }) {
    if (!category) return null;

    try {
        const results = await fetch(`${apiUrl}/products?category=${category}&limit=6`, {
            cache: 'no-store',
            next: { revalidate: 3600 }
        });

        const data = await results.json();
        const products = data?.success ? data?.data : [];

        if (!products || products.length === 0) return null;

        // Pass data to client component
        return (
            <CarouselClient
                products={products}
                category={category}
                title={title}
                icon={icon}
                badge={badge}
                subtitle={subtitle}
                color={color}
            />
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}