import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero" style={{
            height: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundImage: 'url(/hero-background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            padding: '0 20px'
        }}>
            {/* Dark overlay for better text readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                zIndex: 1
            }}></div>
            <div className="container animate-fade-up" style={{ position: 'relative', zIndex: 2 }}>
                <h1 style={{ marginBottom: '1rem', color: '#FFFFFF', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Nature Universal Yoga Center</h1>
                <p style={{ fontSize: '20px', marginBottom: '2rem', maxWidth: '600px', marginInline: 'auto', color: '#FFFFFF', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                    Dubai's Premier Holistic Yoga Sanctuary. Your Gateway to Mind, Body & Soul Harmony.
                </p>
                <div className="hero-buttons">
                    <a href="https://wa.me/971562050833" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: 'none' }}>Claim 2 Trial Classes - AED 108</a>
                    <a href="https://wa.me/971562050833" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textDecoration: 'none' }}>View Classes</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
