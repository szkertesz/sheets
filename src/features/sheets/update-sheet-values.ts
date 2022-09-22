import { appendFile } from 'fs'

export const updateSheetValues = (
    token: string,
    sheetId: string,
    cell: string,
    value: boolean
) => {
    // convert string values to boolean before sending it to Sheets API, which will render checkboxes in the source spreadsheet
    // const convertedValue = value === 'TRUE' ? true : false
    return fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${cell}?valueInputOption=RAW&key=${process.env.REACT_APP_SHEETS_API_KEY}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                range: `${cell}`,
                majorDimension: 'ROWS',
                values: [[value]],
            }),
        }
    )
}
