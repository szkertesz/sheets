import { useEffect } from 'react'
import { signInWithGoogle } from 'features/firebase'
import { useUser } from 'user-context'
import { useNavigate } from 'react-router-dom'
import styles from './login.module.scss'

function Login() {
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
        if (user) navigate('/edit')
    }, [user]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section className={styles.login}>
            <p>
                Ha megszereztél egy ajándékot a listából, jelezheted nekünk és a
                többieknek azzal, hogy kipipálod a "megvettem" oszlopban, de
                ahhoz előbb be kell jelentkezned.
            </p>
            <p>
                A bejelentkezéshez Google felhasználói fiók szükséges (ha
                használsz Gmailt, akkor van ilyened).
            </p>
            <button
                onClick={signIn}
                className={`${styles['login__button']} button`}
            >
                Bejelentkezem
            </button>
        </section>
    )
}

export default Login
