
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar.jsx';
import ToursGrid from '@/components/ToursGrid.jsx';
import Footer from '@/components/Footer.jsx';

const PlanesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Planes Turísticos - Vital Tur</title>
        <meta
          name="description"
          content="Explora nuestros planes turísticos. Aventuras, caminatas, rutas cafeteras y experiencias culturales únicas."
        />
      </Helmet>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <ToursGrid />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PlanesPage;
