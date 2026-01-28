import React from 'react';

const TeamPage: React.FC = () => {
    return (
        <div className="team-page">
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
                        Our Team
                    </h1>
                    <p style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: '18px',
                        maxWidth: '600px',
                        margin: '0 auto',
                        opacity: 0.95
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
                                Nature Universal Yoga Centre is a wellness space founded by Sandhya Vijayadas, created from a deep personal journey in holistic healing and wellness. As a qualified Reiki Master and a practitioner trained in multiple therapeutic modalities, Sandhya’s passion for conscious living and inner balance led to the birth of this center.
                            </p>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                Nature Universal Yoga Centre believes in the power of community, connection, and conscious growth. This space is dedicated to supporting and encouraging wellness practitioners, instructors, and individuals who seek a deeper connection with themselves through yoga and holistic practices.
                            </p>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                                Nature Universal Yoga Centre would love to be a part of your growth journey.
                                We invite you to come explore, experience, and evolve with us.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default TeamPage;
