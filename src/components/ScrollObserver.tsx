import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollObserver: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Optional: Stop observing once visible to run only once
                        // observer.unobserve(entry.target); 
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
                rootMargin: '0px 0px -50px 0px' // Offset to trigger slightly before/after
            }
        );

        const observeElements = () => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach((el) => observer.observe(el));
        };

        // Small delay to ensure DOM is ready after route change
        const timeoutId = setTimeout(observeElements, 100);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, [location.pathname]); // Re-run when route changes

    return null; // This component doesn't render anything visually
};

export default ScrollObserver;
