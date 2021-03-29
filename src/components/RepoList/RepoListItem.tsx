import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { FiEye } from 'react-icons/fi'
import { GoRepoForked } from 'react-icons/go'
import './RepoListItem.sass'
import Card from '../Card/Card'
import { StarredRepository } from '../../interfaces/User'

type Props = {
  repo: StarredRepository
}

const RepoListItem = ({ repo }: Props) => <Card
  className="RepoListItem"
  data-testid="RepoListItem"
>
  <div
    className="RepoListItem-name"
    data-testid="RepoListItemName"
  >
    <a
      href={repo.html_url}
      data-testid="RepoListItemUrl"
    >
      {repo.full_name}
    </a>
  </div>
  <div
    className="RepoListItem-description"
    data-testid="RepoListItemDescription"
  >
    {repo.description}
  </div>
  <div className="RepoListItem-footer">
    <div
      className="RepoListItem-footer-language"
      data-testid="RepoListItemLanguage"
    >
      <FaCircle className="RepoListItem-footer-icon" />
      {repo.language}
    </div>
    <div
      className="RepoListItem-footer-watchers"
      data-testid="RepoListItemWatchers"
    >
      <FiEye className="RepoListItem-footer-icon" />
      {repo.watchers}
    </div>
    <div
      className="RepoListItem-footer-forks"
      data-testid="RepoListItemForks"
    >
      <GoRepoForked className="RepoListItem-footer-icon" />
      {repo.forks}
    </div>
  </div>
</Card>

export default RepoListItem
