import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'ui/container/container'

function Layout() {
    return (
        <>
            <Container>
                <div>
                    <h1>Ajándék&shy;ötletek</h1>
                    <Outlet />
                </div>
            </Container>
        </>
    )
}

export default Layout
