
import CardItem from '../CardItem/CardItem.tsx'
import styles from './CardItems.module.css'
import arrow_right_white from '../../assets/images/arrow_right_white.svg'
import cards from '../../store/cardItems.ts'


function Cards() {

    const states: any = {
        not_started: "Not Started",
        started: "Started",
        completed: "Completed",
    }

    return (
        <div className={styles.cards}>
            {cards.map((item) => {
                return (
                    <CardItem key={item.id}
                        cardName={item.name}
                        cardClass={item.class}
                        cardArrow={arrow_right_white}
                        cardIcon={item.icon}
                        cardState={states[item.state]}
                        cardModalIcon={item.cardsModalIcon} />
                )
            })}
        </div>
    )
}

export default Cards
