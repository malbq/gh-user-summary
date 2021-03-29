import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from './Card'

test('renders card with text children', () => {
  render(<Card>My Content</Card>)
  expect(screen.getByTestId('Card'))
    .toHaveTextContent('My Content')
})

test('renders card with attributes', () => {
  render(<Card id="myId" />)
  expect(screen.getByTestId('Card'))
    .toHaveAttribute('id', 'myId')
})

test('renders card with class name', () => {
  render(<Card className="myClass" />)
  expect(screen.getByTestId('Card'))
    .toHaveAttribute('class', 'Card myClass')
})

test('renders card with all props', () => {
  render(<Card id="myId" className="myClass">
    <div data-testid="innerDiv">
      My Content
    </div>
  </Card>)

  const card = screen.getByTestId('Card')

  expect(card)
    .toHaveAttribute('class', 'Card myClass')
  expect(card)
    .toHaveAttribute('id', 'myId')
  expect(screen.getByTestId('innerDiv'))
    .toHaveTextContent('My Content')
})
