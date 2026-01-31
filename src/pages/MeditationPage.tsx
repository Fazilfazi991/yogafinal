import React, { useEffect } from 'react';

const MeditationPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="meditation-page">
            {/* Hero Section */}
            <section style={{
                backgroundImage: 'url(/meditation-hero.png)',
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
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Darker overlay for text contrast
                    zIndex: 1
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: '48px',
                        marginBottom: '24px',
                        fontWeight: 700,
                        display: 'none' // Hide main title in hero if reference only shows quote, but good for SEO. Reference has small logo top left. I will keep it but maybe smaller or hidden if I strictly follow "image + text content like this" where "this" is the quote. The user said "use image + text cintent like this", implying the layout. I will keep title but visually prioritize quote. 
                    }}>
                        Meditation
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

export default MeditationPage;
