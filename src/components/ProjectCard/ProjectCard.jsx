function ProjectCard({ project, index }) {
  return (
    <div className='project-card' data-aos='fade-up' data-aos-delay={index * 100}>
      <img src={project.image} alt={`Proyecto ${project.title}`} />
      <div className='project-info'>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className='project-techs'>
          {project.technologies.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
        <div className='project-links'>
          {project.github && <a href={project.github} target='_blank' rel='noreferrer'>GitHub</a>}
          {project.demo && <a href={project.demo} target='_blank' rel='noreferrer'>Demo</a>}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

