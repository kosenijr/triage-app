import React from 'react'
import styles from '../styles/Modal.module.css'

export default function Modal() {
    const [name, setName] = useState('');
    const [dob, setDOB] = useState('');
    const [complaint, setComplaint] = useState('');
    const [priority, setPriority] = useState('');
    

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