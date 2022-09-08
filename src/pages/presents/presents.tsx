import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from 'user-context'

function Presents() {
    const { user } = useUser()
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) navigate('/')
    })
    return (
        <>
            <h1>Presents</h1>
            <p>Hello {user?.displayName}</p>
        </>
    )
}

export default Presents
