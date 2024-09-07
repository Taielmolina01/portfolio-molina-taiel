import '../styles/projects.css'
import ProjectCard from './projectcard';

const projects = {
    "Calendario": {
        "name": "Calendario",
        "image": "../../calendario.png",
        "description": ["Clon en funcionalidades de Google Calendar"], 
        "usedTechnologies": ["Java", "JavaFX"],
        "href": "https://github.com/Taielmolina01/TP-Algo3",
    }, 
    "Machine Learning": {
        "name": "Machine Learning",
        "image": "../../ML.png",
        "description": ["TP1. Predicción del valor de viviendas en CABA.", "TP2. Análisis de sentimientos de reseñas de películas."], 
        "usedTechnologies": ["Pandas"],
        "href": "https://github.com/Taielmolina01/7506R-1C2024-GRUPO01",
    },
    "ERP": {
        "name": "Sistema de gestión ERP",
        "image": "../../ERP.png",
        "description": ["Web App de un sistema de gestión de proyectos"], 
        "usedTechnologies": ["FastAPI", "TypeScript", "React", "TailwindCSS"],
        "href": "https://github.com/Taielmolina01/psa-projects",
    }
}

function Projects () {
    return (
        <section id="Proyectos" class="projects-section">

        <h2>Proyectos</h2>

        <div class="projects">
        
            {Object.entries(projects).map(([key, value]) => (
                <ProjectCard 
                name={value.name}
                image={value.image}
                description={value.description}
                usedTechnologies={value.usedTechnologies}
                href={value.href}/>
            ))
            }

        </div>

        </section>
    )
}

export default Projects;