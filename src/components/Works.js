import React from 'react';
import { motion } from 'framer-motion';

const Works = () => {
    const projects = [
        {
            title: "ChecMate",
            description: "A full-stack mobile application, utilizing machine learning-based image processing techniques. Applied OCR with Tesseract for accurate text recognition and field detection.",
            image: "checmate-logo.png",
            liveUrl: "#",
            codeUrl: "#",
            tags: ["Flutter", "Flask", "Tesseract", "OpenCV", "MongoDB", "AWS"]
        },
    ];

    return (
        <section id="works" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Our Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                        >
                            <div className="relative overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-23 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-4">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex justify-center items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow"
                                    >
                                        View Live
                                    </a>
                                    <a
                                        href={project.codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;