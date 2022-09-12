import React from 'react'
import { ITableHeadData } from './table-head.interface'

const TableHead = ({ headData }: ITableHeadData) => {
    return (
        <thead>
            <tr>
                {headData.map((data: string, i) => (
                    <th key={`${data}_${i}`}>{data}</th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHead
