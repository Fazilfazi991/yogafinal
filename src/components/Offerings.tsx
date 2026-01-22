import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Offerings: React.FC = () => {
    const offerings = [
        { title: 'Classical Yoga', desc: 'Gentle foundations for beginners, breath-focused.' },
        { title: 'Hatha Vinyasa', desc: 'Dynamic flows linking breath to purposeful movement.' },
        { title: 'Specialty Series', desc: 'Weight Loss Flow, Yin Yoga, Ayurveda sequences.' },
        { title: 'Healing Arts', desc: 'Reiki, Sound Healing, Crystal Therapy, intuitive readings.' },
    ];

    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section id="classes" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div ref={ref} className="container" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
                <h2 className={isVisible ? 'animate-fade-up' : ''} style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Offerings</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {offerings.map((item, index) => (
                        <div key={index} className={`animate-fade-up delay-${(index + 1) * 100}`} style={{ backgroundColor: 'var(--bg-primary)', padding: '2rem', borderRadius: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '24px', marginBottom: '1rem', color: 'var(--accent-green)' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offerings;
