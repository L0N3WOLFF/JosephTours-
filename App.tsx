
/**
 * @file App.tsx
 * @description Componente raíz de la aplicación.
 * Este componente ensambla todas las secciones principales de la página web
 * (cabecera, hero, secciones de contenido, pie de página, etc.).
 * Envuelve toda la aplicación en `AppProvider` para proveer un estado global,
 * como el idioma y el estado del scroll, a todos los componentes hijos.
 */
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import TripPlanner from './components/TripPlanner';
import TravelInfo from './components/TravelInfo';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReturnPolicy from './components/ReturnPolicy';
import { AppProvider } from './contexts/AppContext';

const App: React.FC = () => {
  return (
    // AppProvider envuelve la aplicación para que todos los componentes
    // puedan acceder al contexto global.
    <AppProvider>
      <div className="bg-white text-gray-800">
        <Header />
        <main>
          <Hero />
          <AboutUs />
          <TripPlanner />
          <Gallery />
          <TravelInfo />
          <ReturnPolicy />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
};

export default App;