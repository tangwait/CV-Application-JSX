import { useState } from 'react';

export default function MakeInfoCard() {
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

    return (
        <>
        <div className="general-edu-inputs">
        <form>
            <Education 
                label="Company" value={company} inputType="text" onChange={handleCompany}
                />
            <Education 
                label="Position" value={position} inputType="text" onChange={handlePosition}
                />
            <Education 
                label="Responsibilities" value={responsibilities} inputType="text" onChange={handleResponsibilities}
                />
        </form>
        </div>

        <Card
                company={company} position={position} responsibilities={responsibilities}
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

function Card({ company, position, responsibilities }) {
    return (
    <>
        <div className='general-edu-card'>
            Company: {company}
            <br />
            Position: {position}
            <br />
            Responsibilities
            <br />
            {responsibilities}
        </div>
    </>
    )
}