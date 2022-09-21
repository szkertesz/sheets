import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <section>
            <h1>Nincs ilyen oldal az alkalmazásban 😔</h1>
            <p>
                <Link to={'/'}>Link</Link> a nyitóoldalra
            </p>
        </section>
    )
}

export default ErrorPage
