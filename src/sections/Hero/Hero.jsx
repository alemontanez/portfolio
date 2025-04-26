import './Hero.css'
import profileImg from '../../assets/profile.png'

function Hero() {
  return (
    <section className='hero' id='about' data-aos='fade-in'>
      <div className='hero-content'>
        <h1>Hola, soy Alejandro</h1>
        <p>Desarrollador Fullstack especializado en JavaScript, React y Node.js</p>
        <a href='#contact' className='hero-btn'>Contactame</a>
        <a href='/CV_Alejandro_Montañez.pdf' className='hero-btn' download>Descargar CV</a>
      </div>
      <div className='hero-image'>
        <img src={profileImg} alt='Foto de perfil' />
      </div>
    </section>
  )
}

export default Hero

