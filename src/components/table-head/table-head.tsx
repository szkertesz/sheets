import React from 'react'
import { ITableHeadData } from './table-head.interface'
import styles from './table-head.module.scss'

const TableHead = ({ headData }: ITableHeadData) => {
    return (
        <thead className={styles['table-head']}>
            <tr>
                {headData.map((data: string, i) => (
                    <th key={`${data}_${i}`}>{data}</th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHead
