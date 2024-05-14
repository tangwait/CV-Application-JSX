import Card from './Card';

export default function CardDiv({ eduCards, workExpCards, handleRemoveCard }) {

    
    return (
        <>
        <div className='CV-Div'>
            <div className='edu-section'>
                <div className='edu-card'>
                    {eduCards.map((card, index) => (
                        <Card 
                            key={index} 
                            cardClass={card.cardClass}
                            title={card.title} 
                            subtitle={card.subtitle} 
                            description={card.description}
                            onRemove={() => handleRemoveCard(index, 'edu')}                        />
                    ))}
                </div>
            </div>
            <div className='work-exp-card'>
                <div className='work-exp-section'>
                    {workExpCards.map((card, index) => (
                        <Card 
                            key={index} 
                            cardClass={card.cardClass}
                            title={card.title} 
                            subtitle={card.subtitle} 
                            description={card.description}
                            onRemove={() => handleRemoveCard(index, 'workExp')}                        />
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}
