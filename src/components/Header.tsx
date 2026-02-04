import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="header" style={{ height: 'var(--header-height)', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-primary)', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <div className="container header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', position: 'relative' }}>

                {/* Logo Section (Left) */}
                <Link to="/" style={{ textDecoration: 'none', zIndex: 102 }}>
                    <div className="logo">
                        <img src="/logo-new.png" alt="Nature Universal Logo" style={{ height: '180px', width: 'auto' }} />
                    </div>
                </Link>

                {/* Mobile Menu Toggle (Visible only on mobile via CSS) */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        display: 'none', // Overridden by CSS media query
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        zIndex: 102,
                        padding: '10px'
                    }}
                    aria-label="Toggle Menu"
                >
                    <div style={{ width: '30px', height: '3px', backgroundColor: '#333', marginBottom: '5px', transition: '0.3s', transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></div>
                    <div style={{ width: '30px', height: '3px', backgroundColor: '#333', marginBottom: '5px', opacity: isMenuOpen ? 0 : 1, transition: '0.3s' }}></div>
                    <div style={{ width: '30px', height: '3px', backgroundColor: '#333', transition: '0.3s', transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></div>
                </button>

                {/* Navigation & Action Section */}
                <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`} style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit', fontSize: '18px' }}>Home</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit', fontSize: '18px' }}>About</Link>
                    <Link to="/mind" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit', fontSize: '18px' }}>Mind</Link>
                    <Link to="/classes" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit', fontSize: '18px' }}>Body</Link>

                    <Link to="/contact" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit', fontSize: '18px' }}>Contact</Link>

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

export default Header;
