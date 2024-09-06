function SkillsIcon ({name, nameIcon}) {
    return (
        <div class="skill">
            <i class={"fa-brands" + " " + nameIcon}></i>       
            <p>
                {name}
            </p>
        </div>
    )
}

export default SkillsIcon;