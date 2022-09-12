// https://kentcdodds.com/blog/how-to-use-react-context-effectively

import { User } from 'firebase/auth'
import React, { useState } from 'react'

type UserProviderProps = { children: React.ReactNode }

export const UserContext = React.createContext<
    | {
          user: User | null
          setUser: React.Dispatch<React.SetStateAction<User | null>>
          token: string | undefined
          setToken: React.Dispatch<React.SetStateAction<string | undefined>>
      }
    | undefined
>(undefined)

function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<string | undefined>(undefined)
    const value = { user, setUser, token, setToken }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

function useUser() {
    const context = React.useContext(UserContext)
    if (context === undefined) {
        throw new Error('useUser must be used within UserProvider')
    }
    return context
}

export { UserProvider, useUser }
