import { ITable } from './table.interface'
import { Outlet } from 'react-router-dom'
import styles from './table.module.scss'

function Table(props: ITable) {
    return (
        <table className={styles.table}>
            <Outlet />
            {props.children}
        </table>
    )
}

export default Table
