import StatusToggle from 'components/status-toggle/status-toggle'
import React from 'react'
import { ITableRowData } from './table-row.interface'

function TableRow({ rowData }: ITableRowData): JSX.Element {
    return (
        <tbody>
            {rowData.map((cellData, i) => (
                <tr key={`${cellData}_${i}`}>
                    {cellData.map((data, index) => (
                        <td key={`${data}_${index}`}>
                            {index === 1 ? (
                                <a href={data}>{data}</a>
                            ) : index === cellData.length - 1 ? (
                                <StatusToggle toggleData={{ data, index }} />
                            ) : (
                                <span>{data}</span>
                            )}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

export default TableRow
