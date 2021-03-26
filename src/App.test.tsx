import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const inputElement = screen.getByPlaceholderText(/Digite um nome de usuário do Github/i)
  expect(inputElement).toBeInTheDocument()
})
