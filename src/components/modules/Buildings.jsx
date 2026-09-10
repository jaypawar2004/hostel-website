'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, ArrowRight } from 'lucide-react';

const buildingsData = [
  {
    id: 'b1',
    title: 'Building 1 — Sakura Wing',
    sub: '4 room types · 2/3/4-sharing · AC & Duct options',
    emoji: <Home className="w-8 h-8 text-[#C26573]" />,
    tags: ['2-Bed', '3-Bed', '4-Bed', 'AC Available', 'Duct Cooling'],
    link: '#rooms',
  },
  {
    id: 'b2',
    title: 'Building 2 — Lotus Wing',
    sub: '2 room types · 2/3-sharing · AC & Duct options',
    emoji: <Building2 className="w-8 h-8 text-[#C26573]" />,
    tags: ['2-Bed', '3-Bed', 'AC Available', 'Duct Cooling'],
    link: '#rooms',
  }
];

export default function Buildings() {
  return (
    <section className="py-20 bg-[#FFF8F6]" id="buildings">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C26573] text-xs font-bold uppercase tracking-widest bg-[#FFF0EE] border border-[#F3D5D2] px-3 py-1 rounded-full">
            Our Properties
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2321] font-bold mt-4 mb-3">
            Choose Your Building
          </h2>
          <p className="text-[#6E6461] max-w-xl mx-auto text-sm sm:text-base">
            Two beautifully maintained buildings with different room configurations to suit your needs and budget.
          </p>
        </div>

        {/* Building Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {buildingsData.map((building, idx) => (
            <motion.div
              key={building.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, type: 'spring', stiffness: 50 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#EADAD6] flex flex-col justify-between group transition-shadow hover:shadow-md"
            >
              <div>
                {/* Image Placeholder with Icon */}
                <div className="w-full h-48 bg-[#FFF0EE] rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#C26573] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-white rounded-full shadow-sm">
                    {building.emoji}
                  </motion.div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2B2321] mb-2">{building.title}</h3>
                <p className="text-sm text-[#8A7D79] mb-4">{building.sub}</p>

                {/* Tags Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {building.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                        tag.includes('AC') || tag.includes('Duct') 
                          ? 'bg-[#FFF0EE] text-[#C26573] border border-[#F3D5D2]' 
                          : 'bg-[#F5EFE6] text-[#6E6461]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <motion.a
                href={building.link}
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-transparent border border-[#C26573] text-[#C26573] hover:bg-[#C26573] hover:text-white rounded-xl font-medium text-sm transition-all duration-300"
              >
                Explore {building.id === 'b1' ? 'Building 1' : 'Building 2'}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}