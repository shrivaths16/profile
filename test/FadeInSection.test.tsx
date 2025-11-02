import React from 'react';
import { render } from '@testing-library/react';
import FadeInSection from '../components/FadeInSection';

describe('FadeInSection Component', () => {
  it('renders without crashing', () => {
    render(<FadeInSection>Test</FadeInSection>);
  });
});
