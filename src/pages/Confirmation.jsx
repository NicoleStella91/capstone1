import { useLocation } from 'react-router-dom';
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Confirmation() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const fName = params.get('fName');
    const date = params.get('date');
    const time = params.get('time');
    const guests = params.get('guests');
    const occasion = params.get('occasion');
    return (
        <>
            <Nav />
            <section className='confirm'>
                <h2>Thanks for booking a table!</h2>
                <h3>Here's a recap of your booking:</h3>
                <table>
                    <tr>
                        <th>Your Name:</th>
                        <th>Reservation Date:</th>
                        <th>Reservation Time:</th>
                        <th>Number of guests:</th>
                        <th>Occasion:</th>
                    </tr>
                    <tr>
                        <td>{fName}</td>
                        <td>{date}</td>
                        <td>{time}</td>
                        <td>{guests}</td>
                        <td>{occasion}</td>
                    </tr>
                </table>
            </section>
            <Footer />
        </>
    )
}

export default Confirmation