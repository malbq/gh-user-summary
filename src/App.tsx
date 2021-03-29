import React from 'react'
import './App.sass'
import FindUserInput from './components/FindUserInput/FindUserInput'
import UserInfo from './components/UserInfo/UserInfo'
import RepoList from './components/RepoList/RepoList'
import { useFoundUser } from './contexts/FoundUserContext'

function App () {
  const { user } = useFoundUser()

  return <div className="App">
    <div className="App-layout">
      <div className="App-findUserInput">
        <FindUserInput />
      </div>
      {user && <>
        <div className="App-userInfo">
          <UserInfo />
        </div>
        <div className="App-repoList">
          <RepoList />
        </div>
      </>}
    </div>
  </div>
}

export default App
