import './Experience.css'

function Experience() {
  return (
    <section className='experience' id='experience' data-aos='fade-in'>
      <h2>Experiencia en IT</h2>
      <ul className='experience-list'>
        <li data-aos='fade-up'>
          <h3>Soporte Técnico - SOMU</h3>
          <span className='experience-period'>2024</span>
          <p>
            En mi puesto más reciente en soporte, estuve a cargo del área de IT, siendo el único responsable de la resolución de problemas, la toma de decisiones sobre la compra de insumos solicitados por los usuarios y la renovación de la infraestructura de red en los edificios de la empresa.
          </p>
        </li>
        <li data-aos='fade-up' data-aos-delay='100'>
          <h3>Help Desk - Megatech</h3>
          <span className='experience-period'>2022 - 2023</span>
          <p>
            Brindé soporte remoto a usuarios internos como parte de un equipo que ofrecía servicios a Telecom, nuestro cliente principal, atendiendo incidentes técnicos y requerimientos cotidianos.
          </p>
        </li>
        <li data-aos='fade-up' data-aos-delay='150'>
          <h3>Help Desk - Cat Technologies</h3>
          <span className='experience-period'>2021 - 2022</span>
          <p>
            Brindé soporte técnico, tanto remoto como presencial, a usuarios internos de la empresa, resolviendo incidencias y asistiendo en el uso diario de herramientas informáticas.
          </p>
        </li>
        <li data-aos='fade-up' data-aos-delay='200'>
          <h3>Help Desk - Yel Informática</h3>
          <span className='experience-period'>2020 - 2021</span>
          <p>
            Este fue mi primer empleo en el área de IT, donde brindé soporte remoto a usuarios internos como parte de un equipo que prestaba servicios a Edenor. Además de resolver incidencias de primer nivel, escalaba los casos que excedían mi área a sectores especializados. También me encargaba de la administración de usuarios y credenciales a través de Active Directory.
          </p>
        </li>
      </ul>
      <p className='experience-summary' data-aos='fade-in' data-aos-delay='250'>
        Esta experiencia me permitió desarrollar habilidades clave —resolución de problemas, atención al detalle y trabajo en equipo— que hoy aplico en mi rol como desarrollador web. Además, adquirí un profundo entendimiento de la infraestructura TI en empresas medianas y grandes (por ejemplo, Edenor y Telecom), lo cual me permitió conocer de cerca la lógica de negocio y aplicarla en la planificación y ejecución de mis proyectos.
      </p>
    </section>
  )
}

export default Experience
