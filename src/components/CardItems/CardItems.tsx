
import CardItem from '../CardItem/CardItem.tsx'
import styles from './CardItems.module.css'
import arrow_right_white from '../../assets/images/arrow_right_white.svg'
import cards from '../../store/cardItems.ts'


function Cards() {

    return (
        <div className={styles.cards}>
            {cards.map((item) => {
                return (
                    <CardItem 
                        cardArrow={arrow_right_white}
                        item={item}
                        // key={item.id}
                        // cardName={item.name}
                        // cardClass={item.class}
                        // cardIcon={item.icon}
                        // cardState={item.state}
                        // cardModalIcon={item.cardsModalIcon}
                        // cardHistory={item.history} 
                        // cardDescription={item.descriptionText}
                        // cardUrl={item.url}
                        // cardVideo={item.videoUrl}
                    />
                )
            })}
        </div>
    )
}

export default Cards
