import React, { useState } from 'react'
import styles from '../styles/Modal.module.css'

export default function Modal({ onCreatePatient }) {
    const [name, setName] = useState('');
    const [dob, setDOB] = useState('');
    const [complaint, setComplaint] = useState('');
    const [priority, setPriority] = useState(3);
    const [room, setRoom] = useState('triage');
    const [stage, setStage] = useState('triage');

    const onSubmit = () => {
        const patient = {
            name,
            dob,
            complaint,
            priority,
            room,
            stage
        }
        onCreatePatient(patient);
    }

    return (
        <div className={styles['modal']}>
            <form action="">
                <input type="text" value={name} onChange={() => } />
                <input type="text" value={dob} />
                <input type="text" value={complaint} />
                <input type="text" value={priority} />
                <input type="text" value={room} />
                <input type="text" value={stage} />
                <button onClick={onSubmit}>Submit</button>
            </form>
        </div>

    )
}
