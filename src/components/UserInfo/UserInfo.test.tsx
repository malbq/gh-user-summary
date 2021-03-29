import React from 'react'
import { render, screen, getByTestId } from '@testing-library/react'
import UserInfo from './UserInfo'

const user = {
  login: 'username',
  avatar_url: '',
  html_url: 'https://github.com/username',
  name: 'User Name',
  blog: 'http://userna.me',
  location: 'London, UK',
  bio: 'Biography'
}
jest.mock('../../contexts/FoundUserContext', () => ({
  useFoundUser: () => ({ user })
}))

jest.mock('./UserInfoMap', () => function UserInfoMap () { return <></> })

test('renders user info', () => {
  render(<UserInfo />)
  const info = screen.getByTestId('UserInfo')

  const avatar = getByTestId(info, 'UserInfoAvatar')
  expect(avatar).toHaveAttribute('src', user.avatar_url)
  expect(avatar).toHaveAttribute('alt', `Avatar de ${user?.name}`)

  expect(getByTestId(info, 'UserInfoName'))
    .toHaveTextContent(user.name)

  expect(getByTestId(info, 'UserInfoURL'))
    .toHaveAttribute('href', user.html_url)

  expect(getByTestId(info, 'UserInfoLogin'))
    .toHaveTextContent(user.login)

  expect(getByTestId(info, 'UserInfoBio'))
    .toHaveTextContent(user.bio)

  expect(getByTestId(info, 'UserInfoBlog'))
    .toHaveTextContent(user.blog)

  expect(getByTestId(info, 'UserInfoBlogUrl'))
    .toHaveAttribute('href', user.blog)

  expect(getByTestId(info, 'UserInfoLocation'))
    .toHaveTextContent(user.location)
})
