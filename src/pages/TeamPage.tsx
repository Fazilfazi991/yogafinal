import React from 'react';

const TeamPage: React.FC = () => {
    return (
        <div className="team-page">
            {/* Hero Section */}
            {/* Hero Section */}
            {/* Hero Section */}
            <section style={{
                backgroundImage: 'url(/team-hero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '60vh',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 1
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: '56px',
                        marginBottom: '24px',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}>
                        Our Team
                    </h1>
                    <p style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: '24px',
                        maxWidth: '800px',
                        margin: '0 auto',
                        opacity: 1,
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                    }}>
                        Meet the dedicated instructors guiding you on your path to wellness.
                    </p>
                </div>
            </section>

            {/* Founder Section */}
            <section className="section" style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
                        <div>
                            {/* Founder Image */}
                            <img
                                src="/founder.jpg"
                                alt="Sandhya Vijayadas - Founder"
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
                                Sandhya Vijayadas
                            </h2>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                With over 15 years of experience in Hatha and Vinyasa yoga, Sandhya founded Nature Universal Yoga Center with a vision to bring holistic healing to the Dubai community. Her teaching style blends traditional wisdom with modern anatomical understanding, ensuring a safe and transformative practice for all.
                            </p>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--accent-dark)', fontStyle: 'italic', fontWeight: 500 }}>
                                "Yoga is not just about flexibility of the body, but the flexibility of the mind. My mission is to help every student discover their own inner strength and peace."
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default TeamPage;
