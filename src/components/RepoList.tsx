import React from 'react'
import { BiStar } from 'react-icons/bi'
import './RepoList.sass'
import RepoListItem from './RepoListItem'
import { useFoundUser } from '../contexts/FoundUserContext'

function RepoList () {
  const { user } = useFoundUser()

  return <div className="RepoList">
    <div className="RepoList-header">
      <BiStar
        className="RepoList-header-icon"
        color="#E1E9EE"
        size={20}
      />
      Repositórios com estrela
    </div>
    {user?.starred.map(repo => (
      <RepoListItem
        key={repo.id}
        repo={repo}
      />
    ))}
  </div>
}

export default RepoList
