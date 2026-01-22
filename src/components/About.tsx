import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--bg-primary)', padding: '4rem 0' }}>
            <div ref={ref} className={`container ${isVisible ? 'animate-fade-up' : ''}`} style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem', opacity: isVisible ? 1 : 0 }}>

                {/* Row 1: Text Left, Image Right */}
                <div className="about-grid">
                    <div className="about-text" style={{ textAlign: 'left' }}>
                        <h2 style={{
                            lineHeight: '1.2',
                            color: 'var(--text-primary)',
                            marginBottom: '1rem'
                        }}>
                            Welcome to Nature Universal Yoga Center,<br />
                            <span style={{ fontSize: '1.5rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>
                                Dubai’s exquisite new holistic yoga and wellbeing community
                            </span>
                        </h2>
                    </div>
                    <div>
                        <img
                            src="/yoga-pose-1.png"
                            alt="Yoga pose 1"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
                            }}
                        />
                    </div>
                </div>

                {/* Row 2: Image Left, Text Right */}
                <div className="about-grid" style={{ marginBottom: 0 }}>
                    <div style={{ order: 1 }}> {/* On mobile this might need media query to swap order if we want image first, but auto-fit usually just wraps. 'order' needs flex/grid. With auto-fit minmax, the second child usually wraps below. To enforce "Image Top" on mobile for this row, we typically use flex-direction column-reverse or similar. For now, let's keep natural DOM order or simple grid. */}
                        <img
                            src="/yoga-pose-2.png"
                            alt="Yoga pose 2"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
                            }}
                        />
                    </div>
                    <div style={{ textAlign: 'left', order: 2 }}> {/* Logic: if grid wraps, this is 2nd. */}
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            Nature Universal Yoga Center believes every body holds natural wisdom to self-heal.
                            Classical sessions ease beginners into mindful practice. Advanced Hatha Vinyasa flows
                            build strength and awareness for deeper journeys.
                            <br /><br />
                            It’s yoga’s job to activate that tendency to build strength, awareness and harmony in Mind Body & Soul.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
