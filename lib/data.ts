import portfolioData from "@/data/portfolio-data.json"
import { projects, getAllProjects, getProjectBySlug, getRelatedProjects } from "@/lib/projects"

// Export the portfolio data
export const data = portfolioData

// Export the projects data and functions
export { projects, getAllProjects, getProjectBySlug, getRelatedProjects }

// Type definitions for the portfolio data
export type PortfolioData = typeof portfolioData

// Helper function to get navigation items
export function getNavItems() {
  return data?.navigation || []
}

// Helper function to get personal information
export function getPersonalInfo() {
  return (
    data?.personal || {
      name: "Portfolio Owner",
      title: "Professional",
      location: "Location",
      avatar: "/placeholder.svg",
      email: "contact@example.com",
      phone: "+1 (555) 000-0000",
      workingHours: "Monday - Friday, 9am - 5pm",
      availableForWork: true,
      social: [],
    }
  )
}

// Helper function to get about information
export function getAboutInfo() {
  return (
    data?.about || {
      bio: "Professional bio goes here.",
      focus: [],
      languages: [],
      interests: [],
    }
  )
}

// Helper function to get experience information
export function getExperienceInfo() {
  return data?.experience || []
}

// Helper function to get credentials information
export function getCredentialsInfo() {
  return (
    data?.credentials || {
      certifications: [],
      education: [],
      skills: [],
    }
  )
}

// Helper function to get technical skills information
export function getTechnicalSkillsInfo() {
  return (
    data?.technicalSkills || {
      design: [],
      development: [],
      uxMethods: [],
      softSkills: [],
    }
  )
}

// Helper function to get meta information
export function getMetaInfo() {
  return (
    data?.meta || {
      title: "Portfolio Website",
      description: "Professional portfolio website",
    }
  )
}
