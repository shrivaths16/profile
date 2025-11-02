import React from 'react';
import { render } from '@testing-library/react';
import TimelineItem from '../components/TimelineItem';

describe('TimelineItem Component', () => {
  it('renders without crashing', () => {
    render(<TimelineItem />);
  });
});
