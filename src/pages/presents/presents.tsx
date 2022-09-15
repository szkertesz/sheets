import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from 'user-context'
import { client } from 'features/api/client'
import TableHead from 'components/table-head'
import TableRow from 'components/table-row'
import Table from 'ui/table/table'

function Presents() {
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
    useEffect(() => {
        if (!user) navigate('/')
        if (token) {
            getSheetData(token)
        }
    }, [user, token]) // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            <h1>Ajándék&shy;ötletek</h1>
            <p>Szia {user?.displayName}!</p>
            <p>Ezek a dolgok, amiknek hasznát vennénk, vagy örülnénk nekik:</p>
            {data && (
                <Table>
                    <TableHead headData={data[0]} />
                    <TableRow rowData={data.slice(1)} />
                </Table>
            )}
        </>
    )
}

export default Presents
