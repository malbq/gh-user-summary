import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState
} from 'react'
import User from '../interfaces/User'

type FoundUserContextType = {
  user?: User,
  setUser: (user: User) => void
}

const FoundUserContext = createContext<FoundUserContextType>({
  user: undefined,
  setUser: () => {}
})

export function FoundUserProvider (props: PropsWithChildren<{}>) {
  const [user, setUser] = useState<User>()
  const value = useMemo<FoundUserContextType>(() => ({ user, setUser }), [user])

  return <FoundUserContext.Provider value={value} {...props} />
}

export function useFoundUser (): FoundUserContextType {
  return useContext(FoundUserContext)
}
