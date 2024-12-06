import { Github, Linkedin, Twitter } from 'lucide-react';
const About = () => {
    const teamMembers = [
        {
            name: "Gurram Meghashyam",
            role: "Frontend Lead",
            description: "Passionate about creating intuitive user interfaces with 5+ years of experience in React and modern frontend technologies.",
            expertise: [
                { title: "Frontend Development", skills: ["React", "TypeScript", "Flutter"] },
                { title: "Web Performance", skills: ["SEO", "Core Web Vitals"] },
                { title: "UI Development", skills: ["Tailwind CSS", "Styled Components"] }
            ],
            socialLinks: { github: "#", linkedin: "#", twitter: "#" }
        },
        {
            name: "Chayan Sen",
            role: "Backend Lead",
            description: "Expert in scalable backend architecture with extensive experience in cloud infrastructure and API design.",
            expertise: [
                { title: "Backend Development", skills: ["Node.js", "Express", "Flask"] },
                { title: "Database Management", skills: ["PostgreSQL", "MongoDB", "Redis"] },
                { title: "Cloud Services", skills: ["AWS", "Docker", "Kubernetes"] }
            ],
            socialLinks: { github: "https://github.com/Chayan199916", linkedin: "https://www.linkedin.com/in/sen-chayan/", twitter: "https://x.com/ChayanSengupta6" }
        },
        {
            name: "Uday Swaroop",
            role: "DevOps Engineer",
            description: "Specializes in CI/CD pipelines and security implementation with a focus on automated deployment strategies.",
            expertise: [
                { title: "DevOps", skills: ["Jenkins", "GitLab CI", "GitHub Actions"] },
                { title: "Security", skills: ["OAuth2", "JWT", "Penetration Testing"] },
                { title: "Infrastructure", skills: ["Terraform", "Ansible", "CloudFormation"] }
            ],
            socialLinks: { github: "#", linkedin: "#", twitter: "#" }
        }
    ];

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Meet Our Team
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-105">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                                    {member.name}
                                </h3>
                                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    {member.description}
                                </p>
                                {member.expertise && member.expertise.map((exp, index) => (
                                    <div key={index} className="mb-4">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                            {exp.title}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map(skill => (
                                                <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <div className="flex space-x-4 mt-6">
                                    {Object.entries(member.socialLinks).map(([platform, url]) => (
                                        <a
                                            key={platform}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                                        >
                                            {platform === 'github' && <Github size={20} />}
                                            {platform === 'linkedin' && <Linkedin size={20} />}
                                            {platform === 'twitter' && <Twitter size={20} />}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;