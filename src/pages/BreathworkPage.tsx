import React, { useEffect } from 'react';

const BreathworkPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="breathwork-page">
            {/* Hero Section */}
            <section style={{
                backgroundImage: 'url(/breathwork-hero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80vh',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'left',
                color: 'white',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 1
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: '48px',
                        marginBottom: '24px',
                        fontWeight: 700,
                        display: 'none'
                    }}>
                        Pranayama (Breathwork)
                    </h1>
                    <p style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: '42px',
                        fontStyle: 'italic',
                        maxWidth: '800px',
                        lineHeight: '1.3',
                        opacity: 1,
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}>
                        “Controlling the timing, duration, and frequency of every breath”
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section" style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: '36px',
                        color: 'var(--accent-dark)',
                        marginBottom: '30px',
                        textAlign: 'center'
                    }}>
                        Pranayama-Breathe
                    </h2>

                    <p style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: '18px',
                        lineHeight: '1.8',
                        color: 'var(--text-secondary)',
                        marginBottom: '24px'
                    }}>
                        Pranayama is the ancient practice of controlling your breath. It involves the regulation of your breath to enhance the flow of prana, which is often described as vital life force or energy throughout the body.
                    </p>
                    <p style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: '18px',
                        lineHeight: '1.8',
                        color: 'var(--text-secondary)',
                        marginBottom: '24px'
                    }}>
                        In Pranayama, you control the timing, duration and frequency of every breath and hold. This can have a profound impact on both your physical and mental well-being. The goal of pranayama is to connect your body and mind. It also supplies your body with oxygen while removing toxins. In this way it can provide healing benefits.
                    </p>
                    <p style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: '18px',
                        lineHeight: '1.8',
                        color: 'var(--text-secondary)',
                        marginBottom: '24px'
                    }}>
                        Different pranayama techniques can be used to calm the mind, energise the body, balance emotions and improve respiratory health. This practice is an integral part of traditional yoga and is often incorporated into various yoga styles to complement postures and meditation.
                    </p>
                    <p style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: '18px',
                        lineHeight: '1.8',
                        color: 'var(--text-secondary)',
                        marginBottom: '40px',
                        fontWeight: 600,
                        fontStyle: 'italic'
                    }}>
                        None of our yoga practices is complete without Pranayama and our advice is to ensure that it is performed daily.
                    </p>

                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <a
                            href="https://wa.me/971562050833"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Book a Session
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BreathworkPage;
