import { User } from 'firebase/auth'
import React, { useState } from 'react'
import './App.css'
import { signInWithGoogle } from './firebase'

function App() {
    const [user, setUser] = useState<null | User>(null)
    const [token, setToken] = useState<null | string | undefined>(null)
    const signIn = async () => {
        const user = await signInWithGoogle()
        if (user) {
            setToken(await user.getIdToken())
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Firebase + Google APIs + Sheets</h1>
            </header>
            <button onClick={signIn}>sign in w/ Google</button>
            <main>
                <p>{token ? token : 'token is missing'}</p>
            </main>
        </div>
    )
}

export default App
