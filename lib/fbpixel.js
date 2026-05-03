// lib/fbpixel.js
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const pageview = () => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        console.log('Tracking PageView event');
        window.fbq('track', 'PageView');
    } else {
        console.warn('fbq not available for PageView');
    }
};

export const event = (name, options = {}) => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        console.log(`Tracking event: ${name}`, options);
        window.fbq('track', name, options);
    } else {
        console.warn(`fbq not available for event: ${name}`);
    }
};

// Initialize pixel manually if needed
export const initPixel = () => {
    if (typeof window !== 'undefined' && FB_PIXEL_ID && typeof window.fbq === 'function') {
        window.fbq('init', FB_PIXEL_ID);
        console.log('Pixel re-initialized');
    }
};