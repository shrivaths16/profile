import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from '../components/Experience';

describe('Experience Component', () => {
  it('renders without crashing', () => {
    render(<Experience />);
    expect(screen.getByText(/experience/i)).toBeInTheDocument();
  });
});
