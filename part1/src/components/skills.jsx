import '../styles/skills.css'
import SkillsCard from './skillscard'

const languages = {
    "Golang": "fa-golang",
    "Python": "fa-python",
    "Java": "fa-java"
}

const technologies = {
    "React": "fa-react",
}

const tools = {
    "Git": "fa-git-alt",
    "Figma": "fa-figma"
}

const skills = [languages, technologies, tools]
const names = ["Lenguajes", "Tecnologías", "Herramientas"]


function Skills () {
    return (
        <section class="skills-section">
            <h2>
                Habilidades
            </h2>

            <div class="skills-container">
                {Object.entries(skills).map((value, index) => (
                    <SkillsCard nameSection={names[index]} skills={skills[index]}/>
                ))}            
            </div>
        </section>
    )
}

export default Skills;