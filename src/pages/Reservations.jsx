import { useState } from "react"
import restaurant from "../../public/assets/restaurant.jpg"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import BookingForm from "../components/BookingForm"

function Reservations() {
    const [availableTimes, setAvailableTimes] = useState("");
    return (
        <>
            <Nav />
            <section className="reservations--wrapper">
                <section className="reservations">
                    <h3>Enjoy our healthy and tasty food in a chill environment.</h3>
                    <img src={restaurant} alt="Little Lemon" />

                </section>
                <BookingForm 
                    availableTimes={availableTimes}
                    setAvailableTimes={setAvailableTimes} 
                />
            </section>
            <Footer />
        </>
    )
}

export default Reservations