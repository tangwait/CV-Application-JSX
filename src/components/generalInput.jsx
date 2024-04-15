import { useState } from 'react';

export default function InfoCardInput() {
    const [cards, setCards] = useState([]);
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

    function handleClick() {
        const newCard = {
            company: company,
            position: position,
            responsibilities: responsibilities
        };
        setCards([...cards, newCard]);

        setCompany('');
        setPosition('');
        setResponsibilities('');
    }

    function handleRemoveCard(index) {
        const updatedCards = [...cards];
        updatedCards.splice(index, 1);
        setCards(updatedCards);
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

        <button onClick={handleClick}>
            Add Card
        </button>

        {cards.map((card, index) => (
                <Card 
                    key={index} 
                    company={card.company} 
                    position={card.position} 
                    responsibilities={card.responsibilities}
                    onRemove={() => handleRemoveCard(index)} 
                />
            ))}
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

function Card({ company, position, responsibilities, onRemove }) {
    return (
    <>
        <div className='experience-card'>
            <div>
                Company: {company}
                <br />
                Position: {position}
                <br />
                Responsibilities
                <br />
                {responsibilities}
            </div>
            <button onClick={onRemove}>Remove</button>
        </div>
    </>
    )
}