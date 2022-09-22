import React, { useState } from 'react'
import styles from './status-toggle.module.scss'
import { IStatusToggle } from './status-toggle.interface'
import { useUser } from 'user-context'
import { updateSheetValues } from 'features/sheets/update-sheet-values'

function StatusToggle({ toggleData }: IStatusToggle) {
    const { token } = useUser()
    const [isChecked, setIsChecked] = useState<boolean>(
        toggleData.data === 'TRUE' ? true : false
    )
    // const [isDisabled, setIsDisabled] = useState<boolean>(toggleData.data === 'TRUE' ? true : false)
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checkedState = event.target.checked
        setIsChecked(checkedState)
        // let value = isChecked ? 'TRUE' : 'FALSE'
        const sheetId = process.env.REACT_APP_SHEET_ID
        let row = event.target.dataset.rowindex
        if (token && sheetId)
            updateSheetValues(
                token,
                sheetId,
                `C${Number(row) + 1}`,
                checkedState
            )
    }

    return (
        <fieldset className={styles['status-toggle']}>
            <div className={styles['status-toggle__group']}>
                <span>{String(isChecked)}</span>
                <input
                    type="checkbox"
                    name={`status-purchased-${toggleData.index}`}
                    id={`checkbox-purchased-${toggleData.index}`}
                    checked={isChecked}
                    onChange={handleOnChange}
                    className="visually-hidden"
                    data-rowindex={toggleData.index + 1}
                    disabled={toggleData.data === 'TRUE' ? true : false}
                />
                <label
                    htmlFor={`checkbox-purchased-${toggleData.index}`}
                    className={`${styles['status-toggle__label']}`}
                >
                    Is item purchased
                </label>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 20 20"
                >
                    <g fill="none" fillRule="evenodd">
                        <rect
                            stroke=""
                            fill=""
                            x="3.5"
                            y="3.5"
                            width="13"
                            height="13"
                            rx="2"
                        />
                        <path
                            stroke=""
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 10.157L8.572 13 14 7"
                        />
                    </g>
                </svg>
            </div>
        </fieldset>
    )
}

export default StatusToggle
