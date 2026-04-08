// src/components/LanguageSelector.jsx
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Mic, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LanguageSelector = () => {
  const { t, setLanguage, currentLanguage, languages } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10 relative max-w-md mx-auto"
      >
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1611100481087-2eb83c6dd97c?w=400" 
            alt="Farm" 
            className="w-48 h-48 rounded-2xl shadow-2xl mx-auto mb-8 object-cover"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
            Smart Agri
          </h1>
          <p className="text-xl text-white/90 font-medium">{t('selectLanguage')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
          {languages.map((lang) => (
            <motion.button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`group p-6 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-300 flex flex-col items-center gap-3 min-h-[140px] ${
                currentLanguage === lang.code ? 'ring-4 ring-white/50 bg-white/40' : ''
              }`}
            >
              <span className="text-4xl">{lang.flag}</span>
              <span className="text-lg font-semibold text-white group-hover:text-white">{lang.name}</span>
              {currentLanguage === lang.code && (
                <ArrowRight className="w-6 h-6 text-white animate-pulse" />
              )}
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={() => window.location.href = '/login'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-12 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-2xl text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 mx-auto"
        >
          Continue <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        <div className="flex gap-4 mt-8 opacity-80">
          <button className="p-4 bg-white/20 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-all">
            <Mic className="w-6 h-6 text-white" />
          </button>
          <button className="p-4 bg-white/20 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-all">
            <MapPin className="w-6 h-6 text-white" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LanguageSelector;