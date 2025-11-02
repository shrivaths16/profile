import React from 'react';
import { render } from '@testing-library/react';
import ProjectModal from '../components/ProjectModal';

describe('ProjectModal Component', () => {
  it('renders without crashing', () => {
    render(<ProjectModal />);
  });
});
