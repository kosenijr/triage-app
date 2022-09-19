import React, { useState }  from 'react'
import styles from '../styles/Modal.module.css'

export default function Modal() {
    const [name, setName] = useState('');
    const [dob, setDOB] = useState('');
    const [complaint, setComplaint] = useState('');
    const [priority, setPriority] = useState(3);
    const [room, setRoom] = useState('triage');
    const [stage, setStage] = useState('triage');

    return (
        <div className={styles['modal']}>
            <form action="">
                <input type="text" value={name} />
                <input type="text" value={dob} />
                <input type="text" value={} />
                <input type="text" value={} />
                <input type="text" value={} />
                <input type="text" value={} />
            </form>
        </div>

    )
}
