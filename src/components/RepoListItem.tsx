import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { FiEye } from 'react-icons/fi'
import { GoRepoForked } from 'react-icons/go'
import './RepoListItem.sass'
import Card from './Card'
import { StarredRepository } from '../interfaces/User'

type Props = {
  repo: StarredRepository
}

const RepoListItem = ({ repo }: Props) => <Card className="RepoListItem">
  <div className="RepoListItem-name">
    <a href={repo.html_url}>
      {repo.full_name}
    </a>
  </div>
  <div className="RepoListItem-description">
    {repo.description}
  </div>
  <div className="RepoListItem-footer">
    <div className="RepoListItem-footer-language">
      <FaCircle className="RepoListItem-footer-icon" />
      {repo.language}
    </div>
    <div className="RepoListItem-footer-watchers">
      <FiEye className="RepoListItem-footer-icon" />
      {repo.watchers}
    </div>
    <div className="RepoListItem-footer-forks">
      <GoRepoForked className="RepoListItem-footer-icon" />
      {repo.forks}
    </div>
  </div>
</Card>

export default RepoListItem
