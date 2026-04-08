// src/components/Dashboard/FarmerDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { 
  Upload, Mic, MapPin, TrendingUp, BarChart3, Shield, DollarSign, 
  Clock, AlertCircle 
} from 'lucide-react';
import { motion } from 'framer-motion';

const FarmerDashboard = () => {
  const { t } = useTranslation();
  const [showUploadModal, setShowUploadModal] = useState(false);

  const mockCrops = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      image: "https://images.unsplash.com/photo-1607305381387-283b9f9a729b?w=400",
      price: 45,
      location: "Mumbai APMC",
      confidence: "high"
    },
    {
      id: 2,
      name: "Green Chilies",
      image: "https://images.unsplash.com/photo-1580052614034-dba6f8c8b1f8?w=400",
      price: 120,
      location: "Pune Market",
      confidence: "medium"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome Back, Ramu!</h1>
              <p className="text-green-100">Your crops are getting great AI insights</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl hover:bg-white/30 transition-all">
                <MapPin className="w-5 h-5" /> Mumbai APMC
              </button>
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl hover:bg-white/30 transition-all">
                <Clock className="w-5 h-5" /> Live Updates
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div className="bg-white rounded-3xl p-8 shadow-2xl border border-green-100 hover:shadow-3xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('aiPrice')}</p>
                <p className="text-2xl font-bold text-gray-900">₹45-52/kg</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-600 font-semibold">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              High Confidence
            </div>
          </motion.div>

          <motion.div className="bg-white rounded-3xl p-8 shadow-2xl border border-green-100 hover:shadow-3xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('demandForecast')}</p>
                <p className="text-2xl font-bold text-gray-900">High Demand</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-3 rounded-full w-4/5"></div>
            </div>
          </motion.div>

          <motion.div className="bg-white rounded-3xl p-8 shadow-2xl border border-green-100 hover:shadow-3xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('creditScore')}</p>
                <p className="text-2xl font-bold text-gray-900">847</p>
              </div>
            </div>
            <div className="text-sm text-green-600 font-semibold">Eligible for ₹2.5L loan</div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
            onClick={() => setShowUploadModal(true)}
          >
            <div className="flex items-center gap-3 mb-6 opacity-90 group-hover:opacity-100">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Upload className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm">{t('uploadCrop')}</p>
                <p className="text-xl font-bold">Upload New Crop</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 ml-auto group-hover:translate-x-2 transition-transform" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCrops.map((crop) => (
            <motion.div
              key={crop.id}
              className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all duration-500 border-2 border-gray-100"
            >
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <img 
                  src={crop.image} 
                  alt={crop.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                  {crop.confidence === 'high' ? 'High Confidence' : 'Medium Confidence'}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{crop.name}</h3>
                <div className="flex items-center gap-2 text-2xl font-bold text-green-600 mb-4">
                  <DollarSign className="w-6 h-6" />
                  ₹{crop.price}/kg
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <MapPin className="w-4 h-4" />
                  {crop.location}
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all">
                    View Bids
                  </button>
                  <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all">
                    <BarChart3 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;