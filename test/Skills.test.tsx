import React from 'react';
import { render } from '@testing-library/react';
import Skills from '../components/Skills';

describe('Skills Component', () => {
  it('renders without crashing', () => {
    render(<Skills />);
  });
});
