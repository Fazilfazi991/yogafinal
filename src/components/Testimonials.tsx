import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
    const testimonials = [
        { name: 'Sarah J.', text: "The most serene place to practice yoga in Dubai. The instructors are clearly very experienced and caring.", role: 'Regular Member' },
        { name: 'Mohammed A.', text: "I started as a complete beginner with the trial package. Now I can't imagine my week without the Hatha sessions.", role: 'Beginner' },
        { name: 'Elena R.', text: "The healing sessions have been transformative for my stress levels. Highly recommend the sound baths!", role: 'Wellness Enthusiast' },
    ];

    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div ref={ref} className="container" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
                <h2 className={isVisible ? 'animate-fade-up' : ''} style={{ textAlign: 'center', marginBottom: '3rem' }}>Member Stories</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {testimonials.map((t, index) => (
                        <div key={index} className={`animate-fade-up delay-${(index + 1) * 100}`} style={{
                            padding: '2rem',
                            backgroundColor: 'var(--bg-light-green)',
                            borderRadius: '16px',
                            position: 'relative'
                        }}>
                            <div style={{ fontSize: '40px', color: 'var(--accent-green)', opacity: 0.3, lineHeight: 1 }}>"</div>
                            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>{t.text}</p>
                            <div>
                                <strong style={{ display: 'block', color: 'var(--text-primary)' }}>{t.name}</strong>
                                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{t.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
