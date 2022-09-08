import { Route, Routes } from 'react-router-dom'
import 'app.css'
import Login from 'pages/login/login'
import Container from 'ui/container/container'
import Presents from 'pages/presents/presents'
import { UserProvider } from 'user-context'

function App() {
    return (
        <>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<Container />}>
                        <Route index element={<Login />} />
                        <Route path="/presents" element={<Presents />} />
                    </Route>
                </Routes>
            </UserProvider>
        </>
    )
}

export default App
