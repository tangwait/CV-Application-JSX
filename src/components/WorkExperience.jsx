import { useState } from 'react';
import Card from './Card';

export default function WorkExperienceCardInput() {
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
            cardClass: "work-experience",
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
        <div className="work-experience-inputs">
            <h2>Enter your work experience here:</h2>
        <form>
            <ExperienceInput 
                label="Company" value={company} inputType="text" onChange={handleCompany}
                />
            <ExperienceInput 
                label="Position" value={position} inputType="text" onChange={handlePosition}
                />
            <ExperienceInput 
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
                    cardClass={card.cardClass}
                    title={card.company} 
                    subtitle={card.position} 
                    description={card.responsibilities}
                    onRemove={() => handleRemoveCard(index)} 
                />
            ))}
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
