import React from 'react';
import { Home, User, Briefcase, Send, Moon, Sun } from 'lucide-react';

const Navigation = ({ scrollToSection, darkMode, toggleDarkMode }) => {
    const navItems = [
        { icon: Home, label: 'Home', ref: 'home' },
        { icon: Briefcase, label: 'Works', ref: 'works' },
        { icon: User, label: 'About', ref: 'about' },
        { icon: Send, label: 'Contact', ref: 'contact' }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-800/80">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            Prajna
                        </span>
                    </div>

                    <div className="hidden md:block flex-1">
                        <div className="flex justify-center space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.ref}
                                    onClick={() => scrollToSection(item.ref)}
                                    className="group inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
                                >
                                    <item.icon className="w-4 h-4 mr-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;