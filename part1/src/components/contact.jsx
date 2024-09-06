import '../styles/contact.css'

function Contact () {
    return (
        <section class="contact" id="Contact">
            <h2>Contacto</h2>
            <form>
                <label for="name">Nombre</label>
                <input type="text" id="name" name="name" required />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label for="message">Mensaje</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default Contact;