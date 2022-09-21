import React, { useState } from 'react'
import styles from './status-toggle.module.scss'
import { IStatusToggle } from './status-toggle.interface'
import { useUser } from 'user-context'
import { updateSheetValues } from 'features/sheets/update-sheet-values'

function StatusToggle({ toggleData }: IStatusToggle) {
    const { token } = useUser()
    const [value, setValue] = useState<string>(toggleData.data)
    // const [isDisabled, setIsDisabled] = useState<boolean>(toggleData.data === 'TRUE' ? true : false)
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const sheetId = process.env.REACT_APP_SHEET_ID
        let value = event.target.value
        let row = event.target.dataset.rowindex
        setValue(value)
        if (token && sheetId)
            updateSheetValues(token, sheetId, `C${Number(row) + 1}`, value)
    }

    return (
        <fieldset className={styles['status-toggle']}>
            <div className={styles['status-toggle__group']}>
                <input
                    type="radio"
                    name={`status-radio-${toggleData.index}`}
                    id={`radio-true-${toggleData.index}`}
                    value="TRUE"
                    checked={value === 'TRUE'}
                    onChange={handleOnChange}
                    className="visually-hidden"
                    data-rowindex={toggleData.index + 1}
                    disabled={toggleData.data === 'TRUE' ? true : false}
                />
                <label
                    htmlFor={`radio-true-${toggleData.index}`}
                    className={`${styles['status-toggle__label']}`}
                >
                    true
                </label>
            </div>
            <div className={styles['status-toggle__group']}>
                <input
                    type="radio"
                    name={`status-radio-${toggleData.index}`}
                    id={`radio-false-${toggleData.index}`}
                    value="FALSE"
                    checked={value === 'FALSE'}
                    onChange={handleOnChange}
                    className="visually-hidden"
                    data-rowindex={toggleData.index + 1}
                    disabled={toggleData.data === 'TRUE' ? true : false}
                />
                <label
                    htmlFor={`radio-false-${toggleData.index}`}
                    className={`${styles['status-toggle__label']}`}
                >
                    false
                </label>
            </div>
        </fieldset>
    )
}

export default StatusToggle
