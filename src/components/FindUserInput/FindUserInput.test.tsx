import React from 'react'
import { render, screen, fireEvent, getByTestId } from '@testing-library/react'
import FindUserInput from './FindUserInput'
import { fetchUser } from '../../services/github'

const mockSetUser = jest.fn()
jest.mock('../../contexts/FoundUserContext', () => ({
  useFoundUser: () => ({
    setUser: mockSetUser
  })
}))

jest.mock('../../services/github')
const user = {
  login: 'username',
  avatar_url: '',
  html_url: 'https://github.com/username',
  name: 'User Name',
  blog: 'http://userna.me',
  location: 'London, UK',
  bio: 'Biography',
  starred: [{
    id: 1,
    full_name: 'owner/repo',
    html_url: 'https://github.com/owner/repo',
    description: '',
    watchers: 1,
    forks: 1,
    language: 'Clojure'
  }, {
    id: 2,
    full_name: 'owner/repo2',
    html_url: 'https://github.com/owner/repo2',
    description: '',
    watchers: 2,
    forks: 1,
    language: 'Clojurescript'
  }]
}

test('renders form', () => {
  render(<FindUserInput />)
  const form = screen.getByTestId('FindUserForm')
  expect(getByTestId(form, 'FindUserInput'))
    .toBeInTheDocument()
})

test('search for existing user', async () => {
  fetchUser.mockResolvedValue(user)

  render(<FindUserInput />)
  const input = screen.getByTestId('FindUserInput')
  fireEvent.change(input, { target: { value: 'username' } })
  const submitButton = screen.getByTestId('FindUserSubmit')
  fireEvent.click(submitButton)

  await screen.findByTestId('FindUserLoading')
  await screen.findByTestId('FindUserSubmit')

  expect(fetchUser).toHaveBeenCalledTimes(1)
  expect(mockSetUser).toHaveBeenCalledTimes(1)
})

test('search for missing user', async () => {
  const error = new Error()
  error.response = { status: 404 }
  fetchUser.mockRejectedValue(error)

  render(<FindUserInput />)
  const input = screen.getByTestId('FindUserInput')
  fireEvent.change(input, { target: { value: 'username' } })
  const submitButton = screen.getByTestId('FindUserSubmit')
  fireEvent.click(submitButton)

  await screen.findByTestId('FindUserLoading')
  await screen.findByTestId('FindUserSubmit')

  expect(fetchUser)
    .toHaveBeenCalledTimes(1)

  expect(screen.getByTestId('FindUserError'))
    .toHaveTextContent('Usuário não encontrado')
})

test('any other error', async () => {
  const error = new Error()
  error.response = { status: 500 }
  fetchUser.mockRejectedValue(error)

  render(<FindUserInput />)
  const input = screen.getByTestId('FindUserInput')
  fireEvent.change(input, { target: { value: 'username' } })
  const submitButton = screen.getByTestId('FindUserSubmit')
  fireEvent.click(submitButton)

  await screen.findByTestId('FindUserLoading')
  await screen.findByTestId('FindUserSubmit')

  expect(fetchUser)
    .toHaveBeenCalledTimes(1)

  expect(screen.getByTestId('FindUserError'))
    .toHaveTextContent('Ocorreu um erro durante a busca')
})
