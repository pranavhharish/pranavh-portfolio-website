export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "YC-Pilot",
    title: "YC-Pilot",
    category: "AI Product - Website",
    shortDescription:
      "An AI-powered platform for evaluating startup ideas using real-time insights, pitch analysis, and market fit scoring.",
    description: [
      "YC-Pilot is a next-gen AI product that helps founders evaluate their startup ideas based on real-time data and market trends. It leverages Retrieval-Augmented Generation (RAG) and Lyzr Agents to deliver contextual feedback on pitches, product ideas, and market positioning.",
      "The platform automatically scrapes and structures data from Y Combinator startup listings to create a dynamic knowledge base. It then uses this data to benchmark and validate new startup pitches, improving the accuracy of evaluation by 40%.",
      "As a full-stack contributor, I led the end-to-end development process — from market research to product launch — including deploying a dual-access solution with a Vercel-hosted frontend and automated report generation backend.",
    ],
    features: [
      "Real-time startup evaluation with GPT-4o and RAG-enhanced LLMs",
      "Contextual pitch analysis and market fit scoring using Lyzr Agents",
      "Knowledge base built from scraped YC startup data",
      "Dual-access system: instant frontend UX + email the evaluation reports",
      "Automated market research using Perplexity AI and Weaviate vector store",
      "Rapid product lifecycle delivery from concept to deployment",
    ],
    technologies: ["Next.js", "Vercel", "Lyzr Agent", "Weaviate", "gpt-4o", "Perplexity AI"],
    coverImage: "/YC-Pilot-Cover.png",
    thumbnailImage: "/YC-Pilot-Cover.png",
    gallery: [],
    timeline: "3 months (Q4 2024)",
    role: "Full-Stack Developer & Product Lead",
    liveUrl: "https://v0-yc-pilot-website.vercel.app/",
    githubUrl: "https://github.com/pranavhharish/yc-pilot",
    relatedProjects: [
      {
        slug: "walgreens-operations",
        title: "Walgreens Operations",
        category: "Consulting",
        image: "/Walgreen-cover.png",
      },
      {
        slug: "recover",
        title: "ReCover",
        category: "AI Tool - Website",
        image: "/Recover-cover.png",
      },
      {
        slug: "traffic-dqn-automation",
        title: "Automation of Traffic Control Systems",
        category: "Research",
        image: "/Traffic-cover.png",
      },
      {
        slug: "catering-analytics",
        title: "Business Analytics for University Catering",
        category: "Data Analytics",
        image: "/Business-analytics.png",
      },
      {
        slug: "haanu-travel-assistant",
        title: "Haanu – AI-Powered Travel Assistant",
        category: "AI Product",
        image: "/Haanu-cover.png",
      },
    ],
  },
  {
    id: 2,
    slug: "walgreens-operations",
    title: "Walgreens Operations",
    category: "Consulting",
    shortDescription:
      "A retail operations consulting project focused on optimizing store efficiency and enhancing customer engagement for Walgreens across the U.S.",
    description: [
      "This project focused on uncovering operational inefficiencies and technology-driven opportunities across Walgreens' retail and pharmacy operations in the United States.",
      "As the lead consultant, I guided the team in analyzing supply chain, inventory, and customer service workflows, uncovering $2.3M in potential annual savings through process improvement and system upgrades.",
      "Recommendations included integrating SAP IBP for smarter inventory planning and deploying Streebo's HIPAA-compliant AI chatbot to enhance pharmacy interactions and reduce service bottlenecks.",
    ],
    features: [
      "Identified $2.3M in potential annual savings through operational optimization",
      "Detected 25% inventory inefficiencies and 18% customer service gaps",
      "Recommended SAP IBP for integrated inventory and demand planning",
      "Proposed AI chatbot solution to streamline pharmacy customer service",
      "Conducted cross-functional analysis across supply chain, ops, and customer service units",
      "Delivered executive-ready report with data-backed insights and tech integration roadmap",
    ],
    technologies: ["Consulting", "Excel", "PowerPoint", "Business Intelligence"],
    coverImage: "/Walgreen-cover.png",
    thumbnailImage: "/Walgreen-cover.png",
    gallery: [],
    timeline: "4 months (Q3-Q4 2022)",
    role: "Lead Consultant",
    relatedProjects: [
      {
        slug: "YC-Pilot",
        title: "YC-Pilot",
        category: "AI Product",
        image: "/YC-Pilot-Cover.png",
      },
      {
        slug: "recover",
        title: "ReCover",
        category: "AI Tool - Website",
        image: "/Recover-cover.png",
      },
      {
        slug: "traffic-dqn-automation",
        title: "Automation of Traffic Control Systems",
        category: "Research",
        image: "/Traffic-cover.png",
      },
      {
        slug: "catering-analytics",
        title: "Business Analytics for University Catering",
        category: "Data Analytics",
        image: "/Business-analytics.png",
      },
      {
        slug: "haanu-travel-assistant",
        title: "Haanu – AI-Powered Travel Assistant",
        category: "AI Product",
        image: "/Haanu-cover.png",
      },
    ],
  },
  {
    id: 3,
    slug: "recover",
    title: "ReCover",
    category: "AI Tool - Website",
    shortDescription:
      "A personalized AI-powered resume and cover letter generator with session tracking and interactive job application workflows.",
    description: [
      "ReCover is an AI-driven tool that streamlines the job application process by generating personalized resumes and cover letters based on specific job postings.",
      "The platform combines a FastAPI backend with a sleek Next.js (Vercel V0) frontend to enable real-time content generation, user input handling, and dynamic response flow using LangChain and Groq API.",
      "Users can track and manage their job applications through session-based workflows, enabling role-specific customization and reusable materials tailored to each company and position.",
    ],
    features: [
      "AI-generated resumes and cover letters tailored to specific job roles",
      "Session-based job application tracking by company-role pairings",
      "Live content generation using FastAPI and Groq API",
      "Interactive UI built with Next.js and deployed on Vercel V0",
      "Integration with Supabase for persistent user sessions and storage",
      "Powered by LangChain for LLM-driven document customization",
    ],
    technologies: ["FastAPI", "Next.js", "Vercel", "LangChain", "Groq API", "Supabase"],
    coverImage: "/Recover-cover.png",
    thumbnailImage: "/Recover-cover.png",
    gallery: [],
    timeline: "2 months (Q3 2024)",
    role: "Full-Stack Developer",
    relatedProjects: [
      {
        slug: "YC-Pilot",
        title: "YC-Pilot",
        category: "AI Product",
        image: "/YC-Pilot-Cover.png",
      },
      {
        slug: "walgreens-operations",
        title: "Walgreens Operations",
        category: "Consulting",
        image: "/Walgreen-cover.png",
      },
      {
        slug: "traffic-dqn-automation",
        title: "Automation of Traffic Control Systems",
        category: "Research",
        image: "/Traffic-cover.png",
      },
      {
        slug: "catering-analytics",
        title: "Business Analytics for University Catering",
        category: "Data Analytics",
        image: "/Business-analytics.png",
      },
      {
        slug: "haanu-travel-assistant",
        title: "Haanu – AI-Powered Travel Assistant",
        category: "AI Product",
        image: "/Haanu-cover.png",
      },
    ],
  },
  {
    id: 4,
    slug: "traffic-dqn-automation",
    title: "Automation of Traffic Control Systems",
    category: "Research",
    shortDescription:
      "A Deep Q-Learning-based traffic signal control system designed to reduce delays and optimize urban mobility through intelligent adaptation.",
    description: [
      "This research-driven project explores the use of Deep Reinforcement Learning to automate traffic signal control using real-time congestion data.",
      "The system leverages a Deep Q-Learning Network (DQN) to dynamically adapt signal phases based on traffic flow, reducing average vehicle delay by 75% and queue lengths by 48% in simulation environments.",
      "Built using Python, SUMO, and TensorFlow, the model demonstrates a 32% improvement in roadway efficiency by learning to optimize intersection behavior through continuous interaction with a simulated traffic environment.",
    ],
    features: [
      "Deep Q-Learning model trained to control multi-phase traffic lights",
      "75% reduction in vehicle delay and 48% cut in queue length across simulations",
      "32% increase in overall traffic throughput and intersection efficiency",
      "Live congestion pattern interpretation to adapt signal sequencing",
      "Integration with SUMO for realistic traffic simulation",
      "Published research demonstrating applicability in smart city traffic systems",
    ],
    technologies: ["Python", "SUMO", "TensorFlow", "Reinforcement Learning", "Deep Learning"],
    coverImage: "/Traffic-cover.png",
    thumbnailImage: "/Traffic-cover.png",
    gallery: [],
    timeline: "8 months (Q1-Q2 2023)",
    role: "Research Lead",
    liveUrl: "https://ieeexplore.ieee.org/document/10047191",
    relatedProjects: [
      {
        slug: "YC-Pilot",
        title: "YC-Pilot",
        category: "AI Product",
        image: "/YC-Pilot-Cover.png",
      },
      {
        slug: "walgreens-operations",
        title: "Walgreens Operations",
        category: "Consulting",
        image: "/Walgreen-cover.png",
      },
      {
        slug: "recover",
        title: "ReCover",
        category: "AI Tool - Website",
        image: "/Recover-cover.png",
      },
      {
        slug: "catering-analytics",
        title: "Business Analytics for University Catering",
        category: "Data Analytics",
        image: "/Business-analytics.png",
      },
      {
        slug: "haanu-travel-assistant",
        title: "Haanu – AI-Powered Travel Assistant",
        category: "AI Product",
        image: "/Haanu-cover.png",
      },
    ],
  },
  {
    id: 5,
    slug: "catering-analytics",
    title: "Business Analytics for University Catering",
    category: "Data Analytics",
    shortDescription:
      "Data-driven analysis and dashboarding to optimize sales, staffing, and inventory across university catering and retail services.",
    description: [
      "This project focused on uncovering key operational insights from six years of historical sales and inventory data across university-run catering and retail services.",
      "Using Tableau and Tableau Prep, I conducted exploratory data analysis (EDA) on over 1.5 million records to identify demand trends, seasonal patterns, and inefficiencies in inventory and staffing.",
      "The dashboards created enabled leadership to make faster and more informed decisions, ultimately improving cost control and resource allocation across departments.",
    ],
    features: [
      "Analyzed 1.5M+ historical records to uncover demand and revenue patterns",
      "Identified seasonal fluctuations to improve procurement planning",
      "Enabled a 31% improvement in decision-making speed through real-time dashboards",
      "Reduced inventory-related costs by 13% via improved stock planning",
      "Enhanced staff alignment by 14% based on workload and sales analysis",
      "Crafted intuitive Tableau dashboards for ongoing performance monitoring",
    ],
    technologies: ["Tableau", "Tableau Prep", "Excel"],
    coverImage: "/Business-analytics.png",
    thumbnailImage: "/Business-analytics.png",
    gallery: [],
    timeline: "4 months (Q2 2024)",
    role: "Data Analyst",
    relatedProjects: [
      {
        slug: "YC-Pilot",
        title: "YC-Pilot",
        category: "AI Product",
        image: "/YC-Pilot-Cover.png",
      },
      {
        slug: "walgreens-operations",
        title: "Walgreens Operations",
        category: "Consulting",
        image: "/Walgreen-cover.png",
      },
      {
        slug: "recover",
        title: "ReCover",
        category: "AI Tool - Website",
        image: "/Recover-cover.png",
      },
      {
        slug: "traffic-dqn-automation",
        title: "Automation of Traffic Control Systems",
        category: "Research",
        image: "/Traffic-cover.png",
      },
      {
        slug: "haanu-travel-assistant",
        title: "Haanu – AI-Powered Travel Assistant",
        category: "AI Product",
        image: "/Haanu-cover.png",
      },
    ],
  },
  {
    id: 6,
    slug: "haanu-travel-assistant",
    title: "Haanu – AI-Powered Travel Assistant",
    category: "AI Product",
    shortDescription:
      "An AI-based travel planner that curates personalized itineraries based on budget, preferences, and group dynamics.",
    description: [
      "Haanu is an intelligent travel assistant designed to help users plan custom trips by selecting preferences such as budget, interests, and group size. The platform uses GPT-4o for smart trip recommendations, and integrates real-time responses across multiple UI components.",
      "Built with Next.js and Supabase, the app synchronizes chat responses, maps, and itineraries seamlessly. An interactive Google Maps integration enables dynamic location planning while maintaining a responsive and engaging user interface.",
      "The project was rapidly developed and deployed using a modern tech stack including Vercel V0, Cursor AI, and Git, supporting collaborative iteration and user-focused design.",
    ],
    features: [
      "Personalized AI-powered travel recommendations using GPT-4o",
      "Dynamic syncing across chat, maps, and itinerary views",
      "Google Maps API integration for interactive planning",
      "Responsive UI with real-time feedback and updates",
      "Rapid prototyping using Vercel V0, Cursor AI, and Git",
      "Supabase-backed storage and session management",
    ],
    technologies: ["Next.js", "Supabase", "OpenAI GPT-4o", "Google Maps API", "Vercel V0", "Cursor AI", "Git"],
    coverImage: "/Haanu-cover.png",
    thumbnailImage: "/Haanu-cover.png",
    gallery: [],
    timeline: "3 months (Q1 2024)",
    role: "Full-Stack Developer",
    liveUrl: "https://github.com/pranavhharish/haanu-v2",
    relatedProjects: [
      {
        slug: "YC-Pilot",
        title: "YC-Pilot",
        category: "AI Product",
        image: "/YC-Pilot-Cover.png",
      },
      {
        slug: "walgreens-operations",
        title: "Walgreens Operations",
        category: "Consulting",
        image: "/Walgreen-cover.png",
      },
      {
        slug: "catering-analytics",
        title: "Business Analytics for University Catering",
        category: "Data Analytics",
        image: "/Business-analytics.png",
      },
      {
        slug: "recover",
        title: "ReCover",
        category: "AI Tool - Website",
        image: "/Recover-cover.png",
      },
      {
        slug: "traffic-dqn-automation",
        title: "Automation of Traffic Control Systems",
        category: "Research",
        image: "/Traffic-cover.png",
      },
    ],
  },
]

export { projects }

// Helper functions
export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 5): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
