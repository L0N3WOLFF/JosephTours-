
/**
 * @file ReturnPolicy.tsx
 * @description Componente que muestra las políticas de devolución y cancelación del servicio.
 * Esta sección es colapsable para mejorar la limpieza de la interfaz.
 * Por defecto está cerrada y se puede expandir haciendo clic en el título.
 * El texto se carga dinámicamente según el idioma seleccionado.
 */
import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';

const ReturnPolicy: React.FC = () => {
  const { t } = useApp();
  // Estado para controlar si la sección está abierta o cerrada.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="return-policy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Cabecera clickeable para expandir/colapsar el contenido.
              Se han añadido atributos de accesibilidad (role, tabIndex, aria-expanded)
              para que sea operable con teclado y sea comprensible por lectores de pantalla.
           */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(!isOpen); }}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            aria-controls="policy-content"
            className="flex justify-between items-center cursor-pointer w-full text-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
              {t('policy_title')}
            </h2>
            {/* El ícono de la flecha rota según el estado `isOpen` */}
            <span className={`text-cyan-800 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>

          {/* Contenido colapsable. 
              La transición de altura se logra cambiando `max-h` y `mt`.
           */}
          <div
            id="policy-content"
            className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1500px] mt-12' : 'max-h-0 mt-0'}`}
          >
            <div className="text-gray-700 space-y-8 text-lg">
              <p>
                {t('policy_intro')}
              </p>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-cyan-700 pl-4">
                  1. {t('policy_cancel_title')}
                </h3>
                <ul className="list-disc list-inside space-y-3 pl-4">
                  <li>
                    {t('policy_cancel_rule1')}
                  </li>
                  <li>
                    {t('policy_cancel_rule2')}
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-cyan-700 pl-4">
                  2. {t('policy_norefund_title')}
                </h3>
                <p className="mb-4 pl-4">
                  {t('policy_norefund_intro')}
                </p>
                <ul className="list-disc list-inside space-y-3 pl-4">
                  <li>
                    {t('policy_norefund_li1')}
                  </li>
                  <li>
                    {t('policy_norefund_li2')}
                  </li>
                  <li>
                    {t('policy_norefund_li3')}
                  </li>
                  <li>
                    {t('policy_norefund_li4')}
                  </li>
                  <li>
                    {t('policy_norefund_li5')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnPolicy;
