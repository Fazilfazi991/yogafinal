import React from 'react';
import { Link } from 'react-router-dom';
import { yogaClasses, getCategoryTitle } from '../data/yogaClasses';

const ClassesPage: React.FC = () => {
    const categories: ('ladies' | 'children' | 'special')[] = ['ladies', 'children', 'special'];

    return (
        <div className="classes-page">
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #355E4B 0%, #4A7C59 100%)',
                color: 'white',
                padding: '80px 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: '48px', fontWeight: 700, marginBottom: '20px' }}>Our Yoga Classes</h1>
                    <p style={{ fontFamily: 'var(--font-secondary)', fontSize: '20px', maxWidth: '700px', margin: '0 auto', opacity: 0.95 }}>
                        Discover the perfect yoga practice for your body, mind, and soul. From gentle beginnings to advanced flows, we have something for everyone.
                    </p>
                </div>
            </section>

            {/* Classes by Category */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    {categories.map((category, categoryIndex) => {
                        const classesInCategory = yogaClasses.filter(c => c.category === category);

                        return (
                            <div key={category} style={{ marginBottom: categoryIndex < categories.length - 1 ? '80px' : '0' }}>
                                <h2 style={{
                                    fontFamily: 'var(--font-primary)',
                                    fontSize: '36px',
                                    fontWeight: 700,
                                    marginBottom: '40px',
                                    color: 'var(--accent-dark)',
                                    textAlign: 'center'
                                }}>
                                    {getCategoryTitle(category)}
                                </h2>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                                    gap: '30px'
                                }}>
                                    {classesInCategory.map((yogaClass) => (
                                        <Link
                                            key={yogaClass.id}
                                            to={`/classes/${yogaClass.id}`}
                                            style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                backgroundColor: 'white',
                                                borderRadius: '12px',
                                                overflow: 'hidden',
                                                boxShadow: '0 4px 6px rgba(53, 94, 75, 0.1)',
                                                transition: 'all 0.3s ease',
                                            }}
                                            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                                e.currentTarget.style.transform = 'translateY(-8px)';
                                                e.currentTarget.style.boxShadow = '0 12px 24px rgba(53, 94, 75, 0.15)';
                                            }}
                                            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(53, 94, 75, 0.1)';
                                            }}
                                        >
                                            <div style={{
                                                height: '200px',
                                                background: 'linear-gradient(135deg, #355E4B 0%, #4A7C59 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                overflow: 'hidden',
                                                position: 'relative'
                                            }}>
                                                <img
                                                    src={yogaClass.image}
                                                    alt={yogaClass.title}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        opacity: 0.9
                                                    }}
                                                />
                                            </div>

                                            <div style={{ padding: '24px' }}>
                                                <h3 style={{
                                                    fontFamily: 'var(--font-primary)',
                                                    fontSize: '24px',
                                                    fontWeight: 600,
                                                    marginBottom: '8px',
                                                    color: 'var(--accent-dark)'
                                                }}>
                                                    {yogaClass.title}
                                                </h3>

                                                {yogaClass.ageRange && (
                                                    <p style={{
                                                        fontFamily: 'var(--font-secondary)',
                                                        fontSize: '14px',
                                                        color: 'var(--accent-green)',
                                                        fontWeight: 600,
                                                        marginBottom: '12px'
                                                    }}>
                                                        {yogaClass.ageRange}
                                                    </p>
                                                )}

                                                <p style={{
                                                    fontFamily: 'var(--font-secondary)',
                                                    fontSize: '15px',
                                                    color: 'var(--text-secondary)',
                                                    marginBottom: '16px',
                                                    lineHeight: '1.6'
                                                }}>
                                                    {yogaClass.description.substring(0, 120)}...
                                                </p>

                                                <div style={{
                                                    fontFamily: 'var(--font-secondary)',
                                                    display: 'flex',
                                                    gap: '16px',
                                                    fontSize: '13px',
                                                    color: 'var(--text-secondary)',
                                                    marginBottom: '16px'
                                                }}>
                                                    <span>⏱️ {yogaClass.duration}</span>
                                                    <span>📊 {yogaClass.level}</span>
                                                </div>

                                                <button style={{
                                                    fontFamily: 'var(--font-secondary)',
                                                    backgroundColor: 'var(--accent-green)',
                                                    color: 'white',
                                                    border: 'none',
                                                    padding: '10px 20px',
                                                    borderRadius: '6px',
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    cursor: 'pointer',
                                                    width: '100%',
                                                    transition: 'background-color 0.3s ease'
                                                }}
                                                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = '#355E4B'}
                                                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = '#4A7C59'}
                                                >
                                                    Learn More →
                                                </button>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                background: 'linear-gradient(135deg, #355E4B 0%, #4A7C59 100%)',
                color: 'white',
                padding: '60px 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: '36px', fontWeight: 700, marginBottom: '20px' }}>
                        Ready to Start Your Journey?
                    </h2>
                    <p style={{ fontFamily: 'var(--font-secondary)', fontSize: '18px', marginBottom: '30px', opacity: 0.95 }}>
                        Book your first class today and experience the transformative power of yoga
                    </p>
                    <a
                        href="https://wa.me/971562050833"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
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
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Book Now on WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ClassesPage;
