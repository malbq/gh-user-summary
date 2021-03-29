import React, { useMemo } from 'react'
import { FiLink, FiMapPin } from 'react-icons/fi'
import './UserInfo.sass'
import Card from '../Card/Card'
import UserInfoMap from './UserInfoMap'
import { useFoundUser } from '../../contexts/FoundUserContext'

function UserInfo () {
  const { user } = useFoundUser()

  const blog = useMemo(() => user?.blog?.startsWith('http')
    ? user?.blog
    : `http://${user?.blog ?? ''}`
  , [user])

  return <Card
    className="UserInfo"
    data-testid="UserInfo"
  >
    <div className="UserInfo-header">
      <img
        className="UserInfo-avatar"
        src={user?.avatar_url}
        alt={`Avatar de ${user?.name}`}
        data-testid="UserInfoAvatar"
        />
      <div
        className="UserInfo-name"
        data-testid="UserInfoName"
      >
        <a
          href={user?.html_url}
          data-testid="UserInfoURL"
        >
          {user?.name}
        </a>
      </div>
      <div
        className="UserInfo-login"
        data-testid="UserInfoLogin"
      >
        {user?.login}
      </div>
    </div>
    {user?.bio && <div
      className="UserInfo-bio"
      data-testid="UserInfoBio"
    >
      {user?.bio}
    </div>}
    {user?.blog && <div
      className="UserInfo-blog"
      data-testid="UserInfoBlog"
    >
      <FiLink
        className="UserInfo-icon"
        color="black"
        size={18}
      />
      <a
        href={blog}
        data-testid="UserInfoBlogUrl"
      >
        {user?.blog}
      </a>
    </div>}
    {user?.location && <>
      <div
        className="UserInfo-location"
        data-testid="UserInfoLocation"
      >
        <FiMapPin
          className="UserInfo-icon"
          color="black"
          size={18}
        />
        {user?.location}
      </div>
      <UserInfoMap location={user?.location ?? ''} />
    </>}
  </Card>
}

export default UserInfo
