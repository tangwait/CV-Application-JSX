import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import WorkExperienceCardInput from './components/WorkExperience.jsx'
import EduCardInput from './components/Education.jsx'
import CardDiv from './components/CardDiv.jsx'

function App() {
  const [eduCards, setEduCards] = useState([]);
  const [workExpCards, setWorkExpCards] = useState([]);

  const addEduCard = (newCard) => {
    setEduCards((prevEduCards) => [...prevEduCards, newCard]);
  };
  
  const addWorkExpCard = (newCard) => {
    setWorkExpCards((prevWorkExpCards) => [...prevWorkExpCards, newCard]);
  };

  const handleRemoveCard = (index, cardType) => {
    if (cardType === 'edu') {
        const updatedCards = [...eduCards];
        updatedCards.splice(index, 1);
        setEduCards(updatedCards);
    } else if (cardType === 'workExp') {
        const updatedCards = [...workExpCards];
        updatedCards.splice(index, 1);
        setWorkExpCards(updatedCards);
    }
};


  return (
    <>
      <EduCardInput onSubmit={addEduCard} cards={eduCards} />
      <WorkExperienceCardInput onSubmit={addWorkExpCard} cards={workExpCards} />
      <CardDiv eduCards={eduCards} workExpCards={workExpCards} handleRemoveCard={handleRemoveCard} />
    </>
  )
}


export default App
