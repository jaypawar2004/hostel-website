'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wifi, Utensils, Shirt, Video, Droplets, Zap, Brush, Bike, BookOpen, Trees, HeartPulse } from 'lucide-react';

const amenities = [
  { name: '24/7 Security', icon: <Shield className="w-5 h-5" /> },
  { name: 'High-Speed WiFi', icon: <Wifi className="w-5 h-5" /> },
  { name: 'Mess / Canteen', icon: <Utensils className="w-5 h-5" /> },
  { name: 'Laundry Service', icon: <Shirt className="w-5 h-5" /> },
  { name: 'CCTV Cameras', icon: <Video className="w-5 h-5" /> },
  { name: 'Hot Water', icon: <Droplets className="w-5 h-5" /> },
  { name: 'Power Backup', icon: <Zap className="w-5 h-5" /> },
  { name: 'Housekeeping', icon: <Brush className="w-5 h-5" /> },
  { name: 'Parking', icon: <Bike className="w-5 h-5" /> },
  { name: 'Study Room', icon: <BookOpen className="w-5 h-5" /> },
  { name: 'Green Terrace', icon: <Trees className="w-5 h-5" /> },
  { name: 'Medical Aid', icon: <HeartPulse className="w-5 h-5" /> },
];

export default function Facilities() {
  return (
    <section className="py-20 bg-white" id="facilities">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <span className="text-[#C26573] text-xs font-bold uppercase tracking-widest bg-[#FFF0EE] border border-[#F3D5D2] px-3 py-1 rounded-full">
            Amenities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2321] font-bold mt-4 mb-2">
            Everything You Need
          </h2>
          <p className="text-[#6E6461] text-sm sm:text-base max-w-md mx-auto">
            Thoughtfully designed to make your stay comfortable, safe, and productive.
          </p>
        </div>

        {/* 12 Grid Facilities Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {amenities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: '#FFF0EE', border: '1px solid #F3D5D2' }}
              className="flex flex-col items-center justify-center p-5 bg-[#FFF8F6] border border-transparent rounded-xl text-center cursor-pointer transition-all"
            >
              <div className="text-[#C26573] mb-3">
                {item.icon}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#2B2321]">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}