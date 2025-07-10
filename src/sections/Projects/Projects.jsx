import './Projects.css'
import FeaturedProject from '../../components/FeaturedProject/FeaturedProject'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ecommerce from '../../assets/projects/ecommerce.jpg'
import mern from '../../assets/projects/mern.jpg'
import books from '../../assets/projects/books.jpg'

const projects = [
  {
    title: 'API Gestión de libros',
    description: 'Desarrollo de una API REST para gestión de libros utilizando TypeScript. Se aplicaron principios de tipado estricto tanto en controladores como servicios. La documentación se generó con Swagger y JSDoc, y se implementaron validaciones robustas con Zod. La aplicación incluye un conjunto completo de pruebas: tests de integración con Supertest y tests unitarios con Jest, abarcando controladores, servicios y manejo de errores.',
    image: books,
    technologies: ['Node', 'TypeScript', 'Jest', 'Supertest', 'Swagger'],
    github: 'https://github.com/alemontanez/books-api-jsdoc-swagger',
    demo: ''
  },
  {
    title: 'Ecommerce Horizons',
    description: 'Tienda online de ropa desarrollada con React y estilizada con CSS. Integra Firebase como base de datos para gestionar los productos disponibles, incluyendo precio y stock. Cuenta con un carrito de compras funcional y un formulario que registra los datos del cliente junto con los productos seleccionados, almacenando todo en la base de datos y generando un ID de compra único que se muestra al usuario al finalizar la operación.',
    image: ecommerce,
    technologies: ['React', 'CSS', 'Firebase'],
    github: 'https://github.com/alemontanez/ecommerce-React',
    demo: 'https://ecommerce-react-horizons.netlify.app/'
  },
  {
    title: 'To-do list app MERN',
    description: 'Aplicación fullstack de gestión de tareas, desarrollada con React para el frontend y Express en el backend. Implementa autenticación de usuarios utilizando JWT y bcryptjs, permitiendo el registro, login y acceso a rutas protegidas. Las tareas se almacenan en MongoDB y pueden gestionarse mediante operaciones CRUD. El proyecto demuestra una integración completa entre frontend, backend y base de datos, con validaciones, seguridad y persistencia de datos.',
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
