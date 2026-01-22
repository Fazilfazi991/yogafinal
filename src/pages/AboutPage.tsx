import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #355E4B 0%, #4A7C59 100%)',
                padding: '80px 0',
                textAlign: 'center',
                color: 'white'
            }}>
                <div className="container">
                    <h1 style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: '48px',
                        marginBottom: '24px'
                    }}>
                        About Nature Universal
                    </h1>
                    <p style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: '18px',
                        maxWidth: '800px',
                        margin: '0 auto',
                        opacity: 0.95
                    }}>
                        Dubai’s exquisite new holistic yoga and wellbeing community.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section" style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>

                    {/* Vision Section */}
                    <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '80px' }}>
                        <div className="about-text" style={{ textAlign: 'left' }}>
                            <h2 style={{
                                fontFamily: 'var(--font-primary)',
                                fontSize: '32px',
                                color: 'var(--accent-dark)',
                                marginBottom: '1.5rem'
                            }}>
                                Our Vision
                            </h2>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                                Nature Universal Yoga Center believes every body holds natural wisdom to self-heal.
                                We strive to create a sanctuary where modern life meets ancient wisdom, allowing you to
                                reconnect with your inner self through the practice of Yoga, Meditation, and Mindfulness.
                            </p>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)', marginTop: '20px' }}>
                                Whether you are a beginner looking to improve flexibility or an advanced practitioner seeking
                                deeper spiritual connection, our diverse classes and expert instructors are here to guide your journey.
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80"
                                alt="Yoga Vision"
                                style={{
                                    width: '100%',
                                    height: '400px',
                                    objectFit: 'cover',
                                    borderRadius: '20px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                }}
                            />
                        </div>
                    </div>

                    {/* Philosophy Section */}
                    <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ order: 1 }}>
                            <img
                                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
                                alt="Yoga Philosophy"
                                style={{
                                    width: '100%',
                                    height: '400px',
                                    objectFit: 'cover',
                                    borderRadius: '20px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                }}
                            />
                        </div>
                        <div style={{ textAlign: 'left', order: 2 }}>
                            <h2 style={{
                                fontFamily: 'var(--font-primary)',
                                fontSize: '32px',
                                color: 'var(--accent-dark)',
                                marginBottom: '1.5rem'
                            }}>
                                Our Philosophy
                            </h2>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                                It’s yoga’s job to activate that natural tendency to build strength, awareness and harmony in Mind, Body & Soul.
                                We focus on a holistic approach that goes beyond physical postures, integrating breathwork,
                                mental focus, and spiritual awareness into every class.
                            </p>
                            <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
                                {['Holistic Wellness', 'Community Connection', 'Authentic Practice', 'Personal Growth'].map(item => (
                                    <li key={item} style={{ marginBottom: '10px', fontSize: '18px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ color: 'var(--accent-green)' }}>🌿</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default AboutPage;
