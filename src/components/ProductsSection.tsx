import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProductsSection: React.FC = () => {
    const products = [
        { name: 'Eco-Friendly Yoga Mat', price: 'AED 120', image: '/product-yoga-mat.png' },
        { name: 'Cork Yoga Block', price: 'AED 45', image: '/product-cork-block.png' },
        { name: 'Cotton Yoga Strap', price: 'AED 35', image: '/product-yoga-strap.png' },
        { name: 'Meditation Cushion', price: 'AED 150', image: '/product-cushion.png' },
    ];

    const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

    return (
        <section id="products" className="section" style={{ backgroundColor: 'var(--bg-light-green)' }}>
            <div ref={ref} className="container" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
                <h2 className={isVisible ? 'animate-fade-up' : ''} style={{ textAlign: 'center', marginBottom: '3rem' }}>Yoga Products</h2>
                <p className="animate-fade-up delay-100" style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '-2rem', color: 'var(--text-secondary)' }}>
                    Enhance your practice with our curated selection of high-quality essentials.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                    {products.map((product, index) => (
                        <div key={index} className={`animate-fade-up delay-${(index + 2) * 100}`} style={{
                            backgroundColor: 'var(--bg-primary)',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{product.name}</h3>
                                <p style={{ color: 'var(--accent-green)', fontWeight: 'bold', fontSize: '16px' }}>{product.price}</p>
                                <button className="btn btn-secondary" style={{ marginTop: '1rem', padding: '8px 16px', fontSize: '14px', width: '100%' }}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
