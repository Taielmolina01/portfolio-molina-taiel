import '../styles/projectcard.css'
import UsedTechnology from './usedTechnology.jsx'

function ProjectCard ({name, image, description, usedTechnologies, href}) {
    return (
        <div class="project-card">
            <h3 >{name}</h3>
            <img src={image} alt={name + "image"} />
            {description.map((value, _) => (
                <p>
                    {value}
                </p>
            ))}
            <div class="used-technologies">
                {usedTechnologies.map((value, _) => (
                    <UsedTechnology name={value}/>
                ))}
            </div>
            <button>
                <a href={href} target="_blank">Ver código</a>
            </button>
        </div>
    )
}

export default ProjectCard;