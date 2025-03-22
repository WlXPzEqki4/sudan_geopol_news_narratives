
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 64,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div 
      className="relative min-h-screen flex items-center justify-center bg-helsinki-light overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-helsinki-light via-helsinki-light to-white opacity-90"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-helsinki-dark mb-4">
          ICJ Case Narrative Explorer
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            This dashboard presents full-text articles and visualizes media narratives surrounding the Sudan-UAE ICJ genocide case, analyzing key themes and their evolution over time.
          </p>
          
          {/* <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {['Historical', 'Cultural', 'Diplomatic', 'Educational', 'Technological'].map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-800 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div> */}
          
          <motion.button
            onClick={scrollToContent}
            className="inline-flex items-center justify-center mt-8 text-helsinki-blue hover:text-helsinki-blue/80 transition-colors"
            whileHover={{ y: 3 }}
            whileTap={{ y: 0 }}
            animate={{ 
              y: [0, 8, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.5,
            }}
          >
            <span className="sr-only">Scroll down</span>
            <ChevronDown className="h-10 w-10" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;



