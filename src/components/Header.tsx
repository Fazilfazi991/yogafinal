import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="header" style={{ height: 'var(--header-height)', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-primary)', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <div className="container header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="logo">
                        <img src="/logo-new.png" alt="Nature Universal Logo" style={{ height: '50px', width: 'auto' }} />
                    </div>
                </Link>

                <nav className="header-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/about" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit' }}>About</Link>
                    <Link to="/mind" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit' }}>Mind</Link>
                    <Link to="/classes" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit' }}>Body</Link>
                    <Link to="/contact" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit' }}>Contact</Link>
                    <Link to="/team" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit' }}>Team</Link>

                    <a
                        href="https://wa.me/971562050833"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ padding: '8px 16px', fontSize: '14px', textDecoration: 'none', display: 'inline-block' }}
                    >
                        Book Now
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;

