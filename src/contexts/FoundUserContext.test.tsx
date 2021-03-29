import React, { useEffect } from 'react'
import { render, screen } from '@testing-library/react'
import { FoundUserProvider, useFoundUser } from './FoundUserContext'

function Child () {
  const { user, setUser } = useFoundUser()

  useEffect(() => {
    setUser({ login: 'username' })
  }, [setUser])

  return <div data-testid="Child">{ user?.login }</div>
}

test('renders child inside provider', () => {
  render(<FoundUserProvider>
    <Child />
  </FoundUserProvider>)
  expect(screen.getByTestId('Child')).toHaveTextContent('username')
})
