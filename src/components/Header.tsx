import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="header" style={{ height: 'var(--header-height)', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-primary)', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <div className="container header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

                {/* Logo Section (Left) */}
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="logo">
                        <img src="/logo-new.png" alt="Nature Universal Logo" style={{ height: '100px', width: 'auto' }} />
                    </div>
                </Link>

                {/* Navigation & Action Section (Right Aligned) */}
                <nav className="header-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit', fontSize: '18px' }}>Home</Link>
                    <Link to="/about" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit', fontSize: '18px' }}>About</Link>
                    <Link to="/mind" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit', fontSize: '18px' }}>Mind</Link>
                    <Link to="/classes" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit', fontSize: '18px' }}>Body</Link>
                    <Link to="/team" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit', fontSize: '18px' }}>Team</Link>
                    <Link to="/contact" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit', fontSize: '18px' }}>Contact</Link>

                    <a
                        href="https://wa.me/971503945490"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ padding: '12px 24px', fontSize: '16px', textDecoration: 'none', display: 'inline-block', marginLeft: '1rem' }}
                    >
                        Book Now
                    </a>
                </nav>
            </div>
        </header>
    );
};


