import React, { useState } from 'react'
import styles from './status-toggle.module.scss'
interface IStatusToggle {
    toggleData: {
        data: string
        index: number
    }
}
function StatusToggle({ toggleData }: IStatusToggle) {
    const [value, setValue] = useState<string>(toggleData.data)
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    return (
        <fieldset className={styles['status-toggle']}>
            <div className={styles['status-toggle__group']}>
                <input
                    type="radio"
                    name={'status-radio'}
                    id={`radio-true`}
                    value="true"
                    checked={value === 'true'}
                    onChange={handleOnChange}
                    className="visually-hidden"
                />
                <label
                    htmlFor={`radio-true`}
                    className={`${styles['status-toggle__label']} button`}
                >
                    true
                </label>
            </div>
            <div className={styles['status-toggle__group']}>
                <input
                    type="radio"
                    name={'status-radio'}
                    id={`radio-read`}
                    value="false"
                    checked={value === 'false'}
                    onChange={handleOnChange}
                    className="visually-hidden"
                />
                <label
                    htmlFor={`radio-read`}
                    className={`${styles['status-toggle__label']} button`}
                >
                    false
                </label>
            </div>
        </fieldset>
    )
}

export default StatusToggle
