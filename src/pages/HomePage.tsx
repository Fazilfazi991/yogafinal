import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Offerings from '../components/Offerings';
import QuoteSection from '../components/QuoteSection';
import ProductsSection from '../components/ProductsSection';
import Testimonials from '../components/Testimonials';
import Promo from '../components/Promo';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <div className="animate-on-scroll"><About /></div>
            <div className="animate-on-scroll"><Offerings /></div>
            <div className="animate-on-scroll"><QuoteSection /></div>
            <div className="animate-on-scroll"><ProductsSection /></div>
            <div className="animate-on-scroll"><Testimonials /></div>
            <div className="animate-on-scroll"><Promo /></div>
        </>
    );
};

export default HomePage;
