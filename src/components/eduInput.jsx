import { useState } from 'react';

export default function EduCardInput() {
    const [name, setName] = useState('');
    const [major, setMajor] = useState('');
    const [attendence, setAttendence] = useState('');

    function handleName(e) {
        setName(e.target.value);
    }
    function handleMajor(e) {
        setMajor(e.target.value);
    }
    function handleAttendence(e) {
        setAttendence(e.target.value);
    }

    return (
        <>
        <div className="general-edu-inputs">
        <form>
            <Education 
                label="Name" value={name} inputType="text" onChange={handleName}
                />
            <Education 
                label="Major" value={major} inputType="text" onChange={handleMajor}
                />
            <Education 
                label="Attendence Date" value={attendence} inputType="date" onChange={handleAttendence}
                />
        </form>
        </div>

        <Card
                name={name} major={major} attendence={attendence}
            />
        </>
    )
}

function Education({ label, value, inputType, onChange }) {
    return (
        <>
            <label>
                {label}
                {' '}
                <input
                    type={inputType}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </>
    )
}

function Card({ name, major, attendence }) {
    return (
    <>
        <div className='general-edu-card'>
            Name: {name}
            <br />
            Major: {major}
            <br />
            Attendence: {attendence}
        </div>
    </>
    )
}