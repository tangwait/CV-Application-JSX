import { useState } from 'react';

export default function EduCardInput({ onSubmit }) {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
          cardClass: 'education',
          title: name,
          subtitle: major,
          description: attendence,
        });
        setName('');
        setMajor('');
        setAttendence('');
      };

    return (
        <>
        <div className="education-input">
            <h2>Enter your educational history here:</h2>
        <form onSubmit={handleSubmit}>
            <EducationInput 
                label="Name" value={name} inputType="text" onChange={handleName}
                />
            <EducationInput 
                label="Major" value={major} inputType="text" onChange={handleMajor}
                />
            <EducationInput 
                label="Attendence Date" value={attendence} inputType="date" onChange={handleAttendence}
            />
            <button type='submit'>
                Add Card
            </button>
        </form>
        </div>

        </>
    )
}


function EducationInput({ label, value, inputType, onChange }) {
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