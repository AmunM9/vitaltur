
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar.jsx';
import ContactSection from '@/components/ContactSection.jsx';
import Footer from '@/components/Footer.jsx';

const ContactoPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Contacto - Vital Tur</title>
                <meta
                    name="description"
                    content="Ponte en contacto con nosotros. Estamos listos para ayudarte a planear tu próxima aventura en el Gualivá."
                />
            </Helmet>
            <div className="min-h-screen bg-white flex flex-col">
                <Navbar />
                <main className="flex-grow pt-20">
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default ContactoPage;
