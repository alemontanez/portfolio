import './FeaturedProject.css'

import featuredImg from '../../assets/projects/tesk.jpg'

function FeaturedProject() {
  return (
    <section className='featured-project' data-aos='fade-up'>
      <div className='featured-content'>

        <img src={featuredImg} alt='Captura del proyecto' className='featured-img' />

        <div className='featured-info'>
          <h3>Tesk</h3>
          <p>
            Tesk es una aplicación fullstack construida con el stack PERN (PostgreSQL, Express.js, React, Node.js), basada en una arquitectura MVC. Cuenta con una API REST como backend y un frontend separado. Entre sus principales características se incluyen autenticación con JWT, encriptación de contraseñas, validaciones con Zod y control de permisos mediante middleware.
            Este proyecto me permitió construir un sistema robusto y escalable, aprendiendo a planificar estratégicamente la arquitectura backend y a trabajar con ORM para bases de datos relacionales, como Sequelize.
          </p>

          <ul className='project-techs'>
            <li>Node</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>React</li>
            <li>CSS</li>
          </ul>

          <div className='project-links'>
            <a href='https://github.com/alemontanez/tesk-pern' target='_blank' rel='noreferrer'>GitHub</a>
            {/* <a href='https://github.com/usuario/repositorio' target='_blank' rel='noreferrer'>Demo</a> */}
          </div>
        </div>

      </div>
    </section>
  )
}

export default FeaturedProject
