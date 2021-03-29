import React from 'react'
import { render, screen, getByTestId } from '@testing-library/react'
import RepoListItem from './RepoListItem'

const repo = {
  id: 1,
  full_name: 'owner/repo',
  html_url: 'https://github.com/owner/repo',
  description: '',
  watchers: 1,
  forks: 0,
  language: 'Javascript'
}

test('renders empty input', () => {
  render(<RepoListItem repo={repo} />)
  const item = screen.getByTestId('RepoListItem')

  expect(getByTestId(item, 'RepoListItemName'))
    .toHaveTextContent(repo.full_name)
  expect(getByTestId(item, 'RepoListItemUrl'))
    .toHaveAttribute('href', repo.html_url)
  expect(getByTestId(item, 'RepoListItemDescription'))
    .toHaveTextContent(repo.description)
  expect(getByTestId(item, 'RepoListItemLanguage'))
    .toHaveTextContent(repo.language)
  expect(getByTestId(item, 'RepoListItemWatchers'))
    .toHaveTextContent(repo.watchers.toString())
  expect(getByTestId(item, 'RepoListItemForks'))
    .toHaveTextContent(repo.forks.toString())
})
