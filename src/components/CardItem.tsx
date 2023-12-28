
interface CardProps {
    name: string,
    class: string,
    icon: string,
    arrow: string
}

function CardItem(props: CardProps) {

    return (
        <>
            <div className={`card ${props.class}`}>
                <div className="card_column">
                    <div className="card_name">{props.name}</div>
                    <img src={props.arrow} alt="" />
                </div>
                <div className="card_column">
                    <img src={props.icon} alt="" />
                </div>
            </div>
        </>
    )
}

export default CardItem
