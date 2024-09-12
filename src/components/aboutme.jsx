import '../styles/index.css'

function AboutMe () {
    return (
        <section class="about-me" id="AboutMe">
            <h2>Sobre mí</h2> 
            <div class="text-container">
                <p>
                    Estudio Ingeniería Informática en FIUBA desde el año 2022 y actualmente tengo aprobadas
                    12/24 materias obligatorias.
                </p>
                <p>
                    Soy Técnico Electrónico recibido en 2020 de la E.E.S.T. N°2 Paula Albarracín, 
                    ubicada en Quilmes, Buenos Aires.
                </p>
                <p>
                    Gracias a este título pude realizar el curso del Tramo Pedagógico de la UTN Regional Avellaneda,
                    el cual me ha acercado a uno de mis objetivos como profesional, que es poder ser docente.
                </p>
            </div>
            <h4>Mi progreso en la carrera</h4>
            <div class="img-container">
                <img class="object-contain" src="../../fiubamap.png" />
            </div>        
        </section>
    )
}

export default AboutMe;