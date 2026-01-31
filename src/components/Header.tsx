import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="header" style={{ height: 'var(--header-height)', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-primary)', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <div className="container header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

                {/* 1. Logo Section (Left) */}
                <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-start' }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className="logo">
                            <img src="/logo-new.png" alt="Nature Universal Logo" style={{ height: '100px', width: 'auto' }} />
                        </div>
                    </Link>
                </div>

                {/* 2. Navigation Section (Center) */}
                <nav className="header-nav" style={{ flex: '2', display: 'flex', justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>
                    <Link to="/about" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit', fontSize: '18px' }}>About</Link>
                    <Link to="/mind" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit', fontSize: '18px' }}>Mind</Link>
                    <Link to="/classes" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit', fontSize: '18px' }}>Body</Link>
                    <Link to="/contact" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit', fontSize: '18px' }}>Contact</Link>
                    <Link to="/team" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit', fontSize: '18px' }}>Team</Link>
                </nav>

                {/* 3. Action Section (Right) */}
                <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
                    <a
                        href="https://wa.me/971562050833"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ padding: '12px 24px', fontSize: '16px', textDecoration: 'none', display: 'inline-block' }}
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;

