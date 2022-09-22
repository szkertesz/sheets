import { Route, Routes } from 'react-router-dom'
import 'App.css'
import Presents from 'pages/presents'
import { UserProvider } from 'user-context'
import Layout from 'components/layout'
import ErrorPage from 'pages/error'

function App() {
    return (
        <>
            <UserProvider>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<Presents />} />
                        <Route path="edit" element={<Presents editable />} />
                    </Route>
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </UserProvider>
        </>
    )
}

export default App
