import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';

function BookingForm({ availableTimes, setAvailableTimes }) {
    const [fName, setFName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState("")
    const navigate = useNavigate();

    const initializeTimes = async () => {
        try {
            const today = new Date().toISOString().split("T")[0];
            const times = await fetchAPI(today);
            setAvailableTimes(times);
        } catch (error) {
            console.error("Error fetching available times:", error);
        }
    };

    const updateTimes = async (selectedDate) => {
        try {
            const times = await fetchAPI(selectedDate);
            setAvailableTimes(times);
        } catch (error) {
            console.error("Error updating available times:", error);
        }
    };

    function handleSubmit(e) {
        e.preventDefault()
        navigate(`/confirmation?fName=${fName}&date=${date}&time=${time}&guests=${guests}&occasion=${occasion}`);
    }
    
    return (
        <form>
            <div>
                <label htmlFor="fullName">Your Full Name:*</label>
                <input type="text" id="fullName" placeholder="Your Full Name" value={fName} onChange={(e) => setFName(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="date">Choose a date:*</label>
                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="time">Choose a time:*</label>
                <select id="time" value={time} required>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
            </div>
            <div>
                <label htmlFor="guests">Number of Guests:*</label>
                <input type="number" id="guests" value={guests} min={1} max={10} onChange={(e) => setGuests(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="occasion">Choose Occasion (optional):</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value="Engagement">Engagement</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Birthday">Birthday</option>
                </select>
            </div>
            <button onClick={handleSubmit}>Make Your Reservation</button>
        </form>
    )
}

export default BookingForm