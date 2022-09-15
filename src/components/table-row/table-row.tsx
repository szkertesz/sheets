import StatusToggle from 'components/status-toggle/status-toggle'
import React from 'react'
import { ITableRowData } from './table-row.interface'

function TableRow({ rowData }: ITableRowData): JSX.Element {
    return (
        <tbody>
            {rowData.map((cellData, index) => (
                <tr key={`${cellData}_${index}`}>
                    {cellData.map((data, i) => (
                        <td key={`${data}_${i}`}>
                            {i === 1 ? (
                                <a
                                    href={data}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    {data}
                                </a>
                            ) : i === cellData.length - 1 ? (
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
