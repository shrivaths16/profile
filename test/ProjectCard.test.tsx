import React from 'react';
import { render } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

describe('ProjectCard Component', () => {
  it('renders without crashing', () => {
    render(<ProjectCard />);
  });
});
