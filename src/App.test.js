// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders chainBolt title', () => {
    render(<App />);
    const titleElement = screen.getByText(/chainBolt/i);
    expect(titleElement).toBeInTheDocument();
});
