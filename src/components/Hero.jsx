import chef from '../../public/assets/chef.jpg'
import Titles from './Titles'
import { Link } from 'react-router-dom';


function Hero() {
    return (
        <section className='hero'>
                <div className='hero--text'>
                    <Titles />
                    <p>A family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
                    <Link to="/reservations" style={{marginTop:"20px", marginBottom: "20px"}}><button aria-label='On Click'>Book a table online</button></Link>
                </div>
                <img src={chef} alt="Chef Adrian" className="image" />
        </section>
    )
}

export default Hero