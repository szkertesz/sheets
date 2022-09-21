import { IContainer } from './container.interface'
import styles from './container.module.scss'

function Container(props: IContainer) {
    return <div className={styles.container}>{props.children}</div>
}

export default Container
