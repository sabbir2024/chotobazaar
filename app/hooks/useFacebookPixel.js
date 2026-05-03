// hooks/useFacebookPixel.js
'use client';

import { event } from "../lip/fbpixel";


const useFacebookPixel = () => {
    // Track custom events
    const trackEvent = (eventName, eventData = {}) => {
        if (typeof window !== 'undefined') {
            event(eventName, eventData);
        }
    };

    // Track button clicks
    const trackButtonClick = (buttonName, additionalData = {}) => {
        trackEvent('Button_Click', {
            button_name: buttonName,
            page_url: window.location.href,
            ...additionalData
        });
    };

    // Track Add to Cart
    const trackAddToCart = (productData) => {
        trackEvent('AddToCart', {
            content_name: productData.name,
            content_ids: [productData.id],
            content_type: 'product',
            value: productData.price,
            currency: 'BDT',
            ...productData
        });
    };

    // Track Purchase
    const trackPurchase = (purchaseData) => {
        trackEvent('Purchase', {
            value: purchaseData.total,
            currency: 'BDT',
            content_ids: purchaseData.productIds,
            content_type: 'product',
            num_items: purchaseData.itemCount,
            ...purchaseData
        });
    };

    // Track Lead (form submission, signup)
    const trackLead = (leadData) => {
        trackEvent('Lead', {
            content_name: leadData.formName || 'Contact Form',
            ...leadData
        });
    };

    return {
        trackEvent,
        trackButtonClick,
        trackAddToCart,
        trackPurchase,
        trackLead
    };
};

export default useFacebookPixel;