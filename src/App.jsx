import './App.css'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  // Contact handlers stay here until Part 4.
  // Form validation helper functions
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  
  const showError = (input, message) => {
    clearError(input)
    const errorElement = document.createElement('span')
    errorElement.className = 'error-message'
    errorElement.textContent = message
    input.classList.add('error')
    input.classList.remove('success')
    input.parentElement.appendChild(errorElement)
  }
  
  const clearError = (input) => {
    const existingError = input.parentElement.querySelector('.error-message')
    if (existingError) {
      existingError.remove()
    }
    input.classList.remove('error')
  }
  
  const showSuccess = (input) => {
    clearError(input)
    input.classList.add('success')
    input.classList.remove('error')
  }
  
  // Real-time validation handlers
  const handleNameChange = (e) => {
    const value = e.target.value.trim()
    const input = e.target
    
    if (value.length === 0) {
      showError(input, 'Name is required')
    } else if (value.length < 2) {
      showError(input, 'Name must be at least 2 characters')
    } else {
      showSuccess(input)
    }
  }
  
  const handleEmailChange = (e) => {
    const value = e.target.value.trim()
    const input = e.target
    
    if (value.length === 0) {
      showError(input, 'Email is required')
    } else if (!isValidEmail(value)) {
      showError(input, 'Please enter a valid email address')
    } else {
      showSuccess(input)
    }
  }
  
  const handleMessageChange = (e) => {
    const value = e.target.value.trim()
    const input = e.target
    
    if (value.length === 0) {
      showError(input, 'Message is required')
    } else if (value.length < 10) {
      showError(input, 'Message must be at least 10 characters')
    } else {
      showSuccess(input)
    }
  }
  
  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    const nameInput = document.querySelector('#name')
    const emailInput = document.querySelector('#email')
    const messageInput = document.querySelector('#message')
    
    let isValid = true
    const formData = {}
    
    // Validate name
    const nameValue = nameInput.value.trim()
    if (nameValue.length < 2) {
      showError(nameInput, 'Name must be at least 2 characters')
      isValid = false
    } else {
      formData.name = nameValue
    }
    
    // Validate email
    const emailValue = emailInput.value.trim()
    if (!isValidEmail(emailValue)) {
      showError(emailInput, 'Please enter a valid email address')
      isValid = false
    } else {
      formData.email = emailValue
    }
    
    // Validate message
    const messageValue = messageInput.value.trim()
    if (messageValue.length < 10) {
      showError(messageInput, 'Message must be at least 10 characters')
      isValid = false
    } else {
      formData.message = messageValue
    }
    
    // If all valid, show success
    if (isValid) {
      const form = e.target
      const existingSuccess = form.querySelector('.success-message')
      if (existingSuccess) {
        existingSuccess.remove()
      }
      
      const successMessage = document.createElement('div')
      successMessage.className = 'success-message'
      successMessage.textContent = 'Thank you! Your message has been sent successfully.'
      form.appendChild(successMessage)
      
      console.log('Form submitted with data:', formData)
      
      // Clear form after 3 seconds
      setTimeout(() => {
        form.reset()
        successMessage.remove()
        document.querySelectorAll('.form-group input.success, .form-group textarea.success').forEach(input => {
          input.classList.remove('success')
        })
      }, 3000)
    }
  }

  // ============================================
  // JSX RETURN - ENTIRE PORTFOLIO IN ONE COMPONENT
  // ============================================
  return (
    <div className="portfolio">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Alex Johnson</h1>
          <p className="hero-subtitle">Frontend Developer & UI Designer</p>
          <p className="hero-tagline">Creating beautiful, responsive web experiences with modern technologies</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>I'm a passionate frontend developer with 3 years of experience creating engaging digital experiences. I specialize in React, modern CSS, and responsive design patterns that work beautifully across all devices.</p>
              <div className="about-details">
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <span>San Francisco, CA</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">✉️</span>
                  <a href="mailto:alex@example.com">alex@example.com</a>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📱</span>
                  <span>(555) 123-4567</span>
                </div>
              </div>
            </div>
            <div className="about-availability">
              <h3>Currently Available For:</h3>
              <div className="availability-tags">
                <span className="tag tag-available">Freelance</span>
                <span className="tag tag-available">Full-Time</span>
                <span className="tag tag-available">Remote</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">⚛️</span>
                <h3 className="skill-name">React</h3>
              </div>
              <div className="skill-category">Frontend Framework</div>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '90%'}}></div>
              </div>
              <span className="skill-percentage">90%</span>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">🎨</span>
                <h3 className="skill-name">CSS3</h3>
              </div>
              <div className="skill-category">Styling</div>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '95%'}}></div>
              </div>
              <span className="skill-percentage">95%</span>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">📱</span>
                <h3 className="skill-name">Responsive Design</h3>
              </div>
              <div className="skill-category">Design</div>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '88%'}}></div>
              </div>
              <span className="skill-percentage">88%</span>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">🚀</span>
                <h3 className="skill-name">JavaScript</h3>
              </div>
              <div className="skill-category">Programming</div>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '85%'}}></div>
              </div>
              <span className="skill-percentage">85%</span>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">🎯</span>
                <h3 className="skill-name">Figma</h3>
              </div>
              <div className="skill-category">Design Tools</div>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '80%'}}></div>
              </div>
              <span className="skill-percentage">80%</span>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">🌐</span>
                <h3 className="skill-name">Node.js</h3>
              </div>
              <div className="skill-category">Backend</div>
              <div className="skill-level">
                <div className="skill-progress" style={{width: '75%'}}></div>
              </div>
              <span className="skill-percentage">75%</span>
            </div>
          </div>
        </div>
      </section>

      <Projects />

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <p>I'm always interested in hearing about new opportunities and projects. Feel free to reach out!</p>

            <form id="contact-form" className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    onChange={handleNameChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    onChange={handleEmailChange}
                  />
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" />
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    required
                    onChange={handleMessageChange}
                  ></textarea>
                </div>

                <div className="form-group form-group-full">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Alex Johnson. All rights reserved.</p>
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Dribbble</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
