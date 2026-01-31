import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPracticeById } from '../data/mindPractices';

const MindPracticeDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const practice = getPracticeById(id || '');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!practice) {
        return (
            <div style={{ paddingTop: 'var(--header-height)', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textDecoration: 'center' }}>
                    <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: '36px', marginBottom: '20px', color: 'var(--accent-dark)' }}>Practice Not Found</h1>
                    <Link to="/mind" style={{ fontFamily: 'var(--font-secondary)', color: 'var(--accent-green)', textDecoration: 'none', fontSize: '18px' }}>
                        ← Back to Mind
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="mind-detail-page">
            {/* Breadcrumb */}
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '20px 0' }}>
                <div className="container">
                    <Link to="/mind" style={{
                        fontFamily: 'var(--font-secondary)',
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        ← Back to Mind
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #355E4B 0%, #4A7C59 100%)',
                padding: '80px 0',
                color: 'white',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: 600,
                            marginBottom: '20px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>
                            {practice.category}
                        </span>
                        <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: '48px', marginBottom: '20px', lineHeight: '1.2' }}>
                            {practice.title}
                        </h1>
                        <div style={{ display: 'flex', gap: '30px', marginBottom: '40px', fontSize: '18px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span>⏱️</span> {practice.duration}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span>📊</span> {practice.level}
                            </div>
                        </div>
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
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                            }}
                        >
                            Book This Session
                        </a>
                    </div>

                    <div style={{ flex: '0 0 auto' }}>
                        <div style={{
                            width: '350px',
                            height: '350px',
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(10px)',
                            border: '2px solid rgba(255,255,255,0.2)',
                            overflow: 'hidden'
                        }}>
                            <img
                                src={practice.image}
                                alt={practice.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '18px'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: '36px', fontWeight: 700, marginBottom: '24px', color: 'var(--accent-dark)' }}>
                        About This Practice
                    </h2>
                    <p style={{ fontFamily: 'var(--font-secondary)', fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '40px' }}>
                        {practice.description}
                    </p>

                    <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '28px', fontWeight: 700, marginBottom: '24px', color: 'var(--accent-dark)' }}>
                        Benefits
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '60px' }}>
                        {practice.benefits.map((benefit, index) => (
                            <li key={index} style={{
                                fontFamily: 'var(--font-secondary)',
                                fontSize: '16px',
                                color: 'var(--text-secondary)',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '15px',
                                padding: '15px',
                                backgroundColor: 'var(--bg-secondary)',
                                borderRadius: '10px'
                            }}>
                                <span style={{ color: 'var(--accent-green)', fontSize: '20px' }}>✓</span>
                                {benefit}
                            </li>
                        ))}
                    </ul>

                    {/* What to Expect */}
                    <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '28px', fontWeight: 700, marginBottom: '30px', color: 'var(--accent-dark)' }}>
                        What to Expect
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        <div>
                            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '15px', color: 'var(--accent-dark)' }}>What to Wear</h4>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Comfortable, loose-fitting clothing that allows you to breathe freely and sit comfortably.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '15px', color: 'var(--accent-dark)' }}>Environment</h4>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                A quiet, peaceful space with dim lighting and comfortable cushions or mats provided.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '15px', color: 'var(--accent-dark)' }}>Guidance</h4>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Full guidance provided throughout the session, suitable for beginners and experienced practitioners alike.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: '32px', marginBottom: '20px', color: 'var(--accent-dark)' }}>
                        Experience Inner Peace
                    </h2>
                    <p style={{ marginBottom: '30px', color: 'var(--text-secondary)', fontSize: '18px' }}>
                        Book your session today and start your journey to mindfulness.
                    </p>
                    <a
                        href="https://wa.me/971503945490"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ padding: '16px 40px', fontSize: '18px' }}
                    >
                        Book via WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
};

export default MindPracticeDetailPage;
