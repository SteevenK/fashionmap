import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the header and default sidebar message', () => {
    render(<App />);
    // Vérifie que le header "Fashion Center" est présent
    expect(screen.getByRole('heading', { name: /fashion center/i })).toBeInTheDocument();
    // Vérifie que le message par défaut de la sidebar est affiché
    expect(screen.getByText(/passez votre souris sur un magasin/i)).toBeInTheDocument();
  });

  test('displays store information on hover and resets on mouse leave', () => {
    const { container } = render(<App />);
    // Récupère le premier élément <rect> (supposé correspondre à "Magasin A")
    const storeRect = container.querySelector('rect');
    expect(storeRect).toBeDefined();

    // Simule le survol de la souris sur le magasin
    fireEvent.mouseEnter(storeRect!);
    // Vérifie que les informations du magasin "Magasin A" sont affichées dans la sidebar
    expect(screen.getByRole('heading', { name: /magasin a/i })).toBeInTheDocument();
    expect(screen.getByText(/informations sur le magasin a/i)).toBeInTheDocument();

    // Simule le retrait de la souris et vérifie que le message par défaut réapparaît
    fireEvent.mouseLeave(storeRect!);
    expect(screen.getByText(/passez votre souris sur un magasin/i)).toBeInTheDocument();
  });
});
