import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from 'user-context'
import { client } from 'features/api/client'
import TableHead from 'components/table-head'
import TableBody from 'components/table-body'
import Table from 'ui/table/table'
import Login from 'pages/login'
import styles from './presents.module.scss'

interface IPresents {
    editable?: boolean
}

function Presents({ editable }: IPresents) {
    const { user, token } = useUser()
    const [data, setData] = useState<string[][] | null>(null)
    const navigate = useNavigate()
    const SHEET_ID = process.env.REACT_APP_SHEET_ID

    const getSheetData = async (token: string) => {
        const response = await client.get(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/presents!A:C`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        setData(response.data.values)
    }

    const getSheetDataByAPIKey = async () => {
        const response = await client.get(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/presents!A:C?key=${process.env.REACT_APP_SHEETS_API_KEY}`
        )
        setData(response.data.values)
    }

    useEffect(() => {
        if (!user) navigate('/')
        if (token) {
            getSheetData(token)
        } else {
            getSheetDataByAPIKey()
        }
    }, [user, token]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {editable ? (
                // user is logged in
                <p>
                    Itt már szerkesztheted a listát, pipáld be a beszerzett
                    ajándékot, hogy a többiek is lássák!
                </p>
            ) : (
                // user has not logged in yet
                <p>
                    Ezek a dolgok, amiknek hasznát vennénk, vagy örülnénk nekik:
                </p>
            )}

            {data && (
                <Table>
                    <TableHead headData={data[0]} />
                    <TableBody rowData={data.slice(1)} />
                </Table>
            )}

            {editable && <p>Köszönjük ❤️</p>}

            {/* user has not logged in yet, show the login section */}
            {!editable && <Login />}
        </>
    )
}

export default Presents
