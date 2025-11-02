import React from 'react';
import { render } from '@testing-library/react';
import ThemeToggle from '../components/ThemeToggle';

describe('ThemeToggle Component', () => {
  it('renders without crashing', () => {
    render(<ThemeToggle />);
  });
});
