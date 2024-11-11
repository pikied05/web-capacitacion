/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders the login page', () => {
    render(<LoginPage />);
    expect(screen.getByText('APRENDE Y DESTACA')).toBeInTheDocument();
    expect(screen.getByLabelText('Usuario')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Iniciar Sesión' })).toBeInTheDocument();
  });
});