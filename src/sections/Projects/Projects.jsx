import './Projects.css'
import FeaturedProject from '../../components/FeaturedProject/FeaturedProject'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ecommerce from '../../assets/projects/ecommerce.jpg'
import mern from '../../assets/projects/mern.jpg'

const projects = [
  {
    title: 'Ecommerce React',
    description: 'Tienda online de ropa con carrito funcional.',
    image: ecommerce,
    technologies: ['React', 'CSS', 'Firebase'],
    github: 'https://github.com/alemontanez/ecommerce-React',
    demo: 'https://ecommerce-react-horizons.netlify.app/'
  },
  {
    title: 'To-do list app MERN',
    description: 'To-do App con autenticación e implementación de base de datos.',
    image: mern,
    technologies: ['MongoDB', 'Express', 'React', 'Node', 'CSS'],
    github: 'https://github.com/alemontanez/mern-auth-task',
    demo: ''
  }
]

function Projects() {
  return (
    <section className='projects' id='projects' data-aos='fade-in'>
      <h2>Proyectos</h2>
      <FeaturedProject />
      <div className='projects-grid'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
