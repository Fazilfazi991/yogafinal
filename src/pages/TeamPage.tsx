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
                                alt="Anya Sharma - Founder"
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
                                Anya Sharma
                            </h2>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                With over 15 years of experience in Hatha and Vinyasa yoga, Anya founded Nature Universal Yoga Center
                                with a vision to bring holistic healing to the Dubai community. Her teaching style blends traditional
                                wisdom with modern anatomical understanding, ensuring a safe and transformative practice for all.
                            </p>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                                "Yoga is not just about flexibility of the body, but the flexibility of the mind. My mission is to help
                                every student discover their own inner strength and peace."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instructors Grid */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: '36px',
                        color: 'var(--accent-dark)',
                        marginBottom: '60px',
                        textAlign: 'center'
                    }}>
                        Our Expert Instructors
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '40px' }}>
                        {[
                            { name: 'Sarah Jenkins', role: 'Vinyasa & Power Yoga', image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80' },
                            { name: 'Michael Chen', role: 'Meditation & Breathwork', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80' },
                            { name: 'Priya Patel', role: 'Hatha & Prenatal Yoga', image: '/priya-patel.png' }
                        ].map((instructor, index) => (
                            <div key={index} style={{
                                backgroundColor: 'white',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease',
                                textAlign: 'center'
                            }}>
                                <div style={{ height: '300px', overflow: 'hidden' }}>
                                    <img
                                        src={instructor.image}
                                        alt={instructor.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{ padding: '24px' }}>
                                    <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '24px', color: 'var(--accent-dark)', marginBottom: '8px' }}>{instructor.name}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>{instructor.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamPage;
