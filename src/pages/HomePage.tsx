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
            <About />
            <Offerings />
            <QuoteSection />
            <ProductsSection />
            <Testimonials />
            <Promo />
        </>
    );
};

export default HomePage;
