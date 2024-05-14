import { useState } from 'react';

export default function WorkExperienceCardInput({ onSubmit }) {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('');

    function handleCompany(e) {
        setCompany(e.target.value);
    }
    function handlePosition(e) {
        setPosition(e.target.value);
    }
    function handleResponsibilities(e) {
        setResponsibilities(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
          cardClass: 'work-experience',
          title: company,
          subtitle: position,
          description: responsibilities,
        });
        setCompany('');
        setPosition('');
        setResponsibilities('');
    };
      
    return (
        <>
        <div className="work-experience-inputs">
            <h2>Enter your work experience here:</h2>
        <form onSubmit={handleSubmit}>
            <ExperienceInput 
                label="Company" value={company} inputType="text" onChange={handleCompany}
                />
            <ExperienceInput 
                label="Position" value={position} inputType="text" onChange={handlePosition}
                />
            <ExperienceInput 
                label="Responsibilities" value={responsibilities} inputType="text" onChange={handleResponsibilities}
                />
            <button type='submit'>
                Add Card
            </button>
        </form>
        </div>

        </>
    )
}

function ExperienceInput({ label, value, inputType, onChange }) {
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
