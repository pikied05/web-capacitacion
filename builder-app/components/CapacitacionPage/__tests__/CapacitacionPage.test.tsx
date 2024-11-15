/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import CapacitacionPage from '../CapacitacionPage';

describe('CapacitacionPage', () => {
  it('renders without crashing', () => {
    render(<CapacitacionPage />);
    expect(screen.getByText('Capacitación de los lunes')).toBeInTheDocument();
  });

  it('contains all main sections', () => {
    render(<CapacitacionPage />);
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('complementary')).toBeInTheDocument(); // Sidebar
    expect(screen.getByRole('main')).toBeInTheDocument(); // Main content
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });
});