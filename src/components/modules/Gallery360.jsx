'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Move3d, Play, Camera } from 'lucide-react';

const views = [
  { id: 'v1', name: '2-Bed AC Room', label: '2-Bed AC', emoji: '🛏️', color: '#8b3a4a' },
  { id: 'v2', name: '3-Bed AC Room', label: '3-Bed AC', emoji: '🛌', color: '#1a6fa8' },
  { id: 'v3', name: '4-Bed Duct Room', label: '4-Bed Duct', emoji: '🏠', color: '#1a6a2e' },
  { id: 'v4', name: 'Common Areas', label: 'Common Area', emoji: '☕', color: '#854f0b' },
];

export default function Gallery360() {
  const [selectedView, setSelectedView] = useState(views[0]);

  const startTour = () => {
    alert(`Starting 360° virtual integration layer for: ${selectedView.name}`);
  };

  return (
    <section className="py-20 bg-[#FFF8F6]" id="gallery">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <span className="text-[#C26573] text-xs font-bold uppercase tracking-widest bg-[#FFF0EE] border border-[#F3D5D2] px-3 py-1 rounded-full">
          Virtual Tour
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2321] font-bold mt-4 mb-2">
          360° Room Views & Gallery
        </h2>
        <p className="text-[#6E6461] text-sm sm:text-base max-w-xl mx-auto mb-10">
          Take a virtual tour of our rooms before booking. See every corner from home.
        </p>

        {/* 360 View Box Wrapper */}
        <div className="bg-white border border-[#EADAD6] rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden flex flex-col items-center">
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-14 h-14 bg-[#FFF0EE] rounded-full flex items-center justify-center text-[#C26573] mb-4"
          >
            <Move3d className="w-6 h-6" />
          </motion.div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2321] mb-2">
            Interactive 360° Virtual Tour
          </h3>
          <p className="text-xs sm:text-sm text-[#8A7D79] mb-8 max-w-md">
            Click on any room below to start the virtual tour and explore in full 360°
          </p>

          {/* Interactive Thumbnails */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md w-full mb-8">
            {views.map((view) => (
              <button
                key={view.id}
                onClick={() => setSelectedView(view)}
                className={`p-3 rounded-xl border text-center transition-all duration-200 flex flex-col items-center justify-center ${
                  selectedView.id === view.id
                    ? 'bg-[#FFF0EE] border-[#C26573] shadow-xs'
                    : 'bg-transparent border-[#EADAD6] hover:bg-[#FFF8F6]'
                }`}
              >
                <span className="text-lg mb-1">{view.emoji}</span>
                <span className="text-[9px] sm:text-[10px] font-medium leading-tight opacity-80" style={{ color: view.color }}>
                  {view.label}
                </span>
              </button>
            ))}
          </div>

          {/* Core Action Trigger */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={startTour}
            className="w-full max-w-md bg-[#C26573] hover:bg-[#B05462] text-white py-3 rounded-full font-medium text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <Play className="w-4 h-4 fill-white" />
            Start 360° Tour — {selectedView.name}
          </motion.button>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#8A7D79]">
            <Camera className="w-4 h-4" />
            <span>Real photos will be added · Upload your room photos for the final site</span>
          </div>

        </div>

      </div>
    </section>
  );
}