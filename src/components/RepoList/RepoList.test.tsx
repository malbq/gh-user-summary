import React from 'react'
import { render, screen } from '@testing-library/react'
import RepoList from './RepoList'

const user = {
  starred: [{
    id: 1,
    full_name: 'owner/repo',
    html_url: 'https://github.com/owner/repo',
    description: '',
    watchers: 1,
    forks: 0,
    language: 'Javascript'
  }, {
    id: 2,
    full_name: 'owner/repo2',
    html_url: 'https://github.com/owner/repo',
    description: '',
    watchers: 2,
    forks: 1,
    language: 'Clojurescript'
  }]
}
jest.mock('../../contexts/FoundUserContext', () => ({
  useFoundUser: () => ({ user })
}))

test('renders empty input', () => {
  render(<RepoList />)

  expect(screen.getAllByTestId('RepoListItem'))
    .toHaveLength(2)
})
