import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would handle submission here
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #355E4B 0%, #4A7C59 100%)',
                padding: '80px 0',
                textAlign: 'center',
                color: 'white'
            }}>
                <div className="container">
                    <h1 style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: '48px',
                        marginBottom: '24px'
                    }}>
                        Contact Us
                    </h1>
                    <p style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: '18px',
                        maxWidth: '600px',
                        margin: '0 auto',
                        opacity: 0.95
                    }}>
                        We'd love to hear from you. Reach out for bookings, inquiries, or just to say hello.
                    </p>
                </div>
            </section>

            <section className="section" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px' }}>

                        {/* Contact Info */}
                        <div>
                            <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: '32px', marginBottom: '30px', color: 'var(--accent-dark)' }}>
                                Get in Touch
                            </h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--bg-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                                        📍
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--text-primary)' }}>Visit Us</h3>
                                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                            F-29, The Market Mall<br />
                                            Green Community, Dubai Investment Park-1<br />
                                            Dubai, UAE
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--bg-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                                        📱
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--text-primary)' }}>Call or WhatsApp</h3>
                                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                            <a href="https://wa.me/971562050833" style={{ color: 'var(--accent-green)', textDecoration: 'none' }}>+971 56 205 0833</a>
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--bg-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                                        ✉️
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--text-primary)' }}>Email Us</h3>
                                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                            Future@universalyoga.com
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--bg-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                                        🕒
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--text-primary)' }}>Opening Hours</h3>
                                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                            Daily: 7:00 AM - 10:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
                            <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: '32px', marginBottom: '30px', color: 'var(--accent-dark)' }}>
                                Send Message
                            </h2>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-primary)', fontWeight: 600 }}>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-primary)', fontWeight: 600 }}>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-primary)', fontWeight: 600 }}>Subject</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}
                                    >
                                        <option value="">Select a Subject</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Class Booking">Class Booking</option>
                                        <option value="Private Session">Private Session</option>
                                        <option value="Feedback">Feedback</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-primary)', fontWeight: 600 }}>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '18px', marginTop: '10px' }}>
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
