import React from 'react';
import { useNavigate } from 'react-router-dom';

const MindPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="mind-page">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="page-hero" style={{
                backgroundImage: 'url(/mind-hero-new.jpg)',
                height: '70vh',
                backgroundSize: '100% 100%'
            }}>
                <div className="page-hero-overlay" style={{ backgroundColor: 'rgba(53, 94, 75, 0.4)' }}></div>
                <div className="container page-hero-content">
                    <h1 className="page-hero-title">
                        Mind Practice
                    </h1>
                    <p className="page-hero-quote">
                        "Art of connecting into your consciousness to merge into the super conciousness"
                    </p>
                </div>
            </section>

            {/* Content Overview */}
            < section className="section" style={{ padding: '80px 0' }}>
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
                        <div onClick={() => navigate('/mind/meditation')} style={{ cursor: 'pointer', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', transition: 'transform 0.3s', overflow: 'hidden' }} className="hover-card">
                            <div style={{ height: '240px', overflow: 'hidden' }}>
                                <img src="/meditation-card.png" alt="Meditation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '30px' }}>
                                <h3 style={{ color: 'var(--accent-dark)', marginBottom: '15px' }}>Meditation</h3>
                                <p>Art of connecting into your consciousness to merge into the super conciousness.</p>
                                <span style={{ display: 'inline-block', marginTop: '15px', color: 'var(--accent-green)', fontWeight: 600 }}>Learn More →</span>
                            </div>
                        </div>
                        <div onClick={() => navigate('/mind/breathwork')} style={{ cursor: 'pointer', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', transition: 'transform 0.3s', overflow: 'hidden' }} className="hover-card">
                            <div style={{ height: '240px', overflow: 'hidden' }}>
                                <img src="/breathwork-card.png" alt="Breathwork" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '30px' }}>
                                <h3 style={{ color: 'var(--accent-dark)', marginBottom: '15px' }}>Breathwork</h3>
                                <p>Controlling the timing, duration, and frequency of every breath.</p>
                                <span style={{ display: 'inline-block', marginTop: '15px', color: 'var(--accent-green)', fontWeight: 600 }}>Learn More →</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* CTA Section */}
            < section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #355E4B 0%, #4A7C59 100%)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: '36px', marginBottom: '24px' }}>
                        Ready to Find Inner Peace?
                    </h2>
                    <p style={{ fontFamily: 'var(--font-secondary)', fontSize: '18px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                        Join us for a session and discover the transformative power of mindfulness.
                    </p>
                    <a
                        href="https://wa.me/971503945490"
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
            </section >
        </div >
    );
};

export default MindPage;
