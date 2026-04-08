// src/components/Login/FarmerLogin.jsx
import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { Phone, Hash, Mic, MapPin, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FarmerLogin = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('');

  const handleSendOTP = () => {
    // Firebase OTP logic here
    setStep('otp');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589924691995-b3419a25bb5f?w=1920')"
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center py-12">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-md w-full bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <img src="https://images.unsplash.com/photo-1611100481087-2eb83c6dd97c?w=100" alt="Farmer" className="rounded-xl" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              {t('farmerLogin')}
            </h1>
            <p className="text-gray-600 text-lg">Connect with APMC markets instantly</p>
          </div>

          {step === 'phone' ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('kisanId')}</label>
                <div className="relative">
                  <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-lg"
                    placeholder="KN12345678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('mobile')}</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-lg"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button className="flex-1 p-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2">
                  <Mic className="w-5 h-5" />
                  Voice
                </button>
                <button className="flex-1 p-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Location
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSendOTP}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 text-lg"
              >
                Send OTP <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('otp')}</label>
                <div className="grid grid-cols-6 gap-3">
                  {Array(6).fill(0).map((_, i) => (
                    <input
                      key={i}
                      maxLength={1}
                      className="w-full h-16 text-2xl font-bold text-center border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all"
                    />
                  ))}
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/subscription'}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
              >
                {t('verify')}
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FarmerLogin;