import React from 'react';
import { render } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero Component', () => {
  it('renders without crashing', () => {
    render(<Hero />);
  });
});
