import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <p className='navbar-logo'>Alejandro Montañez</p>

        <button className='menu-toggle' onClick={toggleMenu}>
          <span className='hamburger' />
          <span className='hamburger' />
          <span className='hamburger' />
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href='#about' onClick={closeMenu}>Sobre mí</a></li>
          <li><a href='#projects' onClick={closeMenu}>Proyectos</a></li>
          <li><a href='#skills' onClick={closeMenu}>Habilidades</a></li>
          <li><a href='#experience' onClick={closeMenu}>Experiencia</a></li>
          <li><a href='#contact' onClick={closeMenu}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

