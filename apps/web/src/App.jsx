import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import ExperienceSlider from '@/components/ExperienceSlider.jsx';
import Footer from '@/components/Footer.jsx';
import HospedajesPage from '@/components/HospedajesPage.jsx';
import PlanesPage from '@/components/PlanesPage.jsx';
import ContactoPage from '@/components/ContactoPage.jsx';
import { Toaster } from '@/components/ui/toaster.jsx';

const HomePage = () => (
  <>
    <Navbar />
    <HeroSection />
    <ExperienceSlider />
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Vital Tur - Descubre el Gualivá | Hospedajes y Planes Turísticos</title>
        <meta
          name="description"
          content="Explora experiencias únicas con Vital Tur. Encuentra hospedajes auténticos, planes turísticos increíbles y descubre la magia de la naturaleza, cultura y aventura en Cundinamarca."
        />
      </Helmet>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hospedajes" element={<HospedajesPage />} />
        <Route path="/hospedajes/:id" element={<HospedajesPage />} />
        <Route path="/planes" element={<PlanesPage />} />
        <Route path="/planes/:id" element={<PlanesPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>

      <Toaster />
    </BrowserRouter>
  );
}

export default App;
