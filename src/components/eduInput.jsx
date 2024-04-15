import { useState } from 'react';
import Card from './Card';

export default function EduCardInput() {
    const [cards, setCards] = useState([])
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

    function handleClick() {
        const newCard = {
            name: name,
            major: major,
            attendence: attendence
        };
        setCards([...cards, newCard]);

        setName('');
        setMajor('');
        setAttendence('');
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

        <button onClick={handleClick}>
            Add Card
        </button>
        
        {cards.map((card, index) => (
                <Card 
                    key={index} 
                    title={card.name} 
                    subtitle={card.major} 
                    description={card.attendence}
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