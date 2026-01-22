import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Promo: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

    return (
        <section id="promo" className="section" style={{ backgroundColor: 'var(--accent-green)', color: '#FFFFFF', textAlign: 'center' }}>
            <div ref={ref} className="container" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'scale(1)' : 'scale(0.95)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
                <h2 style={{ color: '#FFFFFF', marginBottom: '1rem' }}>Start Your Journey Today</h2>
                <p style={{ fontSize: '20px', marginBottom: '2rem' }}>2 Trial Classes for AED 108. Experience our space, meet our teachers.</p>
                <button className="btn" style={{ backgroundColor: '#FFFFFF', color: 'var(--accent-green)' }}>Register Now</button>
            </div>
        </section>
    );
};

export default Promo;
