function BookingForm() {
    return (
        <form>
            <div>
                <label htmlFor="fullName">Your Full Name:*</label>
                <input type="text" id="fullName" placeholder="Your Full Name" required />
            </div>
            <div>
                <label htmlFor="date">Choose a date:*</label>
                <input type="date" id="date" required />
            </div>
            <div>
                <label htmlFor="time">Choose a time:*</label>
                <select id="time" required>
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
                <input type="number" id="guests" min={1} max={10} required />
            </div>
            <div>
                <label htmlFor="occasion">Choose Occasion (optional):</label>
                <select id="occasion">
                    <option value="Engagement">Engagement</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Birthday">Birthday</option>
                </select>
            </div>
        </form>
    )
}

export default BookingForm