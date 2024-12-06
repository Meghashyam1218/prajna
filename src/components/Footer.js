import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
    return (
        <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <span className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Prajna
                    </span>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Driven by Wisdom, Powered by Innovation
                    </p>
                </div>
                <div className="md:text-right">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        © 2024 Prajna. All Rights Reserved.
                    </p>
                </div>
                <button
                    onClick={() => scrollToSection('home')}
                    className="mt-4 md:mt-0 p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow"
                >
                    <ChevronUp size={20} />
                </button>
            </div>
        </footer>
    );
};

export default Footer;