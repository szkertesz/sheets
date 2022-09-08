import { User } from 'firebase/auth'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import 'app.css'
import Login from 'pages/login/login'
import Container from 'ui/container/container'
import Presents from 'pages/presents/presents'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Container />}>
                    <Route index element={<Login />} />
                    <Route path="/presents" element={<Presents />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
