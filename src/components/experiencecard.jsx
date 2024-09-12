import '../styles/index.css'

function ExperienceCard ({image, title, subtitle, description, timeElapsed}) {
    return (
        <div class="card-experience">

            <img src={image} />
            
            <div class="job-experience-description">
                <h4>
                    {title}
                </h4>
                <h5>
                    {subtitle}
                </h5>
                
                
                <ul>
                    {description.map((value, _) => (
                        <li>{value}</li>
                    ))}
                </ul>
            </div>
            
            <div class="icon-container">
                <i class="fa-solid fa-briefcase"></i>
                <p>{timeElapsed}</p>
            </div>
        </div>
    )
}

export default ExperienceCard;