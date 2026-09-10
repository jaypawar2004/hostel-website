'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Snowflake, Wind, ShieldAlert, Award, Star } from 'lucide-react';

const roomsData = [
  { id: 1, name: '2-Bed AC Room', desc: 'Cozy double sharing room with split AC, attached bathroom, and study table.', price: '₹8,500', cats: ['all', 'b1', 'ac'], badge: 'Building 1 · AC', amenities: ['❄️ AC', '专 Attached Bath', ' Study Table'] },
  { id: 2, name: '2-Bed Duct Room', desc: 'Spacious double sharing with duct cooling, common bathroom, and wardrobe.', price: '₹6,500', cats: ['all', 'b1', 'duct'], badge: 'Building 1 · Duct', amenities: [' Duct', ' Common Bath', ' Wardrobe'] },
  { id: 3, name: '3-Bed AC Room', desc: 'Triple sharing AC room with spacious layout, individual lockers, and natural light.', price: '₹7,000', cats: ['all', 'b1', 'ac'], badge: 'Building 1 · AC', amenities: ['❄️ AC', ' Locker', ' Natural Light'] },
  { id: 4, name: '3-Bed Duct Room', desc: 'Comfortable triple sharing with duct cooling, fans, and personal storage space.', price: '₹5,500', cats: ['all', 'b1', 'duct'], badge: 'Building 1 · Duct', amenities: [' Duct', ' Fan', ' Storage'] },
  { id: 5, name: '4-Bed AC Room', desc: 'Quad sharing with split AC, bunk beds, individual shelf, and bright ventilation.', price: '₹5,000', cats: ['all', 'b1', 'ac'], badge: 'Building 1 · AC', amenities: ['❄️ AC', ' Bunk Beds', ' Shelf'] },
  { id: 6, name: '4-Bed Duct Room', desc: 'Budget-friendly quad sharing with duct cooling, ideal for students.', price: '₹4,000', cats: ['all', 'b1', 'duct'], badge: 'Building 1 · Duct', amenities: [' Duct', ' Fan', ' Study Area'] },
  { id: 7, name: '2-Bed AC Room (Premium)', desc: 'Premium double sharing in Lotus Wing with AC, attached bath, and balcony access.', price: '₹9,000', cats: ['all', 'b2', 'ac'], badge: 'Building 2 · AC', amenities: ['❄️ AC', ' Attached Bath', ' Balcony'] },
  { id: 8, name: '2-Bed Duct Room (Lotus)', desc: 'Comfortable double sharing in Building 2 with duct cooling and storage.', price: '₹7,000', cats: ['all', 'b2', 'duct'], badge: 'Building 2 · Duct', amenities: [' Duct', ' Wardrobe', ' Safe'] },
  { id: 9, name: '3-Bed AC Room (Lotus)', desc: 'Triple sharing with AC in Lotus Wing, spacious and well-ventilated.', price: '₹7,500', cats: ['all', 'b2', 'ac'], badge: 'Building 2 · AC', amenities: ['❄️ AC', ' Study Table', ' Night Lamp'] },
  { id: 10, name: '3-Bed Duct Room (Lotus)', desc: 'Affordable triple sharing in Building 2 with duct cooling and shared amenities.', price: '₹5,800', cats: ['all', 'b2', 'duct'], badge: 'Building 2 · Duct', amenities: [' Duct', ' Fan', ' Storage'] },
];

const tabs = [
  { id: 'all', label: 'All Rooms' },
  { id: 'b1', label: 'Building 1' },
  { id: 'b2', label: 'Building 2' },
  { id: 'ac', label: 'AC Rooms' },
  { id: 'duct', label: 'Duct Rooms' },
];

export default function Rooms() {
  const [activeTab, setActiveTab] = useState('all');
  const filteredRooms = roomsData.filter(room => room.cats.includes(activeTab));

  return (
    <section className="py-20 bg-white" id="rooms">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#C26573] text-xs font-bold uppercase tracking-widest bg-[#FFF0EE] border border-[#F3D5D2] px-3 py-1 rounded-full">
            Room Categories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2321] font-bold mt-4">
            Find Your Perfect Room
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                activeTab === tab.id
                  ? 'bg-[#C26573] text-white border-[#C26573] shadow-sm'
                  : 'bg-transparent text-[#6E6461] border-[#EADAD6] hover:bg-[#FFF8F6]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Rooms Grid with Smooth Layout Animation */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredRooms.map((room) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={room.id}
                className="bg-white border border-[#EADAD6] rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
              >
                {/* Room Card Image Area */}
                <div className="h-44 bg-[#F5EFE6] flex items-center justify-center relative">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">🛏️</span>
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[10px] text-[#2B2321] font-semibold px-2.5 py-1 rounded-full shadow-xs border border-[#EADAD6]">
                    {room.badge}
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#2B2321] mb-2">{room.name}</h3>
                    <p className="text-xs sm:text-sm text-[#6E6461] mb-4 line-clamp-2">{room.desc}</p>
                  </div>
                  
                  <div>
                    <div className="text-xl font-bold text-[#C26573] mb-4">
                      {room.price} <span className="text-xs text-[#8A7D79] font-normal">/month per person</span>
                    </div>

                    {/* Amenities list */}
                    <div className="flex flex-wrap gap-1.5 border-t border-[#FFF0EE] pt-3">
                      {room.amenities.map((amenity, i) => (
                        <span key={i} className="text-[11px] bg-[#FFF8F6] text-[#6E6461] px-2 py-0.5 rounded-sm">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}