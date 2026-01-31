import React from 'react';
import { useNavigate } from 'react-router-dom';

const MindPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="mind-page">
            {/* Hero Section */}
            {/* Hero Section */}
            <section style={{
                backgroundImage: 'url(/mind-hero.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '80px 0',
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
                    backgroundColor: 'rgba(53, 94, 75, 0.7)', // Greenish overlay for consistency
                    zIndex: 1
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: '56px',
                        marginBottom: '24px',
                        fontWeight: 700
                    }}>
                        Mind Practices
                    </h1>
                    <p style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: '18px',
                        maxWidth: '800px',
                        margin: '0 auto 40px',
                        opacity: 0.95
                    }}>
                        Cultivate inner peace and mental clarity through our guided meditation and breathwork sessions.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <button
                            onClick={() => navigate('/mind/meditation')}
                            className="btn"
                            style={{
                                minWidth: '200px',
                                backgroundColor: 'white',
                                color: 'var(--accent-dark)',
                                border: 'none'
                            }}
                        >
                            Meditation
                        </button>
                        <button
                            onClick={() => navigate('/mind/breathwork')}
                            className="btn"
                            style={{
                                minWidth: '200px',
                                backgroundColor: 'transparent',
                                color: 'white',
                                border: '2px solid white'
                            }}
                        >
                            Breathwork
                        </button>
                    </div>
                </div>
            </section>

            {/* Content Overview */}
            <section className="section" style={{ padding: '80px 0' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: '20px',
                        lineHeight: '1.8',
                        color: 'var(--text-secondary)',
                        marginBottom: '40px'
                    }}>
                        At Nature Universal Yoga, we believe that true wellness encompasses not just the body, but the mind and soul as well. Our specialized practices are designed to help you reconnect with your inner self.
                    </p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px',
                        marginTop: '60px'
                    }}>
                        <div onClick={() => navigate('/mind/meditation')} style={{ cursor: 'pointer', padding: '30px', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', transition: 'transform 0.3s' }} className="hover-card">
                            <h3 style={{ color: 'var(--accent-dark)', marginBottom: '15px' }}>Meditation</h3>
                            <p>Art of connecting into your consciousness to merge into the super conciousness.</p>
                            <span style={{ display: 'inline-block', marginTop: '15px', color: 'var(--accent-green)', fontWeight: 600 }}>Learn More →</span>
                        </div>
                        <div onClick={() => navigate('/mind/breathwork')} style={{ cursor: 'pointer', padding: '30px', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', transition: 'transform 0.3s' }} className="hover-card">
                            <h3 style={{ color: 'var(--accent-dark)', marginBottom: '15px' }}>Breathwork</h3>
                            <p>Controlling the timing, duration, and frequency of every breath.</p>
                            <span style={{ display: 'inline-block', marginTop: '15px', color: 'var(--accent-green)', fontWeight: 600 }}>Learn More →</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #355E4B 0%, #4A7C59 100%)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: '36px', marginBottom: '24px' }}>
                        Ready to Find Inner Peace?
                    </h2>
                    <p style={{ fontFamily: 'var(--font-secondary)', fontSize: '18px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                        Join us for a session and discover the transformative power of mindfulness.
                    </p>
                    <a
                        href="https://wa.me/971562050833"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{
                            backgroundColor: 'white',
                            color: 'var(--accent-dark)',
                            padding: '16px 32px',
                            borderRadius: '30px',
                            textDecoration: 'none',
                            fontWeight: 700,
                            display: 'inline-block',
                            transition: 'transform 0.3s ease',
                            fontSize: '18px'
                        }}
                    >
                        Book a Session
                    </a>
                </div>
            </section>
        </div>
    );
};

export default MindPage;
