/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import CicloDeLaVenta from './CicloDeLaVenta';

describe('CicloDeLaVenta', () => {
  test('renders without crashing', () => {
    render(<CicloDeLaVenta />);
    expect(screen.getByText('Ciclo de la venta')).toBeInTheDocument();
  });

  test('renders all main sections', () => {
    render(<CicloDeLaVenta />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText('LÍNEA DE LA VIDA')).toBeInTheDocument();
    expect(screen.getByText('Grupo de la O © 2024. Todos los derechos reservados.')).toBeInTheDocument();
  });
});