import React from 'react';
import { render } from '@testing-library/react';
import Projects from '../components/Projects';

describe('Projects Component', () => {
  it('renders without crashing', () => {
    render(<Projects />);
  });
});
