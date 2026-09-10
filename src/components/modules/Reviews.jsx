'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    rating: 5,
    text: "I have been staying here for 2 years. The security is excellent and the staff is very cooperative. Feels like home. The food in the mess is also really good!",
    name: "Priya Sharma",
    info: "Building 1 · 2-Bed AC · 2 years",
    avatar: "👩"
  },
  {
    id: 2,
    rating: 5,
    text: "Best hostel in the city for girls! Clean rooms, 24/7 hot water, and the WiFi is super fast. The location is also very convenient for college students.",
    name: "Anjali Verma",
    info: "Building 2 · 3-Bed AC · 1 year",
    avatar: "👧"
  },
  {
    id: 3,
    rating: 4,
    text: "Very safe and comfortable place. The management is responsive and maintenance issues are fixed quickly. The terrace garden is my favorite spot to study!",
    name: "Neha Singh",
    info: "Building 1 · 4-Bed Duct · 6 months",
    avatar: "🧕"
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-[#FFF8F6]" id="reviews">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <span className="text-[#C26573] text-xs font-bold uppercase tracking-widest bg-[#FFF0EE] border border-[#F3D5D2] px-3 py-1 rounded-full">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2321] font-bold mt-4">
            What Our Residents Say
          </h2>
        </div>

        {/* Testimonial Cards Layout */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviewsData.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white border border-[#EADAD6] rounded-2xl p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Dynamic Star Component Mapping */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} 
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#6E6461] italic leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-3 border-t border-[#FFF8F6] pt-4">
                <div className="w-10 h-10 rounded-full bg-[#FFF0EE] flex items-center justify-center text-lg">
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2B2321]">{rev.name}</h4>
                  <p className="text-[11px] text-[#8A7D79] mt-0.5">{rev.info}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}