import Footer from "../components/Footer";
import Nav from "../components/Nav";
import restaurant from "../../public/assets/restaurant.jpg"

function Confirmation() {
    return (
        <>
            <Nav />
            <section className='confirm'>
                <h2>Thanks for booking a table!</h2>
                <img src={restaurant} alt="Little Lemon" />
            </section>
            <Footer />
        </>
    )
}

export default Confirmation