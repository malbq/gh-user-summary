import React, { useState, useCallback } from 'react'
import './FindUserInput.sass'
import { useFoundUser } from '../../contexts/FoundUserContext'
import { fetchUser } from '../../services/github'
import { AxiosError } from 'axios'

function FindUserInput () {
  const { setUser } = useFoundUser()
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [requestError, setRequestError] = useState<string | false>(false)

  const onChange = useCallback((event) => {
    setUsername(event.target.value)
  }, [])

  const onSubmit = useCallback(async (event) => {
    event.preventDefault()
    if (username.length) {
      setRequestError(false)
      setLoading(true)
      try {
        const user = await fetchUser(username)
        setUser(user)
      } catch (error) {
        if ((error as AxiosError).response?.status === 404) {
          setRequestError('Usuário não encontrado')
        } else {
          setRequestError('Ocorreu um erro durante a busca')
        }
      } finally {
        setLoading(false)
      }
    }
  }, [username])

  return (
    <form
      className="FindUserInput"
      onSubmit={onSubmit}
      data-testid="FindUserForm"
    >
      <div className="FindUserInput-container">
        <input
          className="FindUserInput-input"
          type="text"
          placeholder="Digite um nome de usuário do Github"
          value={username}
          onChange={onChange}
          data-testid="FindUserInput"
        />
        {loading
          ? <div
            className="FindUserInput-loading"
            data-testid="FindUserLoading"
          >
              <img src="./spinner.svg" />
            </div>
          : <button
              className="FindUserInput-submit"
              type="submit"
              data-testid="FindUserSubmit"
            >
              <img src="./find.svg" />
            </button>}
      </div>
      {requestError && <div
        className="FindUserInput-error"
        data-testid="FindUserError"
      >
        {requestError}
      </div>}
    </form>
  )
}

export default FindUserInput
