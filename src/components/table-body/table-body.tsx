import StatusToggle from 'components/status-toggle/status-toggle'
import { useUser } from 'user-context'
import { ITableBodyData } from './table-body.interface'
import styles from './table-body.module.scss'

function TableBody({ rowData }: ITableBodyData): JSX.Element {
    const { user } = useUser()
    return (
        <tbody className={styles['table-body']}>
            {rowData.map((cellData, index) => (
                <tr key={`${cellData}_${index}`}>
                    {cellData.map((data, i) => (
                        <td key={`${data}_${i}`}>
                            {/* the values of 2nd column represent link URLs */}
                            {i === 1 ? (
                                <a
                                    href={data}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    {data}
                                </a>
                            ) : // the cells of last column
                            i === cellData.length - 1 ? (
                                // user logged in case
                                user ? (
                                    <StatusToggle
                                        toggleData={{ data, index }}
                                    />
                                ) : (
                                    '?'
                                )
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

export default TableBody
