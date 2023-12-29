import inProgressIcon from '../assets/images/in_progress.svg'
import completedIcon from '../assets/images/completed.svg'
import StateBlock from './StateBlock.tsx'


interface CardProps {
    name: string,
    class: string,
    icon: string,
    arrow: string
    state: string
}

function CardItem(props: CardProps) {
    let cardCompleted = props.state == 'Completed' ? 'card_completed' : ''
    return (
        <>
            <div className='card_wrapper' onClick={openModal}>
                <div className={`card ${props.class} ${cardCompleted}`}>
                    <div className="card_column">
                        <div className="card_name">{props.name}</div>
                        <img src={props.arrow} alt="" />
                    </div>
                    <div className="card_column">
                        <img src={props.icon} alt="" />
                    </div>
                </div>
                {getStateElement(props.state, inProgressIcon, completedIcon)}
            </div>
        </>
    )
}

function getStateElement(state: string, inProgressIcon: string, completedIcon: string) {
    if (state == 'Started') {
        return <StateBlock type='card_used in_progress' text="In Progress" icon={inProgressIcon} />
    }
    else if (state == 'Completed') {
        return <StateBlock type='card_used completed' text="Completed" icon={completedIcon} />
    }   
}

function openModal() {
    document.querySelector('.card_modal')?.classList.remove('hidden')
}

export default CardItem
