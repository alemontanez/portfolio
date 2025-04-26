import './Contact.css'

import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'
import mail from '../../assets/icons/mail.png'

function Contact() {
  return (
    <section className='contact' id='contact' data-aos='fade-in'>
      <h2>Contacto</h2>
      <p>Podés escribirme a: alemontanez99@gmail.com</p>
      <div className='contact-links'>
        <a href='https://www.linkedin.com/in/alejandro-montanez/' target='_blank' rel='noreferrer'>
          <img src={linkedin} alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
        <a href='https://github.com/alemontanez' target='_blank' rel='noreferrer'>
          <img src={github} alt='GitHub' />
          <span>GitHub</span>
        </a>
        <a href='mailto:alemontanez99@gmail.com'>
          <img src={mail} alt='Email' />
          <span>Email</span>
        </a>

      </div>
      <div className='contact-cv'>
        <a href='/src/assets/CV_Alejandro_Montañez.pdf' className='contact-btn' download>Descargar CV</a>
      </div>
    </section>
  )
}

export default Contact
