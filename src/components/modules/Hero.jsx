'use client';

import React from 'react';
import { motion } from 'framer-motion';
// Icons import kar rahe hain
import { Shield, Home, BedDouble, Star, ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSectionAnimated() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 60, damping: 15 },
    },
  };

  const floatAnimation = (delay) => ({
    animate: {
      y: [0, -20, 0],
      scale: [1, 1.03, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  return (
    <section className="relative w-full min-h-screen bg-[#FFF8F6] flex flex-col justify-center items-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      
      {/* Background Decorative Circles */}
      <motion.div 
        variants={floatAnimation(0)}
        animate="animate"
        className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-[#F7E1E3] rounded-full opacity-60 pointer-events-none -z-10" 
      />
      <motion.div 
        variants={floatAnimation(1.5)}
        animate="animate"
        className="absolute bottom-[-15%] left-[-10%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] bg-[#F5EFE6] rounded-full opacity-60 pointer-events-none -z-10" 
      />

      {/* Main Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center z-10"
      >
        
        {/* Top Tagline / Pill with Sparkles Icon */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#FFF0EE] border border-[#F3D5D2] px-3 py-1.5 rounded-md mb-8 sm:mb-10">
          <Sparkles className="w-3.5 h-3.5 text-[#C26573]" />
          <span className="text-[#C26573] text-[10px] sm:text-xs font-semibold">Safe · Comfortable · Home Away from Home</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#2B2321] leading-tight tracking-tight mb-6">
          A Safe Space for <br className="hidden sm:inline" />
          <span className="italic text-[#C26573] font-normal font-serif">Every Girl</span> to Thrive
        </motion.h1>

        {/* Subtext Description */}
        <motion.p variants={itemVariants} className="text-[#6E6461] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Premium girls hostel with fully furnished rooms, 24/7 security, and all modern amenities. 
          Two buildings — every comfort covered.
        </motion.p>

        {/* Call to Action (CTA) Buttons with Arrow Icon */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-[#C26573] hover:bg-[#B05462] text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 shadow-sm flex items-center justify-center gap-2 text-sm sm:text-base group"
          >
            Explore Buildings 
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#FFF0EE" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-transparent border border-[#C26573] text-[#C26573] font-medium px-8 py-3 rounded-full transition-colors duration-300 text-sm sm:text-base"
          >
            View Rooms
          </motion.button>
        </motion.div>

        {/* Divider Line */}
        <motion.div 
          variants={itemVariants}
          className="w-full max-w-3xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#EADAD6] to-transparent mb-12" 
        />

        {/* Stats Grid with Dynamic Icons */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-3xl mx-auto">
          
          {/* Stat 1: Buildings */}
          <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center cursor-pointer group">
            <Home className="w-5 h-5 text-[#C26573] mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2321]">2</span>
            <span className="text-[10px] sm:text-xs text-[#8A7D79] tracking-widest uppercase font-semibold mt-1">Buildings</span>
          </motion.div>

          {/* Stat 2: Room Types */}
          <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center cursor-pointer group">
            <BedDouble className="w-5 h-5 text-[#C26573] mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2321]">6+</span>
            <span className="text-[10px] sm:text-xs text-[#8A7D79] tracking-widest uppercase font-semibold mt-1">Room Types</span>
          </motion.div>

          {/* Stat 3: Security */}
          <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center cursor-pointer group">
            <Shield className="w-5 h-5 text-[#C26573] mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2321]">24/7</span>
            <span className="text-[10px] sm:text-xs text-[#8A7D79] tracking-widest uppercase font-semibold mt-1">Security</span>
          </motion.div>

          {/* Stat 4: Rating */}
          <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center cursor-pointer group">
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Star className="w-5 h-5 fill-[#C26573] text-[#C26573] mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2321]">4.8</span>
            <span className="text-[10px] sm:text-xs text-[#8A7D79] tracking-widest uppercase font-semibold mt-1">Rating</span>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
}