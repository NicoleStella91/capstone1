import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import BookingForm from './BookingForm';

test('renders BookingForm and submits valid data', () => {
  render(
    <Router>
      <BookingForm />
    </Router>
  );

  fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '123-456-7890' } });
  fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2023-12-31' } });
  fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '1:00 PM' } });
  fireEvent.change(screen.getByLabelText(/guests/i), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

  expect(screen.getByText(/submit/i)).toBeEnabled();

  fireEvent.click(screen.getByText(/submit/i));
});

test('renders BookingForm and handles invalid data', () => {
  render(
    <Router>
      <BookingForm />
    </Router>
  );


  fireEvent.click(screen.getByText(/submit/i));

  expect(screen.getByText(/Please enter your full name/i)).toBeInTheDocument();
  expect(screen.getByText(/Please enter your phone number/i)).toBeInTheDocument();
  expect(screen.getByText(/Please select a date/i)).toBeInTheDocument();
  expect(screen.getByText(/Please select a time/i)).toBeInTheDocument();
  expect(screen.getByText(/Please enter the number of guests/i)).toBeInTheDocument();
  expect(screen.getByText(/Please select an occasion/i)).toBeInTheDocument();

  expect(screen.getByText(/submit/i)).toBeDisabled();
});
