import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="page-hero" style={{ backgroundImage: 'url(/about-hero.png)' }}>
                <div className="page-hero-overlay"></div>
                <div className="container page-hero-content">
                    <h1 className="page-hero-title">
                        About Nature Universal
                    </h1>
                    <p className="page-hero-subtitle">
                        Dubai’s exquisite new holistic yoga and wellbeing community.
                    </p>
                </div>
            </section>

            {/* Founder Section */}
            <section className="section" style={{ padding: '80px 0', backgroundColor: 'var(--bg-light-green)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
                        <div>
                            {/* Founder Image */}
                            <img
                                src="/founder.jpg"
                                alt="Sandya Vijayadas - Founder"
                                style={{
                                    width: '100%',
                                    height: '500px',
                                    objectFit: 'cover',
                                    borderRadius: '20px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                }}
                            />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '8px 16px',
                                backgroundColor: 'rgba(53, 94, 75, 0.1)',
                                color: 'var(--accent-dark)',
                                borderRadius: '20px',
                                fontSize: '14px',
                                fontWeight: 600,
                                marginBottom: '20px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                Founder & Lead Instructor
                            </span>
                            <h2 style={{
                                fontFamily: 'var(--font-primary)',
                                fontSize: '42px',
                                color: 'var(--accent-dark)',
                                marginBottom: '1.5rem'
                            }}>
                                Sandya Vijayadas
                            </h2>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                With over 15 years of experience in Hatha and Vinyasa yoga, Sandya founded Nature Universal Yoga Center with a vision to bring holistic healing to the Dubai community. Her teaching style blends traditional wisdom with modern anatomical understanding, ensuring a safe and transformative practice for all.
                            </p>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--accent-dark)', fontStyle: 'italic', fontWeight: 500 }}>
                                "Yoga is not just about flexibility of the body, but the flexibility of the mind. My mission is to help every student discover their own inner strength and peace."
                            </p>
                        </div>
                    </div>
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
