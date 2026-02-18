
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar.jsx';
import AccommodationsGrid from '@/components/AccommodationsGrid.jsx';
import Footer from '@/components/Footer.jsx';

const HospedajesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Hospedajes - Vital Tur</title>
        <meta
          name="description"
          content="Descubre los mejores hospedajes. Fincas, hoteles, glampings y cabañas verificadas para tu descanso."
        />
      </Helmet>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <AccommodationsGrid />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HospedajesPage;
