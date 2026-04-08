// src/components/Subscription/SubscriptionDashboard.jsx
import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { ArrowRight, CheckCircle, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const SubscriptionDashboard = () => {
  const { t } = useTranslation();

  const plans = [
    {
      title: "👨‍🌾 Farmer Plan",
      price: "₹89",
      period: "/3 months",
      features: ["AI Price Prediction", "Demand Forecast", "Credit Score", "APMC Integration"],
      popular: false
    },
    {
      title: "🛒 Buyer/Retailer Plan",
      price: "₹120",
      period: "/month",
      features: ["Unlimited Bidding", "Live Chat", "Price Trends", "Priority Support"],
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock AI-powered farming insights and marketplace access
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 ${
                plan.popular 
                  ? 'border-yellow-300 ring-4 ring-yellow-100/50 shadow-2xl' 
                  : 'border-gray-100 hover:border-green-200 shadow-xl hover:shadow-2xl'
              } hover:-translate-y-2 transition-all duration-500`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.title}</h3>
                <div className="inline-flex items-baseline bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl mb-6 shadow-2xl">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-lg ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-lg">
                    <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black shadow-yellow-200'
                    : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-green-200'
                }`}
              >
                Subscribe Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDashboard;