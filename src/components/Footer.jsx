import Logo from '../../public/assets/logo2.jpg'

function Footer() {
    return (
        <footer>
            <img src={Logo} alt='Little Lemon Logo'></img>
            <nav>
                <ul className='footer--nav'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Reservations</a></li>
                    <li><a href="">Order Online</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
            <section>
                <h4>Contacts</h4>
                <address>123, Street</address>
                <address>Chicago, IL</address>
                <address>USA</address>
            </section>
            <section>
                <h4>Social Media</h4>
                <ul className='footer--nav'>
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                    <li><a href="https://youtube.com">YouTube</a></li>
                    <li><a href="https://linkedin.com">LinkedIn</a></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer