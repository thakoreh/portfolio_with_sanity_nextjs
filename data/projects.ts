import type { ProjectType } from "@/types";

export const manualProjects: ProjectType[] = [
    {
        _id: "crawl4ai-manual",
        _createdAt: new Date(),
        name: "Crawl4AI",
        slug: "crawl4ai",
        tagline: "LLM-Friendly Web Crawler & Scraper",
        projectUrl: "https://github.com/thakoreh/Crawl4AI",
        coverImage: {
            image: "/images/project-ai.png",
            alt: "Crawl4AI Cover"
        },
        description: [
            {
                _key: "1",
                _type: "block",
                children: [
                    {
                        _key: "11",
                        _type: "span",
                        text: "An open-source, LLM-friendly web crawler and scraper designed to feed clean, structured data into Large Language Models. It streamlines the data acquisition process for AI agents, handling potential roadblocks like dynamic content rendering and anti-bot measures."
                    }
                ],
                markDefs: [],
                style: "normal"
            }
        ],
        technologies: ["Python", "Playwright", "LLM Integration", "Automation"]
    },
    {
        _id: "areyoudead-manual",
        _createdAt: new Date(),
        name: "Are You Dead?",
        slug: "areyoudead",
        tagline: "Personal Safety Dead Man's Switch",
        projectUrl: "https://github.com/thakoreh/areyoudead",
        coverImage: {
            image: "/images/project-backend.png",
            alt: "Are You Dead Cover"
        },
        description: [
            {
                _key: "1",
                _type: "block",
                children: [
                    {
                        _key: "11",
                        _type: "span",
                        text: "A digital dead man's switch. This daily check-in application automatically alerts designated emergency contacts if the user fails to respond for two consecutive days. It serves as a vital personal safety net for individuals living alone or in high-risk environments."
                    }
                ],
                markDefs: [],
                style: "normal"
            }
        ],
        technologies: ["Node.js", "React", "Automation", "Notification Services"]
    },
    {
        _id: "code-visualizer-manual",
        _createdAt: new Date(),
        name: "Code Visualizer",
        slug: "code-visualizer",
        tagline: "Interactive AST Code Visualization Tool",
        projectUrl: "https://github.com/thakoreh/code-visualizer",
        coverImage: {
            image: "/images/project-ecommerce.png",
            alt: "Code Visualizer Cover"
        },
        description: [
            {
                _key: "1",
                _type: "block",
                children: [
                    {
                        _key: "11",
                        _type: "span",
                        text: "An interactive utility for visualizing complex code structures and execution paths. By leveraging AST parsing, it helps developers debug and understand intricate logic flows more intuitively, transforming raw code into navigable visual maps."
                    }
                ],
                markDefs: [],
                style: "normal"
            }
        ],
        technologies: ["JavaScript", "AST Parsing", "Visualization", "React"]
    },
    {
        _id: "smart-contracts-manual",
        _createdAt: new Date(),
        name: "Smart Contracts Collection",
        slug: "smart-contracts",
        tagline: "Secure Blockchain Logic & Token Standards",
        projectUrl: "https://github.com/thakoreh/smart-contracts",
        coverImage: {
            image: "/images/project-ai.png",
            alt: "Smart Contracts Cover"
        },
        description: [
            {
                _key: "1",
                _type: "block",
                children: [
                    {
                        _key: "11",
                        _type: "span",
                        text: "A comprehensive collection of various smart contracts developed using Solidity. This repository showcases expertise in blockchain architecture, including implementations for standard tokens (ERC-20, ERC-721) and custom decentralized application logic."
                    }
                ],
                markDefs: [],
                style: "normal"
            }
        ],
        technologies: ["Solidity", "Blockchain", "Web3", "Smart Contracts"]
    },
    {
        _id: "lottery-checker-manual",
        _createdAt: new Date(),
        name: "Lottery Checker",
        slug: "lottery-checker",
        tagline: "Number Strength Evaluator",
        projectUrl: "https://github.com/thakoreh/lottery-checker",
        coverImage: {
            image: "/images/project-backend.png",
            alt: "Lottery Checker Cover"
        },
        description: [
            {
                _key: "1",
                _type: "block",
                children: [
                    {
                        _key: "11",
                        _type: "span",
                        text: "A full-stack application that evaluates the statistical 'strength' of lottery numbers. Combining a robust Python backend for probability calculation with a sleek React/Tailwind frontend, it offers users data-driven insights for their selections."
                    }
                ],
                markDefs: [],
                style: "normal"
            }
        ],
        technologies: ["Python", "React", "Tailwind CSS", "JavaScript"]
    },
    {
        _id: "clean-desktop-manual",
        _createdAt: new Date(),
        name: "Clean Desktop App",
        slug: "clean-desktop-app",
        tagline: "Automated Workspace Organizer",
        projectUrl: "https://github.com/thakoreh/clean-desktop-app",
        coverImage: {
            image: "/images/project-ecommerce.png",
            alt: "Clean Desktop App Cover"
        },
        description: [
            {
                _key: "1",
                _type: "block",
                children: [
                    {
                        _key: "11",
                        _type: "span",
                        text: "A practical Python automation script designed to declutter desktop environments instantly. It systematically organizes files into folders based on extensions and usage, highlighting a focus on solving everyday workflow inefficiencies."
                    }
                ],
                markDefs: [],
                style: "normal"
            }
        ],
        technologies: ["Python", "Automation", "Scripting", "File System"]
    }
];
