import Image from "next/image";
import Link from "next/link";
import { BiRightArrow, BiServer, BiBrain, BiStats } from "react-icons/bi";

const projects = [
    {
        id: 1,
        title: "Crawl4AI",
        category: "AI & Automation",
        description: "An open-source, LLM-friendly web crawler and scraper designed to feed clean, structured data into Large Language Models. Streamlines data acquisition for AI agents.",
        image: "/images/project-ai.png",
        stack: ["Python", "Playwright", "LLM Integration", "Automation"],
        icon: <BiBrain className="text-purple-400" size={24} />,
        link: "https://github.com/thakoreh/Crawl4AI",
    },
    {
        id: 2,
        title: "Are You Dead?",
        category: "Personal Safety System",
        description: "A digital dead man's switch. A daily check-in application that automatically alerts designated emergency contacts if the user fails to respond for two consecutive days.",
        image: "/images/project-backend.png",
        stack: ["Node.js", "React", "Automation", "Notification Services"],
        icon: <BiServer className="text-blue-400" size={24} />,
        link: "https://github.com/thakoreh/areyoudead",
    },
    {
        id: 3,
        title: "Code Visualizer",
        category: "Developer Tools",
        description: "An interactive utility for visualizing complex code structures and execution paths, helping developers debug and understand logic flows more intuitively.",
        image: "/images/project-ecommerce.png",
        stack: ["JavaScript", "AST Parsing", "Visualization", "React"],
        icon: <BiStats className="text-emerald-400" size={24} />,
        link: "https://github.com/thakoreh/code-visualizer",
    },
];

export default function FeaturedArchitecture() {
    return (
        <section className="py-24 relative" id="projects">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Selected <span className="text-gradient-primary">Architecture</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        A curated selection of high-impact engineering problems I&apos;ve solved.
                        Moving beyond simple websites to complex, scalable systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative rounded-2xl overflow-hidden glass-panel hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-all z-10" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-duration-700 transition-all duration-700"
                                />

                                <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-lg border border-white/10">
                                    {project.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="text-sm font-mono text-blue-400 mb-2">{project.category}</div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack Pills */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs rounded-full bg-slate-800 border border-slate-700 text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center text-white font-semibold group/link">
                                    View Case Study
                                    <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">
                                        →
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/projects"
                        className="inline-block px-10 py-4 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-white transition-all hover:bg-white/5"
                    >
                        View Full Project Archive
                    </Link>
                </div>
            </div>
        </section>
    );
}
