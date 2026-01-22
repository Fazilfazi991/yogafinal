import React from 'react';

const MindPage: React.FC = () => {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                            onClick={() => scrollToSection('meditation')}
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
                            onClick={() => scrollToSection('breathwork')}
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

            {/* Meditation Section */}
            <section id="meditation" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '900px', margin: '0 auto 60px' }}>
                        <h3 style={{
                            fontFamily: 'var(--font-primary)',
                            fontSize: '32px',
                            fontStyle: 'italic',
                            color: 'var(--accent-dark)',
                            marginBottom: '40px',
                            fontWeight: 400
                        }}>
                            "Art of connecting into your consciousness to merge into the super conciousness"
                        </h3>

                        <h2 style={{
                            fontFamily: 'var(--font-primary)',
                            fontSize: '42px',
                            color: 'var(--accent-dark)',
                            marginBottom: '24px',
                            fontWeight: 700
                        }}>
                            Meditation
                        </h2>

                        <p style={{
                            fontFamily: 'var(--font-secondary)',
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: 'var(--text-secondary)',
                            marginBottom: '20px'
                        }}>
                            In today’s overstimulated world, we rarely experience silence and at Nature Universal Yoga we believe taking time to meditate can restore our balance, boost our energy and condition our minds to be more adaptive and responsive to the environments in which we now live and work.
                        </p>
                        <p style={{
                            fontFamily: 'var(--font-secondary)',
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: 'var(--text-secondary)'
                        }}>
                            When we meditate, we lower our stress levels, get to know our pain, connect better and improve our focus.
                        </p>
                    </div>

                    {/* Decorative Separator */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '80px',
                        opacity: 0.6
                    }}>
                        <div style={{ height: '1px', width: '100px', backgroundColor: 'var(--accent-dark)' }}></div>
                        <span style={{ margin: '0 20px', color: 'var(--accent-dark)', fontSize: '24px' }}>❋</span>
                        <div style={{ height: '1px', width: '100px', backgroundColor: 'var(--accent-dark)' }}></div>
                    </div>
                </div>
            </section>

            {/* Breathwork Section */}
            <section id="breathwork" style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '900px', margin: '0 auto 60px' }}>
                        <h3 style={{
                            fontFamily: 'var(--font-primary)',
                            fontSize: '32px',
                            fontStyle: 'italic',
                            color: 'var(--accent-dark)',
                            marginBottom: '40px',
                            fontWeight: 400
                        }}>
                            "Controlling the timing, duration, and frequency of every breath"
                        </h3>

                        <h2 style={{
                            fontFamily: 'var(--font-primary)',
                            fontSize: '42px',
                            color: 'var(--accent-dark)',
                            marginBottom: '24px',
                            fontWeight: 700
                        }}>
                            Pranayama (Breathwork)
                        </h2>

                        <p style={{
                            fontFamily: 'var(--font-secondary)',
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: 'var(--text-secondary)',
                            marginBottom: '20px'
                        }}>
                            Pranayama is the ancient practice of controlling your breath. It involves the regulation of your breath to enhance the flow of prana, which is often described as vital life force or energy throughout the body.
                        </p>
                        <p style={{
                            fontFamily: 'var(--font-secondary)',
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: 'var(--text-secondary)'
                        }}>
                            In Pranayama, you control the timing, duration and frequency of every breath and hold. This can have a profound impact on both your physical and mental well-being.
                        </p>
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
