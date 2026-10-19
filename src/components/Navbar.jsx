// State: a boolean tracks whether the mobile menu is open.
import { useState } from 'react'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  function handleNavClick(event) {
    event.preventDefault()
    const targetId = event.currentTarget.getAttribute('href').slice(1)
    const section = document.getElementById(targetId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav id="navbar">
      <div className="nav-brand"><span>Alex Johnson</span></div>
      <ul id="nav-menu" className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        <li><a href="#home" className="nav-link" onClick={handleNavClick}>Home</a></li>
        <li><a href="#about" className="nav-link" onClick={handleNavClick}>About</a></li>
        <li><a href="#skills" className="nav-link" onClick={handleNavClick}>Skills</a></li>
        <li><a href="#projects" className="nav-link" onClick={handleNavClick}>Projects</a></li>
        <li><a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a></li>
      </ul>
      <button
        type="button"
        className={isMobileMenuOpen ? 'nav-toggle active' : 'nav-toggle'}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
        aria-controls="nav-menu"
        onClick={() => setIsMobileMenuOpen(previous => !previous)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navbar
