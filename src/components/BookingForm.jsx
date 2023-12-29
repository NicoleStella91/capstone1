import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: '',
    Phone: '',
    Date: '',
    Time: '',
    Guests: '',
    Occasion: '',
  });

  const simulatedAvailableTimes = ['12:00 PM', '1:00 PM', '7:00 PM', '8:00 PM'];
  const simulatedOccasionOptions = ['Birthday', 'Anniversary', 'Other'];

  const [availableTimes, setAvailableTimes] = useState([]);
  const [occasionOptions] = useState(simulatedOccasionOptions);
  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setAvailableTimes(simulatedAvailableTimes);
  }, [formData.date]);

  useEffect(() => {
    const errors = {};
    if (!formData.Name.trim()) errors.Name = 'Please enter your full name';
    if (!formData.Phone.trim()) errors.Phone = 'Please enter your phone number';
    if (!formData.Date) errors.Date = 'Please select a date';
    if (!formData.Time) errors.Time = 'Please select a time';
    if (!formData.Guests) errors.Guests = 'Please enter the number of guests';
    if (!formData.Occasion) errors.Occasion = 'Please select an occasion';

    setFormErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (isFormValid) {
      console.log('Form data submitted:', formData);
      navigate('/confirmation');
    }
  };

  return (
    <form>
      {Object.keys(formData).map((fieldName) => (
        <div key={fieldName}>
          <label htmlFor={fieldName}>{fieldName}</label>
          {fieldName === 'Date' ? (
            <input
              type="date"
              id={fieldName}
              name={fieldName}
              value={formData[fieldName]}
              onChange={handleChange}
            />
          ) : fieldName === 'Time' ? (
            <select
              id={fieldName}
              name={fieldName}
              value={formData[fieldName]}
              onChange={handleChange}
            >
              <option value="">Select a time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          ) : fieldName === 'Guests' ? (
            <input
              type="number"
              id={fieldName}
              name={fieldName}
              value={formData[fieldName]}
              onChange={handleChange}
            />
          ) : fieldName === 'Occasion' ? (
            <select
              id={fieldName}
              name={fieldName}
              value={formData[fieldName]}
              onChange={handleChange}
            >
              <option value="">Select an occasion</option>
              {occasionOptions.map((occasion) => (
                <option key={occasion} value={occasion}>
                  {occasion}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              id={fieldName}
              name={fieldName}
              value={formData[fieldName]}
              onChange={handleChange}
            />
          )}
          {formErrors[fieldName] && <p style={{ color: 'red' }}>{formErrors[fieldName]}</p>}
        </div>
      ))}
      <button type="button" onClick={handleSubmit} disabled={!isFormValid}>
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;
