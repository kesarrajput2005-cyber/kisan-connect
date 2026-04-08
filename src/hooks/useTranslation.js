// src/hooks/useTranslation.js
import { useState, useCallback, useEffect } from 'react';
import { translations, languages } from '../utils/translations';

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const t = useCallback((key) => {
    return translations[currentLanguage][key] || key;
  }, [currentLanguage]);

  const setLanguage = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  return { t, currentLanguage, setLanguage, languages };
};