import '../styles/index.css'
import ExperienceCard from './experiencecard.jsx'

const experiencia = {
    "FIUBA" : {"image": "../../public/logoFiuba.png",
        "title": "Ayudante de Cátedra de Algoritmos y Estructuras de Datos - FIUBA",
        "subtitle": "Curso Buchwald",
        "description": ["División y Conquista", "Complejidad computacional", "Estructuras de datos: construcción y algoritmos"],
        "timeElapsed": "2023 - Presente"
    }
}

function Experience () {
    return (
        <section id="Experiencia" class="experience">

            <h2>Experiencia</h2>
            
            {Object.entries(experiencia).map(([key, value]) => (
                    <ExperienceCard 
                    image={value.image}
                    title={value.title}
                    subtitle={value.subtitle}
                    description={value.description}
                    timeElapsed={value.timeElapsed}/>
            ))}

        </section>
    )
}


export default Experience;