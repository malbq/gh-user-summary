import React, { useState, useCallback } from 'react'
import './FindUserInput.sass'
import { useFoundUser } from '../contexts/FoundUserContext'
import { fetchUser } from '../services/github'

function FindUserInput () {
  const { setUser } = useFoundUser()
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)

  const onChange = useCallback((event) => {
    setUsername(event.target.value)
  }, [])

  const onSubmit = useCallback(async (event) => {
    event.preventDefault()
    if (username.length) {
      setLoading(true)
      const user = await fetchUser(username)
      setLoading(false)
      setUser(user)
    }
  }, [username])

  return <form onSubmit={onSubmit}>
    <div className="FindUserInput">
      <input
        className="FindUserInput-input"
        type="text"
        placeholder="Digite um nome de usuário do Github"
        value={username}
        onChange={onChange}
      />
      {loading
        ? <div className="FindUserInput-loading">
            <img src="./spinner.svg" />
          </div>
        : <button
            className="FindUserInput-submit"
            type="submit"
          >
            <img src="./find.svg" />
          </button>}
    </div>
  </form>
}

export default FindUserInput
