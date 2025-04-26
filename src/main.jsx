import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AOS from 'aos'
import './index.css'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
