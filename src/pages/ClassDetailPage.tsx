import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getClassById } from '../data/yogaClasses';

const ClassDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const yogaClass = id ? getClassById(id) : null;

    if (!yogaClass) {
        return (
            <div style={{ paddingTop: 'var(--header-height)', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textDecoration: 'center' }}>
                    <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: '36px', marginBottom: '20px', color: 'var(--accent-dark)' }}>Class Not Found</h1>
                    <Link to="/classes" style={{ fontFamily: 'var(--font-secondary)', color: 'var(--accent-green)', textDecoration: 'none', fontSize: '18px' }}>
                        ← Back to Body
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="class-detail-page">
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #355E4B 0%, #4A7C59 100%)',
                color: 'white',
                padding: '80px 0',
                position: 'relative'
            }}>
                <div className="container">
                    <Link
                        to="/classes"
                        style={{
                            fontFamily: 'var(--font-secondary)',
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '16px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            marginBottom: '20px',
                            opacity: 0.9,
                            transition: 'opacity 0.3s ease'
                        }}
                        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.opacity = '0.9'}
                    >
                        ← Back to Body
                    </Link>

                    <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: '48px', fontWeight: 700, marginBottom: '20px' }}>
                                {yogaClass.title}
                            </h1>

                            {yogaClass.ageRange && (
                                <p style={{ fontFamily: 'var(--font-secondary)', fontSize: '20px', marginBottom: '20px', opacity: 0.95 }}>
                                    👶 {yogaClass.ageRange}
                                </p>
                            )}

                            <div style={{ fontFamily: 'var(--font-secondary)', display: 'flex', gap: '24px', fontSize: '16px', marginBottom: '30px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span>⏱️</span> {yogaClass.duration}
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span>📊</span> {yogaClass.level}
                                </span>
                            </div>

                            <a
                                href="https://wa.me/971503945490"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontFamily: 'var(--font-secondary)',
                                    backgroundColor: 'white',
                                    color: 'var(--accent-dark)',
                                    padding: '14px 32px',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                                }}
                                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                Book This Class
                            </a>
                        </div>

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
                                src={yogaClass.image}
                                alt={yogaClass.title}
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
                        About This Class
                    </h2>
                    <p style={{ fontFamily: 'var(--font-secondary)', fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '40px' }}>
                        {yogaClass.description}
                    </p>

                    <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '28px', fontWeight: 700, marginBottom: '24px', color: 'var(--accent-dark)' }}>
                        Benefits
                    </h3>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        display: 'grid',
                        gap: '16px'
                    }}>
                        {yogaClass.benefits.map((benefit, index) => (
                            <li
                                key={index}
                                style={{
                                    fontFamily: 'var(--font-secondary)',
                                    fontSize: '17px',
                                    color: 'var(--text-secondary)',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '12px',
                                    padding: '16px 20px',
                                    backgroundColor: 'var(--bg-light-green)',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid var(--accent-green)'
                                }}
                            >
                                <span style={{ color: 'var(--accent-green)', fontSize: '20px', flexShrink: 0 }}>✓</span>
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* What to Expect Section */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: '36px', fontWeight: 700, marginBottom: '24px', color: 'var(--accent-dark)' }}>
                        What to Expect
                    </h2>

                    <div style={{ display: 'grid', gap: '24px' }}>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '24px',
                            borderRadius: '12px',
                            boxShadow: '0 2px 4px rgba(53, 94, 75, 0.05)'
                        }}>
                            <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: 'var(--accent-dark)' }}>
                                👕 What to Bring
                            </h4>
                            <p style={{ fontFamily: 'var(--font-secondary)', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Comfortable clothing, yoga mat (if you have one), water bottle, and an open mind. We provide mats if needed.
                            </p>
                        </div>

                        <div style={{
                            backgroundColor: 'white',
                            padding: '24px',
                            borderRadius: '12px',
                            boxShadow: '0 2px 4px rgba(53, 94, 75, 0.05)'
                        }}>
                            <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: 'var(--accent-dark)' }}>
                                🎯 Class Structure
                            </h4>
                            <p style={{ fontFamily: 'var(--font-secondary)', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Each class begins with centering and breathwork, moves through the main practice, and ends with deep relaxation and meditation.
                            </p>
                        </div>

                        <div style={{
                            backgroundColor: 'white',
                            padding: '24px',
                            borderRadius: '12px',
                            boxShadow: '0 2px 4px rgba(53, 94, 75, 0.05)'
                        }}>
                            <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: 'var(--accent-dark)' }}>
                                💡 First Timer Tips
                            </h4>
                            <p style={{ fontFamily: 'var(--font-secondary)', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Arrive 10 minutes early, inform the instructor of any injuries or concerns, and remember that yoga is a practice, not a performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                background: 'linear-gradient(135deg, #355E4B 0%, #4A7C59 100%)',
                color: 'white',
                padding: '80px 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: '36px', fontWeight: 700, marginBottom: '20px' }}>
                        Ready to Join {yogaClass.title}?
                    </h2>
                    <p style={{ fontFamily: 'var(--font-secondary)', fontSize: '18px', marginBottom: '30px', opacity: 0.95, maxWidth: '600px', margin: '0 auto 30px' }}>
                        Experience the transformative benefits of yoga. Book your spot today and begin your journey to wellness.
                    </p>
                    <a
                        href="https://wa.me/971503945490"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{
                            fontFamily: 'var(--font-secondary)',
                            backgroundColor: 'white',
                            color: 'var(--accent-dark)',
                            padding: '16px 40px',
                            fontSize: '18px',
                            fontWeight: 600,
                            borderRadius: '8px',
                            textDecoration: 'none',
                            display: 'inline-block',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        Book Now on WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ClassDetailPage;
