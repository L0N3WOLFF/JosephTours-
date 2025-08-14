
/**
 * @file Footer.tsx
 * @description Componente del pie de página.
 * Muestra el aviso de derechos de autor y un pequeño crédito de diseño.
 */
import React from 'react';
import { useApp } from '../contexts/AppContext';

const Footer = () => {
  // Hook para acceder al contexto global (traducciones).
  const { t } = useApp();

  /**
   * Gestiona el clic en los enlaces del pie de página para realizar un desplazamiento suave.
   * @param e Evento de clic del ratón.
   */
  const handleScrollClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId) return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        const headerElement = document.querySelector('header');
        const headerHeight = headerElement ? headerElement.offsetHeight : 80; // Altura por defecto si no se encuentra la cabecera
        const elementPosition = targetElement.getBoundingClientRect().top;
        const targetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
    }
  };

  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto px-6 text-center">
        {/* Enlace a las políticas */}
        <div className="mb-4">
          <a href="#return-policy" onClick={handleScrollClick} className="hover:text-white transition-colors cursor-pointer">
            {t('footer_policy_link')}
          </a>
        </div>
        {/* Información de copyright y créditos */}
        <p>&copy; {new Date().getFullYear()} {t('footer_copyright')}</p>
        <p className="text-sm mt-1">{t('footer_design_credit')}</p>
      </div>
    </footer>
  );
};

export default Footer;