import React, { useEffect } from 'react';

const MeditationPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="meditation-page">
            {/* Hero Section */}
            <section className="page-hero" style={{
                backgroundImage: 'url(/meditation-hero.png)',
                height: '80vh',
                textAlign: 'left'
            }}>
                <div className="page-hero-overlay"></div>
                <div className="container page-hero-content" style={{ textAlign: 'left' }}>
                    <h1 className="page-hero-title" style={{ display: 'none' }}>
                        Meditation
                    </h1>
                    <p className="page-hero-quote" style={{
                        fontSize: '42px',
                        marginLeft: 0,
                        lineHeight: '1.3'
                    }}>
                        “Art of connecting into your consciousness to merge into the super conciousness”
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section" style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: '18px',
                        lineHeight: '1.8',
                        color: 'var(--text-secondary)',
                        marginBottom: '24px'
                    }}>
                        In today’s overstimulated world, we rarely experience silence and at Nature Universal Yoga we believe taking time to meditate can restore our balance, boost our energy and condition our minds to be more adaptive and responsive to the environments in which we now live and work.
                    </p>
                    <p style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: '18px',
                        lineHeight: '1.8',
                        color: 'var(--text-secondary)',
                        marginBottom: '24px'
                    }}>
                        When we meditate, we lower our stress levels, get to know our pain, connect better and improve our focus.
                    </p>
                    <p style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: '18px',
                        lineHeight: '1.8',
                        color: 'var(--text-secondary)',
                        marginBottom: '40px'
                    }}>
                        Mudra Yoga, Yog Nidra, Breathing practices are some of the few techniques we use at Nature Universal Yoga to get into the habit of daily Meditation.
                    </p>

                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <a
                            href="https://wa.me/971503945490"
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

export default MeditationPage;
