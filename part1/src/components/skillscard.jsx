import SkillsIcon from "./skillsicon";

function SkillsCard ({nameSection, skills}) {
    return (
        <div class="subcontainer">
            <h4>
                {nameSection}
            </h4>
            <div class="skills-logos-container">
                {Object.entries(skills).map(([key, value]) => (
                    <SkillsIcon name={key} nameIcon={value} />
                ))}
            </div>
        </div>
    )
}

export default SkillsCard;