
/**
 * @file TravelInfo.tsx
 * @description Componente que muestra la Información General del Viaje.
 * Esta sección es colapsable para mejorar la limpieza de la interfaz.
 * Por defecto está cerrada y se puede expandir haciendo clic en el título.
 * El texto se carga dinámicamente según el idioma seleccionado.
 */
import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';

const TravelInfo: React.FC = () => {
  const { t } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="travel-info" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(!isOpen); }}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            aria-controls="travel-info-content"
            className="flex justify-between items-center cursor-pointer w-full text-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">
              {t('travel_info_title')}
            </h2>
            <span className={`text-cyan-800 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>

          <div
            id="travel-info-content"
            className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2500px] mt-12' : 'max-h-0 mt-0'}`}
          >
            <div className="text-gray-700 space-y-8 text-lg">
              
              {/* What to bring */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-cyan-700 pl-4">
                  {t('travel_info_what_to_bring_title')}
                </h3>
                <ul className="list-disc list-inside space-y-3 pl-4">
                  <li><strong>{t('travel_info_id_title')}</strong> {t('travel_info_id_text')}
                    <ul className="list-[circle] list-inside pl-6 mt-2 space-y-1">
                      <li>{t('travel_info_id_panamanians')}</li>
                      <li>{t('travel_info_id_foreigners')}</li>
                    </ul>
                  </li>
                  <li><strong>{t('travel_info_clothing_title')}</strong> {t('travel_info_clothing_text')}</li>
                  <li><strong>{t('travel_info_cash_title')}</strong> {t('travel_info_cash_text')}</li>
                  <li><strong>{t('travel_info_items_title')}</strong> {t('travel_info_items_text')}</li>
                  <li><strong>{t('travel_info_snorkel_title')}</strong> {t('travel_info_snorkel_text')}</li>
                </ul>
              </div>

              {/* Itinerary and Logistics */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-cyan-700 pl-4">
                  {t('travel_info_itinerary_title')}
                </h3>
                <ul className="list-disc list-inside space-y-3 pl-4">
                  <li><strong>{t('travel_info_pickup_title')}</strong> {t('travel_info_pickup_text')}</li>
                  <li><strong>{t('travel_info_breakfast_title')}</strong> {t('travel_info_breakfast_text')}</li>
                  <li><strong>{t('travel_info_transport_title')}</strong> {t('travel_info_transport_text')}</li>
                  <li><strong>{t('travel_info_departure_title')}</strong> {t('travel_info_departure_text')}</li>
                  <li><strong>{t('travel_info_return_title')}</strong> {t('travel_info_return_text')}</li>
                  <li><strong>{t('travel_info_duration_title')}</strong> {t('travel_info_duration_text')}</li>
                </ul>
              </div>

              {/* Prohibitions and Restrictions */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-cyan-700 pl-4">
                  {t('travel_info_prohibitions_title')}
                </h3>
                <ul className="list-disc list-inside space-y-3 pl-4">
                  <li>{t('travel_info_prohibitions_li1')}</li>
                  <li>{t('travel_info_prohibitions_li2')}</li>
                  <li>{t('travel_info_prohibitions_li3')}</li>
                </ul>
              </div>

              {/* Additional Considerations */}
              <div>
                 <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-cyan-700 pl-4">
                  {t('travel_info_additional_title')}
                </h3>
                <p className="pl-4">{t('travel_info_additional_text')}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelInfo;
