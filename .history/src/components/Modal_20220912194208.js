import React from 'react'
import styles from '../styles/Modal.module.css'

export default function Modal() {
const [name, setName] = useState()

    return (
        <div className={styles['modal']}>
            <form action="">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </form>
        </div>

    )
}
