import React, { useMemo } from 'react'
import { FiLink, FiMapPin } from 'react-icons/fi'
import './UserInfo.sass'
import Card from './Card'
import UserInfoMap from './UserInfoMap'
import { useFoundUser } from '../contexts/FoundUserContext'

function UserInfo () {
  const { user } = useFoundUser()

  const blog = useMemo(() => user?.blog.startsWith('http')
    ? user?.blog
    : `http://${user?.blog}`
  , [user])

  return <Card className="UserInfo">
    <div className="UserInfo-header">
      <img
        className="UserInfo-avatar"
        src={user?.avatar_url}
        alt={`Avatar de ${user?.name}`}
      />
      <div className="UserInfo-name">
        <a href={user?.html_url}>
          {user?.name}
        </a>
      </div>
      <div className="UserInfo-login">
        {user?.login}
      </div>
    </div>
    <div className="UserInfo-bio">
      {user?.bio}
    </div>
    <div className="UserInfo-blog">
      <FiLink
        className="UserInfo-icon"
        color="black"
        size={18}
      />
      <a href={blog}>
        {user?.blog}
      </a>
    </div>
    <div className="UserInfo-location">
      <FiMapPin
        className="UserInfo-icon"
        color="black"
        size={18}
      />
      {user?.location}
    </div>
    <UserInfoMap location={user?.location ?? ''} />
  </Card>
}

export default UserInfo
