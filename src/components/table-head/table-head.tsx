import React from 'react'
import { useUser } from 'user-context'
import { ITableHeadData } from './table-head.interface'
import styles from './table-head.module.scss'

const TableHead = ({ headData }: ITableHeadData) => {
    const { user } = useUser()
    return (
        <thead className={styles['table-head']}>
            <tr>
                {headData.map((data: string, i) => (
                    <th key={`${data}_${i}`}>
                        {user && i === headData.length - 1 ? 'megvettem' : data}
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHead
