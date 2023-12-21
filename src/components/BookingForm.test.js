// BookingForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm'; // Adjust the import path accordingly

describe('BookingForm', () => {
  it('renders BookingForm component', () => {
    render(<BookingForm />);
    
    // Check if form elements are rendered
    expect(screen.getByLabelText(/Your Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose a date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose a time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/Make Your Reservation/i)).toBeInTheDocument();
  });

  it('submits the form with user input and navigates to confirmation page', () => {
    render(<BookingForm />);
    
    // Mock the navigate function
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    // Replace with appropriate test logic based on your component
    fireEvent.change(screen.getByLabelText(/Your Full Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Choose a date/i), { target: { value: '2023-12-21' } });
    fireEvent.change(screen.getByLabelText(/Choose a time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText(/Choose Occasion/i), { target: { value: 'Birthday' } });

    fireEvent.click(screen.getByText(/Make Your Reservation/i));

    // Replace with appropriate test logic based on your component
    expect(mockNavigate).toHaveBeenCalledWith('/confirmation?fName=John%20Doe&date=2023-12-21&time=17:00&guests=3&occasion=Birthday');
  });
});
