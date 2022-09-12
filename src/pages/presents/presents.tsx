import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from 'user-context'
import { client } from 'features/api/client'
import TableHead from 'components/table-head'
import TableRow from 'components/table-row'

function Presents() {
    const { user, token } = useUser()
    const [data, setData] = useState<string[][] | null>(null)
    // const [data, setData] = useState<[] | null>(null)
    const navigate = useNavigate()
    const SHEET_ID = '***REMOVED***'

    const getSheetData = async (token: string) => {
        const response = await client.get(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/presents!A1:C3`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        setData(response.data.values)
        console.log(response.data.values.slice(1))
    }
    useEffect(() => {
        if (!user) navigate('/')
        if (token) {
            getSheetData(token)
        }
    }, [user])
    return (
        <>
            <h1>Presents</h1>
            <p>Hello {user?.displayName}</p>
            <p>Your Google access token is: {token}</p>
            {data && (
                <table>
                    <TableHead headData={data[0]} />
                    <TableRow rowData={data.slice(1)} />
                </table>
            )}
        </>
    )
}

export default Presents
