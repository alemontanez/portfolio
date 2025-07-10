import './Skills.css'

function Skills() {

  const tecnologies = ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Express.js', 'TypeScript', 'MySQL', 'PostgreSQL', 'MongoDB', 'Git', 'GitHub', 'Python', 'Django', 'C']

  const tools = ['JWT', 'Sequelize', 'Mongoose', 'Zod', 'Axios', 'Date-fns', 'Bootstrap', 'React hook form', 'React router dom', 'Cors', 'Dotenv', 'Vite', 'Nodemon', 'Sass', 'Bcryptjs', 'Firebase', 'JQuery', 'Swagger', 'JSDoc', 'Jest', 'Supertest', ]

  return (
    <section className='skills' id='skills' data-aos='fade-in'>
      <div>
        <h2>Tecnologías</h2>
        <ul className='skills-list'>
          {tecnologies.map((tec, i) => 
            <li key={i}>{tec}</li>
          )}
        </ul>
      </div>
      <div>
        <h2>Herramientas y librerías</h2>
        <ul className='skills-list'>
          {tools.map((tool, i) => 
            <li key={i}>{tool}</li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default Skills
