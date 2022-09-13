export const updateSheetValues = (
    token: string,
    sheetId: string,
    cell: string,
    value: string
) => {
    return fetch(
        // `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}:batchUpdate`,
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
                values: [[`${value}`]],
            }),
        }
    )
}
