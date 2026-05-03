// components/FacebookPixel.jsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { FB_PIXEL_ID, pageview } from '../lib/fbpixel';

export default function FacebookPixel() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isPixelLoaded, setIsPixelLoaded] = useState(false);

    useEffect(() => {
        // চেক করুন পিক্সেল আইডি আছে কিনা
        if (!FB_PIXEL_ID) {
            console.warn('Facebook Pixel ID is not defined. Check your environment variables.');
            return;
        }

        // পিক্সেল লোড হওয়ার জন্য অপেক্ষা করুন
        const checkFbq = setInterval(() => {
            if (typeof window.fbq === 'function') {
                setIsPixelLoaded(true);
                clearInterval(checkFbq);
                console.log('Facebook Pixel loaded successfully');
            }
        }, 500);

        // 10 সেকেন্ড পরে ক্লিয়ার করুন
        setTimeout(() => clearInterval(checkFbq), 10000);

        return () => clearInterval(checkFbq);
    }, []);

    useEffect(() => {
        if (pathname && isPixelLoaded && typeof window.fbq === 'function') {
            console.log('Tracking PageView for:', pathname);
            pageview();
        }
    }, [pathname, searchParams, isPixelLoaded]);

    if (!FB_PIXEL_ID) {
        console.warn('Facebook Pixel ID missing');
        return null;
    }

    return (
        <>
            <Script
                id="fb-pixel"
                strategy="afterInteractive"
                onLoad={() => {
                    console.log('Facebook Pixel script loaded');
                    if (typeof window.fbq === 'function' && FB_PIXEL_ID) {
                        window.fbq('init', FB_PIXEL_ID);
                        window.fbq('track', 'PageView');
                        console.log('Facebook Pixel initialized with ID:', FB_PIXEL_ID);
                    }
                }}
                onError={(error) => {
                    console.error('Failed to load Facebook Pixel:', error);
                }}
                dangerouslySetInnerHTML={{
                    __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        
                        // Initialize pixel
                        fbq('init', '${FB_PIXEL_ID}');
                        fbq('track', 'PageView');
                        
                        console.log('Facebook Pixel initialized successfully');
                    `,
                }}
            />
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                />
            </noscript>
        </>
    );
}