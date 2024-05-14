
export default function Card({ cardClass, title, subtitle, description, onRemove }) {
    return (
        <div className={cardClass}>
            <div className="card-header">
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
            <div className="card-body">
                <p>{description}</p>
            </div>
            {onRemove && <button onClick={onRemove}>Remove</button>}
        </div>
    );
}
