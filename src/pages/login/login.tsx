import { useEffect } from 'react'
import { signInWithGoogle } from 'features/firebase'
import { useUser } from 'user-context'
import { useNavigate } from 'react-router-dom'
import styles from './login.module.scss'

function Login() {
    // const [user, setUser] = useState<null | User>(null)
    // const [token, setToken] = useState<null | string | undefined>(null)
    const { user, setUser, setToken } = useUser()
    const navigate = useNavigate()

    const signIn = async () => {
        const result = await signInWithGoogle() //to get user & accesstoken
        if (result?.user && result?.token) {
            setUser(result.user)
            setToken(result.token)
        }
    }
    useEffect(() => {
        if (user) navigate('/presents')
    }, [user]) // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className={styles.login}>
            <header className="login__header">
                <h1>Login</h1>
                <p>Az ajándékötleteket csak bejelentkezés után láthatod.</p>
                <p>Egyelőre csak google accounttal tudsz bejelentkezni 😕</p>
            </header>
            <main>
                <button
                    onClick={signIn}
                    className={`${styles['login__button']} button`}
                >
                    Bejelentkezés Google accounttal
                </button>
                {/* <p>{token ? token : 'token is missing'}</p> */}
            </main>
        </div>
    )
}

export default Login
