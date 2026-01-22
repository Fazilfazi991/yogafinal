import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const QuoteSection: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

    return (
        <section className="section" style={{
            backgroundColor: 'var(--accent-dark)',
            color: '#FFFFFF',
            textAlign: 'center',
            padding: '100px 20px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div ref={ref} className="container" style={{ position: 'relative', zIndex: 1, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
                <h2 style={{
                    fontSize: '36px',
                    marginBottom: '1.5rem',
                    fontStyle: 'italic',
                    maxWidth: '900px',
                    marginInline: 'auto',
                    lineHeight: '1.4'
                }}>
                    "Taking time to meditate can restore our balance, boost our energy and condition our minds to be more adaptive and responsive"
                </h2>
                <div style={{
                    width: '60px',
                    height: '4px',
                    backgroundColor: 'var(--accent-light)',
                    margin: '20px auto'
                }}></div>
            </div>
        </section>
    );
};

export default QuoteSection;
