import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ scrollToSection }) => {
    return (
        <motion.section
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
        >
            <div className="max-w-4xl px-4 text-center">
                <motion.h1
                    className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Prajna
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-4"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Driven by Wisdom, Powered by Innovation
                </motion.p>

                <motion.p
                    className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    A dynamic team of tech experts delivering exceptional web solutions through innovative development, robust architecture, and seamless deployment.
                </motion.p>

                <motion.button
                    onClick={() => scrollToSection('works')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-shadow"
                >
                    Discover More
                </motion.button>
            </div>
        </motion.section>
    );
};

export default Hero;