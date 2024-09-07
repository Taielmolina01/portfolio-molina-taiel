import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer () {
    return (
        <footer>
            <p>2024 - Taiel Alexis Molina</p>
            <div>
                <a href="https://github.com/Taielmolina01" target="_blank">
                    <i class="fa-brands fa-github fa-xl" aria-hidden="true" title="Mi GitHub"></i>
                </a>
                <a href="mailto:tamolina@fi.uba.ar" target="_blank">
                    <i class="fa-solid fa-envelope fa-xl" aria-hidden="true" title="Mi mail"></i>
                </a>
                <a href="https://www.linkedin.com/in/taiel-alexis-molina-189149231/" target="_blank">
                    <i class="fa-brands fa-linkedin fa-xl" aria-hidden="true" title="Mi LinkedIn"></i>
                </a>
                <a href="https://github.com/Taielmolina01/miCV/blob/main/miCV.pdf" target="_blank">
                    <i class="fa-solid fa-file-pdf fa-xl" aria-hidden="true" title="Mi LinkedIn"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer;