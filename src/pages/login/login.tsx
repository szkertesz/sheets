import React, { useState } from 'react'
import { signInWithGoogle } from 'features/firebase'
import { User } from 'firebase/auth'

function Login() {
    const [user, setUser] = useState<null | User>(null)
    const [token, setToken] = useState<null | string | undefined>(null)

    const signIn = async () => {
        const user = await signInWithGoogle()
        if (user) {
            setToken(await user.getIdToken())
        }
    }
    return (
        <div className="login">
            <header className="login__header">
                <h1>Firebase Login</h1>
            </header>
            <main>
                <button onClick={signIn}>sign in w/ Google</button>
                <p>{token ? token : 'token is missing'}</p>
            </main>
        </div>
    )
}

export default Login
