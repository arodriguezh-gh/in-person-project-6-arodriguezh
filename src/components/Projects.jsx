// State: a string tracks which project filter is active.
import { useState } from 'react'

const projects = [
  {
    "id": 1,
    "title": "E-Commerce Platform",
    "description": "A modern e-commerce platform built with React and Node.js, featuring shopping cart, payment integration, and admin dashboard.",
    "category": "fullstack",
    "categoryLabel": "Full-Stack",
    "image": "https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+App",
    "tags": [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe"
    ],
    "featured": true
  },
  {
    "id": 2,
    "title": "Weather Dashboard",
    "description": "Clean and intuitive weather dashboard with location search, 7-day forecast, and beautiful animations.",
    "category": "frontend",
    "categoryLabel": "Frontend",
    "image": "https://via.placeholder.com/400x250/059669/ffffff?text=Weather+App",
    "tags": [
      "JavaScript",
      "CSS3",
      "API"
    ],
    "featured": false
  },
  {
    "id": 3,
    "title": "Task Management App",
    "description": "Productivity app with drag-and-drop functionality, project collaboration, and deadline tracking.",
    "category": "webapp",
    "categoryLabel": "Web App",
    "image": "https://via.placeholder.com/400x250/dc2626/ffffff?text=Task+Manager",
    "tags": [
      "React",
      "TypeScript",
      "Firebase"
    ],
    "featured": false
  },
  {
    "id": 4,
    "title": "Creative Portfolio",
    "description": "Responsive portfolio website for a graphic designer with interactive galleries and smooth animations.",
    "category": "design",
    "categoryLabel": "Design",
    "image": "https://via.placeholder.com/400x250/7c3aed/ffffff?text=Portfolio+Site",
    "tags": [
      "HTML5",
      "CSS3",
      "GSAP"
    ],
    "featured": false
  }
]

const filters = [
  { category: 'all', label: 'All Projects' },
  { category: 'frontend', label: 'Frontend' },
  { category: 'fullstack', label: 'Full-Stack' },
  { category: 'design', label: 'Design' },
  { category: 'webapp', label: 'Web App' }
]

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  // This list is calculated from state, so it does not need its own useState.
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="filter-buttons">
          {filters.map(filter => (
            <button
              key={filter.category}
              type="button"
              className={activeFilter === filter.category ? 'filter-btn active' : 'filter-btn'}
              aria-pressed={activeFilter === filter.category}
              onClick={() => setActiveFilter(filter.category)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className={project.featured ? 'project-card featured' : 'project-card'}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link">Live Demo</a>
                    <a href="#" className="project-link">Code</a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.categoryLabel}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
