
/**
 * @file AppContext.tsx
 * @description Define el proveedor de contexto global `AppProvider` y el hook `useApp`.
 * Este contexto gestiona el estado compartido a través de toda la aplicación, incluyendo:
 * - La función `t` para obtener las traducciones en español.
 * - El estado de scroll para efectos dinámicos en la UI (ej. en el Header).
 */
import React, { createContext, useContext, useState } from 'react';
import { translations } from '../lib/translations';

// Crea el contexto de React.
const AppContext = createContext(undefined);

/**
 * Componente proveedor que envuelve la aplicación y provee el estado global.
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Componentes hijos que tendrán acceso al contexto.
 */
export const AppProvider = ({ children }) => {
  // Estado para saber si el usuario ha hecho scroll.
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Función de traducción.
   * Devuelve la cadena de texto correspondiente a la clave en español.
   * @param key La clave de la traducción.
   * @returns La cadena traducida o la clave si no se encuentra la traducción.
   */
  const t = (key) => {
    return translations.es[key] || key;
  };

  // Objeto de valor que se pasará al proveedor de contexto.
  const value = {
    t,
    isScrolled,
    setIsScrolled
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

/**
 * Hook personalizado para consumir el AppContext de forma segura.
 * Proporciona una forma sencilla para que los componentes accedan al estado global.
 * @throws {Error} Si se usa fuera de un `AppProvider`.
 * @returns El valor del contexto de la aplicación.
 */
export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};